import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { DailyDashboard } from './components/DailyDashboard';
import { StudySession } from './components/StudySession';
import { HerbLibrary } from './components/HerbLibrary';
import { FormulaLibrary } from './components/FormulaLibrary';
import { AcupointLibrary } from './components/AcupointLibrary';
import { FormulaWalkman } from './components/FormulaWalkman';
import { CheckInCalendar } from './components/CheckInCalendar';
import { GoalSettingsModal } from './components/GoalSettingsModal';
import { CheckInCelebrationModal } from './components/CheckInCelebrationModal';
import { HERB_DATABASE } from './data/herbs';
import { FORMULA_DATABASE } from './data/formulas';
import { ACUPOINT_DATABASE } from './data/acupoints';
import {
  AnyStudyCard,
  CardProgress,
  DailyGoalSettings,
  DailyRecord,
  TCMModuleId,
  UserStats,
} from './types';
import { generateDailySchedule } from './utils/ebbinghaus';
import {
  loadCardProgress,
  saveCardProgress,
  loadUserStats,
  loadDailyGoal,
  saveDailyGoal,
  loadDailyRecords,
  loadSoundEnabled,
  saveSoundEnabled,
  performDailyCheckIn,
  DEFAULT_DAILY_GOAL,
  DEFAULT_USER_STATS,
} from './utils/storage';
import { getTodayString } from './utils/date';

export default function App() {
  const [currentModuleId, setCurrentModuleId] = useState<TCMModuleId>('herbs');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'library' | 'walkman' | 'calendar' | 'study'>('dashboard');
  const [progressMap, setProgressMap] = useState<Record<string, CardProgress>>(() => loadCardProgress('herbs'));
  const [userStats, setUserStats] = useState<UserStats>(() => loadUserStats());
  const [goalSettings, setGoalSettings] = useState<DailyGoalSettings>(() => loadDailyGoal());
  const [dailyRecords, setDailyRecords] = useState<Record<string, DailyRecord>>(() => loadDailyRecords());
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => loadSoundEnabled());

  // Reload module-specific progress when module changes
  useEffect(() => {
    setProgressMap(loadCardProgress(currentModuleId));
  }, [currentModuleId]);

  // Current dataset based on active module
  const currentDataset = useMemo(() => {
    if (currentModuleId === 'formulas') return FORMULA_DATABASE;
    if (currentModuleId === 'acupoints') return ACUPOINT_DATABASE;
    return HERB_DATABASE;
  }, [currentModuleId]);

  // Modals
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);
  const [celebrationData, setCelebrationData] = useState({
    sessionMinutes: 0,
    newCount: 0,
    reviewCount: 0,
  });

  // Active study session cards queue
  const [activeStudyQueue, setActiveStudyQueue] = useState<
    Array<{ herb: AnyStudyCard; isNew: boolean }>
  >([]);

  const today = getTodayString();
  const isCheckedInToday = userStats.lastCheckInDate === today;

  const todayRecord = useMemo(() => {
    return (
      dailyRecords[today] || {
        date: today,
        completed: isCheckedInToday,
        minutesSpent: 0,
        newCardsCount: 0,
        reviewCardsCount: 0,
        totalCardsReviewed: 0,
      }
    );
  }, [dailyRecords, today, isCheckedInToday]);

  // Mastered items count
  const masteredCount = useMemo(() => {
    return (Object.values(progressMap) as CardProgress[]).filter((p) => p.status === 'mastered').length;
  }, [progressMap]);

  // Auto-generated Daily Schedule (New cards + Review cards with strict deduplication)
  const dailySchedule = useMemo(() => {
    return generateDailySchedule(
      currentDataset,
      progressMap,
      goalSettings.targetCount
    );
  }, [currentDataset, progressMap, goalSettings.targetCount]);

  // Sound toggle handler
  const handleToggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      saveSoundEnabled(next);
      return next;
    });
  }, []);

  // Update card progress callback
  const handleUpdateCardProgress = useCallback((newProgress: CardProgress) => {
    setProgressMap((prev) => {
      const updated = { ...prev, [newProgress.herbId]: newProgress };
      saveCardProgress(updated, currentModuleId);
      return updated;
    });
  }, [currentModuleId]);

  // Handle successful daily check-in
  const handleCompleteCheckIn = useCallback(
    (sessionMinutes: number, newCount: number, reviewCount: number) => {
      const { stats, isNewCheckInToday } = performDailyCheckIn(
        sessionMinutes,
        newCount,
        reviewCount
      );

      setUserStats(stats);
      setDailyRecords(loadDailyRecords());

      if (isNewCheckInToday) {
        setCelebrationData({
          sessionMinutes,
          newCount,
          reviewCount,
        });
        setIsCelebrationOpen(true);
      }
    },
    []
  );

  // Start study session with today's schedule
  const handleStartStudy = useCallback(() => {
    const queue: Array<{ herb: AnyStudyCard; isNew: boolean }> = [];

    // Review cards first (spaced repetition priority)
    dailySchedule.reviewCards.forEach((item) => {
      queue.push({ herb: item, isNew: false });
    });

    // New cards next
    dailySchedule.newCards.forEach((item) => {
      queue.push({ herb: item, isNew: true });
    });

    // If today's schedule happens to be 0 due items, fallback to unlearned or random selection
    if (queue.length === 0) {
      currentDataset.slice(0, 10).forEach((item) => {
        const isNew = !progressMap[item.id] || progressMap[item.id].status === 'new';
        queue.push({ herb: item, isNew });
      });
    }

    setActiveStudyQueue(queue);
    setActiveTab('study');
  }, [dailySchedule, currentDataset, progressMap]);

  // Start custom drill from library
  const handleStartCustomDrill = useCallback(
    (itemIds: string[]) => {
      const selectedItems = currentDataset.filter((item) => itemIds.includes(item.id));
      const queue = selectedItems.map((item) => {
        const prog = progressMap[item.id];
        return {
          herb: item,
          isNew: !prog || prog.status === 'new',
        };
      });

      setActiveStudyQueue(queue);
      setActiveTab('study');
    },
    [currentDataset, progressMap]
  );

  // Goal settings update
  const handleSaveGoal = useCallback((newSettings: DailyGoalSettings) => {
    setGoalSettings(newSettings);
    saveDailyGoal(newSettings);
  }, []);

  // Reset all user data
  const handleResetAllData = useCallback(() => {
    localStorage.clear();
    setProgressMap({});
    setUserStats(DEFAULT_USER_STATS);
    setGoalSettings(DEFAULT_DAILY_GOAL);
    setDailyRecords({});
    setActiveTab('dashboard');
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-850 font-sans selection:bg-emerald-600 selection:text-white flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab === 'study' ? 'dashboard' : activeTab}
        setActiveTab={(tab) => {
          if (activeTab === 'study') {
            setActiveStudyQueue([]);
          }
          setActiveTab(tab);
        }}
        currentModuleId={currentModuleId}
        stats={userStats}
        isCheckedInToday={isCheckedInToday}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onSelectModule={(id) => setCurrentModuleId(id)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-12">
        {activeTab === 'dashboard' && (
          <DailyDashboard
            schedule={dailySchedule}
            goalSettings={goalSettings}
            userStats={userStats}
            todayRecord={todayRecord}
            isCheckedInToday={isCheckedInToday}
            onStartStudy={handleStartStudy}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onOpenLibrary={() => setActiveTab('library')}
            allHerbsCount={currentDataset.length}
            masteredCount={masteredCount}
            currentModuleId={currentModuleId}
          />
        )}

        {activeTab === 'study' && (
          <StudySession
            queue={activeStudyQueue}
            progressMap={progressMap}
            goalSettings={goalSettings}
            userStats={userStats}
            todayMinutesAlready={todayRecord.minutesSpent}
            onUpdateCardProgress={handleUpdateCardProgress}
            onCompleteCheckIn={handleCompleteCheckIn}
            onExitSession={() => {
              setActiveStudyQueue([]);
              setActiveTab('dashboard');
            }}
          />
        )}

        {activeTab === 'library' && (
          currentModuleId === 'formulas' ? (
            <FormulaLibrary
              formulas={FORMULA_DATABASE}
              progressMap={progressMap}
              onStartCustomDrill={handleStartCustomDrill}
            />
          ) : currentModuleId === 'acupoints' ? (
            <AcupointLibrary
              acupoints={ACUPOINT_DATABASE}
              progressMap={progressMap}
              onStartCustomDrill={handleStartCustomDrill}
            />
          ) : (
            <HerbLibrary
              herbs={HERB_DATABASE}
              progressMap={progressMap}
              onStartCustomDrill={handleStartCustomDrill}
            />
          )
        )}

        {activeTab === 'walkman' && (
          <FormulaWalkman
            formulas={FORMULA_DATABASE}
            progressMap={progressMap}
            onStartCustomDrill={handleStartCustomDrill}
          />
        )}

        {activeTab === 'calendar' && (
          <CheckInCalendar
            userStats={userStats}
            dailyRecords={dailyRecords}
            isCheckedInToday={isCheckedInToday}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-4 text-center text-xs text-stone-500 font-serif">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>🌿 中医背诵打卡系统 · 艾宾浩斯智能间隔记忆 (中药/方剂/腧穴/经典)</span>
          <span className="text-[11px] text-stone-400">
            勤求古训 · 博采众方 · 每日精进
          </span>
        </div>
      </footer>

      {/* Goal Settings Modal */}
      <GoalSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        goalSettings={goalSettings}
        onSaveGoal={handleSaveGoal}
        onResetAllData={handleResetAllData}
        currentModuleId={currentModuleId}
        onSelectModule={(id) => setCurrentModuleId(id)}
      />

      {/* Duolingo-style Celebration Modal */}
      <CheckInCelebrationModal
        isOpen={isCelebrationOpen}
        onClose={() => setIsCelebrationOpen(false)}
        stats={userStats}
        sessionMinutes={celebrationData.sessionMinutes}
        newCardsLearned={celebrationData.newCount}
        reviewCardsDone={celebrationData.reviewCount}
        onContinueStudy={handleStartStudy}
      />
    </div>
  );
}

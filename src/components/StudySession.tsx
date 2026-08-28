import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  X,
  Clock,
  ArrowRight,
  Flame,
  RotateCcw,
  Sparkles,
  Award,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  PenTool,
} from 'lucide-react';
import { AnyStudyCard, CardProgress, DailyGoalSettings, HerbItem, SRSFeedback, UserStats } from '../types';
import { Flashcard } from './Flashcard';
import { DictationModal } from './DictationModal';
import { calculateNextSRSState } from '../utils/ebbinghaus';
import { formatTime } from '../utils/date';
import { sound } from '../utils/sound';

interface StudySessionProps {
  queue: Array<{ herb: AnyStudyCard; isNew: boolean }>;
  progressMap: Record<string, CardProgress>;
  goalSettings: DailyGoalSettings;
  userStats: UserStats;
  todayMinutesAlready: number;
  onUpdateCardProgress: (newProgress: CardProgress) => void;
  onCompleteCheckIn: (
    sessionMinutes: number,
    newCount: number,
    reviewCount: number
  ) => void;
  onExitSession: () => void;
}

export const StudySession: React.FC<StudySessionProps> = ({
  queue,
  progressMap,
  goalSettings,
  userStats,
  todayMinutesAlready,
  onUpdateCardProgress,
  onCompleteCheckIn,
  onExitSession,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(true);
  const [isDictationOpen, setIsDictationOpen] = useState(false);

  // Session counters
  const [reviewedCount, setReviewedCount] = useState(0);
  const [newLearnedCount, setNewLearnedCount] = useState(0);
  const [againCardsQueue, setAgainCardsQueue] = useState<
    Array<{ herb: AnyStudyCard; isNew: boolean }>
  >([]);

  // Track if check-in was triggered during this session
  const checkInTriggeredRef = useRef(false);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSessionActive]);

  // Current active cards combined (initial queue + any re-queued 'again' items)
  const fullCardsList = [...queue, ...againCardsQueue];
  const isFinished = currentIndex >= fullCardsList.length;
  const currentCard = fullCardsList[currentIndex];

  // Mode A: Time-based target check
  const totalMinutesToday =
    todayMinutesAlready + Math.floor(sessionSeconds / 60);

  // Check if Mode A goal is met during the session
  useEffect(() => {
    if (goalSettings.mode === 'time' && !checkInTriggeredRef.current) {
      if (totalMinutesToday >= goalSettings.targetMinutes) {
        checkInTriggeredRef.current = true;
        onCompleteCheckIn(
          Math.max(1, Math.floor(sessionSeconds / 60)),
          newLearnedCount,
          reviewedCount
        );
      }
    }
  }, [
    goalSettings.mode,
    goalSettings.targetMinutes,
    totalMinutesToday,
    sessionSeconds,
    newLearnedCount,
    reviewedCount,
    onCompleteCheckIn,
  ]);

  // Flip handler
  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => {
      sound.playCardFlip();
      return !prev;
    });
  }, []);

  // Answer Feedback handler
  const handleFeedback = useCallback(
    (feedback: SRSFeedback) => {
      if (!currentCard) return;

      const { herb, isNew } = currentCard;
      sound.playFeedbackSound(feedback);

      const existingProgress = progressMap[herb.id];
      const nextSRS = calculateNextSRSState(existingProgress, herb.id, feedback);
      onUpdateCardProgress(nextSRS);

      // Track counts
      if (isNew) {
        setNewLearnedCount((prev) => prev + 1);
      } else {
        setReviewedCount((prev) => prev + 1);
      }

      // If user forgot ('again'), optionally re-insert to queue for extra reinforcement
      if (feedback === 'again') {
        setAgainCardsQueue((prev) => [...prev, { herb, isNew: false }]);
      }

      // Mode B: If Count mode and this was the last target item
      if (goalSettings.mode === 'count' && !checkInTriggeredRef.current) {
        const nextIndex = currentIndex + 1;
        if (nextIndex >= queue.length) {
          checkInTriggeredRef.current = true;
          onCompleteCheckIn(
            Math.max(1, Math.floor(sessionSeconds / 60)),
            newLearnedCount + (isNew ? 1 : 0),
            reviewedCount + (!isNew ? 1 : 0)
          );
        }
      }

      // Advance to next card
      setIsFlipped(false);
      setIsDictationOpen(false);
      setCurrentIndex((prev) => prev + 1);
    },
    [
      currentCard,
      currentIndex,
      progressMap,
      queue.length,
      goalSettings.mode,
      newLearnedCount,
      reviewedCount,
      sessionSeconds,
      onUpdateCardProgress,
      onCompleteCheckIn,
    ]
  );

  const isAcupoint =
    currentCard &&
    ('locationHtml' in currentCard.herb || 'locationText' in currentCard.herb);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when dictation modal or input is active
      if (
        isDictationOpen ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (
        (e.key === 'w' || e.key === 'W' || e.key === 'm' || e.key === 'M') &&
        !isAcupoint
      ) {
        e.preventDefault();
        setIsDictationOpen(true);
        return;
      }

      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (isFlipped) {
        if (e.key === '1') {
          e.preventDefault();
          handleFeedback('again');
        } else if (e.key === '2') {
          e.preventDefault();
          handleFeedback('hard');
        } else if (e.key === '3') {
          e.preventDefault();
          handleFeedback('good');
        } else if (e.key === '4') {
          e.preventDefault();
          handleFeedback('easy');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleFeedback, isFlipped, isDictationOpen, isAcupoint]);

  // Finish session summary view
  if (isFinished || fullCardsList.length === 0) {
    const totalMinutes = Math.max(1, Math.floor(sessionSeconds / 60));
    return (
      <div className="max-w-xl mx-auto py-10 px-4 text-center text-stone-900 animate-fade-in">
        <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
            <Award size={36} />
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">
              今日背诵任务已全部完成！
            </h2>
            <p className="text-sm text-stone-600">
              中医药记忆已按艾宾浩斯曲线自动排程，温故而知新。
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left">
            <div className="p-2.5 bg-white border border-stone-200 rounded-xl shadow-xs">
              <span className="text-xs text-stone-500 block mb-1">本次用时</span>
              <span className="text-lg font-bold text-emerald-700 font-mono">
                {formatTime(sessionSeconds)}
              </span>
            </div>
            <div className="p-2.5 bg-white border border-stone-200 rounded-xl shadow-xs">
              <span className="text-xs text-stone-500 block mb-1">新学条目</span>
              <span className="text-lg font-bold text-amber-700 font-mono">
                {newLearnedCount} 个
              </span>
            </div>
            <div className="p-2.5 bg-white border border-stone-200 rounded-xl shadow-xs">
              <span className="text-xs text-stone-500 block mb-1">复习巩固</span>
              <span className="text-lg font-bold text-teal-700 font-mono">
                {reviewedCount} 个
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onExitSession}
            className="w-full py-3.5 px-6 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all hover:scale-[1.01] active:scale-[0.98]"
          >
            返回今日主页
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round(
    (currentIndex / Math.max(1, fullCardsList.length)) * 100
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6 flex flex-col justify-between min-h-[calc(100vh-5rem)]">
      {/* Top Session Bar */}
      <div className="flex items-center justify-between gap-4 mb-4">
        {/* Exit Button */}
        <button
          type="button"
          onClick={onExitSession}
          className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors flex items-center gap-1.5 text-xs font-medium border border-stone-200 bg-white shadow-xs"
        >
          <X size={18} />
          <span className="hidden sm:inline">暂存退出</span>
        </button>

        {/* Progress Bar & Counter */}
        <div className="flex-1 max-w-md">
          <div className="flex items-center justify-between text-xs text-stone-600 mb-1.5 font-mono">
            <span>
              卡片进度：
              <strong className="text-emerald-700 text-sm">
                {currentIndex + 1}
              </strong>
              /{fullCardsList.length}
            </span>
            <span>{progressPercent}%</span>
          </div>

          <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Session Timer */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-xs">
          <Clock size={16} className="text-emerald-600" />
          <span className="font-mono text-xs sm:text-sm font-bold text-stone-800">
            {formatTime(sessionSeconds)}
          </span>
          {goalSettings.mode === 'time' && (
            <span className="text-[10px] text-stone-500 border-l border-stone-200 pl-2">
              目标: {goalSettings.targetMinutes}分
            </span>
          )}
        </div>
      </div>

      {/* Center Interactive 3D Flashcard */}
      <div className="my-auto py-2">
        <Flashcard
          herb={currentCard.herb}
          isFlipped={isFlipped}
          onFlip={handleFlip}
          progress={progressMap[currentCard.herb.id]}
          isNew={currentCard.isNew}
          onOpenDictation={!isAcupoint ? () => setIsDictationOpen(true) : undefined}
        />
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-4 pt-2">
        {!isFlipped ? (
          /* When card is Front: Flip trigger & Dictation button (Hidden for Acupoints) */
          <div className="max-w-xl mx-auto flex items-center gap-3">
            {!isAcupoint && (
              <button
                type="button"
                onClick={() => setIsDictationOpen(true)}
                className="py-4 px-5 rounded-2xl font-serif font-bold text-sm sm:text-base bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 shadow-sm flex items-center justify-center gap-2 transition-all shrink-0 hover:scale-[1.02] active:scale-95"
                title="默写核心功效并智能比对答案 (快捷键 W)"
              >
                <PenTool size={18} />
                <span>默写自测</span>
                <kbd className="hidden sm:inline-block text-[10px] bg-white px-1.5 py-0.5 rounded text-amber-800 font-mono border border-amber-300">
                  W
                </kbd>
              </button>
            )}

            <button
              type="button"
              onClick={handleFlip}
              className="flex-1 py-4 px-6 rounded-2xl font-serif font-bold text-base sm:text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>查看答案</span>
              <kbd className="hidden sm:inline-block text-xs bg-emerald-700 px-2 py-0.5 rounded text-emerald-100 font-mono">
                Space
              </kbd>
            </button>
          </div>
        ) : (
          /* When card is Flipped: 4 Anki/Ebbinghaus Feedback Buttons */
          <div className="max-w-xl mx-auto space-y-2">
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {/* 1. 忘记 (Again) */}
              <button
                type="button"
                onClick={() => handleFeedback('again')}
                className="py-3 px-1 sm:px-2 rounded-2xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 font-medium flex flex-col items-center justify-center gap-1 transition-all group active:scale-95 shadow-xs"
              >
                <span className="text-xs sm:text-sm font-bold group-hover:scale-105 transition-transform">
                  🔴 忘记
                </span>
                <span className="text-[10px] text-rose-600 font-mono">
                  1天内重来
                </span>
                <kbd className="hidden sm:inline-block text-[9px] bg-white px-1.5 py-0.5 rounded text-rose-700 font-mono border border-rose-200">
                  1
                </kbd>
              </button>

              {/* 2. 模糊 (Hard) */}
              <button
                type="button"
                onClick={() => handleFeedback('hard')}
                className="py-3 px-1 sm:px-2 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 font-medium flex flex-col items-center justify-center gap-1 transition-all group active:scale-95 shadow-xs"
              >
                <span className="text-xs sm:text-sm font-bold group-hover:scale-105 transition-transform">
                  🟡 模糊
                </span>
                <span className="text-[10px] text-amber-700 font-mono">
                  减缓间隔
                </span>
                <kbd className="hidden sm:inline-block text-[9px] bg-white px-1.5 py-0.5 rounded text-amber-700 font-mono border border-amber-200">
                  2
                </kbd>
              </button>

              {/* 3. 认识 (Good) */}
              <button
                type="button"
                onClick={() => handleFeedback('good')}
                className="py-3 px-1 sm:px-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold flex flex-col items-center justify-center gap-1 transition-all group active:scale-95 shadow-xs"
              >
                <span className="text-xs sm:text-sm font-extrabold group-hover:scale-105 transition-transform">
                  🟢 认识
                </span>
                <span className="text-[10px] text-emerald-700 font-mono">
                  进阶复习
                </span>
                <kbd className="hidden sm:inline-block text-[9px] bg-white px-1.5 py-0.5 rounded text-emerald-800 font-mono border border-emerald-300">
                  3
                </kbd>
              </button>

              {/* 4. 精通 (Easy) */}
              <button
                type="button"
                onClick={() => handleFeedback('easy')}
                className="py-3 px-1 sm:px-2 rounded-2xl bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 font-medium flex flex-col items-center justify-center gap-1 transition-all group active:scale-95 shadow-xs"
              >
                <span className="text-xs sm:text-sm font-bold group-hover:scale-105 transition-transform">
                  💎 精通
                </span>
                <span className="text-[10px] text-teal-700 font-mono">
                  长间隔
                </span>
                <kbd className="hidden sm:inline-block text-[9px] bg-white px-1.5 py-0.5 rounded text-teal-800 font-mono border border-teal-200">
                  4
                </kbd>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Dictation Modal */}
      {currentCard && !isAcupoint && (
        <DictationModal
          herb={currentCard.herb}
          isOpen={isDictationOpen}
          onClose={() => setIsDictationOpen(false)}
          onSubmitFeedback={handleFeedback}
        />
      )}
    </div>
  );
};

import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Flame,
  Clock,
  Layers,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Award,
  Zap,
  Play,
} from 'lucide-react';
import { motion } from 'motion/react';
import { DailyGoalSettings, DailyRecord, HerbItem, UserStats } from '../types';
import { DailySchedule } from '../utils/ebbinghaus';
import { StreakFlame } from './StreakFlame';
import { addDays, getTodayString } from '../utils/date';

interface DailyDashboardProps {
  schedule: DailySchedule<any>;
  goalSettings: DailyGoalSettings;
  userStats: UserStats;
  todayRecord: DailyRecord;
  isCheckedInToday: boolean;
  onStartStudy: () => void;
  onOpenSettings: () => void;
  onOpenLibrary: () => void;
  allHerbsCount: number;
  masteredCount: number;
  currentModuleId?: string;
}

export const DailyDashboard: React.FC<DailyDashboardProps> = ({
  schedule,
  goalSettings,
  userStats,
  todayRecord,
  isCheckedInToday,
  onStartStudy,
  onOpenSettings,
  onOpenLibrary,
  allHerbsCount,
  masteredCount,
  currentModuleId = 'herbs',
}) => {
  const isFormula = currentModuleId === 'formulas';
  const isAcupoint = currentModuleId === 'acupoints';
  const unitName = isFormula ? '首' : isAcupoint ? '个' : '味';
  const itemTypeName = isFormula ? '名方' : isAcupoint ? '穴位' : '中药';
  const moduleTitle = isFormula ? '🍵 方剂学背诵打卡' : isAcupoint ? '📍 针灸穴位背诵打卡' : '🌿 中药背诵打卡';

  const todayStr = getTodayString();
  const isTimeMode = goalSettings.mode === 'time';
  const progressPercent = isTimeMode
    ? Math.min(100, Math.round((todayRecord.minutesSpent / goalSettings.targetMinutes) * 100))
    : Math.min(
        100,
        Math.round(
          ((todayRecord.newCardsCount + todayRecord.reviewCardsCount) /
            Math.max(1, schedule.totalDueCount || goalSettings.targetCount)) *
            100
        )
      );

  // 7-day streak dots
  const past7Days = Array.from({ length: 7 }, (_, i) => {
    const d = addDays(todayStr, i - 6);
    const checked = userStats.checkInDates.includes(d);
    const isToday = d === todayStr;
    const dayLabel = isToday ? '今' : `${Number(d.split('-')[1])}.${Number(d.split('-')[2])}`;
    return { date: d, checked, isToday, dayLabel };
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 text-stone-900 animate-fade-in">
      {/* 1. Main Action Hero Banner: Start Studying Immediately */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border border-emerald-200/90 p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-3">
            {/* Tag / Status */}
            <div className="inline-flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                {moduleTitle}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-stone-900 tracking-wide">
              {isCheckedInToday ? (
                <span className="flex flex-col gap-1 sm:gap-1.5">
                  <span>🎉 今日已打卡，</span>
                  <span className="text-emerald-700 whitespace-nowrap">连胜达成！</span>
                </span>
              ) : (
                '准备就绪，开启今日背诵'
              )}
            </h1>

            <p className="text-sm text-stone-600 font-serif max-w-lg">
              今日课表待学：
              <strong className="text-amber-700 font-sans mx-1 font-bold">{schedule.newCards.length}</strong>{unitName}新{itemTypeName} +
              <strong className="text-teal-700 font-sans mx-1 font-bold">{schedule.reviewCards.length}</strong>{unitName}复习。
            </p>
          </div>

          {/* Big Direct Start CTA Button */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={onStartStudy}
              className="py-4 px-8 sm:px-10 rounded-2xl font-serif text-lg sm:text-xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <Play size={22} className="fill-white" />
              <span>{schedule.totalDueCount > 0 ? '立即开始背诵' : '自由巩固背诵'}</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* 2. Today's Key Schedule Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* New Cards */}
        <div
          onClick={onStartStudy}
          className="bg-white border border-stone-200 hover:border-amber-400/80 p-4 sm:p-5 rounded-2xl cursor-pointer transition-all hover:shadow-md shadow-sm group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1.5">
              <Sparkles size={13} className="text-amber-600" />
              <span>今日新学</span>
            </span>
            <span className="text-2xl font-extrabold font-mono text-amber-700">
              {schedule.newCards.length}
              <span className="text-xs text-stone-500 ml-1 font-sans">{unitName}</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-1 mt-3">
            {schedule.newCards.slice(0, 4).map((h: any) => (
              <span
                key={h.id}
                className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-xs font-serif border border-stone-200"
              >
                {h.name}
              </span>
            ))}
            {schedule.newCards.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-500 text-xs border border-stone-200">
                +{schedule.newCards.length - 4}
              </span>
            )}
            {schedule.newCards.length === 0 && (
              <span className="text-xs text-stone-400 italic">已全部学完</span>
            )}
          </div>
        </div>

        {/* Review Cards */}
        <div
          onClick={onStartStudy}
          className="bg-white border border-stone-200 hover:border-teal-400/80 p-4 sm:p-5 rounded-2xl cursor-pointer transition-all hover:shadow-md shadow-sm group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200 flex items-center gap-1.5">
              <RefreshCw size={13} className="text-teal-600" />
              <span>艾宾浩斯复习</span>
            </span>
            <span className="text-2xl font-extrabold font-mono text-teal-700">
              {schedule.reviewCards.length}
              <span className="text-xs text-stone-500 ml-1 font-sans">{unitName}</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-1 mt-3">
            {schedule.reviewCards.slice(0, 4).map((h: any) => (
              <span
                key={h.id}
                className="px-2 py-0.5 rounded bg-teal-50/80 text-teal-800 text-xs font-serif border border-teal-200/60"
              >
                {h.name}
              </span>
            ))}
            {schedule.reviewCards.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-500 text-xs border border-stone-200">
                +{schedule.reviewCards.length - 4}
              </span>
            )}
            {schedule.reviewCards.length === 0 && (
              <span className="text-xs text-stone-400 italic">今日暂无到期复习</span>
            )}
          </div>
        </div>
      </div>

      {/* 3. Streak & Statistics Bar */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        {/* Streak Flame & Days */}
        <div className="flex items-center gap-4">
          <StreakFlame
            streak={userStats.currentStreak}
            isCheckedInToday={isCheckedInToday}
            size="md"
            showLabel={false}
          />
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-amber-600 font-mono">
                {userStats.currentStreak}
              </span>
              <span className="text-xs text-stone-700 font-bold">天连续打卡</span>
            </div>
            <span className="text-xs text-stone-500">
              已熟练掌握 {masteredCount} / {allHerbsCount} {unitName}{itemTypeName}
            </span>
          </div>
        </div>

        {/* 7-Day Mini Dots */}
        <div className="flex items-center gap-2">
          {past7Days.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  item.checked
                    ? 'bg-amber-500 text-white ring-2 ring-amber-400/40 shadow-xs'
                    : item.isToday
                    ? 'bg-amber-50 border-2 border-dashed border-amber-500 text-amber-700 font-bold'
                    : 'bg-stone-100 text-stone-400'
                }`}
              >
                {item.checked ? '✓' : item.isToday ? '今' : ''}
              </div>
              <span className="text-[9px] text-stone-400 font-mono">
                {item.dayLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Flame,
  Award,
  Calendar as CalendarIcon,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Gift,
  Plus,
  Trash2,
  Check,
  Zap,
  PartyPopper,
  Info,
} from 'lucide-react';
import { DailyRecord, ExpReward, UserStats } from '../types';
import { StreakFlame } from './StreakFlame';
import { getTodayString } from '../utils/date';
import { loadExpRewards, saveExpRewards } from '../utils/storage';
import { sound } from '../utils/sound';

interface CheckInCalendarProps {
  userStats: UserStats;
  dailyRecords: Record<string, DailyRecord>;
  isCheckedInToday: boolean;
}

export const CheckInCalendar: React.FC<CheckInCalendarProps> = ({
  userStats,
  dailyRecords,
  isCheckedInToday,
}) => {
  const [currentMonthDate, setCurrentMonthDate] = useState(() => new Date());
  const [expRewards, setExpRewards] = useState<ExpReward[]>(() => loadExpRewards());
  const [isAddingReward, setIsAddingReward] = useState(false);
  const [newTargetXp, setNewTargetXp] = useState<number>(500);
  const [newRewardText, setNewRewardText] = useState('');
  const [alertDismissed, setAlertDismissed] = useState<Record<string, boolean>>({});

  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth(); // 0-indexed
  const today = getTodayString();

  // Days in month calculation
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonthDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(new Date(year, month + 1, 1));
  };

  // Milestone badges up to hundreds of days
  const milestones = [
    { days: 1, title: '初涉本草', desc: '打卡 1 天', icon: '🌱' },
    { days: 3, title: '略窥堂奥', desc: '连击 3 天', icon: '🌿' },
    { days: 7, title: '渐入佳境', desc: '连击 7 天', icon: '🔥' },
    { days: 14, title: '持之以恒', desc: '连击 14 天', icon: '⚡' },
    { days: 30, title: '大医精诚', desc: '连击 30 天', icon: '👑' },
    { days: 60, title: '悬壶济世', desc: '连击 60 天', icon: '🏺' },
    { days: 100, title: '百日筑基', desc: '连击 100 天', icon: '🌟' },
    { days: 200, title: '杏林翘楚', desc: '连击 200 天', icon: '🏆' },
    { days: 365, title: '岁华宗师', desc: '连击 365 天', icon: '🐉' },
    { days: 500, title: '半千医仙', desc: '连击 500 天', icon: '🔮' },
    { days: 1000, title: '千日医圣', desc: '连击 1000 天', icon: '☯️' },
  ];

  // User rank title based on XP
  const getXpRank = (xp: number) => {
    if (xp >= 5000) return { title: '岐黄医圣', color: 'text-amber-300' };
    if (xp >= 2000) return { title: '经方宗师', color: 'text-yellow-400' };
    if (xp >= 1000) return { title: '悬壶名医', color: 'text-emerald-400' };
    if (xp >= 500) return { title: '杏林名家', color: 'text-teal-400' };
    if (xp >= 200) return { title: '本草经师', color: 'text-cyan-400' };
    return { title: '本草学徒', color: 'text-stone-300' };
  };

  const currentRank = getXpRank(userStats.xp);

  // Rewards that have been reached but not yet claimed
  const readyRewards = expRewards.filter(
    (r) => userStats.xp >= r.targetXp && !r.isClaimed && !alertDismissed[r.id]
  );

  // Claim a reward
  const handleClaimReward = (rewardId: string) => {
    sound.playCheckInFanfare();
    const updated = expRewards.map((r) =>
      r.id === rewardId
        ? { ...r, isClaimed: true, claimedAt: getTodayString() }
        : r
    );
    setExpRewards(updated);
    saveExpRewards(updated);
  };

  // Delete a reward
  const handleDeleteReward = (rewardId: string) => {
    const updated = expRewards.filter((r) => r.id !== rewardId);
    setExpRewards(updated);
    saveExpRewards(updated);
  };

  // Add new custom reward
  const handleAddReward = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRewardText.trim() || newTargetXp <= 0) return;

    const newReward: ExpReward = {
      id: `reward-${Date.now()}`,
      targetXp: newTargetXp,
      rewardText: newRewardText.trim(),
      isClaimed: userStats.xp >= newTargetXp ? false : false,
      createdAt: getTodayString(),
    };

    const updated = [...expRewards, newReward].sort((a, b) => a.targetXp - b.targetXp);
    setExpRewards(updated);
    saveExpRewards(updated);

    setNewRewardText('');
    setIsAddingReward(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6 text-stone-850 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
            <span>打卡日历</span>
            <StreakFlame
              streak={userStats.currentStreak}
              isCheckedInToday={isCheckedInToday}
              size="sm"
            />
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            记录每日背诵坚持点滴 · 累积经验值解锁心愿奖励
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white border border-stone-200 px-4 py-2.5 rounded-2xl text-xs shadow-sm text-stone-800">
          <div>
            <span className="text-stone-500 block">累计打卡</span>
            <strong className="text-amber-700 text-sm font-mono font-bold">
              {userStats.checkInDates.length} 天
            </strong>
          </div>
          <div className="border-l border-stone-200 pl-4">
            <span className="text-stone-500 block">最长连击</span>
            <strong className="text-orange-700 text-sm font-mono font-bold">
              {userStats.longestStreak} 天
            </strong>
          </div>
          <div className="border-l border-stone-200 pl-4">
            <span className="text-stone-500 block">当前经验值</span>
            <strong className="text-emerald-700 text-sm font-mono font-bold">
              {userStats.xp} EXP
            </strong>
          </div>
        </div>
      </div>

      {/* Reached EXP Reward Alert Reminder Notifications */}
      {readyRewards.length > 0 && (
        <div className="space-y-2.5">
          {readyRewards.map((reward) => (
            <div
              key={reward.id}
              className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 via-yellow-50 to-emerald-50 border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-bounce-short text-stone-800"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-300 shrink-0">
                  <PartyPopper size={24} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-amber-800">
                    🎉 经验值达标喜报 · 已达到 {userStats.xp} / {reward.targetXp} EXP
                  </div>
                  <div className="text-base font-serif font-bold text-stone-900 mt-0.5">
                    达成心愿奖励：{reward.rewardText}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button
                  type="button"
                  onClick={() => setAlertDismissed((prev) => ({ ...prev, [reward.id]: true }))}
                  className="px-3 py-1.5 rounded-xl text-xs text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-200 transition-colors font-medium shadow-2xs"
                >
                  稍后
                </button>
                <button
                  type="button"
                  onClick={() => handleClaimReward(reward.id)}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                >
                  <Gift size={14} />
                  <span>兑现奖励</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Calendar Card */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm text-stone-800">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
            <CalendarIcon size={18} className="text-emerald-600" />
            <span>
              {year}年 {month + 1}月
            </span>
          </h3>

          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-white transition-colors"
              title="上一月"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-white transition-colors"
              title="下一月"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-stone-600 mb-2">
          <span>日</span>
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty offset days */}
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {/* Calendar days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(
              dayNum
            ).padStart(2, '0')}`;

            const isChecked = userStats.checkInDates.includes(dateStr);
            const isToday = dateStr === today;
            const record = dailyRecords[dateStr];

            return (
              <div
                key={dateStr}
                className={`aspect-square rounded-2xl p-1.5 flex flex-col items-center justify-between text-xs transition-all ${
                  isChecked
                    ? 'bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 border border-amber-300 text-amber-950 font-bold shadow-xs'
                    : isToday
                    ? 'bg-emerald-50/80 border-2 border-dashed border-emerald-500 text-emerald-900 font-bold'
                    : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100/80'
                }`}
                title={
                  isChecked
                    ? `${dateStr}：已完成打卡\n用时: ${record?.minutesSpent || 0}分钟\n背诵: ${record?.totalCardsReviewed || 0}张`
                    : `${dateStr}：未打卡`
                }
              >
                <span className="text-[11px] self-start ml-1 font-mono font-medium">{dayNum}</span>

                {isChecked ? (
                  <Flame size={18} className="fill-orange-500 text-amber-600 mb-0.5 animate-pulse" />
                ) : isToday ? (
                  <span className="text-[10px] text-emerald-700 font-bold">今日</span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mb-1" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* EXP and Self-Reward System */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-5 text-stone-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 shadow-xs">
              <Zap size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  经验值与心愿奖励
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-serif font-bold">
                  {currentRank.title}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-stone-500 block">累计经验值</span>
              <span className="text-xl font-bold font-mono text-emerald-700">
                {userStats.xp} <span className="text-xs text-stone-500 font-sans">EXP</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsAddingReward(!isAddingReward)}
              className="py-2 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Plus size={15} />
              <span>添加心愿奖励</span>
            </button>
          </div>
        </div>

        {/* EXP Gain Rules Helper */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200 text-xs text-stone-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <span>每日打卡达标：<strong className="text-amber-800 font-mono font-bold">+1 EXP</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span>新学一味药材/穴位：<strong className="text-emerald-800 font-mono font-bold">+5 EXP</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
            <span>复习巩固一味/穴位：<strong className="text-teal-800 font-mono font-bold">+2 EXP</strong></span>
          </div>
        </div>

        {/* Add Reward Inline Form */}
        {isAddingReward && (
          <form
            onSubmit={handleAddReward}
            className="p-4 rounded-2xl bg-stone-50 border border-emerald-300 space-y-3 animate-fade-in text-stone-800"
          >
            <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
              <Gift size={14} />
              <span>设置经验值心愿奖励：</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-stone-600 font-medium block mb-1">
                  目标经验值 (EXP)
                </label>
                <input
                  type="number"
                  min={10}
                  step={10}
                  value={newTargetXp}
                  onChange={(e) => setNewTargetXp(Math.max(10, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm font-mono outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500 shadow-2xs"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs text-stone-600 font-medium block mb-1">
                  奖励内容（如：吃顿大餐、喝奶茶、买经典医书、看电影...）
                </label>
                <input
                  type="text"
                  placeholder="例如：🍵 奖励自己喝一杯养心清气好茶"
                  value={newRewardText}
                  onChange={(e) => setNewRewardText(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm font-serif outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500 shadow-2xs"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsAddingReward(false)}
                className="px-3 py-1.5 rounded-lg text-xs text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
              >
                保存心愿奖励
              </button>
            </div>
          </form>
        )}

        {/* Rewards List */}
        <div className="space-y-3">
          {expRewards.map((reward) => {
            const isReached = userStats.xp >= reward.targetXp;
            const progress = Math.min(100, Math.round((userStats.xp / reward.targetXp) * 100));

            return (
              <div
                key={reward.id}
                className={`p-4 rounded-2xl border transition-all ${
                  reward.isClaimed
                    ? 'bg-stone-50/70 border-stone-200 text-stone-500 opacity-75'
                    : isReached
                    ? 'bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50/50 border-amber-300 text-stone-900 shadow-xs'
                    : 'bg-white border-stone-200 text-stone-800 shadow-2xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg ${
                          reward.isClaimed
                            ? 'bg-stone-200 text-stone-600'
                            : isReached
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        {reward.targetXp} EXP
                      </span>

                      <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                        {reward.rewardText}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="flex-1 h-2 bg-stone-100 border border-stone-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            reward.isClaimed
                              ? 'bg-stone-400'
                              : isReached
                              ? 'bg-gradient-to-r from-amber-500 to-yellow-500'
                              : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-stone-600 font-medium shrink-0">
                        {userStats.xp}/{reward.targetXp} ({progress}%)
                      </span>
                    </div>
                  </div>

                  {/* Actions & Status */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    {reward.isClaimed ? (
                      <span className="text-xs text-stone-600 flex items-center gap-1 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                        <Check size={14} className="text-emerald-600" />
                        <span>已兑现 ({reward.claimedAt})</span>
                      </span>
                    ) : isReached ? (
                      <button
                        type="button"
                        onClick={() => handleClaimReward(reward.id)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 animate-pulse cursor-pointer"
                      >
                        <Gift size={14} />
                        <span>领取兑现</span>
                      </button>
                    ) : (
                      <span className="text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200 font-medium">
                        还差 {reward.targetXp - userStats.xp} EXP
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => handleDeleteReward(reward.id)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="删除此项奖励"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Long-term Milestones Grid (Up to hundreds of days) */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-4 text-stone-800">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-base text-stone-900 flex items-center gap-2">
            <Award size={18} className="text-amber-600" />
            <span>连击里程碑成就勋章</span>
          </h3>
          <span className="text-xs text-stone-600 font-mono">
            当前连击：<strong className="text-orange-600 font-bold">{userStats.currentStreak}</strong> 天 / 最高：<strong className="text-amber-700 font-bold">{userStats.longestStreak}</strong> 天
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {milestones.map((m) => {
            const isUnlocked = userStats.longestStreak >= m.days;
            return (
              <div
                key={m.days}
                className={`p-3.5 rounded-2xl border text-center transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/80 border-amber-300 text-amber-950 shadow-2xs'
                    : 'bg-stone-50 border-stone-200 text-stone-600 opacity-60'
                }`}
              >
                <div className="text-2xl mb-1">{m.icon}</div>
                <div className="text-xs font-bold font-serif mb-0.5 text-stone-900">{m.title}</div>
                <div className="text-xs text-stone-600">{m.desc}</div>
                {isUnlocked ? (
                  <span className="inline-block mt-1 text-[10px] px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-200 rounded-full font-bold">
                    已解锁
                  </span>
                ) : (
                  <span className="inline-block mt-1 text-[10px] text-stone-500 font-mono">
                    差 {Math.max(1, m.days - userStats.currentStreak)} 天
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

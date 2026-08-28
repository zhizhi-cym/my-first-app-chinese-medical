import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, CheckCircle, ArrowRight, Share2, Award, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserStats } from '../types';
import { sound } from '../utils/sound';

interface CheckInCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  sessionMinutes: number;
  newCardsLearned: number;
  reviewCardsDone: number;
  onContinueStudy?: () => void;
}

export const CheckInCelebrationModal: React.FC<CheckInCelebrationModalProps> = ({
  isOpen,
  onClose,
  stats,
  sessionMinutes,
  newCardsLearned,
  reviewCardsDone,
  onContinueStudy,
}) => {
  useEffect(() => {
    if (isOpen) {
      sound.playCheckInFanfare();

      // Launch rich celebratory confetti
      const end = Date.now() + 2 * 1000;
      const colors = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6'];

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl text-stone-100 overflow-hidden"
        >
          {/* Background subtle oriental pattern glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Duolingo style animated streak flame badge */}
          <div className="relative my-4 inline-flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.25, 1.1, 1.2, 1],
                rotate: [0, -6, 6, -3, 0],
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 p-1 shadow-[0_0_40px_rgba(245,158,11,0.5)] flex items-center justify-center"
            >
              <div className="w-full h-full bg-stone-950 rounded-full flex flex-col items-center justify-center">
                <Flame className="w-10 h-10 fill-orange-500 text-amber-400 animate-pulse" />
                <span className="text-xl font-extrabold text-amber-300 -mt-1 font-mono">
                  {stats.currentStreak}
                </span>
              </div>
            </motion.div>

            <Sparkles className="absolute -top-2 right-0 text-yellow-300 w-8 h-8 animate-bounce" />
            <Sparkles className="absolute -bottom-1 -left-2 text-emerald-400 w-6 h-6 animate-pulse" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-emerald-300 to-teal-200 mb-1">
            今日打卡成功！
          </h2>
          <p className="text-stone-300 text-sm font-medium mb-6">
            已达成连续背诵{' '}
            <span className="text-amber-400 font-bold text-base">
              {stats.currentStreak} 天
            </span>{' '}
            连击纪录 🔥
          </p>

          {/* Traditional TCM Seal / Stamp */}
          <div className="inline-block px-3 py-1 mb-6 rounded-md bg-rose-950/60 border border-rose-600/60 text-rose-300 font-serif text-xs tracking-widest">
            【 功不唐捐 · 每日精进 】
          </div>

          {/* Session Stats Grid */}
          <div className="grid grid-cols-3 gap-2.5 bg-stone-800/60 border border-stone-700/60 rounded-2xl p-3.5 mb-6 text-left">
            <div className="p-2 bg-stone-900/60 rounded-xl">
              <span className="text-[11px] text-stone-400 block mb-0.5">专注时长</span>
              <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                {sessionMinutes > 0 ? `${sessionMinutes}分` : '<1分'}
              </span>
            </div>

            <div className="p-2 bg-stone-900/60 rounded-xl">
              <span className="text-[11px] text-stone-400 block mb-0.5">新学中药</span>
              <span className="text-base sm:text-lg font-bold text-amber-400 font-mono">
                +{newCardsLearned} 味
              </span>
            </div>

            <div className="p-2 bg-stone-900/60 rounded-xl">
              <span className="text-[11px] text-stone-400 block mb-0.5">艾宾浩斯复习</span>
              <span className="text-base sm:text-lg font-bold text-teal-400 font-mono">
                +{reviewCardsDone} 味
              </span>
            </div>
          </div>

          {/* XP Reward Banner */}
          <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
            <div className="flex items-center gap-1.5">
              <Sparkles size={16} className="text-amber-400" />
              <span>今日打卡激励奖励</span>
            </div>
            <span className="text-sm font-bold text-amber-200">+1 EXP</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            {onContinueStudy && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContinueStudy();
                }}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <BookOpen size={18} />
                <span>继续背诵其他药材</span>
                <ArrowRight size={16} />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl font-medium text-sm bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            >
              返回今日课表
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

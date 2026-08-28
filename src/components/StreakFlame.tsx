import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface StreakFlameProps {
  streak: number;
  isCheckedInToday: boolean;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const StreakFlame: React.FC<StreakFlameProps> = ({
  streak,
  isCheckedInToday,
  size = 'md',
  showLabel = true,
}) => {
  const sizeClasses = {
    sm: 'text-sm gap-1.5 px-2.5 py-1',
    md: 'text-base gap-2 px-3.5 py-1.5',
    lg: 'text-xl gap-2.5 px-4 py-2',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 26,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center rounded-full font-bold transition-all shadow-sm ${
        isCheckedInToday
          ? 'bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-red-500/15 text-orange-600 border border-orange-200'
          : streak > 0
          ? 'bg-amber-50 text-amber-700 border border-amber-200'
          : 'bg-stone-100 text-stone-500 border border-stone-200'
      } ${sizeClasses[size]}`}
      title={
        isCheckedInToday
          ? `今日已完成打卡！已连续打卡 ${streak} 天`
          : streak > 0
          ? `连续打卡 ${streak} 天，今日尚未打卡，快去完成任务吧！`
          : '尚未开始连击，今天完成背诵即可开启打卡！'
      }
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={
            isCheckedInToday
              ? {
                  scale: [1, 1.15, 1],
                  rotate: [0, -3, 3, 0],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Flame
            size={iconSizes[size]}
            className={`${
              isCheckedInToday
                ? 'fill-orange-500 text-orange-500 filter drop-shadow-[0_2px_6px_rgba(249,115,22,0.4)]'
                : streak > 0
                ? 'fill-amber-400 text-amber-500'
                : 'text-stone-400'
            }`}
          />
        </motion.div>
        {isCheckedInToday && (
          <Sparkles
            size={iconSizes[size] * 0.6}
            className="absolute -top-1 -right-1.5 text-amber-400 animate-pulse pointer-events-none"
          />
        )}
      </div>

      <span className="tabular-nums tracking-tight font-extrabold flex items-center gap-1">
        {streak}
        {showLabel && (
          <span className="text-xs font-medium opacity-80">
            {isCheckedInToday ? '天连胜' : '天'}
          </span>
        )}
      </span>
    </motion.div>
  );
};

import { CardProgress, HerbItem, SRSFeedback } from '../types';
import { HERB_DATABASE } from '../data/herbs';
import { addDays, getTodayString } from './date';

/**
 * Classic Ebbinghaus interval sequence (in days):
 * 1 day, 2 days, 4 days, 7 days, 15 days, 30 days, 60 days
 */
export const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15, 30, 60];

export function createInitialCardProgress(herbId: string): CardProgress {
  const today = getTodayString();
  return {
    herbId,
    status: 'new',
    level: 0,
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    lapses: 0,
    nextReviewAt: today,
  };
}

/**
 * Calculates new SRS progress state after a feedback review
 */
export function calculateNextSRSState(
  currentProgress: CardProgress | undefined,
  herbId: string,
  feedback: SRSFeedback
): CardProgress {
  const today = getTodayString();
  const base = currentProgress || createInitialCardProgress(herbId);

  let newLevel = base.level;
  let newInterval = base.interval;
  let newStatus = base.status;
  let newLapses = base.lapses;
  let newReps = base.repetitions + 1;
  const firstLearnedAt = base.firstLearnedAt || today;

  switch (feedback) {
    case 'again': { // 忘记 / 生疏
      newLevel = 0;
      newInterval = 1;
      newLapses += 1;
      newStatus = 'learning';
      break;
    }
    case 'hard': { // 模糊 / 犹豫
      // Stay in current level, small increment
      newInterval = Math.max(1, Math.min(newInterval, 2));
      newStatus = 'learning';
      break;
    }
    case 'good': { // 认识 / 掌握
      newLevel = Math.min(base.level + 1, EBBINGHAUS_INTERVALS.length - 1);
      newInterval = EBBINGHAUS_INTERVALS[newLevel] || 30;
      newStatus = newLevel >= 4 ? 'mastered' : 'reviewing';
      break;
    }
    case 'easy': { // 熟练 / 秒答
      newLevel = Math.min(base.level + 2, EBBINGHAUS_INTERVALS.length - 1);
      newInterval = Math.round((EBBINGHAUS_INTERVALS[newLevel] || 30) * 1.5);
      newStatus = 'mastered';
      break;
    }
  }

  const nextReviewAt = addDays(today, newInterval);

  return {
    herbId,
    status: newStatus,
    level: newLevel,
    interval: newInterval,
    easeFactor: base.easeFactor,
    repetitions: newReps,
    lapses: newLapses,
    lastReviewedAt: today,
    nextReviewAt,
    firstLearnedAt,
  };
}

export interface DailySchedule<T = HerbItem> {
  newCards: T[];
  reviewCards: T[];
  totalDueCount: number;
}

/**
 * Task Generation Engine (每日课表生成):
 * 1. Extract review cards where nextReviewAt <= today (严格艾宾浩斯复习)
 * 2. Extract new cards from DB with strict deduplication (确保不包含历史已学过内容)
 */
export function generateDailySchedule<T extends { id: string }>(
  allItems: T[],
  progressMap: Record<string, CardProgress>,
  targetNewCount: number
): DailySchedule<T> {
  const today = getTodayString();

  // 1. Review cards due today or overdue
  const reviewCards: T[] = [];
  for (const item of allItems) {
    const progress = progressMap[item.id];
    if (progress && progress.status !== 'new') {
      if (progress.nextReviewAt <= today) {
        reviewCards.push(item);
      }
    }
  }

  // Sort review cards: prioritize items with more lapses or oldest due
  reviewCards.sort((a, b) => {
    const progA = progressMap[a.id];
    const progB = progressMap[b.id];
    return (progB?.lapses || 0) - (progA?.lapses || 0);
  });

  // 2. New cards strictly deduplicated (never touched before)
  const learnedIds = new Set(
    Object.keys(progressMap).filter((id) => progressMap[id]?.status !== 'new')
  );

  const availableNewItems = allItems.filter((item) => !learnedIds.has(item.id));

  // Pick up to targetNewCount new items
  const newCards = availableNewItems.slice(0, targetNewCount);

  return {
    newCards,
    reviewCards,
    totalDueCount: newCards.length + reviewCards.length,
  };
}

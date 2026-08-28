import { CardProgress, DailyGoalSettings, DailyRecord, ExpReward, TCMModuleId, UserStats } from '../types';
import { addDays, getDaysDiff, getTodayString } from './date';

const STORAGE_KEYS = {
  CARD_PROGRESS: 'tcm_herb_card_progress_v1',
  USER_STATS: 'tcm_herb_user_stats_v1',
  DAILY_GOAL: 'tcm_herb_daily_goal_v1',
  DAILY_RECORDS: 'tcm_herb_daily_records_v1',
  SOUND_ENABLED: 'tcm_herb_sound_enabled_v1',
  EXP_REWARDS: 'tcm_herb_exp_rewards_v1',
  FORMULA_NOTES: 'tcm_formula_notes_v1',
  FORMULA_CUSTOM_HERBS: 'tcm_formula_custom_herbs_v1',
  HERB_NOTES: 'tcm_herb_notes_v1',
  ACUPOINT_NOTES: 'tcm_acupoint_notes_v1',
};

export function getCardProgressStorageKey(moduleId: TCMModuleId = 'herbs'): string {
  if (moduleId === 'formulas') return 'tcm_formula_card_progress_v1';
  if (moduleId === 'acupoints') return 'tcm_acupoint_card_progress_v1';
  if (moduleId === 'classics') return 'tcm_classic_card_progress_v1';
  return STORAGE_KEYS.CARD_PROGRESS;
}

export const DEFAULT_EXP_REWARDS: ExpReward[] = [
  {
    id: 'reward-1',
    targetXp: 100,
    rewardText: '🍵 奖励自己喝一杯养心清气好茶',
    isClaimed: false,
    createdAt: '2025-01-01',
  },
  {
    id: 'reward-2',
    targetXp: 300,
    rewardText: '🍰 奖励自己一份喜爱的甜品/水果',
    isClaimed: false,
    createdAt: '2025-01-01',
  },
  {
    id: 'reward-3',
    targetXp: 500,
    rewardText: '🍲 奖励自己一顿丰盛大餐/犒劳美食',
    isClaimed: false,
    createdAt: '2025-01-01',
  },
  {
    id: 'reward-4',
    targetXp: 1000,
    rewardText: '📚 添置一本中医经典典籍或好书',
    isClaimed: false,
    createdAt: '2025-01-01',
  },
  {
    id: 'reward-5',
    targetXp: 2000,
    rewardText: '🎁 奖励自己一件心愿大礼/出去游玩一天',
    isClaimed: false,
    createdAt: '2025-01-01',
  },
];

export function loadExpRewards(): ExpReward[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EXP_REWARDS);
    if (!data) return DEFAULT_EXP_REWARDS;
    const list = JSON.parse(data);
    return Array.isArray(list) && list.length > 0 ? list : DEFAULT_EXP_REWARDS;
  } catch (e) {
    console.error('Failed to load exp rewards:', e);
    return DEFAULT_EXP_REWARDS;
  }
}

export function saveExpRewards(rewards: ExpReward[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.EXP_REWARDS, JSON.stringify(rewards));
  } catch (e) {
    console.error('Failed to save exp rewards:', e);
  }
}

export const DEFAULT_DAILY_GOAL: DailyGoalSettings = {
  mode: 'count', // Default to 'count' (Mode B: 20 cards) or can switch to 'time' (Mode A: 15 mins)
  targetMinutes: 15,
  targetCount: 15,
};

export const DEFAULT_USER_STATS: UserStats = {
  currentStreak: 0,
  longestStreak: 0,
  lastCheckInDate: '',
  checkInDates: [],
  totalMinutesStudied: 0,
  totalCardsLearned: 0,
  totalReviewsDone: 0,
  xp: 0,
};

export function loadCardProgress(moduleId: TCMModuleId = 'herbs'): Record<string, CardProgress> {
  try {
    const key = getCardProgressStorageKey(moduleId);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load card progress:', e);
    return {};
  }
}

export function saveCardProgress(progressMap: Record<string, CardProgress>, moduleId: TCMModuleId = 'herbs'): void {
  try {
    const key = getCardProgressStorageKey(moduleId);
    localStorage.setItem(key, JSON.stringify(progressMap));
  } catch (e) {
    console.error('Failed to save card progress:', e);
  }
}

export function loadUserStats(): UserStats {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_STATS);
    if (!data) return DEFAULT_USER_STATS;
    const stats: UserStats = JSON.parse(data);
    
    // Validate current streak: if last check-in was before yesterday, streak resets to 0
    const today = getTodayString();
    if (stats.lastCheckInDate) {
      const diff = getDaysDiff(stats.lastCheckInDate, today);
      if (diff > 1 && stats.lastCheckInDate !== today) {
        stats.currentStreak = 0;
      }
    }
    return stats;
  } catch (e) {
    console.error('Failed to load user stats:', e);
    return DEFAULT_USER_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save user stats:', e);
  }
}

export function loadDailyGoal(): DailyGoalSettings {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.DAILY_GOAL);
    return data ? JSON.parse(data) : DEFAULT_DAILY_GOAL;
  } catch (e) {
    console.error('Failed to load daily goal:', e);
    return DEFAULT_DAILY_GOAL;
  }
}

export function saveDailyGoal(goal: DailyGoalSettings): void {
  try {
    localStorage.setItem(STORAGE_KEYS.DAILY_GOAL, JSON.stringify(goal));
  } catch (e) {
    console.error('Failed to save daily goal:', e);
  }
}

export function loadDailyRecords(): Record<string, DailyRecord> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.DAILY_RECORDS);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load daily records:', e);
    return {};
  }
}

export function saveDailyRecord(record: DailyRecord): void {
  try {
    const records = loadDailyRecords();
    records[record.date] = record;
    localStorage.setItem(STORAGE_KEYS.DAILY_RECORDS, JSON.stringify(records));
  } catch (e) {
    console.error('Failed to save daily record:', e);
  }
}

export function loadSoundEnabled(): boolean {
  try {
    const val = localStorage.getItem(STORAGE_KEYS.SOUND_ENABLED);
    return val !== null ? val === 'true' : true;
  } catch (e) {
    return true;
  }
}

export function saveSoundEnabled(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, String(enabled));
  } catch (e) {
    console.error('Failed to save sound settings:', e);
  }
}

/**
 * Handle successful daily check-in (Duolingo style)
 */
export function performDailyCheckIn(
  minutesSpent: number,
  newCards: number,
  reviewCards: number
): { stats: UserStats; isNewCheckInToday: boolean } {
  const today = getTodayString();
  const currentStats = loadUserStats();

  let isNewCheckInToday = false;
  let newCurrentStreak = currentStats.currentStreak;
  const checkInDatesSet = new Set(currentStats.checkInDates);

  if (currentStats.lastCheckInDate !== today) {
    isNewCheckInToday = true;
    checkInDatesSet.add(today);

    if (currentStats.lastCheckInDate) {
      const diff = getDaysDiff(currentStats.lastCheckInDate, today);
      if (diff === 1) {
        // Consecutive day
        newCurrentStreak += 1;
      } else {
        // Broke streak or first day
        newCurrentStreak = 1;
      }
    } else {
      newCurrentStreak = 1;
    }
  }

  const longestStreak = Math.max(currentStats.longestStreak, newCurrentStreak);
  const xpEarned = isNewCheckInToday ? 1 + newCards * 5 + reviewCards * 2 : newCards * 5 + reviewCards * 2;

  const updatedStats: UserStats = {
    currentStreak: newCurrentStreak,
    longestStreak,
    lastCheckInDate: today,
    checkInDates: Array.from(checkInDatesSet).sort(),
    totalMinutesStudied: currentStats.totalMinutesStudied + minutesSpent,
    totalCardsLearned: currentStats.totalCardsLearned + newCards,
    totalReviewsDone: currentStats.totalReviewsDone + reviewCards,
    xp: currentStats.xp + xpEarned,
  };

  saveUserStats(updatedStats);

  // Update daily record
  const records = loadDailyRecords();
  const existingToday = records[today] || {
    date: today,
    completed: false,
    minutesSpent: 0,
    newCardsCount: 0,
    reviewCardsCount: 0,
    totalCardsReviewed: 0,
  };

  saveDailyRecord({
    date: today,
    completed: true,
    minutesSpent: existingToday.minutesSpent + minutesSpent,
    newCardsCount: existingToday.newCardsCount + newCards,
    reviewCardsCount: existingToday.reviewCardsCount + reviewCards,
    totalCardsReviewed: existingToday.totalCardsReviewed + newCards + reviewCards,
  });

  return { stats: updatedStats, isNewCheckInToday };
}

/**
 * Formula Notes Storage
 */
export function loadFormulaNotes(): Record<string, string> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.FORMULA_NOTES);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load formula notes:', e);
    return {};
  }
}

export function saveFormulaNote(formulaId: string, note: string): Record<string, string> {
  try {
    const current = loadFormulaNotes();
    if (!note.trim()) {
      delete current[formulaId];
    } else {
      current[formulaId] = note.trim();
    }
    localStorage.setItem(STORAGE_KEYS.FORMULA_NOTES, JSON.stringify(current));
    return current;
  } catch (e) {
    console.error('Failed to save formula note:', e);
    return {};
  }
}

/**
 * Formula Custom Herbs Storage (Manual User Composition)
 */
export function loadFormulaCustomHerbs(): Record<string, string[]> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.FORMULA_CUSTOM_HERBS);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load formula custom herbs:', e);
    return {};
  }
}

export function saveFormulaCustomHerbs(formulaId: string, herbs: string[]): Record<string, string[]> {
  try {
    const current = loadFormulaCustomHerbs();
    const cleaned = herbs.map((h) => h.trim()).filter(Boolean);
    if (cleaned.length === 0) {
      delete current[formulaId];
    } else {
      current[formulaId] = cleaned;
    }
    localStorage.setItem(STORAGE_KEYS.FORMULA_CUSTOM_HERBS, JSON.stringify(current));
    return current;
  } catch (e) {
    console.error('Failed to save formula custom herbs:', e);
    return {};
  }
}

export function loadHerbNotes(): Record<string, string> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.HERB_NOTES);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load herb notes:', e);
    return {};
  }
}

export function saveHerbNote(herbId: string, note: string): Record<string, string> {
  try {
    const current = loadHerbNotes();
    if (!note.trim()) {
      delete current[herbId];
    } else {
      current[herbId] = note.trim();
    }
    localStorage.setItem(STORAGE_KEYS.HERB_NOTES, JSON.stringify(current));
    return current;
  } catch (e) {
    console.error('Failed to save herb note:', e);
    return {};
  }
}

export function loadAcupointNotes(): Record<string, string> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ACUPOINT_NOTES);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load acupoint notes:', e);
    return {};
  }
}

export function saveAcupointNote(acupointId: string, note: string): Record<string, string> {
  try {
    const current = loadAcupointNotes();
    if (!note.trim()) {
      delete current[acupointId];
    } else {
      current[acupointId] = note.trim();
    }
    localStorage.setItem(STORAGE_KEYS.ACUPOINT_NOTES, JSON.stringify(current));
    return current;
  } catch (e) {
    console.error('Failed to save acupoint note:', e);
    return {};
  }
}

export function loadAllNotesForModule(moduleId: TCMModuleId = 'herbs'): Record<string, string> {
  if (moduleId === 'formulas') return loadFormulaNotes();
  if (moduleId === 'acupoints') return loadAcupointNotes();
  return loadHerbNotes();
}

export function saveNoteForModule(id: string, note: string, moduleId: TCMModuleId = 'herbs'): Record<string, string> {
  if (moduleId === 'formulas') return saveFormulaNote(id, note);
  if (moduleId === 'acupoints') return saveAcupointNote(id, note);
  return saveHerbNote(id, note);
}



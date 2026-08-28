export type TCMModuleId = 'herbs' | 'formulas' | 'acupoints' | 'classics';

export interface TCMModuleInfo {
  id: TCMModuleId;
  title: string;
  subtitle: string;
  iconName: string;
  badge?: string;
  status: 'active' | 'preview';
  description: string;
  itemsCountStr?: string;
}

export interface HerbItem {
  id: string;
  name: string;
  pinyin: string;
  category: string;
  subCategory: string;
  natureFlavor: string; // 性味
  channelTropism: string; // 归经
  efficacy: string; // 功效
  indications: string[]; // 主治
  mnemonic: string; // 记忆口诀
  dosageAndUsage: string; // 用法用量
  contraindications?: string; // 使用注意/禁忌
  keyDifferentiator?: string; // 辨析要点/特色
  imageUrl?: string; // 权威中药配图
}

export interface FormulaItem {
  id: string;
  name: string;
  pinyin?: string;
  code?: string;
  category: string; // 方剂分类 (解表剂、泻下剂等)
  subCategory: string; // 亚类 (辛温解表、寒下等)
  source?: string; // 出处 (《伤寒论》、《金匮要略》等)
  efficacy: string; // 功用
  indications: string[]; // 主治
  mnemonicHtml: string; // 包含<u>组成药味</u>的高亮方歌
  mnemonic: string; // 纯文本方歌
  composition: string[]; // 组成药味
}

export interface AcupointItem {
  id: string;
  name: string;
  pinyin?: string;
  code?: string;
  category: string; // 经络名称 (如：手太阴肺经、手阳明大肠经、任脉、督脉、经外奇穴)
  subCategory: string; // 部位或属性 (如：上肢部、胸腹部、头面颈项、下肢部、背腰部)
  locationHtml: string; // 穴位定位与简便取穴法 (含HTML强调高亮)
  locationText: string; // 纯文本穴位定位
  mnemonic?: string; // 速记提示或歌诀
  indications?: string[]; // 主治要点
  specialProperties?: string; // 特定穴属性（如 五输穴、原穴、络穴、郄穴、募穴、背俞穴等）
}

export type AnyStudyCard = (HerbItem | FormulaItem | AcupointItem) & {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  mnemonic?: string;
  indications?: string[];
  efficacy?: string;
  locationHtml?: string;
  locationText?: string;
};

export type SRSFeedback = 'again' | 'hard' | 'good' | 'easy';

export interface ExpReward {
  id: string;
  targetXp: number;
  rewardText: string;
  isClaimed: boolean;
  claimedAt?: string;
  createdAt: string;
}

export interface CardProgress {
  herbId: string;
  status: 'new' | 'learning' | 'reviewing' | 'mastered';
  level: number; // 0 (1d), 1 (2d), 2 (4d), 3 (7d), 4 (15d), 5 (30d), 6 (60d+)
  interval: number; // in days
  easeFactor: number; // default 2.5
  repetitions: number;
  lapses: number; // times forgotten
  lastReviewedAt?: string; // YYYY-MM-DD
  nextReviewAt: string; // YYYY-MM-DD
  firstLearnedAt?: string; // YYYY-MM-DD
}

export type GoalMode = 'time' | 'count';

export interface DailyGoalSettings {
  mode: GoalMode;
  targetMinutes: number; // e.g. 15
  targetCount: number; // e.g. 20 (new cards per day)
}

export interface DailyRecord {
  date: string; // YYYY-MM-DD
  completed: boolean;
  minutesSpent: number;
  newCardsCount: number;
  reviewCardsCount: number;
  totalCardsReviewed: number;
}

export interface UserStats {
  currentStreak: number;
  longestStreak: number;
  lastCheckInDate: string; // YYYY-MM-DD
  checkInDates: string[]; // list of YYYY-MM-DD
  totalMinutesStudied: number;
  totalCardsLearned: number;
  totalReviewsDone: number;
  xp: number;
}

export interface FormulaNote {
  formulaId: string;
  note: string;
  updatedAt: string;
}

export interface FormulaCustomHerbs {
  formulaId: string;
  herbs: string[];
  updatedAt: string;
}

export interface StudySessionState {
  isActive: boolean;
  cardsQueue: Array<{
    herbId: string;
    isNew: boolean;
  }>;
  currentIndex: number;
  isFlipped: boolean;
  sessionStartTime: number;
  elapsedSeconds: number;
  reviewedInSessionCount: number;
  newLearnedInSessionCount: number;
  completedThisSession: boolean;
}

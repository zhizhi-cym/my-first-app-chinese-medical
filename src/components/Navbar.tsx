import React from 'react';
import { BookOpen, Sparkles, Volume2, VolumeX, Settings, Search, Calendar, Headphones } from 'lucide-react';
import { StreakFlame } from './StreakFlame';
import { TCMModuleId, UserStats } from '../types';
import { sound } from '../utils/sound';

interface NavbarProps {
  activeTab: 'dashboard' | 'library' | 'walkman' | 'calendar' | 'settings';
  setActiveTab: (tab: 'dashboard' | 'library' | 'walkman' | 'calendar' | 'settings') => void;
  stats: UserStats;
  currentModuleId: TCMModuleId;
  isCheckedInToday: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenSettings: () => void;
  onSelectModule?: (moduleId: TCMModuleId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  stats,
  currentModuleId,
  isCheckedInToday,
  soundEnabled,
  onToggleSound,
  onOpenSettings,
  onSelectModule,
}) => {
  const getModuleName = (id: TCMModuleId) => {
    switch (id) {
      case 'herbs':
        return '中药学';
      case 'formulas':
        return '方剂学';
      case 'acupoints':
        return '腧穴学';
      case 'classics':
        return '中医经典';
      default:
        return '中药学';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-stone-800 border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div
          onClick={() => setActiveTab('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
          title="点击返回今日背诵主页"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-500/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <span className="text-xl font-serif text-white font-bold">岐</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-bold text-base sm:text-lg text-stone-900 tracking-wide">
                中医背诵打卡
              </h1>
              
              {/* Quick Module Switcher pills */}
              <div className="flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-200 text-[11px] font-serif">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectModule) onSelectModule('herbs');
                  }}
                  className={`px-2 py-0.5 rounded transition-all ${
                    currentModuleId === 'herbs'
                      ? 'bg-emerald-600 text-white font-bold shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                  title="切换到中药学背诵"
                >
                  🌿 中药
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectModule) onSelectModule('formulas');
                  }}
                  className={`px-2 py-0.5 rounded transition-all ${
                    currentModuleId === 'formulas'
                      ? 'bg-amber-600 text-white font-bold shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                  title="切换到方剂学背诵"
                >
                  🍵 方剂
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectModule) onSelectModule('acupoints');
                  }}
                  className={`px-2 py-0.5 rounded transition-all ${
                    currentModuleId === 'acupoints'
                      ? 'bg-teal-600 text-white font-bold shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                  title="切换到针灸腧穴背诵"
                >
                  📍 针灸
                </button>
              </div>
            </div>
            <p className="text-[10px] text-stone-400 font-sans hidden md:block">
              艾宾浩斯记忆曲线 · 每日打卡
            </p>
          </div>
        </div>

        {/* Center Nav tabs: 今日任务 | 数据库/搜索 | 随身听 | 打卡日历 */}
        <nav className="hidden sm:flex items-center gap-1 bg-stone-100/90 p-1 rounded-xl border border-stone-200">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'dashboard'
                ? 'bg-emerald-600 text-white shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white'
            }`}
          >
            <BookOpen size={15} />
            <span>今日任务</span>
          </button>

          <button
            onClick={() => setActiveTab('library')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'library'
                ? 'bg-emerald-600 text-white shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white'
            }`}
          >
            <Search size={15} />
            <span>
              {currentModuleId === 'formulas'
                ? '方剂检索'
                : currentModuleId === 'acupoints'
                ? '穴位检索'
                : '本草检索'}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('walkman')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'walkman'
                ? 'bg-amber-600 text-white shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white'
            }`}
          >
            <Headphones size={15} className={activeTab === 'walkman' ? 'text-white' : 'text-amber-600'} />
            <span>随身听</span>
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'calendar'
                ? 'bg-emerald-600 text-white shadow-sm font-bold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white'
            }`}
          >
            <Calendar size={15} />
            <span>打卡日历</span>
          </button>
        </nav>

        {/* Right tools: Flame Streak, XP, Sound, Settings */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Flame streak */}
          <StreakFlame
            streak={stats.currentStreak}
            isCheckedInToday={isCheckedInToday}
            size="sm"
          />

          {/* XP Pill */}
          <div
            className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold"
            title={`总经验值: ${stats.xp} EXP`}
          >
            <Sparkles size={14} className="text-amber-600" />
            <span>{stats.xp} EXP</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              if (!soundEnabled) {
                sound.playFeedbackSound('good');
              }
            }}
            className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
            title={soundEnabled ? '音效已开启 (点击静音)' : '音效已关闭 (点击开启)'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} className="text-stone-400" />}
          </button>

          {/* Settings Button */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors relative"
            title="个性化设置与每日目标"
            aria-label="Settings"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="sm:hidden grid grid-cols-4 border-t border-stone-200 bg-white text-xs text-center font-medium shadow-sm">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`py-2 flex flex-col items-center gap-0.5 ${
            activeTab === 'dashboard' ? 'text-emerald-600 font-bold' : 'text-stone-500'
          }`}
        >
          <BookOpen size={16} />
          <span className="text-[11px]">任务</span>
        </button>
        <button
          onClick={() => setActiveTab('library')}
          className={`py-2 flex flex-col items-center gap-0.5 ${
            activeTab === 'library' ? 'text-emerald-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Search size={16} />
          <span className="text-[11px]">搜索</span>
        </button>
        <button
          onClick={() => setActiveTab('walkman')}
          className={`py-2 flex flex-col items-center gap-0.5 ${
            activeTab === 'walkman' ? 'text-amber-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Headphones size={16} className={activeTab === 'walkman' ? 'text-amber-600' : 'text-stone-500'} />
          <span className="text-[11px]">随身听</span>
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`py-2 flex flex-col items-center gap-0.5 ${
            activeTab === 'calendar' ? 'text-emerald-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Calendar size={16} />
          <span className="text-[11px]">日历</span>
        </button>
      </div>
    </header>
  );
};


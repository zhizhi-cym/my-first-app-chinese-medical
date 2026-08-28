import React, { useState } from 'react';
import {
  Leaf,
  FlaskConical,
  Activity,
  BookOpen,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Flame,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { TCM_MODULES } from '../data/modules';
import { TCMModuleId, UserStats } from '../types';

interface ModulePortalProps {
  currentModuleId: TCMModuleId;
  onSelectModule: (moduleId: TCMModuleId) => void;
  userStats: UserStats;
  totalHerbsCount: number;
  masteredCount: number;
  isCheckedInToday: boolean;
  streakCount: number;
}

export const ModulePortal: React.FC<ModulePortalProps> = ({
  currentModuleId,
  onSelectModule,
  userStats,
  totalHerbsCount,
  masteredCount,
  isCheckedInToday,
  streakCount,
}) => {
  const [previewModule, setPreviewModule] = useState<TCMModuleId | null>(null);

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-8 h-8 text-emerald-400" />;
      case 'FlaskConical':
        return <FlaskConical className="w-8 h-8 text-amber-400" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-teal-400" />;
      case 'BookOpen':
        return <BookOpen className="w-8 h-8 text-rose-400" />;
      default:
        return <Layers className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10 space-y-8 animate-fadeIn">
      {/* Portal Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-serif tracking-widest shadow-sm">
          <Sparkles size={14} className="text-amber-400" />
          <span>岐黄医道 · 艾宾浩斯智能背诵系统</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-100 tracking-wide drop-shadow-md">
          中医经典背诵总枢纽
        </h1>
        <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto font-serif leading-relaxed">
          聚合中药学、方剂学、腧穴经络与四大经典条文。选定背诵端口，每日科学复习，筑牢岐黄根基。
        </p>
      </div>

      {/* Top Quick Status Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-900/80 border border-stone-800 p-4 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-950/40 border border-orange-700/40 text-orange-400">
            <Flame size={20} />
          </div>
          <div>
            <div className="text-xs text-stone-400">连续打卡</div>
            <div className="text-lg font-bold text-orange-300 font-mono">
              {streakCount} 天
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-700/40 text-emerald-400">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <div className="text-xs text-stone-400">今日状态</div>
            <div className="text-sm font-bold text-emerald-300">
              {isCheckedInToday ? '✅ 今日已达标' : '⏳ 待完成打卡'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-950/40 border border-teal-700/40 text-teal-400">
            <GraduationCap size={20} />
          </div>
          <div>
            <div className="text-xs text-stone-400">已熟记中药</div>
            <div className="text-lg font-bold text-teal-300 font-mono">
              {masteredCount} / {totalHerbsCount}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-700/40 text-amber-400">
            <Calendar size={20} />
          </div>
          <div>
            <div className="text-xs text-stone-400">总累计打卡</div>
            <div className="text-lg font-bold text-amber-300 font-mono">
              {userStats.totalDaysCheckedIn} 天
            </div>
          </div>
        </div>
      </div>

      {/* Module Portals Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-stone-200 flex items-center gap-2">
            <Layers className="text-emerald-400" size={20} />
            <span>背诵学科端口 (点击进入或预备)</span>
          </h2>
          <span className="text-xs text-stone-400 font-mono">
            已开放: 3 个 (中药/方剂/腧穴) · 预备扩展: 1 个 (中医经典)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {TCM_MODULES.map((mod) => {
            const isActive = mod.status === 'active';
            return (
              <div
                key={mod.id}
                onClick={() => {
                  if (isActive) {
                    onSelectModule(mod.id);
                  } else {
                    setPreviewModule(mod.id);
                  }
                }}
                className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer border text-left flex flex-col justify-between group overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950/40 border-emerald-600/60 shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:border-emerald-400 hover:scale-[1.01]'
                    : 'bg-stone-900/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900/90'
                }`}
              >
                {/* Background watermarked emblem */}
                <div className="absolute right-3 -bottom-4 opacity-5 pointer-events-none select-none text-8xl font-serif">
                  {mod.title.slice(0, 1)}
                </div>

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-stone-800/80 border border-stone-700/60 group-hover:scale-105 transition-transform">
                      {getModuleIcon(mod.iconName)}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold font-serif tracking-wider flex items-center gap-1 ${
                        isActive
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                          : 'bg-stone-800 text-stone-400 border border-stone-700'
                      }`}
                    >
                      {isActive ? '✨ 当前开放背诵' : '📖 预备扩展'}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-serif font-extrabold text-stone-100 group-hover:text-amber-200 transition-colors">
                        {mod.title}
                      </h3>
                      <span className="text-xs text-amber-400 font-serif font-medium">
                        [{mod.subtitle}]
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed font-sans">
                      {mod.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Footer Info */}
                <div className="mt-5 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-stone-400">
                    {mod.itemsCountStr}
                  </span>

                  <div
                    className={`flex items-center gap-1.5 text-xs font-bold font-serif px-3 py-1.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-emerald-600 group-hover:bg-emerald-500 text-white shadow-md'
                        : 'bg-stone-800 text-stone-300 group-hover:bg-stone-700'
                    }`}
                  >
                    <span>{isActive ? '进入背诵' : '查看规划'}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preview Modal for Future Extensions */}
      {previewModule && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl text-stone-100 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📜</span>
                <h3 className="text-xl font-serif font-bold text-amber-200">
                  {TCM_MODULES.find((m) => m.id === previewModule)?.title} 端口规划
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewModule(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-stone-300 font-serif leading-relaxed">
              <p className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700">
                本程序已架构好通用的艾宾浩斯智能背诵引擎。此模块（
                <span className="text-amber-300 font-bold">
                  {TCM_MODULES.find((m) => m.id === previewModule)?.title}
                </span>
                ）端口已预留就绪。
              </p>

              <div className="space-y-2 text-xs font-sans">
                <div className="font-bold text-emerald-400 font-serif text-sm">
                  📚 包含预备内容：
                </div>
                {previewModule === 'formulas' && (
                  <ul className="list-disc list-inside space-y-1 text-stone-400">
                    <li>《汤头歌诀》全部经典方剂歌诀与组方结构</li>
                    <li>解表剂、泻下剂、清热剂、补益剂等各科经典名方</li>
                    <li>君臣佐使配伍禁忌与用法加减辨析</li>
                  </ul>
                )}
                {previewModule === 'acupoints' && (
                  <ul className="list-disc list-inside space-y-1 text-stone-400">
                    <li>十四经脉循行路线与 361 个标准经穴定位</li>
                    <li>十四经穴分经主治歌诀与特定穴速记（五输穴、原络郄募）</li>
                    <li>针灸配穴歌赋（四总穴歌、马丹阳十二穴等）</li>
                  </ul>
                )}
                {previewModule === 'classics' && (
                  <ul className="list-disc list-inside space-y-1 text-stone-400">
                    <li>《伤寒论》六经辨证核心必背条文</li>
                    <li>《金匮要略》脏腑经络杂病核心篇目条文</li>
                    <li>《黄帝内经·素问·灵枢》养生与脏象精粹</li>
                  </ul>
                )}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setPreviewModule(null);
                  onSelectModule('herbs');
                }}
                className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-serif font-bold text-sm transition-colors shadow-lg"
              >
                前往背诵当前中药学 (150+味药材)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

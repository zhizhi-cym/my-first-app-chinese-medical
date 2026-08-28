import React, { useState } from 'react';
import { X, Clock, Layers, CheckCircle2, RotateCcw, AlertTriangle, BookMarked, Sparkles } from 'lucide-react';
import { DailyGoalSettings, GoalMode, TCMModuleId } from '../types';
import { sound } from '../utils/sound';

interface GoalSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  goalSettings: DailyGoalSettings;
  onSaveGoal: (newSettings: DailyGoalSettings) => void;
  onResetAllData: () => void;
  currentModuleId?: TCMModuleId;
  onSelectModule?: (moduleId: TCMModuleId) => void;
}

const MODULES_INFO: Array<{
  id: TCMModuleId;
  title: string;
  badge: string;
  desc: string;
  isAvailable: boolean;
  tag: string;
}> = [
  {
    id: 'herbs',
    title: '中药学端口',
    badge: '🌿 本草背诵',
    desc: '350+味药典中药 · 最新性味归经 · 权威药材配图 · 功效智能默写',
    isAvailable: true,
    tag: '已就绪',
  },
  {
    id: 'formulas',
    title: '方剂学端口',
    badge: '🍵 名方配伍',
    desc: '271首历代名方 · 20大类 · 趣味方歌歌诀 · 组成药味与主治证候',
    isAvailable: true,
    tag: '已开放',
  },
  {
    id: 'acupoints',
    title: '针灸穴位端口',
    badge: '📍 针灸经穴',
    desc: '十四经穴361穴 · 常用经外奇穴 · 特定穴定位与临床主治要点',
    isAvailable: true,
    tag: '已开放',
  },
  {
    id: 'classics',
    title: '中医经典端口',
    badge: '📜 典籍原文',
    desc: '黄帝内经 · 伤寒论 · 金匮要略条文背诵',
    isAvailable: false,
    tag: '规划中',
  },
];

export const GoalSettingsModal: React.FC<GoalSettingsModalProps> = ({
  isOpen,
  onClose,
  goalSettings,
  onSaveGoal,
  onResetAllData,
  currentModuleId = 'herbs',
  onSelectModule,
}) => {
  const [selectedModule, setSelectedModule] = useState<TCMModuleId>(currentModuleId);
  const [mode, setMode] = useState<GoalMode>(goalSettings.mode);
  const [targetMinutes, setTargetMinutes] = useState<number>(goalSettings.targetMinutes);
  const [targetCount, setTargetCount] = useState<number>(goalSettings.targetCount);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    if (onSelectModule && selectedModule !== currentModuleId) {
      onSelectModule(selectedModule);
    }
    onSaveGoal({
      mode,
      targetMinutes,
      targetCount,
    });
    sound.playFeedbackSound('good');
    onClose();
  };

  const presetMinutes = [5, 10, 15, 20, 30];
  const presetCounts = [5, 10, 15, 20, 30];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-stone-200 text-stone-900 rounded-3xl w-full max-w-xl overflow-hidden shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <h2 className="text-lg font-serif font-bold text-stone-900">
              设置与背诵目标
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Section 1: Subject / Module Selection */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
              <BookMarked size={16} className="text-amber-600" />
              <span>背诵学科端口选择：</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MODULES_INFO.map((mod) => {
                const isCurrent = selectedModule === mod.id;
                return (
                  <div
                    key={mod.id}
                    onClick={() => {
                      if (mod.isAvailable) {
                        setSelectedModule(mod.id);
                        if (onSelectModule) onSelectModule(mod.id);
                      }
                    }}
                    className={`p-3 rounded-2xl border transition-all ${
                      isCurrent
                        ? 'border-emerald-500 bg-emerald-50/90 ring-2 ring-emerald-400/50 cursor-pointer shadow-sm'
                        : mod.isAvailable
                        ? 'border-stone-200 bg-stone-50/60 hover:border-emerald-300 hover:bg-white cursor-pointer'
                        : 'border-stone-200/60 bg-stone-100/40 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm text-stone-900 flex items-center gap-1.5">
                        <span>{mod.badge}</span>
                        <span>{mod.title}</span>
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-sans font-bold ${
                          mod.isAvailable
                            ? isCurrent
                              ? 'bg-emerald-600 text-white'
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-stone-200 text-stone-500'
                        }`}
                      >
                        {isCurrent ? '当前使用' : mod.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 leading-tight">
                      {mod.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Daily Goal Mode Selection */}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            <label className="text-sm font-semibold text-stone-800 block">
              每日达标打卡模式（二选一）：
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Mode A: Time */}
              <div
                onClick={() => setMode('time')}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  mode === 'time'
                    ? 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-400/40 shadow-sm'
                    : 'border-stone-200 bg-stone-50/60 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Clock size={18} />
                    <span>模式 A：按时间</span>
                  </div>
                  {mode === 'time' && (
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  )}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  每日累计专注背诵达到设定分钟数，即自动完成打卡。
                </p>
              </div>

              {/* Mode B: Count */}
              <div
                onClick={() => setMode('count')}
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  mode === 'count'
                    ? 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-400/40 shadow-sm'
                    : 'border-stone-200 bg-stone-50/60 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Layers size={18} />
                    <span>模式 B：按数量</span>
                  </div>
                  {mode === 'count' && (
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  )}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  学完定量的新卡片 + 对应艾宾浩斯复习卡片，刷完即打卡。
                </p>
              </div>
            </div>
          </div>

          {/* Setting options based on selected mode */}
          {mode === 'time' ? (
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-800">
                  每日背诵时长目标：
                </span>
                <span className="text-lg font-bold text-emerald-700 font-mono">
                  {targetMinutes} 分钟/天
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {presetMinutes.map((mins) => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setTargetMinutes(mins)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      targetMinutes === mins
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {mins} 分钟
                  </button>
                ))}
              </div>

              <input
                type="range"
                min={3}
                max={60}
                step={1}
                value={targetMinutes}
                onChange={(e) => setTargetMinutes(Number(e.target.value))}
                className="w-full accent-emerald-600 bg-stone-200 h-2 rounded-lg cursor-pointer"
              />
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-stone-800">
                  每日新学卡片数量：
                </span>
                <span className="text-lg font-bold text-emerald-700 font-mono">
                  {targetCount} 张/天
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {presetCounts.map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setTargetCount(cnt)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      targetCount === cnt
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {cnt} 张卡片
                  </button>
                ))}
              </div>

              <input
                type="range"
                min={3}
                max={40}
                step={1}
                value={targetCount}
                onChange={(e) => setTargetCount(Number(e.target.value))}
                className="w-full accent-emerald-600 bg-stone-200 h-2 rounded-lg cursor-pointer"
              />
            </div>
          )}

          {/* Reset learning records area */}
          <div className="pt-4 border-t border-stone-200">
            {!showConfirmReset ? (
              <button
                type="button"
                onClick={() => setShowConfirmReset(true)}
                className="flex items-center gap-2 text-xs text-stone-500 hover:text-rose-600 transition-colors"
              >
                <RotateCcw size={14} />
                <span>重置所有背诵与打卡进度（测试重来）</span>
              </button>
            ) : (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-rose-800 text-xs font-bold">
                  <AlertTriangle size={16} />
                  <span>确定要清空所有背诵记忆和连续打卡记录吗？</span>
                </div>
                <p className="text-[11px] text-rose-700">
                  此操作将清除所有卡片的艾宾浩斯复习进度和打卡天数记录。
                </p>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      onResetAllData();
                      setShowConfirmReset(false);
                      onClose();
                    }}
                    className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                  >
                    确认清空
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowConfirmReset(false)}
                    className="px-3 py-1 bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 text-xs rounded-lg transition-colors"
                  >
                    取消
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-stone-200 bg-stone-50/80">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          >
            取消
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            保存设置
          </button>
        </div>
      </div>
    </div>
  );
};


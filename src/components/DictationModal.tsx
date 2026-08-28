import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Check,
  Send,
  HelpCircle,
  Volume2,
  Award,
  BookOpen,
  Scroll,
  Tag,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnyStudyCard, FormulaItem, HerbItem, SRSFeedback } from '../types';
import { sound } from '../utils/sound';

interface DictationModalProps {
  herb: AnyStudyCard;
  isOpen: boolean;
  onClose: () => void;
  onSubmitFeedback: (feedback: SRSFeedback) => void;
}

interface MatchResult {
  score: number; // 0 to 100
  matchedKeywords: string[];
  missedKeywords: string[];
  userText: string;
  recommendedFeedback: SRSFeedback;
}

// Common TCM keyword extractor
function extractKeywords(text: string): string[] {
  if (!text) return [];
  const clean = text.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
  const segments = clean
    .split(/[,，;；、。\n\t\s+（）()\/·《》]/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 2 && !/^(以及|或者|主要|用于|具有|能够|和|且|方歌|歌诀|主治)$/.test(s));

  return Array.from(new Set(segments));
}

// Compare user input against target text keywords
function analyzeDictation(userText: string, targetKeywords: string[]): MatchResult {
  const cleanInput = userText.trim().replace(/[\s,，;；、。\n\t]/g, '');

  if (targetKeywords.length === 0 || !cleanInput) {
    return {
      score: 0,
      matchedKeywords: [],
      missedKeywords: targetKeywords,
      userText,
      recommendedFeedback: 'again',
    };
  }

  const matched: string[] = [];
  const missed: string[] = [];

  targetKeywords.forEach((kw) => {
    const kwClean = kw.replace(/[\s,，;；、。]/g, '');
    if (cleanInput.includes(kwClean)) {
      matched.push(kw);
    } else if (kwClean.length >= 4) {
      const p1 = kwClean.slice(0, 2);
      const p2 = kwClean.slice(2, 4);
      if (cleanInput.includes(p1) && cleanInput.includes(p2)) {
        matched.push(kw);
      } else if (cleanInput.includes(p1) || cleanInput.includes(p2)) {
        matched.push(kw);
      } else {
        missed.push(kw);
      }
    } else {
      missed.push(kw);
    }
  });

  const total = Math.max(1, targetKeywords.length);
  const score = Math.min(100, Math.round((matched.length / total) * 100));

  let recommended: SRSFeedback = 'again';
  if (score >= 85) recommended = 'easy';
  else if (score >= 60) recommended = 'good';
  else if (score >= 35) recommended = 'hard';
  else recommended = 'again';

  return {
    score,
    matchedKeywords: matched,
    missedKeywords: missed,
    userText,
    recommendedFeedback: recommended,
  };
}

export const DictationModal: React.FC<DictationModalProps> = ({
  herb,
  isOpen,
  onClose,
  onSubmitFeedback,
}) => {
  const [userInput, setUserInput] = useState('');
  const [isCompared, setIsCompared] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isFormula = 'mnemonicHtml' in herb || ('composition' in herb && !('locationHtml' in herb));
  const isAcupoint = 'locationHtml' in herb || 'locationText' in herb;
  const isHerb = !isFormula && !isAcupoint;

  const formula = isFormula ? (herb as FormulaItem) : null;
  const herbItem = isHerb ? (herb as HerbItem) : null;

  // Extract key targets: For Formula -> Mnemonic + Indications; For Herb -> Efficacy; For Acupoint -> Location
  const targetKeywords = useMemo(() => {
    if (isFormula && formula) {
      const mnemonicKw = extractKeywords(formula.mnemonic || '');
      const indStr = Array.isArray(formula.indications)
        ? formula.indications.join('；')
        : (formula.indications || formula.efficacy || '');
      const indicationsKw = extractKeywords(indStr);
      return Array.from(new Set([...mnemonicKw, ...indicationsKw]));
    }
    if (isAcupoint) {
      const locKw = extractKeywords((herb as any).locationText || '');
      const mnemKw = extractKeywords((herb as any).mnemonic || '');
      return Array.from(new Set([...locKw, ...mnemKw]));
    }
    return extractKeywords(herb.efficacy || '');
  }, [herb, formula, isFormula, isAcupoint]);

  // Reset state when herb changes or opened
  useEffect(() => {
    if (isOpen) {
      setUserInput('');
      setIsCompared(false);
      setResult(null);
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  }, [isOpen, herb.id]);

  const handleCompare = () => {
    if (!userInput.trim()) {
      const res = analyzeDictation('', targetKeywords);
      setResult(res);
      setIsCompared(true);
      sound.playFeedbackSound('again');
      return;
    }

    const res = analyzeDictation(userInput, targetKeywords);
    setResult(res);
    setIsCompared(true);

    if (res.score >= 80) {
      sound.playFeedbackSound('easy');
    } else if (res.score >= 50) {
      sound.playFeedbackSound('good');
    } else {
      sound.playFeedbackSound('hard');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (!isCompared) {
        handleCompare();
      }
    }
  };

  const handleFeedbackClick = (fb: SRSFeedback) => {
    sound.playFeedbackSound(fb);
    onSubmitFeedback(fb);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-stone-900"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-stone-50/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
                  <span>默写自测 · {herb.name}</span>
                  {herb.pinyin && (
                    <span className="text-xs font-mono text-emerald-700 font-normal">
                      [{herb.pinyin}]
                    </span>
                  )}
                </h3>
                <span className="text-xs text-stone-500 font-sans">
                  {herb.category} · {herb.subCategory}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 overflow-y-auto space-y-4 flex-1">
            {/* Prompt Banner */}
            <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 block mb-0.5">
                  {isFormula ? '默写方剂：' : '默写药材：'}
                </span>
                <span className="text-2xl font-serif font-extrabold text-stone-900 tracking-wide">
                  {herb.name}
                </span>
                <span className="ml-2 text-xs text-stone-600 font-serif">
                  {isFormula && formula?.source ? `《${formula.source}》` : ''}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (isFormula && formula) {
                    sound.speakFormula(formula.name, formula.mnemonic);
                  } else {
                    sound.speakHerbName(herb.name);
                  }
                }}
                className="p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 transition-colors shadow-xs"
                title="读音播报"
              >
                <Volume2 size={18} />
              </button>
            </div>

            {!isCompared ? (
              /* Step 1: Input Area */
              <div className="space-y-3">
                <div className="relative">
                  <textarea
                    ref={textareaRef}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={4}
                    placeholder={
                      isFormula
                        ? '请输入该方剂的【歌诀】与【主治】...'
                        : '请输入该药的核心功效（如：发汗解表、宣肺平喘、利水消肿...）...'
                    }
                    className="w-full p-4 rounded-2xl bg-white border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-stone-900 placeholder-stone-400 text-sm sm:text-base font-serif leading-relaxed outline-none resize-none transition-all shadow-xs"
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-stone-400 font-mono pointer-events-none">
                    支持 Ctrl+Enter 快速比对
                  </div>
                </div>

                {/* Quick Hint / Prompts */}
                <div className="flex items-center justify-between text-xs text-stone-500 px-1">
                  <span>
                    💡 提示：
                    {isFormula
                      ? '写出歌诀或主治要点，系统将进行比对'
                      : '写出核心功效关键词即可精准匹配'}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setUserInput('想不起来了，查看标准答案');
                      handleCompare();
                    }}
                    className="text-amber-700 hover:text-amber-800 underline font-medium"
                  >
                    直接查看答案
                  </button>
                </div>
              </div>
            ) : (
              /* Step 2: Answer Comparison & Scoring View */
              <div className="space-y-4 animate-fade-in">
                {/* Score & Verdict Banner */}
                {result && (
                  <div
                    className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${
                      result.score >= 80
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : result.score >= 50
                        ? 'bg-amber-50 border-amber-200 text-amber-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-xs shrink-0">
                        {result.score >= 80 ? (
                          <Award size={28} className="text-emerald-600" />
                        ) : result.score >= 50 ? (
                          <CheckCircle2 size={28} className="text-amber-600" />
                        ) : (
                          <AlertCircle size={28} className="text-rose-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-serif font-bold text-base sm:text-lg">
                          {result.score >= 90
                            ? '🏆 满分默写！熟记如流'
                            : result.score >= 70
                            ? '✨ 核心要点已基本掌握！'
                            : result.score >= 40
                            ? '⚠️ 部分要点有遗漏，需加强巩固'
                            : '💡 建议温故知新，强化记忆'}
                        </div>
                        <div className="text-xs opacity-80 mt-0.5">
                          命中考点 {result.matchedKeywords.length} 个 / 遗漏{' '}
                          {result.missedKeywords.length} 个
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-3xl font-mono font-extrabold">
                        {result.score}
                      </span>
                      <span className="text-xs ml-0.5 opacity-80 font-mono">%</span>
                      <span className="block text-[10px] opacity-70">匹配准确率</span>
                    </div>
                  </div>
                )}

                {/* Keyword Analysis Tags */}
                {result && (
                  <div className="space-y-2.5">
                    {result.matchedKeywords.length > 0 && (
                      <div className="bg-emerald-50/80 border border-emerald-200 p-3 rounded-xl">
                        <span className="text-xs font-bold text-emerald-800 flex items-center gap-1 mb-1.5">
                          <Check size={14} />
                          <span>命中考点：</span>
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {result.matchedKeywords.map((kw, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-serif font-medium"
                            >
                              ✓ {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {result.missedKeywords.length > 0 && (
                      <div className="bg-rose-50/80 border border-rose-200 p-3 rounded-xl">
                        <span className="text-xs font-bold text-rose-800 flex items-center gap-1 mb-1.5">
                          <AlertCircle size={14} />
                          <span>遗漏要点：</span>
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {result.missedKeywords.map((kw, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-900 border border-rose-300 text-xs font-serif font-medium"
                            >
                              × {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Standard Comparison Card */}
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 space-y-3 text-left">
                  {isFormula && formula ? (
                    <>
                      {/* Formula Rhyme / 歌诀 */}
                      <div>
                        <span className="text-xs font-bold text-amber-800 block mb-1">
                          【歌诀】：
                        </span>
                        <div
                          className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-relaxed bg-white p-3 rounded-xl border border-stone-200 [&_u]:text-amber-800 [&_u]:underline"
                          dangerouslySetInnerHTML={{ __html: formula.mnemonicHtml || formula.mnemonic }}
                        />
                      </div>

                      {/* Formula Indications / 主治 */}
                      <div>
                        <span className="text-xs font-bold text-emerald-800 block mb-1">
                          【主治】：
                        </span>
                        <p className="text-sm font-serif font-medium text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200">
                          {Array.isArray(formula.indications)
                            ? formula.indications.join('；')
                            : (formula.indications || formula.efficacy || '')}
                        </p>
                      </div>
                    </>
                  ) : (
                    /* Herb Efficacy */
                    <div>
                      <span className="text-xs font-bold text-emerald-800 block mb-1">
                        【核心功效】：
                      </span>
                      <p className="text-base sm:text-lg font-serif font-extrabold text-stone-900 leading-relaxed bg-white p-2.5 rounded-xl border border-stone-200">
                        {herb.efficacy}
                      </p>
                    </div>
                  )}

                  {/* User Input Review */}
                  <div>
                    <span className="text-xs text-stone-500 block mb-1">
                      ✍️ 您的默写记录：
                    </span>
                    <p className="text-xs font-serif text-stone-700 bg-white p-2.5 rounded-lg border border-stone-200">
                      {userInput.trim() || '（未输入内容）'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 border-t border-stone-200 bg-stone-50/80">
            {!isCompared ? (
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 text-xs font-medium transition-colors"
                >
                  取消
                </button>

                <button
                  type="button"
                  onClick={handleCompare}
                  className="flex-1 py-3 px-6 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center justify-center gap-2 text-sm transition-all"
                >
                  <Send size={16} />
                  <span>提交并比对答案</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                <div className="text-center text-xs text-stone-500">
                  根据默写表现，直接选择本次记忆反馈（自动排程复习） ⬇️
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => handleFeedbackClick('again')}
                    className={`py-2.5 px-1 rounded-xl text-xs font-bold border transition-all ${
                      result?.recommendedFeedback === 'again'
                        ? 'bg-rose-600 text-white border-rose-600 ring-2 ring-rose-500/30 shadow-md'
                        : 'bg-rose-50 hover:bg-rose-100 text-rose-800 border-rose-200'
                    }`}
                  >
                    🔴 忘记
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFeedbackClick('hard')}
                    className={`py-2.5 px-1 rounded-xl text-xs font-bold border transition-all ${
                      result?.recommendedFeedback === 'hard'
                        ? 'bg-amber-600 text-white border-amber-600 ring-2 ring-amber-500/30 shadow-md'
                        : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200'
                    }`}
                  >
                    🟡 模糊
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFeedbackClick('good')}
                    className={`py-2.5 px-1 rounded-xl text-xs font-bold border transition-all ${
                      result?.recommendedFeedback === 'good'
                        ? 'bg-emerald-600 text-white border-emerald-600 ring-2 ring-emerald-500/30 shadow-md'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    🟢 认识
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFeedbackClick('easy')}
                    className={`py-2.5 px-1 rounded-xl text-xs font-bold border transition-all ${
                      result?.recommendedFeedback === 'easy'
                        ? 'bg-teal-600 text-white border-teal-600 ring-2 ring-teal-500/30 shadow-md'
                        : 'bg-teal-50 hover:bg-teal-100 text-teal-800 border-teal-200'
                    }`}
                  >
                    💎 精通
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

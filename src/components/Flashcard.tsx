import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  HelpCircle,
  Sparkles,
  BookCheck,
  ShieldAlert,
  Sparkle,
  PenTool,
  Image as ImageIcon,
  Scroll,
  Tag,
  FlaskConical,
  Edit3,
  Check,
  X,
  Plus,
  StickyNote,
  Trash2,
  Activity,
  MapPin,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AcupointItem, AnyStudyCard, CardProgress, FormulaItem, HerbItem, TCMModuleId } from '../types';
import { sound } from '../utils/sound';
import { HerbImage } from './HerbImage';
import {
  loadAllNotesForModule,
  saveNoteForModule,
  loadFormulaCustomHerbs,
  saveFormulaCustomHerbs,
} from '../utils/storage';

interface FlashcardProps {
  herb: AnyStudyCard;
  isFlipped: boolean;
  onFlip: () => void;
  progress?: CardProgress;
  isNew: boolean;
  onOpenDictation?: () => void;
}

export const Flashcard: React.FC<FlashcardProps> = ({
  herb,
  isFlipped,
  onFlip,
  progress,
  isNew,
  onOpenDictation,
}) => {
  const [showHint, setShowHint] = useState(false);
  const [showFrontImage, setShowFrontImage] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Card Type Identification
  const isFormula = 'composition' in herb || 'mnemonicHtml' in herb;
  const isAcupoint = 'locationHtml' in herb || 'locationText' in herb;
  const isHerb = !isFormula && !isAcupoint;

  const formula = isFormula ? (herb as FormulaItem) : null;
  const acupoint = isAcupoint ? (herb as AcupointItem) : null;
  const herbItem = isHerb ? (herb as HerbItem) : null;

  const currentModuleId: TCMModuleId = isFormula ? 'formulas' : isAcupoint ? 'acupoints' : 'herbs';

  // Card Note State (General for Herb, Formula, Acupoint)
  const [notesMap, setNotesMap] = useState<Record<string, string>>(() =>
    loadAllNotesForModule(currentModuleId)
  );
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteInput, setNoteInput] = useState('');

  // Formula Custom Herbs (药味) State (Formula specific)
  const [customHerbsMap, setCustomHerbsMap] = useState<Record<string, string[]>>(() =>
    loadFormulaCustomHerbs()
  );
  const [isEditingHerbs, setIsEditingHerbs] = useState(false);
  const [herbsInput, setHerbsInput] = useState('');

  // Sync notes and custom herbs on card change
  useEffect(() => {
    const loadedNotes = loadAllNotesForModule(currentModuleId);
    setNotesMap(loadedNotes);
    setNoteInput(loadedNotes[herb.id] || '');
    setIsEditingNote(false);

    if (formula) {
      const currentHerbs = customHerbsMap[formula.id] || [];
      setHerbsInput(Array.isArray(currentHerbs) ? currentHerbs.join(' ') : '');
      setIsEditingHerbs(false);
    }
  }, [herb.id, currentModuleId, formula]);

  // Audio Playback
  const handleSpeak = (e: React.MouseEvent, textToSpeak?: string) => {
    e.stopPropagation();
    if (isPlayingAudio) {
      sound.stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    if (formula && textToSpeak) {
      sound.speakFormula(formula.name, textToSpeak, () => {
        setIsPlayingAudio(false);
      });
    } else {
      sound.speakHerbName(textToSpeak || herb.name, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleToggleHint = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHint((prev) => !prev);
  };

  const handleToggleImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFrontImage((prev) => !prev);
  };

  const handleDictateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenDictation && !isAcupoint) {
      onOpenDictation();
    }
  };

  // Note save/cancel handlers
  const handleSaveNote = (e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = saveNoteForModule(herb.id, noteInput, currentModuleId);
    setNotesMap(updated);
    setIsEditingNote(false);
  };

  const handleDeleteNote = (e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = saveNoteForModule(herb.id, '', currentModuleId);
    setNotesMap(updated);
    setNoteInput('');
    setIsEditingNote(false);
  };

  // Herbs save/cancel handlers for Formulas
  const handleSaveHerbs = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!formula) return;
    const items = herbsInput
      .split(/[\s,，、+＋]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    const updated = saveFormulaCustomHerbs(formula.id, items);
    setCustomHerbsMap(updated);
    setIsEditingHerbs(false);
  };

  const currentCardNote = notesMap[herb.id] || '';
  const currentFormulaCustomHerbs = formula ? customHerbsMap[formula.id] || [] : [];

  return (
    <div
      onClick={onFlip}
      className="w-full max-w-xl mx-auto min-h-[440px] sm:min-h-[480px] cursor-pointer select-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="w-full h-full relative rounded-3xl min-h-[440px] sm:min-h-[480px]"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {/* ================= FRONT SIDE (Question) ================= */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
          className={`absolute inset-0 w-full h-full bg-white border-2 ${
            isNew
              ? 'border-amber-300 shadow-md'
              : 'border-emerald-300 shadow-md'
          } rounded-3xl p-5 sm:p-7 flex flex-col justify-between text-stone-900`}
        >
          {/* Top meta tags */}
          <div className="flex items-center justify-between">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 ${
                isNew
                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              }`}
            >
              {isNew ? (
                <>
                  <Sparkles size={13} />
                  <span>{isFormula ? '新学名方' : isAcupoint ? '新学腧穴' : '新学药材'}</span>
                </>
              ) : (
                <>
                  <BookCheck size={13} />
                  <span>艾宾浩斯复习 (第{progress?.level ? progress.level + 1 : 1}轮)</span>
                </>
              )}
            </span>

            {/* Quick Actions: Dictation (Disabled for Acupoints), Pronunciation, Image, Hint */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {onOpenDictation && !isAcupoint && (
                <button
                  type="button"
                  onClick={handleDictateClick}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold flex items-center gap-1 transition-all active:scale-95 shadow-xs"
                  title="默写并比对答案"
                >
                  <PenTool size={13} />
                  <span>默写自测</span>
                </button>
              )}

              <button
                type="button"
                onClick={(e) => handleSpeak(e, isFormula && formula ? formula.mnemonic : herb.name)}
                className={`p-2 rounded-xl text-xs flex items-center gap-1 transition-colors ${
                  isPlayingAudio
                    ? 'bg-amber-500 text-white font-bold animate-pulse'
                    : 'bg-stone-100 hover:bg-emerald-50 text-stone-700 hover:text-emerald-700 border border-stone-200'
                }`}
                title={isFormula ? '朗读歌诀' : '读音播报'}
                aria-label="Pronounce"
              >
                {isPlayingAudio ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span className="hidden sm:inline">{isFormula ? '歌诀' : '读音'}</span>
              </button>

              {isHerb && (
                <button
                  type="button"
                  onClick={handleToggleImage}
                  className={`p-2 rounded-xl text-xs flex items-center gap-1 transition-colors border ${
                    showFrontImage
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-600 border-stone-200'
                  }`}
                  title="查看药材配图"
                >
                  <ImageIcon size={15} />
                  <span className="hidden sm:inline">药图</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleToggleHint}
                className={`p-2 rounded-xl text-xs flex items-center gap-1 transition-colors border ${
                  showHint
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-600 border-stone-200'
                }`}
                title="分类与提示"
              >
                <HelpCircle size={15} />
                <span className="hidden sm:inline">提示</span>
              </button>
            </div>
          </div>

          {/* Center Main Name */}
          <div className="my-auto text-center py-4 flex flex-col items-center justify-center">
            {/* Optional Herb Image view on front */}
            {isHerb && showFrontImage && herbItem && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden mb-3 shadow-md border border-stone-200"
              >
                <HerbImage
                  name={herbItem.name}
                  category={herbItem.category}
                  imageUrl={herbItem.imageUrl}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Pinyin or Category Subtitle */}
            {herbItem?.pinyin && (
              <p className="text-emerald-700 font-mono tracking-widest text-base sm:text-lg mb-2">
                {herbItem.pinyin}
              </p>
            )}

            {acupoint?.pinyin && (
              <p className="text-teal-700 font-mono tracking-widest text-base sm:text-lg mb-2">
                {acupoint.pinyin} {acupoint.code ? `(${acupoint.code})` : ''}
              </p>
            )}

            {isFormula && (
              <p className="text-amber-700 font-serif text-sm sm:text-base mb-2">
                [{herb.category} · {herb.subCategory}]
              </p>
            )}

            {isAcupoint && (
              <p className="text-teal-700 font-serif text-sm sm:text-base mb-2">
                [{acupoint?.category} · {acupoint?.subCategory}]
              </p>
            )}

            {/* Large Calligraphic Name */}
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-stone-900 tracking-wider mb-3 drop-shadow-xs">
              {herb.name}
            </h2>

            {/* Subtle Hint Box if toggled */}
            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-3.5 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-700 text-xs font-serif max-w-md"
              >
                {isFormula ? (
                  <span>
                    🔍 主治：
                    {Array.isArray((herb as any).indications)
                      ? (herb as any).indications.join('；')
                      : ((herb as any).indications || (herb as any).efficacy || '')}
                  </span>
                ) : isAcupoint ? (
                  <span>
                    🔍 经络属性：{acupoint?.category} {acupoint?.specialProperties ? `· ${acupoint.specialProperties}` : ''}
                  </span>
                ) : (
                  <span>🔍 类别：{herb.category} · {herb.subCategory}</span>
                )}
              </motion.div>
            )}
          </div>

          {/* Bottom Flip Reminder */}
          <div className="text-center pt-2 border-t border-stone-200">
            <p className="text-xs text-stone-500 flex items-center justify-center gap-1.5">
              <span>点击卡片或按</span>
              <kbd className="px-2 py-0.5 rounded bg-stone-100 border border-stone-300 text-[11px] text-stone-700 font-mono font-bold">
                Space 空格键
              </kbd>
              <span>查看答案</span>
            </p>
          </div>
        </div>

        {/* ================= BACK SIDE (Answer) ================= */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 w-full h-full bg-white border-2 border-emerald-500 shadow-xl rounded-3xl p-4 sm:p-5 flex flex-col justify-between text-stone-900 overflow-y-auto"
        >
          {/* Header on back */}
          <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
            <div className="flex items-center gap-3">
              {isHerb && herbItem && (
                <div className="w-11 h-11 rounded-xl overflow-hidden shadow-inner border border-stone-200 shrink-0">
                  <HerbImage
                    name={herbItem.name}
                    category={herbItem.category}
                    imageUrl={herbItem.imageUrl}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {isFormula && (
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0 shadow-xs">
                  <FlaskConical size={20} />
                </div>
              )}

              {isAcupoint && (
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 shrink-0 shadow-xs">
                  <Activity size={20} />
                </div>
              )}

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                    {herb.name}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handleSpeak(e, isFormula && formula ? formula.mnemonic : herb.name)}
                    className="p-1 text-stone-400 hover:text-emerald-600"
                    title={isFormula ? '朗读歌诀' : '朗读'}
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
                <span className="text-[11px] text-stone-500 font-mono block">
                  {herbItem?.pinyin
                    ? `[${herbItem.pinyin}]`
                    : acupoint?.pinyin
                    ? `[${acupoint.pinyin} ${acupoint.code || ''}]`
                    : `[${herb.category} · ${herb.subCategory || ''}]`}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {onOpenDictation && !isAcupoint && (
                <button
                  type="button"
                  onClick={handleDictateClick}
                  className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold flex items-center gap-1 transition-all active:scale-95 shadow-xs"
                >
                  <PenTool size={12} />
                  <span>默写比对</span>
                </button>
              )}
              {/* Category Pill */}
              <span
                className={`px-2.5 py-1 rounded-lg text-xs font-bold font-serif ${
                  isFormula
                    ? 'bg-amber-50 text-amber-800 border border-amber-200'
                    : isAcupoint
                    ? 'bg-teal-50 text-teal-800 border border-teal-200'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}
              >
                {herb.category}
              </span>
            </div>
          </div>

          {/* ================= ACUPOINT BACK VIEW ================= */}
          {isAcupoint && acupoint ? (
            <div className="space-y-2.5 my-auto py-2 text-left">
              {/* 【穴位定位与简便取穴】 */}
              <div className="bg-teal-50/60 border border-teal-200 rounded-2xl p-3 sm:p-3.5 shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-teal-800 mb-1 font-serif">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-teal-600" />
                    <span>【腧穴定位与取穴】</span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-sans">{acupoint.subCategory}</span>
                </div>
                <div
                  className="text-sm sm:text-base font-serif font-medium text-stone-800 tracking-wide leading-relaxed [&_b]:text-teal-900 [&_b]:font-bold [&_div]:my-0.5"
                  dangerouslySetInnerHTML={{ __html: acupoint.locationHtml }}
                />
              </div>

              {/* 【速记提示 / 特定穴属性】 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {acupoint.mnemonic && (
                  <div className="bg-amber-50/70 border border-amber-200 p-2.5 rounded-xl">
                    <span className="text-amber-800 font-bold font-serif block mb-0.5">
                      📜 歌诀要点：
                    </span>
                    <span className="text-stone-800 font-serif leading-relaxed">
                      {acupoint.mnemonic}
                    </span>
                  </div>
                )}
                {acupoint.specialProperties && (
                  <div className="bg-teal-50/70 border border-teal-200 p-2.5 rounded-xl">
                    <span className="text-teal-800 font-bold font-serif block mb-0.5">
                      ⭐ 特定穴属性：
                    </span>
                    <span className="text-stone-800 font-serif leading-relaxed">
                      {acupoint.specialProperties}
                    </span>
                  </div>
                )}
              </div>

              {/* 【我的笔记】 (Acupoint note section) */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-2.5 sm:p-3 text-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-teal-800 font-serif font-bold">
                    <StickyNote size={13} className="text-teal-600" />
                    <span>【我的穴位笔记】</span>
                  </div>

                  {!isEditingNote && (
                    <div className="flex items-center gap-2">
                      {currentCardNote && (
                        <button
                          type="button"
                          onClick={handleDeleteNote}
                          className="text-[11px] text-stone-400 hover:text-red-500 flex items-center gap-0.5"
                          title="删除笔记"
                        >
                          <Trash2 size={11} />
                          <span>清除</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setIsEditingNote(true)}
                        className="text-[11px] text-teal-700 hover:text-teal-900 flex items-center gap-1 font-serif hover:underline"
                      >
                        <Edit3 size={12} />
                        <span>{currentCardNote ? '编辑' : '+ 添加笔记'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {isEditingNote ? (
                  <div className="space-y-2 pt-1">
                    <textarea
                      value={noteInput}
                      onChange={(e) => setNoteInput(e.target.value)}
                      placeholder="记录穴位临床配穴、刺灸法深度要点、体表解剖标志或个人记忆心得..."
                      rows={2}
                      className="w-full bg-white border border-teal-400 rounded-xl p-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-teal-500 font-serif resize-none"
                      autoFocus
                    />
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => setIsEditingNote(false)}
                        className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs"
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveNote}
                        className="px-3 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <Check size={12} />
                        <span>保存笔记</span>
                      </button>
                    </div>
                  </div>
                ) : currentCardNote ? (
                  <div className="p-2 rounded-xl bg-white border border-teal-200 text-stone-800 font-serif leading-relaxed text-xs whitespace-pre-wrap shadow-xs">
                    {currentCardNote}
                  </div>
                ) : (
                  <p
                    onClick={() => setIsEditingNote(true)}
                    className="text-[11px] text-stone-400 italic hover:text-stone-600 cursor-pointer"
                  >
                    暂无穴位笔记，点击“+ 添加笔记”记录临床刺灸法或取穴心得
                  </p>
                )}
              </div>
            </div>
          ) : isFormula && formula ? (
            /* ================= FORMULA BACK VIEW ================= */
            <div className="space-y-2.5 my-auto py-2 text-left">
              {/* 【歌诀】 (Primary Highlight) */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3 sm:p-3.5 shadow-xs">
                <div className="flex items-center justify-between text-xs font-bold text-amber-800 mb-1 font-serif">
                  <div className="flex items-center gap-1.5">
                    <Scroll size={14} />
                    <span>【歌诀】</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => handleSpeak(e, formula.mnemonic)}
                    className={`text-[11px] px-2 py-0.5 rounded-lg flex items-center gap-1 transition-colors ${
                      isPlayingAudio
                        ? 'bg-amber-500 text-white font-bold'
                        : 'text-stone-700 hover:text-amber-800 bg-white border border-stone-200'
                    }`}
                  >
                    <Volume2 size={13} />
                    <span>{isPlayingAudio ? '停止' : '朗读歌诀'}</span>
                  </button>
                </div>
                <div
                  className="text-sm sm:text-base font-serif font-medium text-stone-800 tracking-wide leading-relaxed [&_u]:text-amber-800 [&_u]:font-bold [&_u]:underline [&_u]:underline-offset-2 [&_b]:text-amber-900"
                  dangerouslySetInnerHTML={{ __html: formula.mnemonicHtml }}
                />
              </div>

              {/* 【主治】 */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-2.5 sm:p-3 space-y-1 text-xs">
                <div>
                  <span className="text-amber-800 font-serif font-bold">【主治】：</span>
                  <span className="text-stone-700">
                    {Array.isArray(formula.indications)
                      ? formula.indications.join('；')
                      : (formula.indications || formula.efficacy || '')}
                  </span>
                </div>
                {formula.source && (
                  <div className="text-stone-500 text-[11px] pt-1 border-t border-stone-200">
                    <span className="font-serif">【出处】：</span>
                    <span>{formula.source}</span>
                  </div>
                )}
              </div>

              {/* 【药味】 (用户手动维护药味功能) */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-2.5 sm:p-3 text-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-stone-800 font-serif font-bold">
                    <Tag size={13} className="text-amber-600" />
                    <span>【药味】</span>
                    {currentFormulaCustomHerbs.length > 0 && (
                      <span className="text-[10px] text-amber-700 font-mono">
                        ({currentFormulaCustomHerbs.length}味)
                      </span>
                    )}
                  </div>

                  {!isEditingHerbs && (
                    <button
                      type="button"
                      onClick={() => setIsEditingHerbs(true)}
                      className="text-[11px] text-amber-700 hover:text-amber-900 flex items-center gap-1 font-serif hover:underline"
                    >
                      <Edit3 size={12} />
                      <span>{currentFormulaCustomHerbs.length > 0 ? '编辑药味' : '+ 手动添加药味'}</span>
                    </button>
                  )}
                </div>

                {isEditingHerbs ? (
                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      value={herbsInput}
                      onChange={(e) => setHerbsInput(e.target.value)}
                      placeholder="输入组成药味，用空格或逗号分隔，如：麻黄 桂枝 杏仁 炙甘草"
                      className="w-full bg-white border border-amber-400 rounded-xl px-3 py-1.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 font-serif"
                      autoFocus
                    />
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => setIsEditingHerbs(false)}
                        className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs"
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveHerbs}
                        className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <Check size={12} />
                        <span>保存药味</span>
                      </button>
                    </div>
                  </div>
                ) : currentFormulaCustomHerbs.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {currentFormulaCustomHerbs.map((h, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg text-xs font-serif bg-amber-100/70 text-amber-900 border border-amber-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p
                    onClick={() => setIsEditingHerbs(true)}
                    className="text-[11px] text-stone-400 italic hover:text-stone-600 cursor-pointer"
                  >
                    暂无手动录入药味，点击右上角“+ 手动添加药味”输入组成药味
                  </p>
                )}
              </div>

              {/* 【我的方剂笔记】 */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-2.5 sm:p-3 text-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-amber-800 font-serif font-bold">
                    <StickyNote size={13} className="text-amber-600" />
                    <span>【我的方剂笔记】</span>
                  </div>

                  {!isEditingNote && (
                    <div className="flex items-center gap-2">
                      {currentCardNote && (
                        <button
                          type="button"
                          onClick={handleDeleteNote}
                          className="text-[11px] text-stone-400 hover:text-red-500 flex items-center gap-0.5"
                          title="删除笔记"
                        >
                          <Trash2 size={11} />
                          <span>清除</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setIsEditingNote(true)}
                        className="text-[11px] text-amber-700 hover:text-amber-900 flex items-center gap-1 font-serif hover:underline"
                      >
                        <Edit3 size={12} />
                        <span>{currentCardNote ? '编辑' : '+ 添加笔记'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {isEditingNote ? (
                  <div className="space-y-2 pt-1">
                    <textarea
                      value={noteInput}
                      onChange={(e) => setNoteInput(e.target.value)}
                      placeholder="记录个人记忆心得、方解要点、病机或考点笔记..."
                      rows={2}
                      className="w-full bg-white border border-amber-400 rounded-xl p-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 font-serif resize-none"
                      autoFocus
                    />
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => setIsEditingNote(false)}
                        className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs"
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveNote}
                        className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <Check size={12} />
                        <span>保存笔记</span>
                      </button>
                    </div>
                  </div>
                ) : currentCardNote ? (
                  <div className="p-2 rounded-xl bg-white border border-amber-200 text-stone-800 font-serif leading-relaxed text-xs whitespace-pre-wrap shadow-xs">
                    {currentCardNote}
                  </div>
                ) : (
                  <p
                    onClick={() => setIsEditingNote(true)}
                    className="text-[11px] text-stone-400 italic hover:text-stone-600 cursor-pointer"
                  >
                    暂无笔记，点击“+ 添加笔记”记录个性化记忆技巧或心得
                  </p>
                )}
              </div>
            </div>
          ) : (
            /* ================= HERB BACK VIEW ================= */
            herbItem && (
              <div className="space-y-2.5 my-auto py-2 text-left">
                {/* Core Efficacy (Primary Highlight) */}
                <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3 sm:p-3.5 shadow-xs">
                  <div className="text-xs font-bold text-emerald-800 mb-1 flex items-center gap-1.5">
                    <Sparkle size={13} className="text-amber-500" />
                    <span className="tracking-wide">【核心功效】</span>
                  </div>
                  <p className="text-base sm:text-lg font-serif font-extrabold text-stone-900 tracking-wide leading-relaxed">
                    {herbItem.efficacy}
                  </p>
                </div>

                {/* Mnemonic / Rhyme Box */}
                <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-2.5 sm:p-3 text-xs">
                  <span className="text-amber-800 font-bold block mb-0.5">
                    📜 记忆歌诀：
                  </span>
                  <p className="text-stone-800 font-serif text-xs sm:text-sm italic leading-relaxed">
                    “{herbItem.mnemonic}”
                  </p>
                </div>

                {/* Nature, Flavor, Meridian Tropism (Chinese Pharmacopoeia) */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-stone-50 border border-stone-200 p-2 rounded-xl">
                    <span className="text-stone-500 font-medium block text-[10px] mb-0.5">药典性味：</span>
                    <span className="text-amber-800 font-semibold font-serif text-xs">{herbItem.natureFlavor}</span>
                  </div>
                  <div className="bg-stone-50 border border-stone-200 p-2 rounded-xl">
                    <span className="text-stone-500 font-medium block text-[10px] mb-0.5">药典归经：</span>
                    <span className="text-teal-800 font-semibold font-serif text-xs">{herbItem.channelTropism}</span>
                  </div>
                </div>

                {/* Contraindications/Toxicity notice if any */}
                {herbItem.contraindications && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 p-2 rounded-xl border border-amber-200">
                    <ShieldAlert size={14} className="text-amber-600 shrink-0" />
                    <span>{herbItem.contraindications}</span>
                  </div>
                )}

                {/* 【我的中药笔记】 */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-2.5 sm:p-3 text-xs"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-serif font-bold">
                      <StickyNote size={13} className="text-emerald-600" />
                      <span>【我的中药笔记】</span>
                    </div>

                    {!isEditingNote && (
                      <div className="flex items-center gap-2">
                        {currentCardNote && (
                          <button
                            type="button"
                            onClick={handleDeleteNote}
                            className="text-[11px] text-stone-400 hover:text-red-500 flex items-center gap-0.5"
                            title="删除笔记"
                          >
                            <Trash2 size={11} />
                            <span>清除</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => setIsEditingNote(true)}
                          className="text-[11px] text-emerald-700 hover:text-emerald-900 flex items-center gap-1 font-serif hover:underline"
                        >
                          <Edit3 size={12} />
                          <span>{currentCardNote ? '编辑' : '+ 添加笔记'}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {isEditingNote ? (
                    <div className="space-y-2 pt-1">
                      <textarea
                        value={noteInput}
                        onChange={(e) => setNoteInput(e.target.value)}
                        placeholder="记录本草辨析、鉴别用药、临床配伍或考点笔记..."
                        rows={2}
                        className="w-full bg-white border border-emerald-400 rounded-xl p-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-serif resize-none"
                        autoFocus
                      />
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setIsEditingNote(false)}
                          className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs"
                        >
                          取消
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveNote}
                          className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1"
                        >
                          <Check size={12} />
                          <span>保存笔记</span>
                        </button>
                      </div>
                    </div>
                  ) : currentCardNote ? (
                    <div className="p-2 rounded-xl bg-white border border-emerald-200 text-stone-800 font-serif leading-relaxed text-xs whitespace-pre-wrap shadow-xs">
                      {currentCardNote}
                    </div>
                  ) : (
                    <p
                      onClick={() => setIsEditingNote(true)}
                      className="text-[11px] text-stone-400 italic hover:text-stone-600 cursor-pointer"
                    >
                      暂无笔记，点击“+ 添加笔记”记录个性化药性辨析与心得
                    </p>
                  )}
                </div>
              </div>
            )
          )}

          {/* Bottom Feedback prompt */}
          <div className="text-center pt-1.5 border-t border-stone-200 text-[11px] text-stone-500">
            请在下方选择记忆反馈，自动规划下次复习时间 ⬇️
          </div>
        </div>
      </motion.div>
    </div>
  );
};

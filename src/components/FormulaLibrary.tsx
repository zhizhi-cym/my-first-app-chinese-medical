import React, { useState, useMemo } from 'react';
import {
  Search,
  Volume2,
  VolumeX,
  BookOpen,
  X,
  Sparkles,
  FlaskConical,
  Scroll,
  Tag,
  CheckCircle2,
  HelpCircle,
  BookMarked,
  Filter,
  Headphones,
  Edit3,
  Check,
  StickyNote,
  Trash2,
} from 'lucide-react';
import { CardProgress, FormulaItem } from '../types';
import { FORMULA_CATEGORIES_LIST } from '../data/formulas';
import { sound } from '../utils/sound';
import { getTodayString } from '../utils/date';
import {
  loadFormulaNotes,
  saveFormulaNote,
  loadFormulaCustomHerbs,
  saveFormulaCustomHerbs,
} from '../utils/storage';
import { FormulaAudioPlayer } from './FormulaAudioPlayer';

interface FormulaLibraryProps {
  formulas: FormulaItem[];
  progressMap: Record<string, CardProgress>;
  onStartCustomDrill: (formulaIds: string[]) => void;
}

export const FormulaLibrary: React.FC<FormulaLibraryProps> = ({
  formulas,
  progressMap,
  onStartCustomDrill,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [inspectingFormula, setInspectingFormula] = useState<FormulaItem | null>(null);

  // Audio Player State
  const [isAudioPlayerOpen, setIsAudioPlayerOpen] = useState(false);
  const [audioInitialId, setAudioInitialId] = useState<string | undefined>(undefined);
  const [playingSingleId, setPlayingSingleId] = useState<string | null>(null);

  // Notes & Custom Herbs state
  const [notesMap, setNotesMap] = useState<Record<string, string>>(() => loadFormulaNotes());
  const [customHerbsMap, setCustomHerbsMap] = useState<Record<string, string[]>>(() =>
    loadFormulaCustomHerbs()
  );

  // Inspection modal editing states
  const [isEditingModalNote, setIsEditingModalNote] = useState(false);
  const [modalNoteInput, setModalNoteInput] = useState('');
  const [isEditingModalHerbs, setIsEditingModalHerbs] = useState(false);
  const [modalHerbsInput, setModalHerbsInput] = useState('');

  const today = getTodayString();

  const filteredFormulas = useMemo(() => {
    return formulas.filter((formula) => {
      // Search text match
      const term = searchTerm.trim().toLowerCase();
      const customHerbs = customHerbsMap[formula.id] || [];
      const note = notesMap[formula.id] || '';

      const matchSearch =
        !term ||
        formula.name.toLowerCase().includes(term) ||
        (formula.pinyin && formula.pinyin.toLowerCase().includes(term)) ||
        formula.subCategory.toLowerCase().includes(term) ||
        formula.category.toLowerCase().includes(term) ||
        (formula.source && formula.source.toLowerCase().includes(term)) ||
        (Array.isArray(formula.indications) && formula.indications.some((ind) => ind.toLowerCase().includes(term))) ||
        (formula.mnemonic && formula.mnemonic.toLowerCase().includes(term)) ||
        customHerbs.some((h) => h.toLowerCase().includes(term)) ||
        note.toLowerCase().includes(term);

      // Category match
      const matchCategory =
        selectedCategory === 'all' || formula.category === selectedCategory;

      // Status match
      const prog = progressMap[formula.id];
      let matchStatus = true;
      if (selectedStatus === 'new') {
        matchStatus = !prog || prog.status === 'new';
      } else if (selectedStatus === 'due') {
        matchStatus = Boolean(prog && prog.status !== 'new' && prog.nextReviewAt <= today);
      } else if (selectedStatus === 'learning') {
        matchStatus = Boolean(
          prog && (prog.status === 'learning' || prog.status === 'reviewing')
        );
      } else if (selectedStatus === 'mastered') {
        matchStatus = Boolean(prog && prog.status === 'mastered');
      }

      return matchSearch && matchCategory && matchStatus;
    });
  }, [formulas, searchTerm, selectedCategory, selectedStatus, progressMap, today, customHerbsMap, notesMap]);

  // Single Formula Speech Play
  const handlePlaySingle = (e: React.MouseEvent, formula: FormulaItem) => {
    e.stopPropagation();
    if (playingSingleId === formula.id) {
      sound.stopSpeech();
      setPlayingSingleId(null);
      return;
    }

    setPlayingSingleId(formula.id);
    sound.speakFormula(formula.name, formula.mnemonic, () => {
      setPlayingSingleId(null);
    });
  };

  // Open Audio Player with specific formula
  const handleOpenAudioPlayer = (formulaId?: string) => {
    setAudioInitialId(formulaId);
    setIsAudioPlayerOpen(true);
  };

  // When inspecting formula is opened, sync note and herbs input
  const handleInspect = (formula: FormulaItem) => {
    setInspectingFormula(formula);
    setModalNoteInput(notesMap[formula.id] || '');
    setIsEditingModalNote(false);
    setModalHerbsInput(
      Array.isArray(customHerbsMap[formula.id])
        ? customHerbsMap[formula.id].join(' ')
        : ''
    );
    setIsEditingModalHerbs(false);
  };

  // Save Modal Note
  const handleSaveModalNote = () => {
    if (!inspectingFormula) return;
    const updated = saveFormulaNote(inspectingFormula.id, modalNoteInput);
    setNotesMap(updated);
    setIsEditingModalNote(false);
  };

  const handleDeleteModalNote = () => {
    if (!inspectingFormula) return;
    const updated = saveFormulaNote(inspectingFormula.id, '');
    setNotesMap(updated);
    setModalNoteInput('');
    setIsEditingModalNote(false);
  };

  // Save Modal Herbs
  const handleSaveModalHerbs = () => {
    if (!inspectingFormula) return;
    const items = modalHerbsInput
      .split(/[\s,，、+＋]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    const updated = saveFormulaCustomHerbs(inspectingFormula.id, items);
    setCustomHerbsMap(updated);
    setIsEditingModalHerbs(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6 text-stone-900 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2.5 shrink-0">
            <Scroll className="text-amber-600" size={24} />
            <span>方剂检索</span>
          </h2>
          <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold whitespace-nowrap shrink-0">
            收录 {formulas.length} 首经典名方
          </span>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {/* Sequential Audio Player Trigger */}
          <button
            type="button"
            onClick={() => handleOpenAudioPlayer()}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
            title="打开连续顺序播放随身听"
          >
            <Headphones size={15} className="text-amber-700 animate-pulse" />
            <span>顺序听方歌 (随身听)</span>
          </button>

          {filteredFormulas.length > 0 && (
            <button
              type="button"
              onClick={() => onStartCustomDrill(filteredFormulas.map((f) => f.id))}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <BookOpen size={15} />
              <span>背诵检索方剂 ({filteredFormulas.length}首)</span>
            </button>
          )}
        </div>
      </div>

      {/* Search & Category Filter Section */}
      <div className="space-y-3 bg-stone-50 p-4 sm:p-5 rounded-2xl border border-stone-200">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜索方剂名、歌诀、主治、药味、出处或个人笔记关键词..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 transition-colors shadow-sm"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Pills (20 Classes) */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs text-stone-600 font-serif">
            <Filter size={13} className="text-amber-700" />
            <span>方剂分类体系 (20类)：</span>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-serif transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-700 text-white font-bold shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              全部 ({formulas.length})
            </button>
            {FORMULA_CATEGORIES_LIST.map((cat) => {
              const count = formulas.filter((f) => f.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-serif transition-colors ${
                    selectedCategory === cat
                      ? 'bg-amber-700 text-white font-bold shadow-sm'
                      : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-200 text-xs">
          <span className="text-stone-500">学习进度：</span>
          {[
            { id: 'all', label: '全部状态' },
            { id: 'new', label: '未学习' },
            { id: 'due', label: '今日待复习' },
            { id: 'learning', label: '学习中/复习中' },
            { id: 'mastered', label: '已掌握' },
          ].map((st) => (
            <button
              key={st.id}
              type="button"
              onClick={() => setSelectedStatus(st.id)}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                selectedStatus === st.id
                  ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Formulas Grid */}
      <div className="space-y-3">
        <div className="text-xs text-stone-500 flex items-center justify-between">
          <span>共筛选出 {filteredFormulas.length} 首方剂</span>
          {selectedCategory !== 'all' && (
            <span className="text-amber-800 font-serif font-medium">当前分类：{selectedCategory}</span>
          )}
        </div>

        {filteredFormulas.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 space-y-3">
            <FlaskConical size={40} className="mx-auto text-stone-400" />
            <p className="text-stone-500 text-sm font-serif">未找到符合条件的方剂</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedStatus('all');
              }}
              className="text-xs text-amber-700 hover:underline"
            >
              重置所有检索与分类筛选
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFormulas.map((formula) => {
              const prog = progressMap[formula.id];
              const isMastered = prog?.status === 'mastered';
              const isLearning = prog && (prog.status === 'learning' || prog.status === 'reviewing');
              const isDue = Boolean(prog && prog.status !== 'new' && prog.nextReviewAt <= today);
              const customHerbs = customHerbsMap[formula.id] || [];
              const userNote = notesMap[formula.id];
              const isPlayingThis = playingSingleId === formula.id;

              return (
                <div
                  key={formula.id}
                  onClick={() => handleInspect(formula)}
                  className="bg-white hover:bg-amber-50/20 border border-stone-200 hover:border-amber-500 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-3 transition-all cursor-pointer group shadow-sm hover:shadow-md"
                >
                  {/* Top Meta info */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                            {formula.name}
                          </h3>
                          {formula.code && (
                            <span className="text-[10px] font-mono text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                              #{formula.code}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-amber-800 font-serif">
                          <span>{formula.category}</span>
                          <span>·</span>
                          <span className="text-stone-500">{formula.subCategory}</span>
                        </div>
                      </div>

                      {/* Status Badge & Audio Play */}
                      <div className="flex items-center gap-1">
                        {isMastered && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            已掌握
                          </span>
                        )}
                        {isDue && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                            待复习
                          </span>
                        )}
                        {isLearning && !isDue && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-300">
                            学习中
                          </span>
                        )}
                        {!prog && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-stone-100 text-stone-500 border border-stone-200">
                            未学
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={(e) => handlePlaySingle(e, formula)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isPlayingThis
                              ? 'bg-amber-600 text-white font-bold'
                              : 'text-stone-400 hover:text-amber-700 hover:bg-stone-100'
                          }`}
                          title={isPlayingThis ? '停止朗读' : '朗读歌诀'}
                        >
                          {isPlayingThis ? <VolumeX size={15} /> : <Volume2 size={15} />}
                        </button>
                      </div>
                    </div>

                    {/* Indications summary (主治) */}
                    <div className="text-xs text-stone-700 font-sans line-clamp-2 bg-stone-50 p-2 rounded-xl border border-stone-200">
                      <span className="text-amber-900 font-serif font-bold">【主治】：</span>
                      {Array.isArray(formula.indications)
                        ? formula.indications.join('；')
                        : (formula.indications || formula.efficacy || '')}
                    </div>

                    {/* 【歌诀】 excerpt */}
                    <div className="text-xs font-serif text-stone-800 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200 leading-relaxed">
                      <div className="text-[10px] text-amber-800 font-bold mb-1">【歌诀】</div>
                      <div
                        className="line-clamp-2 [&_u]:text-amber-900 [&_u]:underline [&_u]:font-bold [&_u]:underline-offset-2 [&_b]:text-amber-900"
                        dangerouslySetInnerHTML={{ __html: formula.mnemonicHtml }}
                      />
                    </div>

                    {/* User Note tag preview if exists */}
                    {userNote && (
                      <div className="flex items-center gap-1 text-[11px] text-amber-900 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200 truncate">
                        <StickyNote size={11} className="shrink-0 text-amber-700" />
                        <span className="truncate">{userNote}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Custom Herbs / Action */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1 overflow-hidden text-[11px] text-stone-500 font-serif">
                      <Tag size={12} className="shrink-0 text-amber-700" />
                      {Array.isArray(customHerbs) && customHerbs.length > 0 ? (
                        <span className="truncate text-stone-800 font-medium">
                          {customHerbs.slice(0, 4).join('、')}
                          {customHerbs.length > 4 ? ` 等${customHerbs.length}味` : ''}
                        </span>
                      ) : (
                        <span className="text-stone-400 italic">未录入药味</span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartCustomDrill([formula.id]);
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-serif font-bold bg-stone-100 hover:bg-amber-600 hover:text-white text-stone-700 border border-stone-200 transition-colors shrink-0"
                    >
                      背诵此方
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Inspect Detail Modal */}
      {inspectingFormula && (
        <div className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl text-stone-900 max-h-[90vh] overflow-y-auto animate-fade-in">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-stone-200 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                    {inspectingFormula.name}
                  </h3>
                  <button
                    type="button"
                    onClick={(e) => handlePlaySingle(e, inspectingFormula)}
                    className="p-1.5 rounded-full bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200 flex items-center gap-1 text-xs"
                    title="朗读歌诀"
                  >
                    <Volume2 size={16} />
                    <span>朗读歌诀</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs text-amber-900 font-serif">
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300 font-medium">
                    {inspectingFormula.category}
                  </span>
                  <span>·</span>
                  <span className="text-stone-700">{inspectingFormula.subCategory}</span>
                  {inspectingFormula.source && (
                    <>
                      <span>·</span>
                      <span className="text-stone-500">{inspectingFormula.source}</span>
                    </>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInspectingFormula(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className="space-y-4">
              {/* 【歌诀】 */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-serif text-amber-800 font-bold">
                  <div className="flex items-center gap-1.5">
                    <Scroll size={15} />
                    <span>【歌诀】</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenAudioPlayer(inspectingFormula.id)}
                    className="text-xs text-amber-700 hover:text-amber-900 flex items-center gap-1 font-sans hover:underline font-bold"
                  >
                    <Headphones size={13} />
                    <span>随身听连续顺播</span>
                  </button>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-stone-900 font-serif leading-relaxed text-sm sm:text-base tracking-wide">
                  <div
                    className="space-y-1 [&_u]:text-amber-900 [&_u]:font-bold [&_u]:underline [&_u]:underline-offset-4 [&_b]:text-amber-900"
                    dangerouslySetInnerHTML={{ __html: inspectingFormula.mnemonicHtml }}
                  />
                </div>
              </div>

              {/* 【主治】 */}
              <div className="space-y-1.5">
                <div className="text-xs font-serif text-amber-800 font-bold flex items-center gap-1.5">
                  <BookMarked size={14} />
                  <span>【主治】</span>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm text-stone-800">
                  <div>
                    <span className="text-amber-900 font-serif font-bold">主治：</span>
                    <span>
                      {Array.isArray(inspectingFormula.indications)
                        ? inspectingFormula.indications.join('；')
                        : (inspectingFormula.indications || inspectingFormula.efficacy || '')}
                    </span>
                  </div>
                </div>
              </div>

              {/* 【药味】 (用户手动添加与管理) */}
              <div className="space-y-1.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between text-xs font-serif font-bold text-amber-800">
                  <div className="flex items-center gap-1.5">
                    <Tag size={14} />
                    <span>【药味】</span>
                    {(customHerbsMap[inspectingFormula.id] || []).length > 0 && (
                      <span className="text-[10px] text-amber-800 font-mono">
                        ({(customHerbsMap[inspectingFormula.id] || []).length}味)
                      </span>
                    )}
                  </div>
                  {!isEditingModalHerbs && (
                    <button
                      type="button"
                      onClick={() => setIsEditingModalHerbs(true)}
                      className="text-xs text-amber-700 hover:text-amber-900 flex items-center gap-1 hover:underline font-serif font-bold"
                    >
                      <Edit3 size={13} />
                      <span>
                        {(customHerbsMap[inspectingFormula.id] || []).length > 0
                          ? '编辑药味'
                          : '+ 手动添加药味'}
                      </span>
                    </button>
                  )}
                </div>

                {isEditingModalHerbs ? (
                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      value={modalHerbsInput}
                      onChange={(e) => setModalHerbsInput(e.target.value)}
                      placeholder="输入组成药味，用空格或逗号分隔，如：麻黄 桂枝 杏仁 炙甘草"
                      className="w-full bg-white border border-amber-400 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 font-serif"
                      autoFocus
                    />
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingModalHerbs(false)}
                        className="px-3 py-1 rounded-lg bg-stone-200 text-stone-700 text-xs"
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveModalHerbs}
                        className="px-3.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
                      >
                        <Check size={13} />
                        <span>保存药味</span>
                      </button>
                    </div>
                  </div>
                ) : (customHerbsMap[inspectingFormula.id] || []).length > 0 ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(customHerbsMap[inspectingFormula.id] || []).map((herb, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl text-xs font-serif bg-amber-50 text-amber-900 border border-amber-200 font-medium"
                      >
                        {herb}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p
                    onClick={() => setIsEditingModalHerbs(true)}
                    className="text-xs text-stone-400 italic hover:text-stone-600 cursor-pointer pt-1"
                  >
                    暂无手动录入药味，点击右上角“+ 手动添加药味”进行录入
                  </p>
                )}
              </div>

              {/* 【我的笔记】 */}
              <div className="space-y-1.5 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between text-xs font-serif font-bold text-amber-800">
                  <div className="flex items-center gap-1.5">
                    <StickyNote size={14} className="text-amber-700" />
                    <span>【我的笔记】</span>
                  </div>
                  {!isEditingModalNote && (
                    <div className="flex items-center gap-2">
                      {notesMap[inspectingFormula.id] && (
                        <button
                          type="button"
                          onClick={handleDeleteModalNote}
                          className="text-xs text-stone-500 hover:text-red-600 flex items-center gap-0.5"
                        >
                          <Trash2 size={12} />
                          <span>清除</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setIsEditingModalNote(true)}
                        className="text-xs text-amber-700 hover:text-amber-900 flex items-center gap-1 hover:underline font-serif font-bold"
                      >
                        <Edit3 size={13} />
                        <span>{notesMap[inspectingFormula.id] ? '编辑' : '+ 添加笔记'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {isEditingModalNote ? (
                  <div className="space-y-2 pt-1">
                    <textarea
                      value={modalNoteInput}
                      onChange={(e) => setModalNoteInput(e.target.value)}
                      placeholder="记录个人记忆技巧、方解心得、辨析要点..."
                      rows={3}
                      className="w-full bg-white border border-amber-400 rounded-xl p-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 font-serif resize-none"
                      autoFocus
                    />
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingModalNote(false)}
                        className="px-3 py-1 rounded-lg bg-stone-200 text-stone-700 text-xs"
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveModalNote}
                        className="px-3.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
                      >
                        <Check size={13} />
                        <span>保存笔记</span>
                      </button>
                    </div>
                  </div>
                ) : notesMap[inspectingFormula.id] ? (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-stone-800 font-serif text-xs leading-relaxed whitespace-pre-wrap">
                    {notesMap[inspectingFormula.id]}
                  </div>
                ) : (
                  <p
                    onClick={() => setIsEditingModalNote(true)}
                    className="text-xs text-stone-400 italic hover:text-stone-600 cursor-pointer pt-1"
                  >
                    暂无学习笔记，点击“+ 添加笔记”随时记录心得与考点
                  </p>
                )}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                {progressMap[inspectingFormula.id]?.status === 'mastered'
                  ? '✅ 已完成艾宾浩斯多轮强化并掌握'
                  : '📖 艾宾浩斯智能背诵队列中'}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setInspectingFormula(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700"
                >
                  关闭
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const id = inspectingFormula.id;
                    setInspectingFormula(null);
                    onStartCustomDrill([id]);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-serif font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-sm flex items-center gap-1.5"
                >
                  <Sparkles size={14} />
                  <span>立即强化背诵</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sequential Audio Player Modal / Float Bar */}
      <FormulaAudioPlayer
        formulas={formulas}
        isOpen={isAudioPlayerOpen}
        onClose={() => setIsAudioPlayerOpen(false)}
        initialFormulaId={audioInitialId}
        activeCategory={selectedCategory !== 'all' ? selectedCategory : undefined}
      />
    </div>
  );
};

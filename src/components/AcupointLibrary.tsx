import React, { useState, useMemo } from 'react';
import {
  Search,
  Volume2,
  BookOpen,
  X,
  Sparkles,
  Activity,
  MapPin,
  CheckCircle2,
  StickyNote,
  Edit3,
  Check,
  Trash2,
  Scroll,
  Tag,
} from 'lucide-react';
import { AcupointItem, CardProgress } from '../types';
import { ACUPOINT_CATEGORIES_LIST } from '../data/acupoints';
import { sound } from '../utils/sound';
import { getTodayString } from '../utils/date';
import { loadAcupointNotes, saveAcupointNote } from '../utils/storage';

interface AcupointLibraryProps {
  acupoints: AcupointItem[];
  progressMap: Record<string, CardProgress>;
  onStartCustomDrill: (acupointIds: string[]) => void;
}

export const AcupointLibrary: React.FC<AcupointLibraryProps> = ({
  acupoints,
  progressMap,
  onStartCustomDrill,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [inspectingAcupoint, setInspectingAcupoint] = useState<AcupointItem | null>(null);

  // Notes state
  const [notesMap, setNotesMap] = useState<Record<string, string>>(() => loadAcupointNotes());
  const [isEditingModalNote, setIsEditingModalNote] = useState(false);
  const [modalNoteInput, setModalNoteInput] = useState('');

  const today = getTodayString();

  const filteredAcupoints = useMemo(() => {
    return acupoints.filter((point) => {
      // Search text match
      const term = searchTerm.trim().toLowerCase();
      const note = notesMap[point.id] || '';

      const matchSearch =
        !term ||
        point.name.toLowerCase().includes(term) ||
        point.pinyin.toLowerCase().includes(term) ||
        (point.code && point.code.toLowerCase().includes(term)) ||
        point.subCategory.toLowerCase().includes(term) ||
        point.category.toLowerCase().includes(term) ||
        point.locationText.toLowerCase().includes(term) ||
        (point.mnemonic && point.mnemonic.toLowerCase().includes(term)) ||
        (point.specialProperties && point.specialProperties.toLowerCase().includes(term)) ||
        note.toLowerCase().includes(term);

      // Category match
      const matchCategory =
        selectedCategory === 'all' || point.category === selectedCategory;

      // Status match
      const prog = progressMap[point.id];
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
  }, [acupoints, searchTerm, selectedCategory, selectedStatus, progressMap, notesMap, today]);

  const handleSpeak = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    sound.speakHerbName(name);
  };

  const handleOpenInspect = (point: AcupointItem) => {
    setInspectingAcupoint(point);
    setModalNoteInput(notesMap[point.id] || '');
    setIsEditingModalNote(false);
  };

  const handleSaveModalNote = () => {
    if (!inspectingAcupoint) return;
    const updated = saveAcupointNote(inspectingAcupoint.id, modalNoteInput);
    setNotesMap(updated);
    setIsEditingModalNote(false);
  };

  const handleDeleteModalNote = () => {
    if (!inspectingAcupoint) return;
    const updated = saveAcupointNote(inspectingAcupoint.id, '');
    setNotesMap(updated);
    setModalNoteInput('');
    setIsEditingModalNote(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6 text-stone-900 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
            <Activity className="text-teal-600" size={24} />
            <span>针灸穴位数据库</span>
            <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-300 font-bold">
              全量收录 361 十四经标准腧穴 + 38 经外奇穴
            </span>
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            十四经穴 361 穴全覆盖 · 经络循行 · 定位取穴要点 · 特定穴属性与歌诀速记
          </p>
        </div>

        {filteredAcupoints.length > 0 && (
          <button
            type="button"
            onClick={() => onStartCustomDrill(filteredAcupoints.map((a) => a.id))}
            className="self-start sm:self-auto px-4 py-2 rounded-xl text-xs font-serif font-bold bg-teal-600 hover:bg-teal-500 text-white flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <BookOpen size={15} />
            <span>背诵当前筛选穴位 ({filteredAcupoints.length})</span>
          </button>
        )}
      </div>

      {/* Filters & Search */}
      <div className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search Input */}
          <div className="md:col-span-2 relative">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜索穴位名称、拼音、国际代码（如 LI4 / ST36）、经络归属、定位或歌诀..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-500 font-serif shadow-sm"
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

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-white border border-stone-300 text-xs text-stone-800 focus:outline-none focus:border-teal-600 font-serif shadow-sm cursor-pointer"
            >
              <option value="all">所有学习进度</option>
              <option value="due">⏰ 今日到期复习</option>
              <option value="new">🌱 尚未学习新穴</option>
              <option value="learning">📖 正在复习巩固中</option>
              <option value="mastered">🏆 已熟练掌握</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-lg text-xs font-serif transition-colors ${
              selectedCategory === 'all'
                ? 'bg-teal-700 text-white font-bold shadow-sm'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            全部经络 ({acupoints.length})
          </button>
          {ACUPOINT_CATEGORIES_LIST.map((cat) => {
            const count = acupoints.filter((a) => a.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-serif transition-colors ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white font-bold shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Cards */}
      {filteredAcupoints.length === 0 ? (
        <div className="text-center py-16 text-stone-500 font-serif text-sm bg-white rounded-2xl border border-stone-200">
          未检索到符合条件的穴位，请调整搜索词或经络分类筛选
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAcupoints.map((point) => {
            const prog = progressMap[point.id];
            const isDue = prog && prog.status !== 'new' && prog.nextReviewAt <= today;
            const isMastered = prog?.status === 'mastered';
            const hasNote = Boolean(notesMap[point.id]);

            return (
              <div
                key={point.id}
                onClick={() => handleOpenInspect(point)}
                className="bg-white border border-stone-200 hover:border-teal-500 rounded-2xl p-4 cursor-pointer transition-all hover:bg-teal-50/20 shadow-sm hover:shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-teal-700 font-semibold">
                      {point.pinyin} {point.code ? `(${point.code})` : ''}
                    </span>
                    <div className="flex items-center gap-1">
                      {hasNote && (
                        <span className="text-amber-600" title="包含个人笔记">
                          <StickyNote size={13} />
                        </span>
                      )}
                      {isDue && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 font-bold">
                          待复习
                        </span>
                      )}
                      {isMastered && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                          已掌握
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => handleSpeak(e, point.name)}
                        className="p-1 rounded-lg text-stone-400 hover:text-teal-700 hover:bg-stone-100"
                        title="朗读"
                      >
                        <Volume2 size={15} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-teal-700 transition-colors mb-1.5">
                    {point.name}
                  </h3>

                  <div className="text-xs text-stone-600 font-serif line-clamp-2 leading-relaxed mb-2">
                    {point.locationText}
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="truncate">{point.category}</span>
                  <span className="text-teal-700 font-medium shrink-0 font-sans">{point.subCategory}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Inspection Modal */}
      {inspectingAcupoint && (
        <div
          onClick={() => setInspectingAcupoint(null)}
          className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-2xl text-stone-900 max-h-[90vh] overflow-y-auto space-y-4"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shadow-sm">
                  <Activity size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-serif font-extrabold text-stone-900">
                      {inspectingAcupoint.name}
                    </h3>
                    <button
                      type="button"
                      onClick={(e) => handleSpeak(e, inspectingAcupoint.name)}
                      className="p-1 rounded-lg text-stone-400 hover:text-teal-700"
                      title="朗读"
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                  <span className="text-xs font-mono text-teal-700 font-bold block">
                    {inspectingAcupoint.pinyin} {inspectingAcupoint.code ? `[${inspectingAcupoint.code}]` : ''}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInspectingAcupoint(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Category & SubCategory */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-serif font-bold bg-teal-100 text-teal-800 border border-teal-200">
                {inspectingAcupoint.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-serif bg-stone-100 text-stone-700 border border-stone-200">
                {inspectingAcupoint.subCategory}
              </span>
            </div>

            {/* Location & Taking Method */}
            <div className="bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/60 border border-teal-200 rounded-2xl p-4 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-teal-800">
                <MapPin size={14} className="text-teal-600" />
                <span>【穴位定位与简便取穴】</span>
              </div>
              <div
                className="text-sm font-serif text-stone-800 leading-relaxed [&_b]:text-teal-900 [&_b]:font-bold [&_div]:my-0.5"
                dangerouslySetInnerHTML={{ __html: inspectingAcupoint.locationHtml }}
              />
            </div>

            {/* Mnemonic & Special Properties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {inspectingAcupoint.mnemonic && (
                <div className="bg-amber-50/80 border border-amber-200 p-3 rounded-2xl">
                  <span className="text-amber-800 font-bold font-serif block mb-0.5">
                    📜 歌诀要点：
                  </span>
                  <span className="text-amber-950 font-serif leading-relaxed">
                    {inspectingAcupoint.mnemonic}
                  </span>
                </div>
              )}
              {inspectingAcupoint.specialProperties && (
                <div className="bg-teal-50/80 border border-teal-200 p-3 rounded-2xl">
                  <span className="text-teal-800 font-bold font-serif block mb-0.5">
                    ⭐ 特定穴属性：
                  </span>
                  <span className="text-teal-950 font-serif leading-relaxed">
                    {inspectingAcupoint.specialProperties}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Note Section */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-3.5 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-teal-800 font-serif font-bold">
                  <StickyNote size={14} className="text-teal-600" />
                  <span>【我的穴位笔记】</span>
                </div>

                {!isEditingModalNote && (
                  <div className="flex items-center gap-2">
                    {modalNoteInput && (
                      <button
                        type="button"
                        onClick={handleDeleteModalNote}
                        className="text-[11px] text-stone-500 hover:text-red-600 flex items-center gap-0.5"
                      >
                        <Trash2 size={11} />
                        <span>清除</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsEditingModalNote(true)}
                      className="text-[11px] text-teal-700 hover:text-teal-900 flex items-center gap-1 font-serif hover:underline font-bold"
                    >
                      <Edit3 size={12} />
                      <span>{modalNoteInput ? '编辑' : '+ 添加笔记'}</span>
                    </button>
                  </div>
                )}
              </div>

              {isEditingModalNote ? (
                <div className="space-y-2 pt-1">
                  <textarea
                    value={modalNoteInput}
                    onChange={(e) => setModalNoteInput(e.target.value)}
                    placeholder="记录临床配穴、刺灸深度、体表解剖标志或个人速记口诀..."
                    rows={2}
                    className="w-full bg-white border border-teal-400 rounded-xl p-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-teal-500 font-serif resize-none"
                    autoFocus
                  />
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      type="button"
                      onClick={() => setIsEditingModalNote(false)}
                      className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-700 text-xs"
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveModalNote}
                      className="px-3 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
                    >
                      <Check size={12} />
                      <span>保存笔记</span>
                    </button>
                  </div>
                </div>
              ) : modalNoteInput ? (
                <div className="p-2.5 rounded-xl bg-white border border-teal-200 text-stone-800 font-serif leading-relaxed text-xs whitespace-pre-wrap shadow-sm">
                  {modalNoteInput}
                </div>
              ) : (
                <p
                  onClick={() => setIsEditingModalNote(true)}
                  className="text-[11px] text-stone-400 italic hover:text-teal-700 cursor-pointer"
                >
                  暂无穴位笔记，点击“+ 添加笔记”记录临床心得
                </p>
              )}
            </div>

            {/* Modal Actions */}
            <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setInspectingAcupoint(null)}
                className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 text-xs"
              >
                关闭
              </button>

              <button
                type="button"
                onClick={() => {
                  const id = inspectingAcupoint.id;
                  setInspectingAcupoint(null);
                  onStartCustomDrill([id]);
                }}
                className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-serif font-bold text-xs flex items-center gap-1.5 shadow-sm"
              >
                <BookOpen size={14} />
                <span>单独背诵此穴</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

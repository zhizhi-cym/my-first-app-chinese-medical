import React, { useState, useMemo } from 'react';
import {
  Search,
  Volume2,
  BookOpen,
  X,
  Sparkles,
  Leaf,
} from 'lucide-react';
import { CardProgress, HerbItem } from '../types';
import { CATEGORIES_LIST } from '../data/herbs';
import { sound } from '../utils/sound';
import { getTodayString } from '../utils/date';
import { HerbImage } from './HerbImage';

interface HerbLibraryProps {
  herbs: HerbItem[];
  progressMap: Record<string, CardProgress>;
  onStartCustomDrill: (herbIds: string[]) => void;
}

export const HerbLibrary: React.FC<HerbLibraryProps> = ({
  herbs,
  progressMap,
  onStartCustomDrill,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [inspectingHerb, setInspectingHerb] = useState<HerbItem | null>(null);

  const today = getTodayString();

  const filteredHerbs = useMemo(() => {
    return herbs.filter((herb) => {
      // Search text match
      const term = searchTerm.trim().toLowerCase();
      const matchSearch =
        !term ||
        herb.name.includes(term) ||
        herb.pinyin.toLowerCase().includes(term) ||
        herb.efficacy.toLowerCase().includes(term) ||
        herb.subCategory.toLowerCase().includes(term) ||
        herb.category.toLowerCase().includes(term);

      // Category match
      const matchCategory =
        selectedCategory === 'all' || herb.category === selectedCategory;

      // Status match
      const prog = progressMap[herb.id];
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
  }, [herbs, searchTerm, selectedCategory, selectedStatus, progressMap, today]);

  const handleSpeak = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    sound.speakHerbName(name);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6 text-stone-900 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-2.5 shrink-0">
            <Leaf className="text-emerald-600" size={24} />
            <span>本草药材检索</span>
          </h2>
          <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold whitespace-nowrap shrink-0">
            收录 {herbs.length} 味中药
          </span>
        </div>

        {filteredHerbs.length > 0 && (
          <button
            type="button"
            onClick={() => onStartCustomDrill(filteredHerbs.map((h) => h.id))}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-sm self-start sm:self-auto transition-colors whitespace-nowrap cursor-pointer"
          >
            <BookOpen size={15} />
            <span>背诵当前检索结果 ({filteredHerbs.length}味)</span>
          </button>
        )}
      </div>

      {/* Filter Controls Bar */}
      <div className="space-y-3 bg-stone-50 border border-stone-200 p-4 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Search Box */}
          <div className="relative sm:col-span-2">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
            />
            <input
              type="text"
              placeholder="搜索中药名、拼音、功效（如：清热、泻火、解表、黄连）..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-stone-300 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500 transition-colors shadow-sm"
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
              className="w-full py-2.5 px-3 bg-white border border-stone-300 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-emerald-600 cursor-pointer shadow-sm"
            >
              <option value="all">所有记忆状态</option>
              <option value="due">🔥 今日待复习 (艾宾浩斯到期)</option>
              <option value="learning">📖 学习/复习中</option>
              <option value="mastered">✅ 已熟练掌握</option>
              <option value="new">✨ 从未学习过</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg shrink-0 font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-emerald-700 text-white font-bold shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            全部大类
          </button>
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg shrink-0 font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white font-bold shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Herbs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        {filteredHerbs.map((herb) => {
          const prog = progressMap[herb.id];
          const isDue = prog && prog.status !== 'new' && prog.nextReviewAt <= today;
          const isMastered = prog?.status === 'mastered';
          const isNew = !prog || prog.status === 'new';

          return (
            <div
              key={herb.id}
              onClick={() => setInspectingHerb(herb)}
              className="bg-white hover:bg-emerald-50/20 border border-stone-200 hover:border-emerald-500 rounded-2xl p-3.5 transition-all cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow gap-3"
            >
              <div className="flex gap-3">
                {/* Herb Image Thumbnail */}
                <div className="w-18 h-18 shrink-0 rounded-xl overflow-hidden shadow-inner border border-stone-100">
                  <HerbImage
                    name={herb.name}
                    category={herb.category}
                    imageUrl={herb.imageUrl}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Herb Core Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <div className="truncate">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-emerald-700 transition-colors truncate">
                          {herb.name}
                        </h3>
                        <button
                          type="button"
                          onClick={(e) => handleSpeak(e, herb.name)}
                          className="p-0.5 text-stone-400 hover:text-emerald-600 transition-opacity"
                          title="朗读"
                        >
                          <Volume2 size={13} />
                        </button>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-mono font-medium block truncate">
                        {herb.pinyin}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="shrink-0">
                      {isDue && (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-teal-100 text-teal-800 border border-teal-300">
                          待复习
                        </span>
                      )}
                      {isMastered && (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          已掌握
                        </span>
                      )}
                      {!isDue && !isMastered && !isNew && (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-stone-100 text-stone-700 border border-stone-200">
                          阶段 {prog?.level ?? 0}
                        </span>
                      )}
                      {isNew && (
                        <span className="px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-stone-100 text-stone-400">
                          未学
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] text-stone-500 font-serif block mb-1">
                    {herb.category} · {herb.natureFlavor}
                  </span>
                </div>
              </div>

              {/* Efficacy snippet */}
              <p className="text-xs font-serif text-stone-700 line-clamp-2 leading-relaxed">
                <strong className="text-stone-500 font-sans font-normal">功效：</strong>
                {herb.efficacy}
              </p>

              {/* Card Footer: SRS Info */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span>
                  {prog?.repetitions ? `已复习 ${prog.repetitions} 次` : '尚未背诵'}
                </span>
                <span className="text-emerald-700 group-hover:underline text-xs font-medium">
                  查看档案 →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredHerbs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 text-stone-500">
          <p className="text-sm">未检索到符合条件的中药材</p>
        </div>
      )}

      {/* Inspecting Herb Detail Modal */}
      {inspectingHerb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-stone-200 text-stone-900 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl p-6 sm:p-7 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Modal Top Header */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  {inspectingHerb.name}
                </h3>
                <span className="text-xs text-emerald-700 font-mono font-bold">
                  [{inspectingHerb.pinyin}]
                </span>
                <button
                  type="button"
                  onClick={(e) => handleSpeak(e, inspectingHerb.name)}
                  className="p-1 text-stone-400 hover:text-emerald-600"
                >
                  <Volume2 size={16} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => setInspectingHerb(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Authoritative Herb Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 h-44 sm:h-52">
              <HerbImage
                name={inspectingHerb.name}
                category={inspectingHerb.category}
                imageUrl={inspectingHerb.imageUrl}
                aspectRatio="wide"
                className="w-full h-full"
              />
              <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-emerald-800 border border-emerald-300 shadow-sm">
                {inspectingHerb.category} · {inspectingHerb.subCategory}
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md text-[10px] bg-white/90 backdrop-blur-sm text-stone-600 border border-stone-200 shadow-sm">
                南京中医药大学中药标本馆
              </div>
            </div>

            {/* Efficacy */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5">
              <span className="text-xs font-bold text-emerald-800 block mb-1">
                【核心功效】：
              </span>
              <p className="text-base sm:text-lg font-serif font-bold text-stone-900">
                {inspectingHerb.efficacy}
              </p>
            </div>

            {/* Nature Flavor & Channel Tropism */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200">
                <span className="text-stone-500 block text-[11px] mb-0.5">中国药典性味</span>
                <span className="text-amber-900 font-semibold font-serif text-sm">{inspectingHerb.natureFlavor}</span>
              </div>
              <div className="bg-teal-50/70 p-2.5 rounded-xl border border-teal-200">
                <span className="text-stone-500 block text-[11px] mb-0.5">中国药典归经</span>
                <span className="text-teal-900 font-semibold font-serif text-sm">{inspectingHerb.channelTropism}</span>
              </div>
            </div>

            {/* Mnemonic */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3 text-xs">
              <span className="text-amber-800 font-bold block mb-1">📜 记忆歌诀：</span>
              <p className="text-amber-950 font-serif italic text-sm leading-relaxed">
                “{inspectingHerb.mnemonic}”
              </p>
            </div>

            {inspectingHerb.dosageAndUsage && (
              <div className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <strong className="text-stone-800">用法用量：</strong>
                {inspectingHerb.dosageAndUsage}
              </div>
            )}

            {inspectingHerb.contraindications && (
              <div className="text-xs text-rose-800 bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
                <strong>使用注意/禁忌：</strong>
                {inspectingHerb.contraindications}
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => {
                  const herbId = inspectingHerb.id;
                  setInspectingHerb(null);
                  onStartCustomDrill([herbId]);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors"
              >
                进入背诵此药材
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

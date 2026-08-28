import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Repeat1,
  Shuffle,
  Volume2,
  VolumeX,
  Clock,
  ListMusic,
  Scroll,
  Tag,
  FlaskConical,
  Headphones,
  Search,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Layers,
  Flame,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FormulaItem, CardProgress } from '../types';
import { FORMULA_CATEGORIES_LIST } from '../data/formulas';
import { sound } from '../utils/sound';

interface FormulaWalkmanProps {
  formulas: FormulaItem[];
  progressMap: Record<string, CardProgress>;
  onStartCustomDrill: (formulaIds: string[]) => void;
  initialFormulaId?: string;
}

export const FormulaWalkman: React.FC<FormulaWalkmanProps> = ({
  formulas,
  progressMap,
  onStartCustomDrill,
  initialFormulaId,
}) => {
  // Category & search filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Playlist derived from filters
  const playlist = useMemo(() => {
    return formulas.filter((f) => {
      const matchCat = selectedCategory === 'all' || f.category === selectedCategory;
      const term = searchTerm.trim().toLowerCase();
      const matchSearch =
        !term ||
        f.name.toLowerCase().includes(term) ||
        (f.mnemonic && f.mnemonic.toLowerCase().includes(term)) ||
        f.subCategory.toLowerCase().includes(term) ||
        (Array.isArray(f.indications) && f.indications.some((ind) => ind.toLowerCase().includes(term)));
      return matchCat && matchSearch;
    });
  }, [formulas, selectedCategory, searchTerm]);

  // Current playing index in playlist
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (initialFormulaId) {
      const idx = formulas.findIndex((f) => f.id === initialFormulaId);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });

  // Playback settings
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playMode, setPlayMode] = useState<'sequence' | 'repeatOne' | 'shuffle'>('sequence');
  const [playSpeed, setPlaySpeed] = useState<number>(0.88);
  const [repeatCountPerItem, setRepeatCountPerItem] = useState<number>(1);
  const [intervalSeconds, setIntervalSeconds] = useState<number>(2);
  const [sleepTimerMinutes, setSleepTimerMinutes] = useState<number | null>(null);

  // Play state refs to prevent re-render cancellation bugs
  const timerTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const playSpeedRef = useRef<number>(playSpeed);
  const repeatCountRef = useRef<number>(repeatCountPerItem);
  const intervalSecondsRef = useRef<number>(intervalSeconds);
  const playModeRef = useRef<'sequence' | 'repeatOne' | 'shuffle'>(playMode);
  const playlistRef = useRef<FormulaItem[]>(playlist);
  const currentIndexRef = useRef<number>(currentIndex);

  // Keep refs synchronized
  isPlayingRef.current = isPlaying;
  playSpeedRef.current = playSpeed;
  repeatCountRef.current = repeatCountPerItem;
  intervalSecondsRef.current = intervalSeconds;
  playModeRef.current = playMode;
  playlistRef.current = playlist;
  currentIndexRef.current = currentIndex;

  const currentFormula: FormulaItem | undefined =
    playlist[currentIndex] || playlist[0] || formulas[0];

  // Sleep timer countdown
  useEffect(() => {
    if (!sleepTimerMinutes) return;
    const ms = sleepTimerMinutes * 60 * 1000;
    const timer = setTimeout(() => {
      sound.stopSpeech();
      setIsPlaying(false);
      setSleepTimerMinutes(null);
    }, ms);
    return () => clearTimeout(timer);
  }, [sleepTimerMinutes]);

  // Robust play function that doesn't suffer from closure race conditions
  const playTrack = useCallback((index: number, repeatNum = 0) => {
    if (timerTimeoutRef.current) {
      clearTimeout(timerTimeoutRef.current);
      timerTimeoutRef.current = null;
    }

    const currentList = playlistRef.current;
    if (!currentList || currentList.length === 0) return;

    const targetIndex = index >= 0 && index < currentList.length ? index : 0;
    const formula = currentList[targetIndex];
    if (!formula) return;

    sound.speakFormula(
      formula.name,
      formula.mnemonic || formula.mnemonicHtml || '',
      () => {
        if (!isPlayingRef.current) return;

        // Check repeated playback for the current item
        if (repeatNum < repeatCountRef.current - 1) {
          timerTimeoutRef.current = setTimeout(() => {
            if (isPlayingRef.current) {
              playTrack(targetIndex, repeatNum + 1);
            }
          }, intervalSecondsRef.current * 1000);
          return;
        }

        // Advance to next song according to mode
        timerTimeoutRef.current = setTimeout(() => {
          if (!isPlayingRef.current) return;

          const currentMode = playModeRef.current;
          const list = playlistRef.current;
          if (!list || list.length === 0) return;

          if (currentMode === 'repeatOne') {
            playTrack(targetIndex, 0);
          } else if (currentMode === 'shuffle') {
            const nextIdx = Math.floor(Math.random() * list.length);
            setCurrentIndex(nextIdx);
            playTrack(nextIdx, 0);
          } else {
            // Sequence
            const nextIdx = (targetIndex + 1) % list.length;
            setCurrentIndex(nextIdx);
            playTrack(nextIdx, 0);
          }
        }, intervalSecondsRef.current * 1000);
      },
      playSpeedRef.current
    );
  }, []);

  const handleTogglePlay = () => {
    if (isPlaying) {
      sound.stopSpeech();
      if (timerTimeoutRef.current) {
        clearTimeout(timerTimeoutRef.current);
        timerTimeoutRef.current = null;
      }
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playTrack(currentIndexRef.current, 0);
    }
  };

  const handleNext = () => {
    if (timerTimeoutRef.current) {
      clearTimeout(timerTimeoutRef.current);
      timerTimeoutRef.current = null;
    }
    const list = playlistRef.current;
    if (!list || list.length === 0) return;

    let nextIdx = 0;
    if (playModeRef.current === 'shuffle') {
      nextIdx = Math.floor(Math.random() * list.length);
    } else {
      nextIdx = (currentIndexRef.current + 1) % list.length;
    }
    setCurrentIndex(nextIdx);

    if (isPlayingRef.current) {
      playTrack(nextIdx, 0);
    } else {
      sound.stopSpeech();
    }
  };

  const handlePrev = () => {
    if (timerTimeoutRef.current) {
      clearTimeout(timerTimeoutRef.current);
      timerTimeoutRef.current = null;
    }
    const list = playlistRef.current;
    if (!list || list.length === 0) return;

    const prevIdx = (currentIndexRef.current - 1 + list.length) % list.length;
    setCurrentIndex(prevIdx);

    if (isPlayingRef.current) {
      playTrack(prevIdx, 0);
    } else {
      sound.stopSpeech();
    }
  };

  const handleSelectTrack = (idx: number) => {
    if (timerTimeoutRef.current) {
      clearTimeout(timerTimeoutRef.current);
      timerTimeoutRef.current = null;
    }
    setCurrentIndex(idx);
    setIsPlaying(true);
    playTrack(idx, 0);
  };

  const cyclePlayMode = () => {
    if (playMode === 'sequence') setPlayMode('repeatOne');
    else if (playMode === 'repeatOne') setPlayMode('shuffle');
    else setPlayMode('sequence');
  };

  // Stop speech when component unmounts
  useEffect(() => {
    return () => {
      sound.stopSpeech();
      if (timerTimeoutRef.current) {
        clearTimeout(timerTimeoutRef.current);
        timerTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6 text-stone-850 animate-fade-in">
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 flex items-center gap-2.5">
            <Headphones className="text-amber-600 animate-pulse" size={28} />
            <span>方歌随身听</span>
            <span className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
              收录 {formulas.length} 首经典名方
            </span>
          </h2>
        </div>

        {currentFormula && (
          <button
            type="button"
            onClick={() => onStartCustomDrill([currentFormula.id])}
            className="self-start sm:self-auto px-4 py-2 rounded-xl text-xs font-serif font-bold bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <BookOpen size={15} />
            <span>背诵当前方剂（{currentFormula.name}）</span>
          </button>
        )}
      </div>

      {/* 2. Main Walkman Stage: Left = Big Player & Lyrics; Right = Interactive Playlist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Player Console & Lyrics Display (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Main Visual Player Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50/60 via-white to-amber-50/40 border-2 border-amber-300 p-6 sm:p-8 shadow-sm space-y-6 text-stone-850">
            {/* Top Badge & Track Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-serif font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
                  {currentFormula?.category} · {currentFormula?.subCategory}
                </span>
                {currentFormula?.source && (
                  <span className="text-xs text-stone-600 font-serif">
                    《{currentFormula.source}》
                  </span>
                )}
              </div>

              <span className="text-xs font-mono font-bold text-stone-700 bg-white px-2.5 py-1 rounded-xl border border-stone-300 shadow-2xs">
                {currentIndex + 1} / {playlist.length} 首
              </span>
            </div>

            {/* Current Formula Title */}
            <div className="text-center space-y-2 py-2">
              <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-900 tracking-wider">
                {currentFormula?.name}
              </h1>
              {currentFormula?.pinyin && (
                <p className="text-xs sm:text-sm font-mono text-stone-600">
                  [{currentFormula.pinyin}]
                </p>
              )}
            </div>

            {/* Lyrics Card: 【歌诀】 with Herb highlighting */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-amber-300 shadow-inner">
              <div className="text-xs text-amber-800 font-serif font-bold mb-2 flex items-center justify-center gap-1.5">
                <Scroll size={15} />
                <span>【歌诀】</span>
              </div>
              <div
                className="text-lg sm:text-2xl font-serif font-medium text-stone-900 leading-relaxed text-center tracking-wide [&_u]:text-amber-800 [&_u]:font-bold [&_u]:underline [&_u]:underline-offset-4 [&_b]:text-amber-800"
                dangerouslySetInnerHTML={{ __html: currentFormula?.mnemonicHtml || '' }}
              />
            </div>

            {/* Indications Summary (主治) */}
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs text-stone-800 font-serif leading-relaxed">
              <span className="text-amber-800 font-bold">【主治】：</span>
              <span>
                {Array.isArray(currentFormula?.indications)
                  ? currentFormula.indications.join('；')
                  : (currentFormula?.indications || '')}
              </span>
            </div>

            {/* Sound Wave Animation Visualizer */}
            <div className="h-8 flex items-center justify-center gap-1.5">
              {[0.4, 0.7, 0.3, 0.9, 0.6, 1.0, 0.5, 0.8, 0.4, 0.9, 0.6, 0.3].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying ? [6, 28 * h, 6] : 4,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5 + (i % 4) * 0.15,
                    ease: 'easeInOut',
                  }}
                  className={`w-1.5 rounded-full ${
                    isPlaying ? 'bg-amber-600' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>

            {/* Core Media Controls */}
            <div className="space-y-4 pt-2 border-t border-stone-200">
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                {/* Play Mode toggle */}
                <button
                  type="button"
                  onClick={cyclePlayMode}
                  className="p-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors shadow-2xs cursor-pointer"
                  title={
                    playMode === 'sequence'
                      ? '当前：顺序播放全部'
                      : playMode === 'repeatOne'
                      ? '当前：单首方歌循环'
                      : '当前：随机播放'
                  }
                >
                  {playMode === 'sequence' && <Repeat size={20} />}
                  {playMode === 'repeatOne' && <Repeat1 size={20} className="text-amber-700" />}
                  {playMode === 'shuffle' && <Shuffle size={20} className="text-amber-700" />}
                </button>

                {/* Prev */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 active:scale-95 transition-all shadow-2xs cursor-pointer"
                  title="上一首方歌"
                >
                  <SkipBack size={24} />
                </button>

                {/* Play/Pause Main Button */}
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="p-5 sm:p-6 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold shadow-lg shadow-amber-600/30 active:scale-95 transition-all cursor-pointer"
                  title={isPlaying ? '暂停播放' : '开始顺序播放'}
                >
                  {isPlaying ? (
                    <Pause size={32} className="fill-white" />
                  ) : (
                    <Play size={32} className="fill-white translate-x-0.5" />
                  )}
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 active:scale-95 transition-all shadow-2xs cursor-pointer"
                  title="下一首方歌"
                >
                  <SkipForward size={24} />
                </button>

                {/* Speed toggle */}
                <button
                  type="button"
                  onClick={() => {
                    if (playSpeed === 0.75) setPlaySpeed(0.88);
                    else if (playSpeed === 0.88) setPlaySpeed(1.0);
                    else if (playSpeed === 1.0) setPlaySpeed(1.2);
                    else setPlaySpeed(0.75);
                  }}
                  className="px-3 py-2.5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-xs font-mono text-amber-900 font-bold border border-stone-300 transition-colors shadow-2xs cursor-pointer"
                  title="调节朗读语速"
                >
                  {playSpeed}x 语速
                </button>
              </div>

              {/* Auxiliary Settings Bar: Repetition, Interval, Timer */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-700 font-serif bg-stone-50 p-3 rounded-2xl border border-stone-200">
                {/* Repeat count per song */}
                <div className="flex items-center gap-1.5">
                  <span className="text-stone-800 font-medium">每首重播：</span>
                  {[1, 2, 3].map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setRepeatCountPerItem(cnt)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-sans transition-all cursor-pointer ${
                        repeatCountPerItem === cnt
                          ? 'bg-amber-600 text-white font-bold shadow-xs'
                          : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {cnt}遍
                    </button>
                  ))}
                </div>

                {/* Pause interval */}
                <div className="flex items-center gap-1.5">
                  <span className="text-stone-800 font-medium">首间停顿：</span>
                  <select
                    value={intervalSeconds}
                    onChange={(e) => setIntervalSeconds(Number(e.target.value))}
                    className="bg-white text-stone-800 rounded-lg px-2 py-1 text-xs border border-stone-300 focus:outline-none focus:border-amber-600"
                  >
                    <option value={1}>1 秒</option>
                    <option value={2}>2 秒</option>
                    <option value={3}>3 秒</option>
                    <option value={5}>5 秒</option>
                  </select>
                </div>

                {/* Sleep Timer */}
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-amber-700" />
                  <span className="text-stone-800 font-medium">定时关闭：</span>
                  <select
                    value={sleepTimerMinutes === null ? 'off' : sleepTimerMinutes}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSleepTimerMinutes(val === 'off' ? null : Number(val));
                    }}
                    className="bg-white text-stone-800 rounded-lg px-2 py-1 text-xs border border-stone-300 focus:outline-none focus:border-amber-600"
                  >
                    <option value="off">不限时</option>
                    <option value={15}>15 分钟</option>
                    <option value={30}>30 分钟</option>
                    <option value={45}>45 分钟</option>
                    <option value={60}>60 分钟</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Category Filter & Playlist (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-stone-200 rounded-3xl p-5 shadow-sm space-y-4 text-stone-800">
            {/* Playlist Header & Search */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                  <ListMusic size={18} className="text-amber-600" />
                  <span>播放列表</span>
                  <span className="text-xs font-mono text-amber-800 font-bold">({playlist.length}首)</span>
                </h3>
                {selectedCategory !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className="text-xs text-amber-700 hover:underline font-serif font-bold cursor-pointer"
                  >
                    显示全部
                  </button>
                )}
              </div>

              {/* Search input in playlist */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={15} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentIndex(0);
                  }}
                  placeholder="快速筛选方剂名、歌诀、主治..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white shadow-2xs"
                />
              </div>

              {/* Category pills switcher */}
              <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setCurrentIndex(0);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-serif transition-colors cursor-pointer ${
                    selectedCategory === 'all'
                      ? 'bg-amber-600 text-white font-bold shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  全部
                </button>
                {FORMULA_CATEGORIES_LIST.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentIndex(0);
                    }}
                    className={`px-2 py-1 rounded-lg text-xs font-serif transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-amber-600 text-white font-bold shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Playlist Table */}
            <div className="max-h-[460px] overflow-y-auto space-y-1.5 pr-1 font-serif">
              {playlist.length === 0 ? (
                <div className="text-center py-8 text-stone-500 text-xs font-serif">
                  暂无匹配方剂
                </div>
              ) : (
                playlist.map((f, idx) => {
                  const isCurrent = idx === currentIndex;
                  const prog = progressMap[f.id];
                  const isMastered = prog?.status === 'mastered';

                  return (
                    <div
                      key={f.id}
                      onClick={() => handleSelectTrack(idx)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isCurrent
                          ? 'bg-amber-50 border-amber-400 text-amber-950 shadow-xs font-bold'
                          : 'bg-white border-stone-200 text-stone-800 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <span className="font-mono text-xs text-stone-400 w-5 shrink-0">
                          {idx + 1}
                        </span>
                        <div className="truncate">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-stone-900 truncate">{f.name}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-stone-100 text-stone-700 font-sans shrink-0 border border-stone-200">
                              {f.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-600 truncate font-serif mt-0.5">
                            {f.mnemonic.replace(/<[^>]*>/g, '')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        {isMastered && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-sans font-medium">
                            已掌握
                          </span>
                        )}
                        {isCurrent && isPlaying ? (
                          <span className="text-amber-700 flex items-center gap-1 text-xs font-bold font-sans">
                            <Volume2 size={15} className="animate-pulse" />
                          </span>
                        ) : null}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

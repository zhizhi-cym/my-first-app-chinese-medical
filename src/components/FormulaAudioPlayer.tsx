import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Minimize2,
  Maximize2,
  X,
  ListMusic,
  Sparkles,
  Scroll,
  Tag,
  FlaskConical,
  Flame,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FormulaItem } from '../types';
import { sound } from '../utils/sound';

interface FormulaAudioPlayerProps {
  formulas: FormulaItem[];
  isOpen: boolean;
  onClose: () => void;
  initialFormulaId?: string;
  activeCategory?: string;
}

export const FormulaAudioPlayer: React.FC<FormulaAudioPlayerProps> = ({
  formulas,
  isOpen,
  onClose,
  initialFormulaId,
  activeCategory,
}) => {
  // Filter playlist based on category if specified
  const [filterCategory, setFilterCategory] = useState<string>(activeCategory || 'all');
  const playlist = React.useMemo(() => {
    if (filterCategory === 'all') return formulas;
    return formulas.filter((f) => f.category === filterCategory);
  }, [formulas, filterCategory]);

  // Current playing index
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
  const [playSpeed, setPlaySpeed] = useState<number>(0.88); // 0.75, 0.88, 1.0, 1.2
  const [repeatCountPerItem, setRepeatCountPerItem] = useState<number>(1); // 1, 2, 3 times
  const [intervalSeconds, setIntervalSeconds] = useState<number>(2); // 1s, 2s, 3s
  const [sleepTimerMinutes, setSleepTimerMinutes] = useState<number | null>(null);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showPlaylistDrawer, setShowPlaylistDrawer] = useState<boolean>(false);

  // Play state refs to prevent re-render speech cancellation
  const timerTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const playSpeedRef = useRef<number>(playSpeed);
  const repeatCountRef = useRef<number>(repeatCountPerItem);
  const intervalSecondsRef = useRef<number>(intervalSeconds);
  const playModeRef = useRef<'sequence' | 'repeatOne' | 'shuffle'>(playMode);
  const playlistRef = useRef<FormulaItem[]>(playlist);
  const currentIndexRef = useRef<number>(currentIndex);

  // Synchronize refs
  isPlayingRef.current = isPlaying;
  playSpeedRef.current = playSpeed;
  repeatCountRef.current = repeatCountPerItem;
  intervalSecondsRef.current = intervalSeconds;
  playModeRef.current = playMode;
  playlistRef.current = playlist;
  currentIndexRef.current = currentIndex;

  const currentFormula: FormulaItem | undefined = playlist[currentIndex] || playlist[0];

  // Sync initial index if passed
  useEffect(() => {
    if (initialFormulaId) {
      const idx = playlist.findIndex((f) => f.id === initialFormulaId);
      if (idx >= 0) setCurrentIndex(idx);
    }
  }, [initialFormulaId, playlist]);

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

  // Stop speech when player is closed
  useEffect(() => {
    if (!isOpen) {
      sound.stopSpeech();
      if (timerTimeoutRef.current) {
        clearTimeout(timerTimeoutRef.current);
        timerTimeoutRef.current = null;
      }
      setIsPlaying(false);
    }
  }, [isOpen]);

  // Core Play logic for a single formula
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

        // Check repetition per item
        if (repeatNum < repeatCountRef.current - 1) {
          timerTimeoutRef.current = setTimeout(() => {
            if (isPlayingRef.current) {
              playTrack(targetIndex, repeatNum + 1);
            }
          }, intervalSecondsRef.current * 1000);
          return;
        }

        // Determine next track based on playMode
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

  const cyclePlayMode = () => {
    if (playMode === 'sequence') setPlayMode('repeatOne');
    else if (playMode === 'repeatOne') setPlayMode('shuffle');
    else setPlayMode('sequence');
  };

  const allCategories = React.useMemo(() => {
    const set = new Set<string>();
    formulas.forEach((f) => set.add(f.category));
    return Array.from(set);
  }, [formulas]);

  if (!isOpen) return null;

  // ================= MINIMIZED FLOATING BAR =================
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 animate-fade-in shadow-2xl">
        <div className="bg-white border-2 border-amber-500 rounded-2xl p-3 flex items-center gap-3 text-stone-900 shadow-2xl">
          <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 font-serif font-bold text-base shrink-0 relative overflow-hidden">
            <FlaskConical size={20} />
            {isPlaying && (
              <span className="absolute inset-0 bg-amber-500/20 animate-pulse" />
            )}
          </div>

          <div className="max-w-[150px] sm:max-w-[200px] truncate">
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-sm text-stone-900 truncate">
                {currentFormula?.name}
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
                {currentIndex + 1}/{playlist.length}
              </span>
            </div>
            <p className="text-[11px] text-stone-500 truncate font-serif">
              {currentFormula?.category} · 顺序播放中
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              title="上一首"
            >
              <SkipBack size={16} />
            </button>
            <button
              type="button"
              onClick={handleTogglePlay}
              className="p-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white shadow-md active:scale-95"
              title={isPlaying ? '暂停' : '播放'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="translate-x-0.5" />}
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              title="下一首"
            >
              <SkipForward size={16} />
            </button>
          </div>

          <div className="flex items-center gap-1 border-l border-stone-200 pl-2">
            <button
              type="button"
              onClick={() => setIsMinimized(false)}
              className="p-1.5 rounded-lg text-stone-400 hover:text-amber-700 hover:bg-stone-100"
              title="展开随身听播放器"
            >
              <Maximize2 size={16} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-stone-100"
              title="关闭音频"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ================= EXPANDED MODAL VIEW =================
  return (
    <div className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in overflow-y-auto">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white border border-stone-200 rounded-3xl p-5 sm:p-7 shadow-2xl text-stone-900 flex flex-col justify-between min-h-[580px] my-auto"
      >
        {/* Top Header & Mode controls */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
              <Scroll size={18} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 flex items-center gap-2">
                <span>方歌顺序随身听</span>
                <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
                  {currentIndex + 1} / {playlist.length} 首
                </span>
              </h3>
              <p className="text-[11px] text-stone-500 font-sans">
                支持连续顺播 · 磨耳朵强化背诵
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Category filter dropdown */}
            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setCurrentIndex(0);
              }}
              className="bg-stone-50 text-stone-800 border border-stone-300 text-xs rounded-xl px-2.5 py-1.5 font-serif focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="all">全部名方 (271首)</option>
              {allCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setShowPlaylistDrawer((prev) => !prev)}
              className={`p-2 rounded-xl text-xs flex items-center gap-1 transition-colors ${
                showPlaylistDrawer
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
              title="查看当前播放列表"
            >
              <ListMusic size={16} />
            </button>

            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
              title="最小化为悬浮底栏"
            >
              <Minimize2 size={16} />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-400 hover:text-stone-700 transition-colors"
              title="关闭"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Center Main Playing Card */}
        {showPlaylistDrawer ? (
          <div className="my-4 max-h-[300px] overflow-y-auto space-y-1.5 pr-1 font-serif">
            {playlist.map((f, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <div
                  key={f.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    if (!isPlaying) setIsPlaying(true);
                  }}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    isCurrent
                      ? 'bg-amber-50 border-amber-400 text-amber-950 shadow-sm font-bold'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-stone-400 w-6">
                      {idx + 1}.
                    </span>
                    <span className="text-sm">{f.name}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-stone-100 text-stone-600 font-sans border border-stone-200">
                      {f.category}
                    </span>
                  </div>
                  {isCurrent && isPlaying && (
                    <span className="text-xs text-amber-700 flex items-center gap-1 font-sans font-bold">
                      <Volume2 size={14} className="animate-pulse" />
                      <span>正在播放</span>
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="my-auto py-5 text-center space-y-4">
            {/* Meta Category & Source */}
            <div className="flex items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-serif font-bold bg-amber-100 text-amber-900 border border-amber-300">
                {currentFormula?.category} · {currentFormula?.subCategory}
              </span>
              {currentFormula?.source && (
                <span className="text-xs text-stone-500 font-serif">
                  《{currentFormula.source}》
                </span>
              )}
            </div>

            {/* Formula Name */}
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-900 tracking-wider">
              {currentFormula?.name}
            </h2>

            {/* Rhyme Display with Highlighting */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 shadow-inner max-w-xl mx-auto">
              <div className="text-xs text-amber-800 font-serif font-bold mb-1.5 flex items-center justify-center gap-1.5">
                <Scroll size={14} />
                <span>【歌诀】</span>
              </div>
              <div
                className="text-base sm:text-xl font-serif font-medium text-stone-900 leading-relaxed tracking-wide [&_u]:text-amber-900 [&_u]:font-bold [&_u]:underline [&_u]:underline-offset-4 [&_b]:text-amber-900"
                dangerouslySetInnerHTML={{ __html: currentFormula?.mnemonicHtml || '' }}
              />
            </div>

            {/* Animated Sound Wave Visualizer when playing */}
            <div className="h-6 flex items-center justify-center gap-1">
              {[0.4, 0.8, 0.3, 0.9, 0.6, 1.0, 0.5, 0.7, 0.4].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying ? [6, 22 * h, 6] : 4,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6 + (i % 3) * 0.2,
                    ease: 'easeInOut',
                  }}
                  className={`w-1 rounded-full ${
                    isPlaying ? 'bg-amber-600' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Playback Controls & Settings */}
        <div className="space-y-4 border-t border-stone-200 pt-4">
          {/* Main Controls Row */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* Play Mode toggle */}
            <button
              type="button"
              onClick={cyclePlayMode}
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
              title={
                playMode === 'sequence'
                  ? '当前：顺序循环'
                  : playMode === 'repeatOne'
                  ? '当前：单首循环'
                  : '当前：随机播放'
              }
            >
              {playMode === 'sequence' && <Repeat size={18} />}
              {playMode === 'repeatOne' && <Repeat1 size={18} className="text-amber-700" />}
              {playMode === 'shuffle' && <Shuffle size={18} className="text-amber-700" />}
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 active:scale-95 transition-all shadow-sm"
              title="上一首"
            >
              <SkipBack size={22} />
            </button>

            {/* Play/Pause Main Button */}
            <button
              type="button"
              onClick={handleTogglePlay}
              className="p-5 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-md active:scale-95 transition-all"
              title={isPlaying ? '暂停' : '连续播放'}
            >
              {isPlaying ? (
                <Pause size={28} />
              ) : (
                <Play size={28} className="translate-x-0.5" />
              )}
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 active:scale-95 transition-all shadow-sm"
              title="下一首"
            >
              <SkipForward size={22} />
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
              className="px-2.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-mono text-amber-900 font-bold border border-stone-300 transition-colors"
              title="调节朗读语速"
            >
              {playSpeed}x
            </button>
          </div>

          {/* Quick Settings Bar (Repeat per item, Interval, Timer) */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 font-serif bg-stone-50 p-2.5 rounded-2xl border border-stone-200">
            {/* Repeat count per song */}
            <div className="flex items-center gap-1.5">
              <span>每首重播：</span>
              <button
                type="button"
                onClick={() => setRepeatCountPerItem(1)}
                className={`px-2 py-0.5 rounded-lg text-[11px] ${
                  repeatCountPerItem === 1
                    ? 'bg-amber-600 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200'
                }`}
              >
                1遍
              </button>
              <button
                type="button"
                onClick={() => setRepeatCountPerItem(2)}
                className={`px-2 py-0.5 rounded-lg text-[11px] ${
                  repeatCountPerItem === 2
                    ? 'bg-amber-600 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200'
                }`}
              >
                2遍
              </button>
              <button
                type="button"
                onClick={() => setRepeatCountPerItem(3)}
                className={`px-2 py-0.5 rounded-lg text-[11px] ${
                  repeatCountPerItem === 3
                    ? 'bg-amber-600 text-white font-bold'
                    : 'bg-white text-stone-600 border border-stone-200'
                }`}
              >
                3遍
              </button>
            </div>

            {/* Pause interval between songs */}
            <div className="flex items-center gap-1.5">
              <span>首间停顿：</span>
              <select
                value={intervalSeconds}
                onChange={(e) => setIntervalSeconds(Number(e.target.value))}
                className="bg-white text-stone-800 rounded px-1.5 py-0.5 text-[11px] border border-stone-300 focus:outline-none"
              >
                <option value={1}>1 秒</option>
                <option value={2}>2 秒</option>
                <option value={3}>3 秒</option>
                <option value={5}>5 秒</option>
              </select>
            </div>

            {/* Sleep Timer */}
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-amber-700" />
              <span>定时：</span>
              <select
                value={sleepTimerMinutes === null ? 'off' : sleepTimerMinutes}
                onChange={(e) => {
                  const val = e.target.value;
                  setSleepTimerMinutes(val === 'off' ? null : Number(val));
                }}
                className="bg-white text-stone-800 rounded px-1.5 py-0.5 text-[11px] border border-stone-300 focus:outline-none"
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
  );
};

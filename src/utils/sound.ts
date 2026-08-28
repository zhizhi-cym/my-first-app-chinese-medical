import { loadSoundEnabled } from './storage';

class SoundController {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public playCardFlip() {
    if (!loadSoundEnabled()) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(560, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // AudioContext might be blocked until user gesture
    }
  }

  public playFeedbackSound(type: 'again' | 'hard' | 'good' | 'easy') {
    if (!loadSoundEnabled()) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const gain = ctx.createGain();
      gain.connect(ctx.destination);

      if (type === 'again') {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.18);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === 'hard') {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(392, now); // G4

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        osc.connect(gain);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'good') {
        // Bright pleasant major 3rd
        [523.25, 659.25].forEach((freq, i) => { // C5, E5
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.07);

          const subGain = ctx.createGain();
          subGain.gain.setValueAtTime(0.15, now + i * 0.07);
          subGain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.2);

          osc.connect(subGain);
          subGain.connect(ctx.destination);

          osc.start(now + i * 0.07);
          osc.stop(now + i * 0.07 + 0.2);
        });
      } else {
        // Easy - sparkling triad
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => { // C5, E5, G5, C6
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.06);

          const subGain = ctx.createGain();
          subGain.gain.setValueAtTime(0.16, now + i * 0.06);
          subGain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);

          osc.connect(subGain);
          subGain.connect(ctx.destination);

          osc.start(now + i * 0.06);
          osc.stop(now + i * 0.06 + 0.25);
        });
      }
    } catch {
      // Ignore audio error
    }
  }

  public playCheckInFanfare() {
    if (!loadSoundEnabled()) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // Duolingo-style triumphant fanfare
      const notes = [
        { freq: 440, delay: 0, dur: 0.12 },      // A4
        { freq: 554.37, delay: 0.12, dur: 0.12 }, // C#5
        { freq: 659.25, delay: 0.24, dur: 0.14 }, // E5
        { freq: 880, delay: 0.38, dur: 0.35 },    // A5
      ];

      notes.forEach(({ freq, delay, dur }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + delay);

        gain.gain.setValueAtTime(0.25, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + dur);
      });
    } catch {
      // Ignore
    }
  }

  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private resumeTimer: NodeJS.Timeout | null = null;
  private activeSpeechId = 0;
  private cachedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoiceListener();
    }
  }

  private initVoiceListener() {
    try {
      this.cachedVoice = this.getChineseVoice();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => {
          this.cachedVoice = this.getChineseVoice();
        };
      }
    } catch {
      // Ignore
    }
  }

  private getChineseVoice(): SpeechSynthesisVoice | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;
    // Prefer mainland Chinese (zh-CN), then any Chinese / Mandarin
    return (
      voices.find((v) => v.lang === 'zh-CN' || v.lang === 'zh_CN') ||
      voices.find((v) => v.lang.startsWith('zh') || v.name.includes('Chinese') || v.name.includes('中文') || v.name.includes('Mandarin')) ||
      null
    );
  }

  private startResumeTimer() {
    if (this.resumeTimer) clearInterval(this.resumeTimer);
    // Chromium keep-alive: prevent 15-second speech synthesis cutoff
    this.resumeTimer = setInterval(() => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        if (window.speechSynthesis.speaking) {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          } else {
            // Briefly pause and resume to keep Chrome audio engine alive for long utterances
            window.speechSynthesis.pause();
            window.speechSynthesis.resume();
          }
        } else {
          if (this.resumeTimer) clearInterval(this.resumeTimer);
          this.resumeTimer = null;
        }
      }
    }, 2000);
  }

  public speakHerbName(name: string, onEnd?: () => void, rate = 0.88) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }
    try {
      this.stopSpeech();
      const speechId = ++this.activeSpeechId;

      const cleanText = name.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
      if (!cleanText) {
        if (onEnd) onEnd();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'zh-CN';
      utterance.rate = rate;
      utterance.pitch = 1.0;

      const voice = this.cachedVoice || this.getChineseVoice();
      if (voice) utterance.voice = voice;

      // Keep strong reference on window object to prevent Garbage Collection during speech
      this.currentUtterance = utterance;
      const win = window as unknown as { __tcm_utterances?: SpeechSynthesisUtterance[] };
      if (!win.__tcm_utterances) win.__tcm_utterances = [];
      win.__tcm_utterances.push(utterance);
      if (win.__tcm_utterances.length > 10) win.__tcm_utterances.shift();

      utterance.onend = () => {
        if (this.activeSpeechId !== speechId) return;
        this.currentUtterance = null;
        if (this.resumeTimer) {
          clearInterval(this.resumeTimer);
          this.resumeTimer = null;
        }
        if (onEnd) onEnd();
      };

      utterance.onerror = (e: SpeechSynthesisErrorEvent) => {
        if (this.activeSpeechId !== speechId) return;
        this.currentUtterance = null;
        if (this.resumeTimer) {
          clearInterval(this.resumeTimer);
          this.resumeTimer = null;
        }
        // Do not trigger onEnd if cancelled or interrupted by another action
        if (e.error === 'canceled' || e.error === 'interrupted') {
          return;
        }
        if (onEnd) onEnd();
      };

      this.startResumeTimer();
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      if (onEnd) onEnd();
    }
  }

  public speakFormula(name: string, mnemonic: string, onEnd?: () => void, rate = 0.88) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }
    try {
      this.stopSpeech();
      const speechId = ++this.activeSpeechId;

      // Extract and thoroughly clean mnemonic text from HTML tags, entities and punctuation
      let cleanMnemonic = (mnemonic || '')
        .replace(/<br\s*\/?>/gi, '，')
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&[a-z]+;/gi, ' ')
        .replace(/[\r\n\t]+/g, '，')
        .replace(/\s+/g, '，')
        .replace(/，{2,}/g, '，')
        .replace(/。{2,}/g, '。')
        .replace(/，。/g, '。')
        .replace(/。，/g, '。')
        .trim();

      cleanMnemonic = cleanMnemonic.replace(/^[，,\s]+|[，,\s]+$/g, '');

      const cleanName = (name || '').replace(/<[^>]*>/g, '').trim();
      
      // Combine formula name + full mnemonic rhyme
      let text = '';
      if (cleanName && cleanMnemonic) {
        text = `${cleanName}。${cleanMnemonic}`;
      } else {
        text = cleanName || cleanMnemonic;
      }

      if (!text.trim()) {
        if (onEnd) onEnd();
        return;
      }

      // Small delay to ensure browser speech engine unblocks after cancel()
      setTimeout(() => {
        if (this.activeSpeechId !== speechId) return;

        // Force unpause in case browser audio engine is stalled
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = rate;
        utterance.pitch = 1.0;

        const voice = this.cachedVoice || this.getChineseVoice();
        if (voice) utterance.voice = voice;

        // Keep strong reference to prevent Chromium Garbage Collection cutoff bug
        this.currentUtterance = utterance;
        const win = window as unknown as { __tcm_utterances?: SpeechSynthesisUtterance[] };
        if (!win.__tcm_utterances) win.__tcm_utterances = [];
        win.__tcm_utterances.push(utterance);
        if (win.__tcm_utterances.length > 20) win.__tcm_utterances.shift();

        let finished = false;
        const finalize = () => {
          if (finished) return;
          finished = true;
          if (this.activeSpeechId !== speechId) return;
          this.currentUtterance = null;
          if (this.resumeTimer) {
            clearInterval(this.resumeTimer);
            this.resumeTimer = null;
          }
          if (onEnd) onEnd();
        };

        utterance.onend = finalize;

        utterance.onerror = (e: SpeechSynthesisErrorEvent) => {
          if (this.activeSpeechId !== speechId) return;
          if (e.error === 'canceled' || e.error === 'interrupted') {
            return;
          }
          finalize();
        };

        this.startResumeTimer();
        window.speechSynthesis.speak(utterance);
      }, 20);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      if (onEnd) onEnd();
    }
  }

  public stopSpeech() {
    this.activeSpeechId++;
    if (this.resumeTimer) {
      clearInterval(this.resumeTimer);
      this.resumeTimer = null;
    }
    this.currentUtterance = null;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public isSpeaking(): boolean {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      return window.speechSynthesis.speaking;
    }
    return false;
  }
}

export const sound = new SoundController();

/**
 * Authoritative TCM Herb Specimen Imagery System
 * Sourced directly from 南京中医药大学中药标本馆与药用植物园图像数据库 (https://zybb.njucm.edu.cn/)
 * 
 * Images have been downloaded and bundled into /images/herbs/ with high-resolution specimen
 * archives and live remote fallback.
 */
import ZYBB_IMAGES_MAP from './zybbImages.json';

export interface HerbImageRecord {
  name: string;
  zybbUrl: string;
  localUrl: string;
}

const typedZybbMap = ZYBB_IMAGES_MAP as Record<string, HerbImageRecord>;

/**
 * Get authoritative specimen photo URL for a given herb from zybb.njucm.edu.cn
 */
export function getHerbImageUrl(herbName: string, category: string = '解表药'): string {
  if (!herbName) return '/images/herbs/herb_1.jpg';

  // 1. Direct match
  if (typedZybbMap[herbName]) {
    return typedZybbMap[herbName].localUrl || typedZybbMap[herbName].zybbUrl;
  }

  // 2. Handle compound names like '羌活、藁本' or '黄连、黄芩、黄柏' or '辛夷、苍耳子'
  const subNames = herbName.split(/[、\/，\s]/).map((s) => s.trim()).filter(Boolean);
  for (const s of subNames) {
    if (typedZybbMap[s]) {
      return typedZybbMap[s].localUrl || typedZybbMap[s].zybbUrl;
    }
  }

  // 3. Substring matching
  const keys = Object.keys(typedZybbMap);
  for (const s of subNames) {
    const matchedKey = keys.find((k) => k.includes(s) || s.includes(k));
    if (matchedKey && typedZybbMap[matchedKey]) {
      return typedZybbMap[matchedKey].localUrl || typedZybbMap[matchedKey].zybbUrl;
    }
  }

  return '/images/herbs/herb_1.jpg';
}

/**
 * Get the original remote specimen source URL from https://zybb.njucm.edu.cn/
 */
export function getHerbZybbOriginalUrl(herbName: string): string {
  if (typedZybbMap[herbName]) {
    return typedZybbMap[herbName].zybbUrl;
  }
  const clean = herbName.split(/[、\/，\s]/)[0].trim();
  if (typedZybbMap[clean]) {
    return typedZybbMap[clean].zybbUrl;
  }
  return 'https://zybb.njucm.edu.cn/';
}

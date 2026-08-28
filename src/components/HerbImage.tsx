import React, { useState } from 'react';
import { Leaf, ImageOff } from 'lucide-react';
import { getHerbImageUrl } from '../data/herbImages';

interface HerbImageProps {
  name: string;
  category?: string;
  imageUrl?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'auto';
  showBadge?: boolean;
}

export const HerbImage: React.FC<HerbImageProps> = ({
  name,
  category = '解表药',
  imageUrl,
  className = '',
  aspectRatio = 'square',
  showBadge = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const src = imageUrl || getHerbImageUrl(name, category);

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'video'
      ? 'aspect-video'
      : aspectRatio === 'wide'
      ? 'aspect-[16/9]'
      : '';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 ${aspectClass} ${className} flex items-center justify-center`}
    >
      {/* Loading Shimmer */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 animate-pulse flex items-center justify-center">
          <Leaf size={24} className="text-emerald-700/60 animate-bounce" />
        </div>
      )}

      {/* Main Image */}
      {!error ? (
        <img
          src={src}
          alt={`中药材 · ${name}`}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      ) : (
        /* Graceful Botanical Specimen Fallback */
        <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-br from-stone-900 to-stone-950 text-center">
          <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-700/50 flex items-center justify-center mb-1 text-emerald-400">
            <Leaf size={20} />
          </div>
          <span className="text-xs font-serif font-bold text-amber-200">{name}</span>
          <span className="text-[10px] text-stone-500 font-serif mt-0.5">道地本草</span>
        </div>
      )}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

      {/* Optional Badge */}
      {showBadge && (
        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-stone-950/80 backdrop-blur-sm border border-stone-700/60 text-[10px] font-serif text-amber-200">
          {name}
        </div>
      )}
    </div>
  );
};

'use client';

import { Children, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface MobileCarouselProps {
  children: React.ReactNode;
  itemCount: number;
}

export default function MobileCarousel({ children, itemCount }: MobileCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(containerCenter - slideCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = index;
        }
      });

      setActiveSlide(closest);
    };

    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [itemCount]);

  const scrollToSlide = (index: number) => {
    const slide = slideRefs.current[index];
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveSlide(index);
    }
  };

  const childArray = Children.toArray(children);

  return (
    <div className="md:hidden">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x"
      >
        {childArray.map((child, index) => (
          <div
            key={index}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="w-[calc(100%-1.5rem)] shrink-0 snap-center snap-always"
          >
            {child}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 px-2">
        <button
          type="button"
          onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
          disabled={activeSlide === 0}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {activeSlide + 1} / {itemCount}
        </span>
        <button
          type="button"
          onClick={() => scrollToSlide(Math.min(itemCount - 1, activeSlide + 1))}
          disabled={activeSlide === itemCount - 1}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

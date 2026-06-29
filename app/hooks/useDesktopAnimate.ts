'use client';

import { useEffect, useRef, useState } from 'react';

export function useDesktopAnimate() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const target = gridRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }
    );

    observer.observe(target);

    const fallback = setTimeout(() => setHasAnimated(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return { gridRef, hasAnimated };
}

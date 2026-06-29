'use client';

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { Menu, Close } from '@mui/icons-material';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
] as const;

const SCROLL_LOCK_MS = 900;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const scrollLockRef = useRef(false);
  const scrollLockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  const updateIndicator = useCallback(() => {
    const container = navRef.current;
    const indicator = indicatorRef.current;
    const activeButton = itemRefs.current.get(activeId);
    if (!container || !indicator || !activeButton) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    const x = buttonRect.left - containerRect.left;

    indicator.style.width = `${buttonRect.width}px`;
    indicator.style.transform = `translateX(${x}px) translateY(-50%)`;
    indicator.style.opacity = '1';
  }, [activeId]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, isScrolled]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateIndicator]);

  useEffect(() => {
    const detectActiveSection = () => {
      const scrollOffset = window.scrollY + window.innerHeight * 0.35;
      let current: string = NAV_ITEMS[0].id;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollOffset) {
          current = item.id;
        }
      }

      if (!scrollLockRef.current) {
        setActiveId((prev) => (prev === current ? prev : current));
      }

      setIsScrolled(window.scrollY > 50);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        detectActiveSection();
        rafRef.current = null;
      });
    };

    detectActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveId(id);
    scrollLockRef.current = true;

    if (scrollLockTimerRef.current) {
      clearTimeout(scrollLockTimerRef.current);
    }
    scrollLockTimerRef.current = setTimeout(() => {
      scrollLockRef.current = false;
    }, SCROLL_LOCK_MS);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (scrollLockTimerRef.current) clearTimeout(scrollLockTimerRef.current);
    };
  }, []);

  const nameClass = isScrolled
    ? 'text-gray-900 dark:text-white'
    : 'text-white';
  const linkClass = isScrolled
    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
    : 'text-white/90 hover:text-white';
  const menuButtonClass = isScrolled
    ? 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
    : 'text-white hover:bg-white/10';

  const indicatorClass = isScrolled
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-md shadow-blue-500/20'
    : 'bg-white/20 backdrop-blur-sm border border-white/25';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-3 md:pt-5">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border border-gray-200/80 dark:border-gray-700/80'
            : 'bg-black/20 backdrop-blur-md border border-white/20 shadow-md'
        }`}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 py-5 min-h-[72px] md:min-h-[72px]">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg sm:text-xl md:text-2xl font-bold truncate max-w-[55%] sm:max-w-none transition-colors ${nameClass}`}
          >
            Muhammad Ali Raza
          </button>

          {/* Desktop Navigation */}
          <div ref={navRef} className="relative hidden md:flex items-center gap-1 lg:gap-2">
            <div
              ref={indicatorRef}
              className={`absolute top-1/2 left-0 h-9 lg:h-10 rounded-lg pointer-events-none will-change-[transform,width] transition-[transform,width] duration-200 ease-[cubic-bezier(0.33,1,0.68,1)] opacity-0 ${indicatorClass}`}
              style={{ transform: 'translateX(0px) translateY(-50%)' }}
            />

            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    if (el) itemRefs.current.set(item.id, el);
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative z-10 text-sm lg:text-base px-3 lg:px-4 py-2 rounded-lg transition-colors duration-200 font-medium whitespace-nowrap ${
                    isActive ? 'text-white' : linkClass
                  } ${!isActive ? 'hover:bg-black/5 dark:hover:bg-white/5' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2.5 rounded-lg transition-colors ${menuButtonClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <Close className="text-2xl" /> : <Menu className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out px-4 sm:px-6 ${
            isMobileMenuOpen
              ? 'max-h-[min(32rem,calc(100dvh-6rem))] opacity-100 pb-5 overflow-y-auto'
              : 'max-h-0 opacity-0 pb-0 overflow-hidden'
          }`}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 px-2 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-all font-medium py-3 px-4 rounded-lg text-base ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

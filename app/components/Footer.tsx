'use client';

import { useRef, useState, useEffect } from 'react';
import { Email } from '@mui/icons-material';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Email, href: 'mailto:ar1356592@gmail.com', label: 'Email' },
  ];

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12">
      <div
        className={`container mx-auto px-6 transition-opacity duration-300 ${
          hasAnimated ? 'animate-morph-in-from-bottom' : 'opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              Muhammad Ali Raza - Full Stack Developer with 3 years of experience building modern, scalable web applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Muhammad Ali Raza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


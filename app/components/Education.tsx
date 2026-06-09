'use client';

import { useRef, useState, useEffect } from 'react';
import { School, CalendarToday, LocationOn } from '@mui/icons-material';

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'Bachelor in Computer Science',
      major: 'Computer Science',
      institution: 'Shaheed Zulfiqar Ali Bhutto Institute of Science & Technology (SZABIST ISB)',
      location: 'Islamabad, Pakistan',
      period: '2019 - 2023',
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          <div className="bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 text-white">
            <div
              className={`text-center mb-8 md:mb-12 transition-opacity duration-300 ${
                hasAnimated ? 'animate-morph-in-center' : 'opacity-0'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Education
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-2">
                Academic background and qualifications
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {education.map((edu, index) => {
                const bottomDelayClasses = [
                  'animate-morph-in-from-bottom-delay-1',
                  'animate-morph-in-from-bottom-delay-2',
                  'animate-morph-in-from-bottom-delay-3',
                ];
                return (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 transition-opacity duration-300 ${
                    hasAnimated ? bottomDelayClasses[Math.min(index, 2)] : 'opacity-0'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 md:mr-6 flex-shrink-0">
                      <School className="text-2xl sm:text-2xl md:text-3xl text-white" />
                    </div>
                    <div className="flex-1 w-full">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-base sm:text-lg text-blue-100 mb-3 md:mb-4 font-semibold">
                        {edu.major}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-blue-100 text-sm sm:text-base">
                          <School className="mr-2 text-sm flex-shrink-0" />
                          <span className="font-medium break-words">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-blue-100 text-xs sm:text-sm">
                          <LocationOn className="mr-2 text-sm flex-shrink-0" />
                          <span className="break-words">{edu.location}</span>
                        </div>
                        <div className="flex items-center text-blue-100 text-xs sm:text-sm">
                          <CalendarToday className="mr-2 text-sm flex-shrink-0" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { useRef, useState, useEffect } from 'react';
import { Work, CalendarToday, LocationOn } from '@mui/icons-material';

export default function Experience() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'e-strats',
      location: 'Islamabad, Pakistan',
      period: 'Jun 2024 - Present',
      description: [
        'Developed and maintained full-stack web applications using React.js, Next.js, Node.js, and Express.js',
        'Integrated RESTful APIs and GraphQL for secure communication between frontend and backend systems',
        'Built responsive interfaces using Tailwind CSS and Material UI with cross-device compatibility',
        'Implemented state management using Redux Toolkit, Zustand, and Context API',
        'Worked with MongoDB, MySQL, and PostgreSQL on schema design, query optimization, and data consistency',
        'Developed and managed webhooks and real-time features using WebSockets and Socket.io',
        'Contributed to backend services, modular APIs, and deployment via Docker, Vercel, Heroku, and Railway',
        'Collaborated with cross-functional teams following Agile practices, code reviews, and sprint planning',
      ],
    },
    {
      title: 'Associate Full Stack Developer',
      company: 'JashabSoft Pvt Ltd',
      location: 'Islamabad, Pakistan',
      period: 'May 2023 - Apr 2024',
      description: [
        'Assisted in developing web applications using React.js for frontend and Node.js/Express.js for backend services',
        'Built responsive UI components using React.js, Tailwind CSS, and Material UI',
        'Integrated and consumed RESTful APIs to fetch and display dynamic data',
        'Worked with MongoDB and PostgreSQL on basic schema design, queries, and data validation',
        'Supported application testing, debugging, and deployment using Vercel and Heroku',
        'Collaborated with senior developers and followed Agile development practices',
      ],
    },
  ];

  useEffect(() => {
    const refs = cardRefs.current.filter((el): el is HTMLDivElement => el != null);
    if (refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = entry.target.getAttribute('data-experience-index');
          if (index === null) return;
          const i = parseInt(index, 10);
          setVisibleCards((prev) => {
            const next = [...prev];
            if (!next[i]) {
              next[i] = true;
              return next;
            }
            return prev;
          });
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [experiences.length]);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            3 years of professional experience building scalable web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-experience-index={index}
                className="relative mb-12 md:mb-16"
              >
                <div className="md:flex items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`md:ml-24 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
                      visibleCards[index] ? 'animate-experience-morph-from-left' : 'opacity-0'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                          <Work className="mr-2 text-lg" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                          <LocationOn className="mr-1 text-sm" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                          <CalendarToday className="mr-1 text-sm" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


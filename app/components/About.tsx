'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Code, Storage, CloudQueue } from '@mui/icons-material';

export default function About() {
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

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Storage,
      title: 'Database Management',
      description: 'Designing and optimizing database schemas for performance and scalability',
    },
    {
      icon: CloudQueue,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-opacity duration-300 ${
            hasAnimated ? 'animate-morph-in-center' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className={`flex justify-center md:mt-[3.75rem] transition-opacity duration-300 ${
              hasAnimated ? 'animate-morph-in-from-left' : 'opacity-0'
            }`}
          >
            <div className="relative w-64 sm:w-72 md:w-80 aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Picsart_26-06-09_12-49-44-736.png"
                alt="Muhammad Ali Raza - Full Stack Developer"
                fill
                className="object-contain rounded-lg bg-gray-100 dark:bg-gray-800"
                priority
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>

          <div
            className={`transition-opacity duration-300 ${
              hasAnimated ? 'animate-morph-in-from-right' : 'opacity-0'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Muhammad Ali Raza
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I am a Full-Stack Developer with 3 years of experience designing and developing scalable web applications
              across both frontend and backend. Proficient in JavaScript and TypeScript, with strong expertise in the MERN
              stack and Next.js for building modern, high-performance applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Experienced in creating responsive user interfaces with React.js and Next.js, and developing secure backend
              services and RESTful APIs using Node.js, Express.js, NestJS, Python, Flask, and FastAPI. Skilled in real-time
              features with WebSockets and Socket.io, and state management using Redux Toolkit, Zustand, and Context API.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I work with MongoDB, PostgreSQL, MySQL, and SQL Server, with experience in database design, query optimization,
              and deployment using Docker, Azure, AWS, Vercel, Heroku, and Railway — following clean architecture and scalable
              system design principles.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Icon className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
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


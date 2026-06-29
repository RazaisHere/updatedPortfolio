'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Storage, Cloud, Settings, Web } from '@mui/icons-material';
import { useDesktopAnimate } from '@/app/hooks/useDesktopAnimate';
import MobileCarousel from '@/app/components/MobileCarousel';

const tools = [
  { name: 'GitHub', image: '/Logos/GitHub.png' },
  { name: 'VS Code', image: '/Logos/Visual Studio Code (VS Code).png' },
  { name: 'Cursor AI', image: '/Logos/Cursor.svg' },
  { name: 'Claude Code', image: '/Logos/Claude.svg' },
  { name: 'AWS', image: '/Logos/AWS.png' },
  { name: 'MongoDB', image: '/Logos/MongoDB.png' },
  { name: 'PostgreSQL', image: '/Logos/PostgresSQL.png' },
  { name: 'Vercel', image: '/Logos/Vercel.png' },
  { name: 'Heroku', image: '/Logos/Heroku.png' },
  { name: 'Postman', image: '/Logos/Postman.png' },
  { name: 'Git', image: '/Logos/Git.png' },
  { name: 'Node.js', image: '/Logos/Node.js.png' },
  { name: 'Express', image: '/Logos/Express.png' },
  { name: 'React', image: '/Logos/React.png' },
  { name: 'Next.js', image: '/Logos/Next.js.png' },
  { name: 'JavaScript', image: '/Logos/JavaScript.png' },
  { name: 'TypeScript', image: '/Logos/TypeScript.png' },
  { name: 'HTML5', image: '/Logos/HTML5.png' },
  { name: 'CSS3', image: '/Logos/CSS3.png' },
  { name: 'Tailwind CSS', image: '/Logos/Tailwind CSS.png' },
  { name: 'Material UI', image: '/Logos/Material UI.png' },
  { name: 'GraphQL', image: '/Logos/GraphQL.png' },
  { name: 'Firebase', image: '/Logos/Firebase.png' },
  { name: 'MySQL', image: '/Logos/MySQL.png' },
  { name: 'Nest.js', image: '/Logos/Nest.js.png' },
  { name: 'Python', image: '/Logos/Python.svg' },
  { name: 'Flask', image: '/Logos/Flask.svg' },
  { name: 'FastAPI', image: '/Logos/FastAPI.svg' },
  { name: 'Vite', image: '/Logos/Vite.js.png' },
  { name: 'NPM', image: '/Logos/NPM.png' },
  { name: 'Linux', image: '/Logos/Linux.png' },
  { name: 'Jira', image: '/Logos/Jira.png' },
  { name: 'Slack', image: '/Logos/Slack.png' },
];

const duplicatedTools = [...tools, ...tools];

const skillCategories = [
  {
    title: 'Frontend',
    icon: Web,
    skills: [
      'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React Js', 'Next Js',
      'Material UI', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit', 'Zustand', 'Context API',
    ],
    color: 'blue',
  },
  {
    title: 'Backend',
    icon: Storage,
    skills: [
      'Node Js', 'Express Js', 'Nest Js', 'Python', 'Flask', 'FastAPI',
      'REST APIs', 'GraphQL', 'WebSockets', 'Socket.io', 'Webhooks',
    ],
    color: 'green',
  },
  {
    title: 'Databases & Cloud',
    icon: Cloud,
    skills: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server', 'TypeORM', 'Redis',
      'Azure', 'AWS', 'Docker', 'CI/CD', 'Vercel', 'Heroku', 'Railway',
    ],
    color: 'purple',
  },
  {
    title: 'Tools & Practices',
    icon: Settings,
    skills: [
      'VS Code', 'Cursor AI', 'Claude Code', 'Git', 'GitHub', 'Azure DevOps',
      'Postman', 'Agile Development', 'Code Review', 'API Integration',
    ],
    color: 'orange',
  },
];

const CORE_COMPETENCIES = [
  'Problem Solving', 'Team Collaboration', 'Code Review', 'Agile Development',
  'Version Control', 'API Integration', 'Real-time Systems', 'Performance Optimization',
];

const getColorClasses = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
  };
  return colors[color] || colors.blue;
};

function SkillCategoryCard({
  category,
  isMobile = false,
}: {
  category: (typeof skillCategories)[0];
  isMobile?: boolean;
}) {
  const Icon = category.icon;
  const visibleSkills = isMobile ? category.skills.slice(0, 6) : category.skills;

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg h-full ${
        isMobile ? 'p-4 active:scale-[0.98] transition-transform' : 'p-6 hover:shadow-xl transition-shadow'
      }`}
    >
      <div
        className={`${getColorClasses(category.color)} rounded-lg flex items-center justify-center mb-4 ${
          isMobile ? 'w-12 h-12' : 'w-16 h-16'
        }`}
      >
        <Icon className={isMobile ? 'text-xl' : 'text-2xl'} />
      </div>
      <h3 className={`font-bold text-gray-900 dark:text-white mb-3 ${isMobile ? 'text-lg' : 'text-xl mb-4'}`}>
        {category.title}
      </h3>
      <ul className="space-y-2">
        {visibleSkills.map((skill, skillIndex) => (
          <li
            key={skillIndex}
            className={`text-gray-600 dark:text-gray-400 flex items-center ${isMobile ? 'text-sm' : ''}`}
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 shrink-0" />
            {skill}
          </li>
        ))}
        {isMobile && category.skills.length > 6 && (
          <li className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            +{category.skills.length - 6} more
          </li>
        )}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { gridRef, hasAnimated } = useDesktopAnimate();
  const competenciesRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-2">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        {/* Logo strip — all viewports */}
        <div className="mb-12 md:mb-16 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedTools.map((tool, index) => (
                <div key={index} className="flex-shrink-0 mx-4 md:mx-6 flex flex-col items-center justify-center group">
                  <div className="w-20 h-20 md:w-32 md:h-32 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center mb-2 md:mb-4 transition-all duration-300 md:hover:bg-gray-50 md:dark:hover:bg-gray-800 md:hover:scale-110 md:hover:shadow-lg p-3 md:p-4">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      width={80}
                      height={80}
                      className="object-contain w-10 h-10 md:w-20 md:h-20"
                    />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile category carousel */}
        <MobileCarousel itemCount={skillCategories.length}>
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} isMobile />
          ))}
        </MobileCarousel>

        {/* Desktop grid */}
        <div ref={gridRef} className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const delayClass = [
              'animate-morph-in-from-bottom-delay-1',
              'animate-morph-in-from-bottom-delay-2',
              'animate-morph-in-from-bottom-delay-3',
              'animate-morph-in-from-bottom-delay-4',
            ][index];

            return (
              <div
                key={category.title}
                className={hasAnimated ? delayClass : 'md:opacity-0'}
              >
                <SkillCategoryCard category={category} />
              </div>
            );
          })}
        </div>

        {/* Core competencies */}
        <div
          ref={competenciesRef}
          className={`mt-10 md:mt-12 bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg ${
            hasAnimated ? 'md:animate-morph-in-from-bottom-delay-5' : 'md:opacity-0'
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {CORE_COMPETENCIES.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

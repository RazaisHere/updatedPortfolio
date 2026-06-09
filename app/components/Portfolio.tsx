'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Code as CodeIcon } from '@mui/icons-material';
import { projects } from '@/app/data/projects';
import { getTechLogo } from '@/app/utils/techLogos';

const BATCH_SIZE = 3;
const BOTTOM_MORPH_DELAY_CLASSES = [
  'animate-morph-in-from-bottom-delay-1',
  'animate-morph-in-from-bottom-delay-2',
  'animate-morph-in-from-bottom-delay-3',
] as const;

export default function Portfolio() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const batchStartRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleBatches, setVisibleBatches] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const featuredProjects = [
    projects.find(p => p.slug === 'motive'),
    projects.find(p => p.slug === 'intersight'),
    projects.find(p => p.slug === 'nexkey'),
    projects.find(p => p.slug === 'maidslife'),
    projects.find(p => p.slug === 'cakeshares'),
    projects.find(p => p.slug === 'smartfolio'),
  ].filter(Boolean) as typeof projects;

  useEffect(() => {
    const batchCount = Math.ceil(featuredProjects.length / BATCH_SIZE);
    const refs = batchStartRefs.current.filter((el): el is HTMLDivElement => el != null).slice(0, batchCount);
    if (refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const batchIndex = parseInt(entry.target.getAttribute('data-batch-index') ?? '', 10);
          if (Number.isNaN(batchIndex)) return;
          setVisibleBatches((prev) => {
            if (prev.has(batchIndex)) return prev;
            return new Set([...prev, batchIndex]);
          });
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [featuredProjects.length]);

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <Link
      href={`/projects/${project.slug}`}
      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group h-full flex flex-col cursor-pointer"
    >
      <div className="relative h-64 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 overflow-hidden">
        {imageErrors[index] ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
            <CodeIcon className="text-white text-6xl opacity-50" />
          </div>
        ) : (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            onError={() => handleImageError(index)}
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          {project.technologies.slice(0, 6).map((tech, techIndex) => {
            const logoSrc = getTechLogo(tech);
            return logoSrc ? (
              <span
                key={techIndex}
                className="inline-flex items-center justify-center w-10 h-10 p-1.5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:scale-110 transition-transform"
                title={tech}
              >
                <Image
                  src={logoSrc}
                  alt={tech}
                  width={28}
                  height={28}
                  className="object-contain"
                  unoptimized
                />
              </span>
            ) : (
              <span
                key={techIndex}
                className="px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold shadow-sm"
              >
                {tech}
              </span>
            );
          })}
          {project.technologies.length > 6 && (
            <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my skills and expertise
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const batchIndex = Math.floor(index / BATCH_SIZE);
              const isBatchStart = index % BATCH_SIZE === 0;
              const isVisible = visibleBatches.has(batchIndex);
              const morphClass = isVisible ? BOTTOM_MORPH_DELAY_CLASSES[index % BATCH_SIZE] : 'opacity-0';
              return (
                <div
                  key={project.slug}
                  ref={isBatchStart ? (el) => { batchStartRefs.current[batchIndex] = el; } : undefined}
                  data-batch-index={isBatchStart ? batchIndex : undefined}
                  className={`transition-opacity duration-300 ${morphClass}`}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

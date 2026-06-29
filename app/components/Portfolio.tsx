'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Code as CodeIcon } from '@mui/icons-material';
import { projects } from '@/app/data/projects';
import { getTechLogo } from '@/app/utils/techLogos';
import { useDesktopAnimate } from '@/app/hooks/useDesktopAnimate';
import MobileCarousel from '@/app/components/MobileCarousel';

const BATCH_SIZE = 3;
const BOTTOM_MORPH_DELAY_CLASSES = [
  'animate-morph-in-from-bottom-delay-1',
  'animate-morph-in-from-bottom-delay-2',
  'animate-morph-in-from-bottom-delay-3',
] as const;

const featuredProjects = [
  projects.find((p) => p.slug === 'motive'),
  projects.find((p) => p.slug === 'intersight'),
  projects.find((p) => p.slug === 'nexkey'),
  projects.find((p) => p.slug === 'maidslife'),
  projects.find((p) => p.slug === 'cakeshares'),
  projects.find((p) => p.slug === 'smartfolio'),
].filter(Boolean) as typeof projects;

function ProjectCard({
  project,
  index,
  imageErrors,
  onImageError,
  isMobile = false,
}: {
  project: (typeof projects)[0];
  index: number;
  imageErrors: Record<number, boolean>;
  onImageError: (index: number) => void;
  isMobile?: boolean;
}) {
  const techLimit = isMobile ? 4 : 6;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl group h-full flex flex-col cursor-pointer ${
        isMobile
          ? 'active:scale-[0.98] transition-transform'
          : 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3'
      }`}
    >
      <div
        className={`relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 overflow-hidden ${
          isMobile ? 'h-44' : 'h-64'
        }`}
      >
        {imageErrors[index] ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
            <CodeIcon className={`text-white opacity-50 ${isMobile ? 'text-4xl' : 'text-6xl'}`} />
          </div>
        ) : (
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className={`object-cover opacity-90 transition-all duration-500 ${
              isMobile ? '' : 'group-hover:opacity-100 group-hover:scale-110'
            }`}
            onError={() => onImageError(index)}
            unoptimized
          />
        )}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      <div className={`flex-1 flex flex-col ${isMobile ? 'p-4' : 'p-8'}`}>
        <h3
          className={`font-bold text-gray-900 dark:text-white mb-2 transition-colors ${
            isMobile
              ? 'text-lg line-clamp-2'
              : 'text-2xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400'
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-gray-600 dark:text-gray-400 leading-relaxed flex-1 ${
            isMobile ? 'text-sm mb-4 line-clamp-3' : 'text-base mb-6'
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          {project.technologies.slice(0, techLimit).map((tech, techIndex) => {
            const logoSrc = getTechLogo(tech);
            return logoSrc ? (
              <span
                key={techIndex}
                className={`inline-flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 ${
                  isMobile ? 'w-8 h-8 p-1' : 'w-10 h-10 p-1.5 hover:scale-110 transition-transform'
                }`}
                title={tech}
              >
                <Image
                  src={logoSrc}
                  alt={tech}
                  width={isMobile ? 22 : 28}
                  height={isMobile ? 22 : 28}
                  className="object-contain"
                  unoptimized
                />
              </span>
            ) : (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold shadow-sm"
              >
                {tech}
              </span>
            );
          })}
          {project.technologies.length > techLimit && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold">
              +{project.technologies.length - techLimit}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const batchStartRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleBatches, setVisibleBatches] = useState<Set<number>>(new Set());
  const { gridRef, hasAnimated } = useDesktopAnimate();

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    const batchCount = Math.ceil(featuredProjects.length / BATCH_SIZE);
    const refs = batchStartRefs.current
      .filter((el): el is HTMLDivElement => el != null)
      .slice(0, batchCount);
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
      { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }
    );

    refs.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 md:mb-6 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-2">
            A collection of projects showcasing my skills and expertise
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-10 text-center">
            Featured Projects
          </h3>

          {/* Mobile carousel */}
          <MobileCarousel itemCount={featuredProjects.length}>
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                imageErrors={imageErrors}
                onImageError={handleImageError}
                isMobile
              />
            ))}
          </MobileCarousel>

          {/* Desktop grid */}
          <div ref={gridRef} className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const batchIndex = Math.floor(index / BATCH_SIZE);
              const isBatchStart = index % BATCH_SIZE === 0;
              const isVisible = visibleBatches.has(batchIndex) || hasAnimated;
              const morphClass = isVisible
                ? BOTTOM_MORPH_DELAY_CLASSES[index % BATCH_SIZE]
                : 'md:opacity-0';

              return (
                <div
                  key={project.slug}
                  ref={
                    isBatchStart
                      ? (el) => {
                          batchStartRefs.current[batchIndex] = el;
                        }
                      : undefined
                  }
                  data-batch-index={isBatchStart ? batchIndex : undefined}
                  className={`transition-opacity duration-300 ${morphClass}`}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    imageErrors={imageErrors}
                    onImageError={handleImageError}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

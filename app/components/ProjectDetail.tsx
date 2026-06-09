'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowBack, CalendarToday, Business, Person, Code as CodeIcon } from '@mui/icons-material';
import { useState } from 'react';
import type { Project } from '@/app/data/projects';
import { getTechLogo } from '@/app/utils/techLogos';
import Footer from './Footer';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8 group"
        >
          <ArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-gray-900 dark:bg-gray-950">
        <div className="relative w-full h-full flex items-center justify-center">
          {imageErrors[currentImageIndex] ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
              <CodeIcon className="text-white text-8xl opacity-50" />
            </div>
          ) : (
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              onError={() => handleImageError(currentImageIndex)}
              unoptimized
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
        </div>

        {/* Image Navigation */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <ArrowBack />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all z-10 rotate-180"
              aria-label="Next image"
            >
              <ArrowBack />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentImageIndex === index
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-sm md:text-base text-gray-200 max-w-3xl">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Company */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <Business className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Company</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{project.company}</p>
            </div>

            {/* Role */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <Person className="text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Role</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{project.role}</p>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <CalendarToday className="text-pink-600 dark:text-pink-400 mr-3" />
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Timeline</h3>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {project.timeline.startDate} - {project.timeline.endDate}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.timeline.duration}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            {project.fullDescription}
          </p>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Technologies & Skills</h2>
          <div className="flex flex-wrap gap-4 items-center">
            {project.technologies.map((tech, index) => {
              const logoSrc = getTechLogo(tech);
              return logoSrc ? (
                <span
                  key={index}
                  className="inline-flex items-center justify-center w-14 h-14 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:scale-110 transition-transform"
                  title={tech}
                >
                  <Image
                    src={logoSrc}
                    alt={tech}
                    width={36}
                    height={36}
                    className="object-contain"
                    unoptimized
                  />
                </span>
              ) : (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Responsibilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.responsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}


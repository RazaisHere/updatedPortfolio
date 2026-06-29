'use client';

import {
  Web,
  Storage,
  CloudQueue,
  Code,
  Api,
  Settings,
  ArrowForward,
} from '@mui/icons-material';
import { useDesktopAnimate } from '@/app/hooks/useDesktopAnimate';
import MobileCarousel from '@/app/components/MobileCarousel';

const CARD_DELAY_CLASSES = [
  'animate-morph-in-from-bottom-delay-1',
  'animate-morph-in-from-bottom-delay-2',
  'animate-morph-in-from-bottom-delay-3',
  'animate-morph-in-from-bottom-delay-4',
  'animate-morph-in-from-bottom-delay-5',
  'animate-morph-in-from-bottom-delay-6',
] as const;

const services = [
  {
    icon: Web,
    title: 'Frontend Development',
    description:
      'Building responsive, modern interfaces with React, Next.js, TypeScript, and component-based UI libraries.',
  },
  {
    icon: Code,
    title: 'Backend Development',
    description:
      'Developing secure, scalable server-side applications with Node.js, Express, NestJS, Python, Flask, and FastAPI.',
  },
  {
    icon: Storage,
    title: 'Database Management',
    description:
      'Designing and optimizing database schemas with MongoDB, PostgreSQL, MySQL, SQL Server, and TypeORM.',
  },
  {
    icon: CloudQueue,
    title: 'Cloud Solutions',
    description:
      'Designing and deploying scalable cloud-based solutions on AWS, Azure, Docker, and CI/CD pipelines.',
  },
  {
    icon: Api,
    title: 'API Development',
    description:
      'Developing robust RESTful and GraphQL APIs with webhooks, WebSockets, and real-time integrations.',
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description:
      'Providing ongoing maintenance, updates, and technical support for existing applications.',
  },
];

function ServiceCard({
  service,
  isMobile = false,
}: {
  service: (typeof services)[0];
  isMobile?: boolean;
}) {
  const Icon = service.icon;

  return (
    <div
      className={`bg-gray-50 dark:bg-gray-800 rounded-xl h-full ${
        isMobile
          ? 'p-4 active:scale-[0.98] transition-transform'
          : 'p-8 hover:shadow-xl transition-all transform hover:-translate-y-2'
      }`}
    >
      <div
        className={`bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 ${
          isMobile ? 'w-12 h-12' : 'w-16 h-16 mb-6'
        }`}
      >
        <Icon className={`text-blue-600 dark:text-blue-400 ${isMobile ? 'text-2xl' : 'text-3xl'}`} />
      </div>
      <h3 className={`font-bold text-gray-900 dark:text-white mb-2 ${isMobile ? 'text-lg' : 'text-xl mb-4'}`}>
        {service.title}
      </h3>
      <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${isMobile ? 'text-sm line-clamp-4' : ''}`}>
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  const { gridRef, hasAnimated } = useDesktopAnimate();

  return (
    <section id="services" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-2">
            Comprehensive solutions to bring your ideas to life
          </p>
        </div>

        {/* Mobile carousel */}
        <MobileCarousel itemCount={services.length}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} isMobile />
          ))}
        </MobileCarousel>

        {/* Desktop grid */}
        <div ref={gridRef} className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={hasAnimated ? CARD_DELAY_CLASSES[index] : 'md:opacity-0'}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 md:mt-16 text-center ${
            hasAnimated ? 'md:animate-morph-in-from-bottom-cta' : 'md:opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 rounded-xl p-8 md:p-16 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Do you have a Project Idea?
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Let&apos;s discuss your project!
            </h3>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects and creative ideas. Let&apos;s
              connect and build something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
            >
              Let&apos;s work Together
              <ArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

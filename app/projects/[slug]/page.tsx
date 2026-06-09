import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/app/data/projects';
import ProjectDetail from '@/app/components/ProjectDetail';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string }
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string }
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}


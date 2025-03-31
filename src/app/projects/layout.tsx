import type { Metadata } from 'next';
import ProjectsPage from './page';

export const metadata: Metadata = {
  title: 'Projects | Personal Portfolio',
  description: 'A showcase of my data science and business analytics projects',
};

export default function ProjectsLayout() {
  return <ProjectsPage />;
} 
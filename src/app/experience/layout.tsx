import type { Metadata } from 'next';
import ExperiencePage from './page';

export const metadata: Metadata = {
  title: 'Experience | Personal Portfolio',
  description: 'My professional journey and experience',
};

export default function ExperienceLayout() {
  return <ExperiencePage />;
} 
import type { Metadata } from 'next';
import ExtracurricularsPage from './page';

export const metadata: Metadata = {
  title: 'Extracurriculars | Personal Portfolio',
  description: 'My extracurricular activities and interests',
};

export default function ExtracurricularsLayout() {
  return <ExtracurricularsPage />;
} 
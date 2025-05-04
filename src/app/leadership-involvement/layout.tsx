import type { Metadata } from 'next';
import LeadershipInvolvementPage from './page';

export const metadata: Metadata = {
  title: 'Leadership & Involvement | Personal Portfolio',
  description: 'My leadership roles and involvement activities',
};

export default function LeadershipInvolvementLayout() {
  return <LeadershipInvolvementPage />;
}
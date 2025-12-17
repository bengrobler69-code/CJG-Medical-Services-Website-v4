import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | CJG Medical Services Ltd',
  description: 'Comprehensive occupational health services including pre-employment medicals, health surveillance, drug testing, and mental health assessments.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



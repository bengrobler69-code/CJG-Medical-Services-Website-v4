import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | CJG Medical Services Ltd',
  description: 'Learn about CJG Medical Services, one of the UK\'s leading providers of occupational health and wellbeing programs since 2013.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



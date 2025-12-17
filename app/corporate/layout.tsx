import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Solutions | CJG Medical Services Ltd',
  description: 'Tailored occupational health programs for every industry. Enhance compliance, reduce absence, and strengthen workplace wellbeing.',
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



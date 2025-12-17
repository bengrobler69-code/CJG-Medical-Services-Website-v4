import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | CJG Medical Services Ltd',
  description: 'Get in touch with CJG Medical Services. Speak to our team about your occupational health needs.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="topbar w-full fixed top-0 left-0 z-40 bg-[#081B2C]/95 backdrop-blur-md border-b border-teal-500/20">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="font-bold text-xl text-teal-400 font-heading flex-shrink-0">
          CJG Medical Services
        </Link>
        {/* Navigation Links - Visible on all screen sizes */}
        <div className="flex nav-links flex-1 justify-evenly items-center">
          {navigationLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="nav-link relative group"
            >
              {link.name}
              <span className="glow-animation" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}


import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Pre-Employment Medicals', href: '/services#pre-employment' },
    { name: 'Health Surveillance', href: '/services#surveillance' },
    { name: 'Mental Health Assessments', href: '/services#mental-health' },
    { name: 'Return-to-Work Assessments', href: '/services#rtw' },
    { name: 'Ergonomic Assessments', href: '/services#ergonomic' },
  ];

  return (
    <footer className="relative bg-[#081B2C] border-t border-teal-500/20">
      {/* Wave Animation */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 Q360,10 720,50 T1440,50 L1440,100 L0,100 Z"
            fill="#081B2C"
            className="animate-[wave_15s_ease-in-out_infinite]"
          />
          <style jsx>{`
            @keyframes wave {
              0%, 100% { transform: translateX(0) translateY(0); }
              50% { transform: translateX(-50px) translateY(-10px); }
            }
          `}</style>
        </svg>
      </div>

      <div className="w-full px-8 py-20 relative z-10">
        {/* Newsletter */}
        <div className="mb-20 flex flex-col lg:flex-row items-center justify-between bg-[#081B2C] p-8 border border-teal-500/30 relative shadow-lg">
          <div
            className="flex-1 mb-6 lg:mb-0"
            style={{ marginLeft: '3.5rem' }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <Mail className="w-6 h-6 text-teal-400 animate-bounce" />
              <h3 className="text-2xl font-bold font-heading text-white">
                Stay Updated
              </h3>
            </div>
            <p
              className="text-white/70"
              style={{ marginTop: '-1rem !important' }} // Explicitly move text up with !important
            >
              Get the latest occupational health insights delivered to your inbox
            </p>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row gap-3 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm bg-white/10 border border-teal-400/40 text-white placeholder-white/50 focus:outline-none focus:border-teal-400 transition-colors rounded-full"
              />
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 px-4 py-2 text-sm bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all group border border-teal-400/40"
                style={{ minWidth: '110px' }}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          <div className="absolute inset-0 pointer-events-none border border-teal-500/30" style={{ zIndex: 1 }} />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-teal-400 transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-teal-400 transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-1" />
                <span className="text-white/70">
                  International House<br />
                  55 Longsmith Street<br />
                  Gloucester, GL1 2HT
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <a
                  href="tel:08002345678"
                  className="text-white/70 hover:text-teal-400 transition-colors"
                >
                  0800 234 5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <a
                  href="mailto:info@cjgmedical.co.uk"
                  className="text-white/70 hover:text-teal-400 transition-colors"
                >
                  info@cjgmedical.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © 2025 CJG Medical Services Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-teal-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-teal-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-white/40 text-xs text-center">
              Website created by Ben. Need a website? Contact{' '}
              <a 
                href="mailto:benbussiness@gmail.com" 
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                benbussiness@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


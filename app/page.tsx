'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Stethoscope, 
  Heart, 
  Briefcase, 
  ArrowDown, 
  CheckCircle,
  ChevronRight,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Home() {
  const [count, setCount] = useState(0);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    // Counter animation
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 10000) {
          return prev + 100;
        }
        return prev;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Stethoscope,
      title: 'Occupational Medicals',
      description: 'Comprehensive fitness-to-work assessments',
      color: 'from-teal-500 to-cyan-400',
    },
    {
      icon: Heart,
      title: 'Health Surveillance',
      description: 'Ongoing monitoring for workplace hazards',
      color: 'from-lime-400 to-green-300',
    },
    {
      icon: Briefcase,
      title: 'Employee Wellbeing',
      description: 'Holistic support for your workforce',
      color: 'from-purple-500 to-pink-400',
    },
  ];

  const industries = [
    'Construction',
    'Logistics',
    'Education',
    'Manufacturing',
    'Office',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Director',
      company: 'TechCorp Industries',
      quote: 'CJG Medical Services transformed our employee health program. Their expertise and professionalism are unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager',
      company: 'Global Logistics Ltd',
      quote: 'The health surveillance program saved us from potential safety incidents. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      role: 'People & Culture Lead',
      company: 'EducationFirst',
      quote: 'Working with CJG has been seamless. They truly care about workplace wellbeing.',
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#081B2C] via-[#003D3D] to-[#081B2C]"
          animate={{
            background: [
              'linear-gradient(135deg, #081B2C 0%, #003D3D 50%, #081B2C 100%)',
              'linear-gradient(135deg, #081B2C 0%, #003D3D 100%, #081B2C 0%)',
              'linear-gradient(135deg, #081B2C 0%, #003D3D 50%, #081B2C 100%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { size: 200, left: '10%', top: '20%' },
            { size: 300, left: '70%', top: '10%' },
            { size: 400, left: '30%', top: '60%' },
            { size: 500, left: '80%', top: '50%' },
            { size: 600, left: '20%', top: '80%' },
          ].map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-400/20 blur-3xl"
              style={{
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                left: orb.left,
                top: orb.top,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Floating Medical Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { Icon: Stethoscope, delay: 0 },
            { Icon: Heart, delay: 1 },
            { Icon: Briefcase, delay: 2 },
          ].map(({ Icon, delay }, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay, duration: 2 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Icon className="w-32 h-32 text-teal-500/20" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Blending Overlay - Smooth transition to next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 61, 61, 0.5) 50%, #003D3D 100%)'
          }}
        />

        {/* Main Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{ opacity, scale }}
        >
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-wide bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent"
          >
            Protecting Your Workforce.
            <br />
            Elevating Their Health.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive occupational health solutions tailored for every industry
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/contact"
              className="btn-global group bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-xl hover:shadow-2xl hover:shadow-teal-500/50 transition-all transform hover:scale-105"
            >
              <span>Book a Consultation</span>
              <span>&nbsp;</span> {/* Add space */}
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="btn-global group border-2 border-teal-400 text-white rounded-xl hover:bg-teal-400/10 transition-all"
            >
              Explore Our Services
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-10 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8 text-teal-400 animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* Merged Highlights & Professional Workplace Health Solutions Section */}
      <section
        className="pt-24 md:pt-40 pb-20 md:pb-32 px-8 md:px-20 lg:px-32 relative"
        style={{
          background: 'linear-gradient(to bottom, #003D3D 0%, #003D3D 15%, #035054 50%, #081B2C 100%)',
        }}
      >
        {/* Top Blending Overlay - Smooth transition from hero */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #003D3D 0%, transparent 100%)'
          }}
        />
        <div className="container mx-auto max-w-6xl">
          {/* Highlights Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-24"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl min-w-[350px] max-w-[420px] mx-auto h-[285px] p-8 px-10 flex flex-col items-center justify-center text-center hover:border-teal-400/50 transition-all transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2 text-white tracking-wide px-2">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed px-2">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Workplace Health Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] bg-gradient-to-br from-teal-500/20 to-cyan-400/20 rounded-3xl flex items-center justify-center"
            >
              <div className="text-center">
                <Stethoscope className="w-32 h-32 text-teal-400 mx-auto mb-4" />
                <p className="text-white/50">Professional Medical Examination</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent tracking-wide">
                Professional Workplace Health Solutions
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                At CJG Medical Services, we believe that healthy employees are the foundation of a successful business. Our dedicated clinicians deliver measurable outcomes, helping organizations thrive through proactive healthcare.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold font-mono text-teal-400 mb-3">
                    {count.toLocaleString()}+
                  </div>
                  <p className="text-white/60 text-center">Screenings Completed</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold font-mono text-teal-400 mb-3">
                    98%
                  </div>
                  <p className="text-white/60 text-center">Client Retention</p>
                </div>
              </div>

              <Link
                href="/services"
                className="btn-global inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-500/50 transition-all"
              >
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 md:py-32 px-6 md:px-12 lg:px-20"
        style={{
          background: 'linear-gradient(to bottom, #081B2C 0%, #003D3D 100%)'
        }}
      >
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-white tracking-wide"
          >
            What Our Clients Say
          </motion.h2>

          <div className="flex justify-center w-full">
            <div
              className="flex flex-row justify-center items-stretch gap-12"
              style={{ maxWidth: '1400px', width: '100%' }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-14 min-h-[285px] flex flex-col justify-center items-center text-center hover:border-teal-400/50 transition-all testimonial-card"
                  style={{ '--testimonial-min-width': '360px', '--testimonial-max-width': '385px', minWidth: 'var(--testimonial-min-width)', maxWidth: 'var(--testimonial-max-width)', flex: '1 1 0' } as React.CSSProperties}
                >
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic leading-relaxed text-center">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-white mb-1 text-center">{testimonial.name}</p>
                    <p className="text-white/60 mb-1 text-center">{testimonial.role}</p>
                    <p className="text-teal-400 text-center">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-6 md:py-12 px-6 md:px-12 lg:px-20" // Reduced from py-12 md:py-24
        style={{
          background: 'linear-gradient(to bottom, #003D3D 0%, #003D3D 100%)'
        }}
      >
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-8 text-white tracking-wide"
          >
            Partner with CJG Medical Services
            <br />
            to build a safer, healthier workplace
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 mb-12"
          >
            Together, we can elevate employee wellbeing and drive business success
          </motion.p>
          <Link
            href="/contact"
            className="btn-global inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-medium text-lg rounded-full hover:shadow-2xl hover:shadow-teal-500/50 transition-all transform hover:scale-105"
          >
            <span>Speak to Our Team</span>
            <span>&nbsp;</span> {/* Add space */}
            <CheckCircle className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
      </main>
  );
}

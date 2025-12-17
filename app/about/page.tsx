'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Ethical, transparent, evidence-based care that you can trust',
      color: 'from-red-500 to-pink-400',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Smart technology and streamlined healthcare delivery',
      color: 'from-yellow-500 to-orange-400',
    },
    {
      icon: Users,
      title: 'Care',
      description: 'Compassion first, always putting people at the center',
      color: 'from-blue-500 to-teal-400',
    },
  ];

  const team = [
    { 
      name: 'Cornelius Grobler', 
      role: 'Co-Founder & Director', 
      specialty: 'Workplace Safety & Compliance',
      image: '/team/cornelius-grobler.jpg' // Add your image path here, e.g., '/team/cornelius-grobler.jpg'
    },
    { 
      name: 'Jaci Chapman', 
      role: 'Co-Founder & Director', 
      specialty: 'Ergonomic Risk Assessment',
      image: '/team/jaci-chapman.jpg' // Add your image path here, e.g., '/team/jaci-chapman.jpg'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081B2C] to-[#003D3D]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-gradient-to-b from-[#081B2C] via-[#003D3D] to-[#003D3D]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081B2C] via-[#003D3D] to-[#081B2C] opacity-50" />
        
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-400/10" />

        {/* Bottom Blending Overlay - smooth transition into Our Story section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #003D3D 100%)',
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-gradient-to-r from-white via-teal-200 to-cyan-300 bg-clip-text text-transparent"
          >
            Your Health. Our Expertise.
          </motion.h1>
          <p className="text-2xl text-white/80 mb-4">CJG Medical Services</p>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto" />
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#003D3D] via-[#003D3D] to-[#081B2C]">
        {/* Top Blending Overlay - smooth transition from hero section */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #003D3D 0%, transparent 100%)',
          }}
        />
        <div className="relative container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-10 text-white tracking-wide">
              Our Story
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              Incorporated in January 2024, CJG Medical Services Ltd is a dynamic occupational health and safety consultancy based in Gloucester, UK. Founded by Cornelius Grobler and Jaci Chapman, we specialize in factory and workplace safety inspections, ergonomic risk assessment, and occupational health compliance.
            </p>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              Our journey began with a commitment to ensuring that every workplace prioritizes the health and safety of its employees. We combine rigorous assessment protocols with practical, actionable solutions that protect workers and support organizational success.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              As a young, growing company, we bring fresh perspectives and innovative approaches to occupational health, while maintaining the highest standards of professionalism and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gradient-to-b from-[#081B2C] via-[#003D3D] to-[#003D3D]" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-white tracking-wide"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-teal-400/50 transition-all transform hover:scale-105 text-center flex flex-col items-center"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex justify-center items-center mb-8 group-hover:scale-110 transition-transform core-value-icon`}
                  style={{ '--icon-margin-top': '6rem', marginTop: 'var(--icon-margin-top)' } as React.CSSProperties}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white tracking-wide">
                  {value.title}
                </h3>
                <p
                  className="text-white/70 leading-relaxed"
                  style={{ marginTop: '-1rem' }} // Move text up slightly
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#003D3D] via-[#003D3D] to-[#081B2C]">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-white tracking-wide"
          >
            Meet the Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-teal-400/50 transition-all text-center"
              >
                {/* Avatar - Use image if provided inside circle, otherwise show placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-teal-500/20 to-cyan-400/20 flex items-center justify-center">
                  {member.image ? (
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-teal-500/50">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  ) : (
                    <div className="w-40 h-40 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-2 text-white group-hover:text-teal-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-teal-400 font-medium mb-2">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#081B2C] to-[#003D3D]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-8 text-white tracking-wide"
          >
            Partner With Us Today
          </motion.h2>
          <p className="text-xl text-white/70 mb-12">
            Experience the difference that genuine care and expertise make
          </p>
          <Link
            href="/contact"
            className="btn-global inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-medium text-lg rounded-full hover:shadow-2xl hover:shadow-teal-500/50 transition-all transform hover:scale-105"
          >
            <span>Get in Touch</span>
            <span>&nbsp;</span> {/* Add space */}
            <CheckCircle className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


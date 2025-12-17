'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Shield, 
  FlaskConical, 
  Brain, 
  UserCheck, 
  Monitor,
  ChevronDown,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: 'pre-employment',
      icon: UserCheck,
      title: 'Pre-Employment Medicals',
      shortDesc: 'Fitness-to-work screenings tailored to your sector',
      fullDesc: 'Our comprehensive pre-employment medical assessments ensure candidates are fit for their specific role. We evaluate physical and mental health, identify potential health risks, and provide detailed reports to help you make informed hiring decisions while protecting both employee and employer.',
      features: [
        'Sector-specific assessments',
        'Rapid turnaround times',
        'Detailed medical reports',
        'Compliance guaranteed',
      ],
      color: 'from-teal-500 to-cyan-400',
    },
    {
      id: 'surveillance',
      icon: Monitor,
      title: 'Health Surveillance',
      shortDesc: 'Ongoing assessments for noise, vibration, or hazardous exposure',
      fullDesc: 'Continuous health monitoring for employees exposed to workplace hazards. We track hearing loss, respiratory health, skin conditions, and other occupational health concerns through regular assessments and detailed record-keeping.',
      features: [
        'Regular health check-ups',
        'Hazard exposure tracking',
        'Compliance reporting',
        'Early intervention programs',
      ],
      color: 'from-blue-500 to-indigo-400',
    },
    {
      id: 'safety-audits',
      icon: FlaskConical,
      title: 'Workplace Safety Audits',
      shortDesc: 'Comprehensive safety inspections and compliance checks',
      fullDesc: 'Thorough workplace safety audits to ensure compliance with UK health and safety regulations. We conduct detailed inspections, identify hazards, and provide actionable recommendations to protect your workforce.',
      features: [
        'Comprehensive site inspections',
        'Hazard identification',
        'Compliance verification',
        'Detailed reporting',
      ],
      color: 'from-purple-500 to-pink-400',
    },
    {
      id: 'mental-health',
      icon: Brain,
      title: 'Mental Health & Stress Evaluations',
      shortDesc: 'Confidential psychological assessments',
      fullDesc: 'Professional mental health assessments and stress evaluations conducted by qualified practitioners. We provide confidential support for employees experiencing work-related stress, anxiety, or other mental health concerns.',
      features: [
        'Confidential consultations',
        'Stress risk assessments',
        'Return-to-work support',
        'Employee assistance programs',
      ],
      color: 'from-green-500 to-emerald-400',
    },
    {
      id: 'rtw',
      icon: Activity,
      title: 'Return-to-Work Assessments',
      shortDesc: 'Supporting recovery and safe reintegration',
      fullDesc: 'Expert assessments to facilitate safe and effective return to work after illness or injury. We evaluate fitness, recommend reasonable adjustments, and create phased return plans that benefit both employee and employer.',
      features: [
        'Fitness evaluations',
        'Phased return plans',
        'Workplace adjustments',
        'Ongoing support',
      ],
      color: 'from-orange-500 to-red-400',
    },
    {
      id: 'ergonomic',
      icon: Shield,
      title: 'Ergonomic & Workplace Assessments',
      shortDesc: 'Injury prevention through design and education',
      fullDesc: 'Comprehensive workplace assessments to identify and address ergonomic risks. We evaluate workstations, provide recommendations for improvements, and deliver training to reduce musculoskeletal disorders and improve productivity.',
      features: [
        'Workstation assessments',
        'Risk identification',
        'Training programs',
        'Equipment recommendations',
      ],
      color: 'from-lime-500 to-yellow-400',
    },
  ];

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081B2C] via-[#003D3D] to-[#081B2C]">
      <Navbar />

      {/* Hero Section - Continuous gradient */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-gradient-to-b from-[#081B2C] via-[#003D3D] via-[#003D3D] to-[#003D3D]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081B2C] via-[#003D3D] to-[#081B2C] opacity-50" />
        
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
            Occupational Health Expertise You Can Trust
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto max-w-xs"
          />
        </motion.div>

        {/* Bottom Blending Overlay - smooth transition into services grid */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #003D3D 100%)',
          }}
        />
      </section>

      {/* Services Grid - Same ending color as hero, blended from above */}
      <section className="relative py-24 md:py-40 px-8 md:px-20 lg:px-32 bg-gradient-to-b from-[#003D3D] via-[#003D3D] to-[#003D3D]">
        {/* Top Blending Overlay - smooth transition from hero section */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #003D3D 0%, transparent 100%)',
          }}
        />
        <div className="relative container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-16 overflow-hidden transition-all mx-auto ${
                  expandedService === service.id ? 'border-teal-400/50 shadow-2xl shadow-teal-500/20' : 'hover:border-teal-400/30'
                }`}
                style={{ width: '95%', minHeight: '400px', paddingBottom: '1rem' }} // Reduced bottom padding
              >
                <div className="flex flex-col items-center space-y-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}
                    style={{ position: 'relative', top: '3rem' }} // Use relative positioning to move the icon down
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-6 text-center">
                    <h3
                      className="text-2xl font-bold font-heading text-white tracking-wide"
                      style={{ minHeight: '3.5rem', marginBottom: '0.5rem' }} // Reduced margin below the title
                    >
                      {service.title}
                    </h3>
                    <p className="text-white/70" style={{ minHeight: '60px' }}> {/* Set consistent height */}
                      {service.shortDesc}
                    </p>
                  </div>

                  {expandedService === service.id && 
                    <div className="mt-8 space-y-8 text-center">
                      <p className="text-white/80">
                        {service.fullDesc}
                      </p>
                      <div className="space-y-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-4">
                            <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                            <span className="text-white/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Divider - Transition to next section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#003D3D] to-[#003D3D]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            className="relative"
          >
            <svg
              className="w-full h-32"
              viewBox="0 0 1200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M0,60 Q300,20 600,60 T1200,60"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
              <motion.path
                d="M0,70 Q300,90 600,70 T1200,70"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E1D3" />
                  <stop offset="50%" stopColor="#BFFF00" />
                  <stop offset="100%" stopColor="#00E1D3" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          {/* Heartbeat indicators outside SVG */}
          <div className="absolute inset-0 flex justify-around items-center px-[15%]">
            {[
              { delay: 0 },
              { delay: 0.5 },
              { delay: 1 },
            ].map((beat, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-teal-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: beat.delay }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Transition down */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#003D3D] via-[#003D3D] to-[#081B2C]">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-white"
          >
            Why Choose CJG Medical Services?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Qualified Clinicians', desc: 'Certified medical professionals' },
              { title: 'Rapid Turnaround', desc: 'Fast results and reporting' },
              { title: 'Industry Expertise', desc: 'Years of sector experience' },
              { title: 'Compliance Focus', desc: 'Always up-to-date with regulations' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center flex flex-col items-center feature-item"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-white">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Transition to footer */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#081B2C] to-[#081B2C]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-8 text-white"
          >
            Ready to Enhance Workplace Health?
          </motion.h2>
          <p className="text-xl text-white/70 mb-12">
            Speak with our team to discuss your occupational health needs
          </p>
          <Link
            href="/contact"
            className="btn-global inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-medium text-lg rounded-full hover:shadow-2xl hover:shadow-teal-500/50 transition-all transform hover:scale-105"
          >
            <span>Speak to Our Team</span>
            <span>&nbsp;</span> {/* Add space */}
            <ChevronDown className="w-6 h-6 rotate-[-90deg]" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


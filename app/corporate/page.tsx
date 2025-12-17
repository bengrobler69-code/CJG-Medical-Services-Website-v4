'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Truck, 
  GraduationCap, 
  Factory, 
  Briefcase,
  CheckCircle,
  TrendingUp,
  Shield,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Corporate() {
  const industries = [
    {
      icon: Building2,
      title: 'Construction',
      description: 'Risk assessments, lung function tests, and comprehensive health monitoring for construction workers',
      benefits: [
        'Asbestos awareness',
        'Fall prevention',
        'Hearing conservation',
        'Musculoskeletal support',
      ],
      color: 'from-orange-500 to-red-400',
    },
    {
      icon: Truck,
      title: 'Transport & Logistics',
      description: 'Driver medicals, fitness assessments, and wellness programs for transport professionals',
      benefits: [
        'DVLA compliance',
        'Driver fatigue management',
        'Ergonomic assessments',
        'Road safety training',
      ],
      color: 'from-blue-500 to-indigo-400',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Health surveillance and mental wellbeing support for teachers and support staff',
      benefits: [
        'Stress management',
        'Musculoskeletal care',
        'Workplace assessments',
        'Employee assistance',
      ],
      color: 'from-green-500 to-emerald-400',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Comprehensive health programs for manufacturing environments',
      benefits: [
        'Chemical exposure monitoring',
        'Noise protection',
        'Manual handling training',
        'Shift work health',
      ],
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: Briefcase,
      title: 'Office',
      description: 'Workplace health solutions for modern office environments',
      benefits: [
        'DSE assessments',
        'Mental health support',
        'Wellness initiatives',
        'Flexible working guidance',
      ],
      color: 'from-teal-500 to-cyan-400',
    },
  ];

  const features = [
    { icon: TrendingUp, title: 'Reduce Absenteeism', desc: 'Proactive health management' },
    { icon: Shield, title: 'Ensure Compliance', desc: 'Meet all regulatory requirements' },
    { icon: Users, title: 'Boost Wellbeing', desc: 'Happy, healthy workforce' },
    { icon: CheckCircle, title: 'Measurable Results', desc: 'Data-driven insights' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081B2C] to-[#003D3D]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081B2C] via-[#003D3D] to-[#081B2C] opacity-50" />
        
        {/* Animated Network Illustration */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { left: '10%', top: '15%', delay: 0 },
            { left: '30%', top: '25%', delay: 0.3 },
            { left: '50%', top: '35%', delay: 0.6 },
            { left: '70%', top: '20%', delay: 0.9 },
            { left: '90%', top: '45%', delay: 1.2 },
            { left: '20%', top: '60%', delay: 1.5 },
            { left: '40%', top: '70%', delay: 1.8 },
            { left: '60%', top: '55%', delay: 0.2 },
            { left: '80%', top: '75%', delay: 0.5 },
            { left: '15%', top: '85%', delay: 0.8 },
          ].map((line, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '2px',
                height: '100px',
                background: `linear-gradient(to bottom, rgba(0,225,211,0.3), transparent)`,
                left: line.left,
                top: line.top,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: line.delay,
              }}
            />
          ))}
        </div>
        
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
            Corporate Health Solutions
          </motion.h1>
          <p className="text-2xl text-white/80">
            Tailored programs for every industry
          </p>
        </motion.div>
      </section>

      {/* Dashboard Mockup Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 lg:px-32 bg-[#081B2C]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-white tracking-wide">
                Health Management Portal
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Access real-time insights, track employee health metrics, generate compliance reports, and manage your occupational health program from one centralized platform.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  'Employee health tracking',
                  'Compliance reporting',
                  'Automated reminders',
                  'Data visualization',
                  'Secure document storage',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                    <span className="text-white/70 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-500/20 to-cyan-400/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
                {/* Mock Chart */}
                <div className="space-y-4">
                  {[80, 65, 90, 75, 85].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-end space-x-2"
                    >
                      <div
                        className="flex-1 bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t-2xl opacity-70"
                        style={{ height: `${height}%` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#081B2C] to-[#003D3D]">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-white tracking-wide"
          >
            Industry-Specific Programs
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                variants={fadeInUp}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-teal-400/50 transition-all transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white tracking-wide">
                  {industry.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed max-w-prose">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#003D3D]">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-white tracking-wide"
          >
            Transform Your Workplace Health
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-white tracking-wide">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#081B2C] to-[#003D3D]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white tracking-wide">
              Enhance Compliance. Reduce Absence.
              <br />
              Strengthen Wellbeing.
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Partner with CJG Medical Services to build a safer, healthier workplace
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-12 py-5 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-medium text-lg rounded-full hover:shadow-2xl hover:shadow-teal-500/50 transition-all transform hover:scale-105"
            >
              <span>Partner With CJG Medical Services</span>
              <CheckCircle className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


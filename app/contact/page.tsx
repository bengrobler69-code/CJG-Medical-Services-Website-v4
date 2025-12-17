'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  Send,
  MessageSquare
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', company: '', email: '', service: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'Pre-Employment Medicals',
    'Health Surveillance',
    'Drug & Alcohol Testing',
    'Mental Health Assessments',
    'Return-to-Work Assessments',
    'Ergonomic Assessments',
    'General Inquiry',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#081B2C] to-[#003D3D]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081B2C] via-[#003D3D] to-[#081B2C] opacity-50" />
        
        {/* Animated Map Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: '10%', top: '20%', size: 100 },
            { left: '22%', top: '45%', size: 120 },
            { left: '34%', top: '20%', size: 140 },
            { left: '46%', top: '70%', size: 160 },
            { left: '58%', top: '45%', size: 180 },
            { left: '70%', top: '20%', size: 200 },
            { left: '82%', top: '70%', size: 220 },
            { left: '94%', top: '45%', size: 240 },
          ].map((circle, i) => (
            <motion.div
              key={i}
              className="absolute border border-teal-500/20 rounded-full"
              style={{
                left: circle.left,
                top: circle.top,
                width: `${circle.size}px`,
                height: `${circle.size}px`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 bg-teal-500 rounded-full"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
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
            Get In Touch
          </motion.h1>
          <p className="text-2xl text-white/80">
            Let's discuss your occupational health needs
          </p>
        </motion.div>
        {/* Bottom Blending Overlay - smooth transition into contact section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #003D3D 100%)',
          }}
        />
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-24 md:py-40 px-8 md:px-20 lg:px-32">
        {/* Top Blending Overlay - smooth transition from hero */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #003D3D 0%, transparent 100%)',
          }}
        />
        <div className="relative container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative px-4"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-12" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                <h2 className="text-3xl font-bold font-heading mb-10 text-white flex items-center" style={{ paddingLeft: '0.5rem' }}>
                  <MessageSquare className="w-10 h-10 mr-6 text-teal-400" />
                  Send Us a Message
                </h2>

                <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-6 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <div>
                        <p className="text-green-400 font-medium">Message sent successfully!</p>
                        <p className="text-white/60 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/70 mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-base bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-teal-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 mb-3">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-teal-400 transition-colors"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-base bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-teal-400 transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 mb-3">Service of Interest *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-base bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-teal-400 transition-colors"
                    >
                      <option value="" className="bg-[#081B2C] text-white">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#081B2C] text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 mb-3">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 text-base bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                      placeholder="Tell us about your occupational health needs..."
                    />
                  </div>

                    <div className="flex justify-center pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ maxWidth: '280px', width: '100%' }}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Container box for all contact information */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl" style={{ padding: '2rem' }}>
                <div className="mb-10">
                  <h2 className="text-3xl font-bold font-heading mb-4 text-white">
                    Contact Information
                  </h2>
                  <p className="text-xl text-white/70">
                    We're here to help. Reach out to our team through any of these channels.
                  </p>
                </div>

                <div>
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-teal-400/50 transition-all group"
                    style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 mb-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading mb-2 text-white group-hover:text-teal-400 transition-colors">
                        Office Address
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        International House<br />
                        55 Longsmith Street<br />
                        Gloucester, GL1 2HT<br />
                        United Kingdom
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:08002345678"
                    className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-teal-400/50 transition-all group"
                    style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 mb-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading mb-2 text-white group-hover:text-teal-400 transition-colors">
                        Phone
                      </h3>
                      <p className="text-white/70">0800 234 5678</p>
                      <p className="text-white/50 text-sm mt-2">Monday–Friday, 8am–6pm</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:info@cjgmedical.co.uk"
                    className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-teal-400/50 transition-all group"
                    style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 mb-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading mb-2 text-white group-hover:text-teal-400 transition-colors">
                        Email
                      </h3>
                      <p className="text-white/70">info@cjgmedical.co.uk</p>
                    </div>
                  </motion.a>

                  <div className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl" style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
                    <div className="w-14 h-14 mb-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading mb-2 text-white">
                        Business Hours
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        Monday–Friday: 8:00 AM – 6:00 PM<br />
                        Saturday–Sunday: Closed<br />
                        <span className="text-white/50 text-sm mt-2 block">
                          Emergency support available 24/7
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Prefer a call box */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-teal-500/20 to-cyan-400/20 border border-teal-500/30 rounded-2xl"
                    style={{ padding: '1.5rem' }}
                  >
                    <p className="text-white/90 font-medium">
                      Prefer a call? Reach us Monday–Friday, 8am–6pm on{' '}
                      <a href="tel:08002345678" className="text-teal-300 hover:text-teal-200 transition-colors">
                        0800 234 5678
                      </a>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


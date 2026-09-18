import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { TypewriterText } from '../components/TypewriterText';
import { SkillsGrid } from '../components/SkillsGrid';
import { ReconciliationDiagram } from '../components/ReconciliationDiagram';

export function HomePage() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <section className="pt-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <TypewriterText 
              text="Hello! I am Nafis Ahmed" 
              className="text-silver mb-4" 
              delay={0} 
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gray-500/10 blur-xl transform scale-150" />
                <img
                  src="/avatar.png"
                  alt="Profile"
                  className="relative w-[8.4rem] h-[8.4rem] rounded-full border-2 border-gray-700 object-cover"
                />
              </div>
            </motion.div>
            
            <TypewriterText 
              text="I build systems that make data trustworthy" 
              className="text-3xl md:text-4xl font-bold mb-8 text-white" 
              delay={1000} 
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Computer Science and Risk Management student at St. John's University.
              Last summer I automated an insurance premium reconciliation control on a
              data operations team — cutting cycle time by over 70% and validating to
              the penny. I work across Python, SQL and agentic tooling, and I'm most
              interested in the seam where software engineering meets data.
            </motion.p>
          </AnimatedSection>

          {/* Proof strip: the three facts worth leading with */}
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-800 border border-gray-800 rounded-lg overflow-hidden mb-8">
              {[
                { figure: '70%', label: 'reconciliation cycle time removed' },
                { figure: 'To the penny', label: 'automated output validated against manual totals' },
                { figure: '3', label: 'internships across data, AI and operations' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900/70 px-6 py-8 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.figure}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-12 text-center text-white"
            >
              What I Work With
            </motion.h2>
            <SkillsGrid />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">Selected Work</h2>
              <Link to="/work" className="text-silver hover:text-white text-sm transition-colors">
                All case studies &rarr;
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Link to="/work" className="block group mb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 md:p-8 transition-colors group-hover:border-gray-600">
                <p className="text-xs tracking-[0.2em] text-silver mb-3">DATA OPERATIONS &bull; SUMMER 2026</p>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Automating a monthly premium reconciliation control
                </h3>
                <p className="text-gray-400 mb-6 max-w-3xl">
                  A rulebook-driven Python engine that replaced a manual balancing control
                  &mdash; cycle time down over 70%, validated to the penny against the totals
                  it replaced.
                </p>
                <div className="bg-black/40 border border-gray-800 rounded-lg p-4">
                  <ReconciliationDiagram />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                meta: 'SIDE PROJECT \u00b7 IN PROGRESS',
                title: 'Multi-agent personal assistant',
                body: 'A supervisor agent routing to specialist sub-agents, with the orchestration loop written from scratch before adopting a framework.',
              },
              {
                meta: 'SIDE PROJECT',
                title: 'Digital marketing automation agent',
                body: 'Social media triage and engagement analysis, migrated from JavaScript to Python for modular integration into the Kortix platform.',
              },
            ].map((proj, i) => (
              <AnimatedSection key={proj.title}>
                <Link to="/work" className="block h-full group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="h-full bg-gray-900/50 border border-gray-800 rounded-lg p-6 transition-colors group-hover:border-gray-600"
                  >
                    <p className="text-xs tracking-[0.2em] text-silver mb-3">{proj.meta}</p>
                    <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{proj.body}</p>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Contact Me</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-8 text-silver text-center">Connect With Me</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, text: 'nafisahmed510@gmail.com', href: 'mailto:nafisahmed510@gmail.com' },
                  { icon: Linkedin, text: 'linkedin.com/in/nafisahmed510', href: 'https://linkedin.com/in/nafisahmed510' },
                  { icon: Github, text: 'github.com/nafisahmed510', href: 'https://github.com/nafisahmed510' },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 text-gray-400 hover:text-white p-6 rounded-lg border border-transparent hover:border-gray-700 transition-all bg-gray-900/50"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <contact.icon size={24} />
                    <span className="text-lg">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SkillsGrid } from '../components/SkillsGrid';

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
      <section className="pt-32 md:pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* ---- left: the words ---- */}
            <AnimatedSection>
              <div className="flex flex-wrap gap-2 mb-8">
                {['python', 'sql', 'agents', 'data ops'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
                <span className="block text-white">Hello, I&apos;m</span>
                <span className="block text-accent">Nafis Ahmed.</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-4">
                Building towards a career that blends software engineering with data,
                analytics and risk.
              </p>

              <p className="text-gray-500 leading-relaxed max-w-xl mb-10">
                My experience spans data operations, process automation and AI and agent
                development, alongside insurance and risk fundamentals. I&apos;m a computer
                science and risk management student at St. John&apos;s University who likes
                problems where the answer has to be provably right &mdash; and who would
                rather learn a new domain than settle into one.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/work" className="btn-primary">
                  See my work <ArrowRight size={16} />
                </Link>
                <a href="#contact" className="btn-secondary">Get in touch</a>
              </div>
            </AnimatedSection>

            {/* ---- right: the portrait ---- */}
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-6 bg-accent/10 blur-3xl rounded-full" />
                <div className="relative rounded-2xl border border-gray-800 bg-gray-900/40 p-2">
                  <img
                    src="/me.JPG"
                    alt="Nafis Ahmed"
                    loading="eager"
                    className="w-full rounded-xl object-cover aspect-[4/5] object-[50%_30%]"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-800 border border-gray-800 rounded-xl overflow-hidden">
              {[
                { figure: 'Data + AI', label: 'three internships across data operations, AI and technical support' },
                { figure: 'CS + Insurance', label: 'computer science with a risk management minor and two Institutes certifications' },
                { figure: 'Building', label: 'agent systems, automation tooling and this site' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-900/60 px-6 py-7"
                >
                  <div className="text-lg font-bold text-white mb-1">{stat.figure}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="label-mono mb-3">Toolkit</p>
            <motion.h2 
              className="text-3xl font-bold mb-10 text-white"
            >
              What I work with
            </motion.h2>
            <SkillsGrid />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <p className="label-mono mb-3">Selected work</p>
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="text-3xl font-bold text-white">Things I&apos;ve built</h2>
              <Link to="/work" className="text-silver hover:text-white text-sm transition-colors">
                All case studies &rarr;
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                meta: 'DATA OPERATIONS',
                title: 'Premium reconciliation engine',
                body: 'A rulebook-driven Python engine replacing a manual monthly balancing control, validated against the totals it replaced.',
              },
              {
                meta: 'SIDE PROJECT \u00b7 IN PROGRESS',
                title: 'Multi-agent personal assistant',
                body: 'A supervisor agent routing to specialist sub-agents, with the orchestration loop written from scratch before adopting a framework.',
              },
              {
                meta: 'SIDE PROJECT',
                title: 'Marketing automation agent',
                body: 'Social media triage and engagement analysis, migrated from JavaScript to Python for modular integration into Kortix.',
              },
            ].map((proj, i) => (
              <AnimatedSection key={proj.title}>
                <Link to="/work" className="block h-full group">
                  <motion.div
                    className="h-full bg-gray-900/50 border border-gray-800 rounded-lg p-6 transition-colors group-hover:border-gray-600"
                  >
                    <p className="label-mono mb-3">{proj.meta}</p>
                    <h3 className="text-lg font-bold text-white mb-3">{proj.title}</h3>
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
            <p className="label-mono mb-3">Contact</p>
            <h2 className="text-3xl font-bold mb-10 text-white">Get in touch</h2>
            <div className="max-w-2xl">
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
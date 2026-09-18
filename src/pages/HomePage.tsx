import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SkillsGrid } from '../components/SkillsGrid';
import { AvatarCave } from '../components/AvatarCave';

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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
                <span className="block text-gray-500 font-semibold text-3xl sm:text-4xl lg:text-5xl mb-2">Hello, I&apos;m</span>
                <span className="block text-white">Nafis Ahmed.</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-10">
                Building towards a career that blends software engineering with data,
                analytics and risk, with experiences spanning data operations, process
                automation and AI and agent development, alongside insurance and risk
                fundamentals.
                <span
                  aria-hidden="true"
                  className="animate-blink ml-1 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] bg-gray-500"
                />
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
              <AvatarCave />
            </AnimatedSection>
          </div>
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
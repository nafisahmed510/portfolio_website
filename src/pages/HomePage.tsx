import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { SkillsGrid } from '../components/SkillsGrid';
import { Band, BandSplit } from '../components/Band';
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

      {/* ---------------- toolkit ---------------- */}
      <Band tone="raised">
        <AnimatedSection>
          <BandSplit eyebrow="Toolkit" heading="What I work with">
            <SkillsGrid />
          </BandSplit>
        </AnimatedSection>
      </Band>

      {/* ---------------- work ---------------- */}
      <Band>
        <AnimatedSection>
          <BandSplit eyebrow="Selected work" heading="Things I've built">
            <div className="grid gap-px bg-gray-800/80 sm:grid-cols-3">
              {[
                {
                  meta: 'Data operations',
                  title: 'Premium reconciliation engine',
                  body: 'A rulebook-driven Python engine replacing a manual monthly balancing control, validated against the totals it replaced.',
                },
                {
                  meta: 'Side project \u00b7 in progress',
                  title: 'Multi-agent assistant',
                  body: 'A supervisor agent routing to specialist sub-agents, with the orchestration loop written from scratch before adopting a framework.',
                },
                {
                  meta: 'Side project',
                  title: 'Marketing automation agent',
                  body: 'Social media triage and engagement analysis, migrated from JavaScript to Python for modular integration into Kortix.',
                },
              ].map((proj) => (
                <Link
                  key={proj.title}
                  to="/work"
                  className="group block bg-ink p-6 transition-colors hover:bg-[#151515]"
                >
                  <p className="label-mono mb-4">{proj.meta}</p>
                  <h3 className="text-lg font-bold text-white mb-3">{proj.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{proj.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors group-hover:text-white">
                    Read the case study <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </BandSplit>
        </AnimatedSection>
      </Band>

      {/* ---------------- contact ---------------- */}
      <Band tone="raised" id="contact">
        <AnimatedSection>
          <BandSplit eyebrow="Contact" heading="Any question, or a role you think fits.">
            <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
              The quickest way to reach me is email. I read everything, and I answer.
            </p>
            <ul className="divide-y divide-gray-800/80 border-t border-gray-800/80">
              {[
                { icon: Mail, label: 'Email', value: 'nafisahmed510@gmail.com', href: 'mailto:nafisahmed510@gmail.com' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/nafisahmed510', href: 'https://linkedin.com/in/nafisahmed510' },
                { icon: Github, label: 'GitHub', value: 'github.com/nafisahmed510', href: 'https://github.com/nafisahmed510' },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 py-4 text-gray-300 transition-colors hover:text-white"
                  >
                    <c.icon size={16} className="text-gray-400 transition-colors group-hover:text-white" />
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-gray-400 w-24 shrink-0">
                      {c.label}
                    </span>
                    <span className="truncate">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </BandSplit>
        </AnimatedSection>
      </Band>
    </>
  );
}

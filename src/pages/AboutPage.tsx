import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Mail, Linkedin, Github } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-32 px-6 pb-24">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-8"
          >
            About me
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div>
              <img
                src="/me.JPG"
                alt="Nafis Ahmed"
                className="w-full max-w-[320px] aspect-square object-cover object-[50%_28%] rounded-xl border border-gray-800"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
            >
              <p className="text-gray-300">
                Growing up in the bustling streets of Dhaka, Bangladesh, my childhood was filled with the vibrant 
                colors of Bengali culture, the warmth of family gatherings, and the excitement of festival celebrations. 
                I'm a proud Bengali who loves to share my culture with friends, especially through our delicious cuisine 
                like Kacchi Biryani and Phuchka.
              </p>
              <p className="text-gray-300">
                My journey to America in 2023 was both thrilling and challenging. As an international student at 
                St. John's University, I've discovered a new world of opportunities while staying true to my roots. 
                When I'm not coding or studying, you'll find me on the soccer field with my intramural team - it's 
                where I've made some of my closest friends and learned that teamwork transcends cultural boundaries.
              </p>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/nafisahmed510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/nafisahmed510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:nafisahmed510@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          <AnimatedSection className="space-y-8">
            <div className="border-t border-gray-800/80 pt-8 mb-12">
              <p className="label-mono mb-4">Professional philosophy</p>
              <p className="text-gray-300">
                Technology has been my passion since childhood, starting with video games and evolving into a deep 
                fascination with AI and programming. I believe in creating technology that not only solves problems 
                but also enhances human experiences. My approach combines technical excellence with cultural awareness, 
                ensuring solutions that are both innovative and accessible.
              </p>
              <p className="text-gray-300 mt-4">
                What truly drives me is the desire to use technology to connect people and bridge cultural gaps, 
                just as I'm experiencing in my own journey between Bangladesh and America. Every project is an 
                opportunity to create meaningful impact while maintaining the highest standards of quality and efficiency.
              </p>
            </div>

            <div className="border-t border-gray-800/80 pt-8 mb-12">
              <p className="label-mono mb-3">Education</p>
              <h4 className="text-lg font-bold text-white mb-1">
                B.S. Computer Science <span className="text-gray-500">|</span> Minor in Risk Management and Insurance
              </h4>
              <p className="text-sm text-gray-400 mb-3">
                St. John&apos;s University &nbsp;|&nbsp; Class of 2027 &nbsp;|&nbsp; GPA: 3.7
              </p>
              <p className="text-gray-300 mb-3">
                Dean&apos;s List 2023&ndash;24, 2024&ndash;25, 2025&ndash;26 &nbsp;&middot;&nbsp; Peer Mentor, Project A.I.M.
                &nbsp;&middot;&nbsp; Junior Senator, Student Government &nbsp;&middot;&nbsp; President, Bengali Students Association
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-gray-300">Relevant coursework:</span> Advanced Data Structures,
                Database Management, Analysis of Algorithms, Software Design Methods,
                Discrete Mathematics, Programming Fundamentals
              </p>
            </div>

            <div className="border-t border-gray-800/80 pt-8 mb-12">
              <p className="label-mono mb-3">Certifications</p>
              <p className="text-gray-300">
                <span className="text-white font-semibold">The Institutes</span> &mdash; Insurance Essentials
                &nbsp;&middot;&nbsp; Underwriting Essentials (2026)
              </p>
            </div>

            <div className="border-t border-gray-800/80 pt-8">
              <p className="label-mono mb-6">Professional experience</p>
              <div className="space-y-8">
                <div className="border-l-2 border-gray-700 pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-white font-semibold">
                      Data Operations Intern <span className="text-gray-500">|</span> MS Transverse
                    </h4>
                    <p className="font-mono text-xs text-gray-500">Jun 2026 &ndash; Aug 2026</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 mt-3 space-y-2 text-gray-300">
                    <li>
                      Proposed and built an automated Python reconciliation engine for a key
                      monthly premium-balancing control, cutting cycle time by over 70% and
                      per-program processing from tens of minutes to under two.
                    </li>
                    <li>
                      Built a rulebook-driven knowledge base encoding reconciliation logic across
                      the program portfolio, validating automated output to the penny against
                      manual totals.
                    </li>
                    <li>
                      Deployed the engine as a deterministic, script-backed Claude Skill for
                      repeatable, auditable results; authored adoption documentation used team-wide.
                    </li>
                    <li>
                      Designed a second control rating and QC-checking automated data mappings, and
                      built a tool generating interactive Excel PivotTables for audit response.
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-800 pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-white font-semibold">
                      Artificial Intelligence Intern <span className="text-gray-500">|</span> SJ Innovation
                    </h4>
                    <p className="font-mono text-xs text-gray-500">Jul 2025 &ndash; Aug 2025</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 mt-3 space-y-2 text-gray-300">
                    <li>
                      Completed 40+ hours of applied AI training on the Collab AI platform and
                      contributed to team-delivered AI solutions using GitHub and collaborative
                      tooling.
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-800 pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-white font-semibold">
                      Additional Experience <span className="text-gray-500">|</span> St. John&apos;s University
                    </h4>
                    <p className="font-mono text-xs text-gray-500">Aug 2024 &ndash; Present</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 mt-3 space-y-2 text-gray-300">
                    <li>
                      Marketing &amp; Labs Assistant (Jan 2025&ndash;Present) &middot; A/V Assistant,
                      Summer Conference Services (May&ndash;Aug 2025) &middot; Student Worker,
                      International Admissions (Aug&ndash;Dec 2024).
                    </li>
                    <li>
                      Maintained AV systems at 95% uptime across 50+ inspected spaces, resolved 10+
                      technical issues weekly through structured work-ticket systems, and maintained
                      student information databases.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </div>
  );
}
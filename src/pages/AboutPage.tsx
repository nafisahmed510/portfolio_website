import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/AnimatedSection';
import { Mail, Linkedin, Github } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-8"
          >
            About me
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              <img
                src="/me.JPG"
                alt="Nafis Ahmed"
                className="w-full h-auto rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
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
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 mb-16">
              <h3 className="text-xl font-bold text-white mb-4">Professional Philosophy</h3>
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

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 mb-16">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-silver font-semibold mb-1">
                    B.S. Computer Science, Minor in Risk Management &amp; Insurance
                  </h4>
                  <p className="text-sm text-gray-400">
                    St. John&apos;s University &bull; Class of 2027 &bull; GPA 3.7
                  </p>
                  <p className="mt-3 text-gray-300">
                    Dean&apos;s List 2023&ndash;24 and 2024&ndash;25 &bull; Peer Mentor, Project A.I.M. &bull;
                    Junior Senator, Student Government &bull; President, Bengali Students Association
                  </p>
                  <p className="mt-3 text-gray-300">
                    <span className="text-silver">Relevant coursework:</span> Advanced Data Structures,
                    Software Design Methods, Database Management, Analysis of Algorithms,
                    Discrete Mathematics, Programming Fundamentals
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Experience</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-gray-700 pl-5">
                  <h4 className="text-silver font-semibold mb-1">Data Operations Intern</h4>
                  <p className="text-sm text-gray-400">MS Transverse &bull; Jun 2026 &ndash; Aug 2026</p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li>
                      Proposed and built an automated Python reconciliation engine for a key monthly
                      premium-balancing control, cutting cycle time by over 70% and per-program
                      processing from tens of minutes to under two.
                    </li>
                    <li>
                      Built a rulebook-driven knowledge base encoding reconciliation logic across the
                      program portfolio, validating automated output to the penny against manual totals.
                    </li>
                    <li>
                      Diagnosed and fixed root-cause data-parsing bugs &mdash; including
                      accounting-format negative values &mdash; that were silently skewing totals.
                    </li>
                    <li>
                      Deployed the engine as a deterministic, script-backed Claude Skill for repeatable,
                      auditable results, and authored the adoption documentation used team-wide.
                    </li>
                    <li>
                      Designed a second control rating and QC-checking automated data mappings, and built
                      a tool generating interactive Excel PivotTables for audit response.
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-800 pl-5">
                  <h4 className="text-silver font-semibold mb-1">Artificial Intelligence Intern</h4>
                  <p className="text-sm text-gray-400">SJ Innovation &bull; Jul 2025 &ndash; Aug 2025</p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li>
                      Completed 40+ hours of AI-focused training, working hands-on with the Collab AI
                      platform, GitHub and collaborative tooling.
                    </li>
                    <li>Collaborated on real-world AI solutions, delivering all assigned tasks on schedule.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-800 pl-5">
                  <h4 className="text-silver font-semibold mb-1">Marketing &amp; Labs Assistant</h4>
                  <p className="text-sm text-gray-400">St. John&apos;s University &bull; Jan 2025 &ndash; Present</p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li>
                      Maintain AV equipment for classes and events at 95% uptime, resolving 10+ technical
                      issues weekly.
                    </li>
                    <li>Create promotional materials and manage social media for department events.</li>
                  </ul>
                </div>

                <div className="pl-5 text-sm text-gray-500 border-l-2 border-gray-900">
                  <p className="mb-1">
                    <span className="text-gray-400">A/V Assistant</span>, Summer Conference Services,
                    St. John&apos;s University &bull; May 2025 &ndash; Aug 2025
                  </p>
                  <p>
                    <span className="text-gray-400">Student Worker</span>, International Admissions,
                    St. John&apos;s University &bull; Aug 2024 &ndash; Dec 2024
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </div>
  );
}
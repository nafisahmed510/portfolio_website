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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8 text-center"
          >
            About Me
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
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
                  <h4 className="text-silver font-semibold mb-2">Bachelor of Science in Computer Science</h4>
                  <p className="text-sm text-gray-400">St. John's University • 3.8 GPA</p>
                  <p className="mt-2 text-gray-300">
                    • Dean's List<br />
                    • Project AIM Peer Mentor<br />
                    • Relevant Coursework: Programming Fundamentals I & II (Java), Data Structures, 
                      Advanced Data Structures, Software Design Methods, Discrete Mathematics
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Professional Experience</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-silver font-semibold mb-2">CCPS Marketing and Labs Assistant</h4>
                  <p className="text-sm text-gray-400">St. John's University • Jan 2025 - Present</p>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
                    <li>Set up and maintain AV equipment for meetings and presentations</li>
                    <li>Provide technical support to professors and students</li>
                    <li>Collaborate with marketing team on social media content</li>
                    <li>Assist in organizing and executing lab events</li>
                    <li>Offer general office assistance and coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-silver font-semibold mb-2">International Admissions Office</h4>
                  <p className="text-sm text-gray-400">St. John's University • Aug 2024 - Dec 2024</p>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
                    <li>Maintained student information databases</li>
                    <li>Managed office social media accounts</li>
                    <li>Assisted international students with admissions process</li>
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
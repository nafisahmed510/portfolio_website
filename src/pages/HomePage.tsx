import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { TypewriterText } from '../components/TypewriterText';
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
              text="I'm a Software Developer" 
              className="text-4xl font-bold mb-8 text-white" 
              delay={1000} 
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Specializing in AI, LLMs, and Agentic Frameworks, with expertise in programming languages like Java, Python, and SQL. Skilled in API integration, AWS, and developing intelligent software solutions that drive innovation and efficiency.
            </motion.p>
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
              Technologies I Work With
            </motion.h2>
            <SkillsGrid />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-32">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-silver mb-2"
                  >
                    Featured Project
                  </motion.h3>
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-bold mb-4 text-white"
                  >
                    Instagram Automation & Kortix Migration
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 mb-6"
                  >
                    An advanced Instagram automation system with seamless Kortix platform migration capabilities. Built with Python, this project automates social media workflows, manages content scheduling, and provides robust API integrations for efficient social media management.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/nafisahmed510/digital-marketing-automation-agent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-silver hover:text-white"
                    >
                      <Github size={20} />
                      Code
                    </motion.a>
                  </motion.div>
                </div>
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gray-900 p-4 rounded-lg transform transition-transform hover:scale-[1.02]">
                    <img
                      src="https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80&w=1600"
                      alt="Instagram Automation Dashboard"
                      className="w-full rounded border border-gray-700"
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-silver mb-2"
                  >
                    Featured Project
                  </motion.h3>
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-bold mb-4 text-white"
                  >
                    Local AI Lab Experimentation
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 mb-6"
                  >
                    Setting up and running AI models locally on campus infrastructure. Working with Deepseek, Gemini, and Qwen models using VS Code for API integration and development.
                  </motion.p>
                </div>
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gray-900 p-4 rounded-lg transform transition-transform hover:scale-[1.02]">
                    <img
                      src="/Gaming.jpg"
                      alt="AI Lab Setup"
                      className="w-full rounded border border-gray-700"
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
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
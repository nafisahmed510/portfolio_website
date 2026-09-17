import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Define technology stack with detailed metadata
// Each technology includes:
// - name: Display name of the technology
// - logo: Path to the logo image asset
// - description: Detailed description of the technology and its use cases
const technologies = [
  { 
    name: 'React', 
    // Logo asset: React's official SVG logo
    logo: '/React-icon.svg.png',
    description: 'A JavaScript library for building user interfaces with a component-based architecture and virtual DOM for optimal performance.'
  },
  { 
    name: 'Node.js', 
    // Logo asset: Node.js hexagonal logo
    logo: '/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png',
    description: 'Server-side JavaScript runtime built on Chrome\'s V8 engine, enabling scalable network applications.'
  },
  { 
    name: 'JavaScript', 
    // Logo asset: JavaScript's official logo with transparent background
    logo: '/javascript-logo-javascript-icon-transparent-free-png.webp',
    description: 'A versatile programming language for web development, supporting both front-end and back-end development with modern ES6+ features.'
  },
  { 
    name: 'Python', 
    // Logo asset: Python's official logo without text
    logo: '/Python-logo-notext.svg.png',
    description: 'A high-level programming language known for its simplicity and extensive libraries, perfect for AI, data science, and web development.'
  },
  { 
    name: 'Java', 
    // Logo asset: Java's cup logo
    logo: '/kisspng-java-development-kit-logo-programming-language-por-java-logo-svg-1713924793188.webp',
    description: 'A robust, object-oriented programming language known for its "Write Once, Run Anywhere" capability and enterprise-scale applications.'
  },
  { 
    name: 'PostgreSQL', 
    // Logo asset: PostgreSQL elephant logo
    logo: '/Postgresql_elephant.svg.png',
    description: 'An advanced open-source relational database with strong support for JSON, extensive indexing capabilities, and ACID compliance.'
  },
  { 
    name: 'MySQL', 
    // Logo asset: MySQL dolphin logo
    logo: '/png-clipart-mysql-mysql-thumbnail.png',
    description: 'The world\'s most popular open-source relational database management system, known for its reliability and ease of use.'
  },
  { 
    name: 'HTML5', 
    // Logo asset: HTML5 shield logo with text
    logo: '/HTML5_logo_and_wordmark.svg.png',
    description: 'The latest version of HTML, providing enhanced support for multimedia, graphics, and modern web applications.'
  },
  { 
    name: 'CSS3', 
    // Logo asset: CSS3 shield logo with transparent background
    logo: '/css3-logo-png-transparent.png',
    description: 'Modern CSS with features like flexbox, grid, animations, and variables for creating responsive and beautiful web designs.'
  },
  { 
    name: 'AWS', 
    // Logo asset: AWS official logo
    logo: '/Amazon_Web_Services_Logo.svg.png',
    description: 'Leading cloud platform offering 200+ services including compute, storage, databases, ML, and serverless technologies.'
  },
  { 
    name: 'Azure', 
    // Logo asset: Microsoft Azure cloud logo
    logo: '/azure.png',
    description: 'Microsoft\'s cloud computing platform providing a wide range of services for building, testing, and managing applications.'
  },
  { 
    name: 'Google Cloud', 
    // Logo asset: Google Cloud Platform logo
    logo: '/google-cloud-icon-2048x1646-7admxejz.png',
    description: 'Google\'s suite of cloud computing services, featuring advanced AI/ML capabilities and global infrastructure.'
  },
];

export function SkillsGrid() {
  // State for managing tooltip visibility
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
      {technologies.map((tech, index) => (
        // Technology card with hover animations and tooltip
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="group relative flex flex-col items-center justify-center p-4 rounded-lg bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-gray-900/50"
          onMouseEnter={() => setActiveTooltip(tech.name)}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip(tech.name)}
          onBlur={() => setActiveTooltip(null)}
          onClick={() =>
            setActiveTooltip((current) => (current === tech.name ? null : tech.name))
          }
          tabIndex={0}
          role="button"
          aria-label={`${tech.name}: ${tech.description}`}
        >
          {/* Technology logo container with consistent sizing */}
          <div className="h-12 flex items-center justify-center mb-2">
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className="max-h-12 w-auto object-contain"
            />
          </div>
          <span className="text-sm text-gray-400 text-center">{tech.name}</span>
          
          {/* Animated tooltip with technology description */}
          <AnimatePresence>
            {activeTooltip === tech.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 max-w-[calc(100vw-2rem)] p-3 bg-gray-900 rounded-lg border border-gray-800 shadow-lg shadow-black/50 pointer-events-none z-50"
              >
                <div className="relative">
                  <p className="text-sm text-gray-300">{tech.description}</p>
                  {/* Tooltip arrow */}
                  <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-gray-900" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
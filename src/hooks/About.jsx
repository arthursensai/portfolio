import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const interestVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              className="rounded-lg shadow-xl relative z-10 mx-auto lg:mx-0 w-full h-auto"
              src="/assets/profileImage.svg"
              alt="Developer Profile Illustration"
            />
            <div className="absolute inset-0 bg-blue-100 rounded-lg transform translate-x-4 translate-y-4 -z-0"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              Hi, I'm Mohamed! A passionate full-stack developer with a deep interest in building intelligent 
              and interactive applications. My expertise lies in crafting efficient front-end experiences 
              using <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-blue-600">Tailwind CSS</span>, 
              while ensuring a strong and scalable backend with <span className="font-semibold text-blue-600">Firebase</span> and <span className="font-semibold text-blue-600">Express.js</span>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I love solving complex problems, optimizing user experience, and exploring the endless 
              possibilities of technology. My projects often integrate <span className="font-semibold text-blue-600">AI</span> to create 
              smarter, more adaptive systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond coding, I'm fascinated by <span className="font-semibold text-blue-600">philosophy</span>, strategic games like 
              <span className="font-semibold text-blue-600"> chess</span>, and the art of <span className="font-semibold text-blue-600">creative problem-solving</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { 
                  emoji: '♟', 
                  title: 'Chess', 
                  description: 'Strategic thinking & problem-solving' 
                },
                { 
                  emoji: '🤖', 
                  title: 'AI & Automation', 
                  description: 'Building smart and adaptive applications' 
                },
                { 
                  emoji: 'φ', 
                  title: 'Philosophy', 
                  description: 'Exploring deep ideas & concepts' 
                }
              ].map((interest, index) => (
                <motion.div 
                  key={interest.title}
                  variants={interestVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.5 
                  }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-2 text-blue-600">{interest.emoji}</div>
                  <div className="font-semibold text-gray-800 mb-1">{interest.title}</div>
                  <p className="text-gray-600 text-sm">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
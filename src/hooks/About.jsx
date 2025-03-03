import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Intersection observer hook to trigger animations when elements are in view
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const interestVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const interests = [
    { 
      emoji: '♟', 
      title: 'Chess', 
      description: 'Strategic thinking & analytical problem-solving',
      color: 'bg-amber-50 border-amber-200' 
    },
    { 
      emoji: '🤖', 
      title: 'AI & Automation', 
      description: 'Building intelligent and adaptive applications',
      color: 'bg-blue-50 border-blue-200'
    },
    { 
      emoji: 'φ', 
      title: 'Philosophy', 
      description: 'Exploring profound ideas & critical thinking',
      color: 'bg-green-50 border-green-200'
    }
  ];

  const skills = ['React', 'Tailwind CSS', 'Firebase', 'Express.js', 'AI Integration', 'UX Design'];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12 text-gray-800 relative inline-block mx-auto w-full"
          >
            <span className="relative inline-block px-2 z-10">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img
                  className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                  src="/assets/profileImage.svg"
                  alt="Developer Profile Illustration"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/10 mix-blend-overlay rounded-lg"></div>
              </div>
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-yellow-300 -z-10 opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-blue-300 -z-10 opacity-70"></div>
            </motion.div>
            
            <motion.div variants={containerVariants} className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Hi, I'm <span className="font-bold text-blue-600">Mohamed!</span> A passionate full-stack developer with a 
                  deep interest in building intelligent and interactive applications.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My expertise lies in crafting efficient front-end experiences 
                  while ensuring strong and scalable backend architecture. I love solving complex problems, 
                  optimizing user experiences, and exploring the endless possibilities of technology.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Beyond coding, I'm fascinated by philosophy, strategic games like
                  chess, and the art of creative problem-solving.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Toolkit</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-white border border-blue-200 rounded-full text-blue-600 text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="pt-8">
            <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">Personal Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <motion.div 
                  key={interest.title}
                  variants={interestVariants}
                  className={`p-6 rounded-lg shadow-sm hover:shadow-lg border-2 ${interest.color} transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="text-4xl mb-4 text-blue-600">{interest.emoji}</div>
                  <div className="font-semibold text-gray-800 text-lg mb-2">{interest.title}</div>
                  <p className="text-gray-600">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center pt-12">
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
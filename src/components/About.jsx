import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swords, BookOpenText, Puzzle } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const interestVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const interests = [
    {
      icon: <Swords className="h-6 w-6" />,
      title: "Chess",
      description: "Strategic thinking & analytical problem-solving",
    },
    {
      icon: <Puzzle className="h-6 w-6" />,
      title: "Systems Thinking",
      description: "Breaking down complex problems into clean solutions",
    },
    {
      icon: <BookOpenText className="h-6 w-6" />,
      title: "Philosophy",
      description: "Exploring profound ideas & critical thinking",
    },
  ];

  const techGroups = [
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "PostgreSQL", "Supabase"] },
    { label: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel / Netlify"] },
    { label: "Currently Exploring", items: ["AI", "RAG", "LLM applications"] },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-6 bg-blue-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                About
              </span>
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl font-bold mb-12 text-gray-900"
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="relative group">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl border border-gray-100">
                <img
                  className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                  src="/assets/about-mark.svg"
                  alt="Mohammed Ait Sidi Bah — build, learn, iterate"
                />
              </div>
              <div className="absolute -inset-3 -z-10 rounded-xl border border-blue-100" />
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm{" "}
                  <span className="font-serif italic font-bold text-blue-600">
                    Mohammed Ait Sidi Bah
                  </span>
                  , a self-taught full-stack developer from Morocco.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I enjoy turning ideas into working software — from
                  designing the data model and application architecture to
                  building the interface, backend, and deployment pipeline.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My main project is Waraq, a full-stack reading and document
                  management platform that I've been building from the
                  ground up. I'm particularly interested in TypeScript,
                  Next.js, PostgreSQL, developer tooling, and AI-powered
                  applications.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I'm currently focused on becoming a stronger software
                  engineer by building, breaking, learning, and iterating.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-base font-semibold text-gray-800 mb-4">
                  Technologies I Work With
                </h3>
                <div className="space-y-4">
                  {techGroups.map((group) => (
                    <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 w-40 shrink-0">
                        {group.label}
                      </span>
                      <span className="text-sm text-gray-700">
                        {group.items.join(" · ")}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="pt-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  Beyond Code
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Personal Interests
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interests.map((interest) => (
                <motion.div
                  key={interest.title}
                  variants={interestVariants}
                  className="group relative rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {interest.icon}
                  </div>
                  <div className="font-semibold text-gray-800 text-lg mb-2">
                    {interest.title}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

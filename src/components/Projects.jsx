import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Code, Database, Layout, BookOpen } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Waraq",
      description: "A full-stack document tracking and management application built with Next.js, TypeScript, Supabase, and PostgreSQL. Includes role-based access control and PDF handling.",
      tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      category: "Full Stack",
      icon: <BookOpen className="text-blue-600" />,
      image: "bg-gradient-to-br from-blue-500 to-green-500",
      demoUrl: "https://waraq1.vercel.app/",
      githubUrl: "https://github.com/arthursensai/waraq",
      highlights: [
        "Role-based access control with Supabase Auth",
        "PDF upload, storage, and cover extraction",
        "Multi-author document linking and reading progress tracking"
      ]
    },
    {
      title: "ArcFlow",
      description: "A habit-tracking application with streak mechanics and daily focus tracking, built to help users stay consistent with personal goals.",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      category: "Full Stack",
      icon: <Code className="text-indigo-600" />,
      image: "bg-gradient-to-br from-orange-500 to-red-500",
      demoUrl: "",
      githubUrl: "https://github.com/arthursensai/arcflow",
      highlights: [
        "Streak tracking and daily progress logic",
        "Persistent data storage with MongoDB",
        "Clean, focused UI for daily check-ins"
      ]
    },
    {
      title: "ClipNote",
      description: "An intelligent text summarization tool that leverages AI to condense long articles and documents while preserving key information and context.",
      tags: ["Node.js", "Express", "React", "Tailwind CSS", "Hugging Face API"],
      category: "AI Integration",
      icon: <Database className="text-purple-600" />,
      image: "bg-gradient-to-br from-purple-600 to-blue-500",
      demoUrl: "https://clipnote-frontend.onrender.com/",
      githubUrl: "https://github.com/arthursensai/ClipNote",
      highlights: [
        "Natural language processing integration",
        "Support for multiple document formats",
        "Customizable summarization parameters"
      ]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a full-stack developer.",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      icon: <Layout className="text-green-600" />,
      image: "bg-gradient-to-br from-teal-500 to-blue-500",
      demoUrl: "https://mohammedaitsidibah.me/",
      githubUrl: "https://github.com/arthursensai/portfolio",
      highlights: [
        "Responsive design for all device sizes",
        "Interactive UI animations and transitions",
        "Optimized performance"
      ]
    }
  ];

  const getTagColor = (tag) => {
    const colors = {
      "React": "bg-blue-100 text-blue-800",
      "Next.js": "bg-black text-white",
      "TypeScript": "bg-blue-100 text-blue-900",
      "Supabase": "bg-emerald-100 text-emerald-800",
      "PostgreSQL": "bg-sky-100 text-sky-800",
      "MongoDB": "bg-green-100 text-green-800",
      "Tailwind CSS": "bg-cyan-100 text-cyan-800",
      "Node.js": "bg-emerald-100 text-emerald-800",
      "Express": "bg-gray-100 text-gray-800",
      "Hugging Face API": "bg-yellow-100 text-yellow-800",
      "Framer Motion": "bg-purple-100 text-purple-800",
      "Vite": "bg-violet-100 text-violet-800"
    };
    return colors[tag] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="projects" className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Selected Work
            </span>
            <div className="h-px w-6 bg-blue-500" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my recent work showcasing my technical expertise and problem-solving abilities across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-b-4 ${
                index === 0 ? 'border-blue-500' : index === 1 ? 'border-orange-500' : index === 2 ? 'border-purple-500' : 'border-green-500'
              } transform transition-all duration-300 hover:shadow-xl ${
                activeProject === index ? 'ring-2 ring-offset-2 ring-blue-300' : ''
              }`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className={`h-40 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="p-4 bg-white bg-opacity-90 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="p-2">
                      {project.icon}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={18} className="text-gray-700" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={18} className="text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <div className={`space-y-2 mb-4 overflow-hidden transition-all duration-300 ${
                  activeProject === index ? 'max-h-40' : 'max-h-0'
                }`}>
                  <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 pl-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`h-12 bg-gray-50 flex items-center justify-center transition-opacity duration-300 ${
                activeProject === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo <ArrowUpRight className="ml-1" size={14} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 text-sm font-medium hover:text-gray-800 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <ArrowUpRight className="ml-1" size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/arthursensai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300"
          >
            <Github className="mr-2" size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

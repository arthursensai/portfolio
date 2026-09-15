import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Waraq",
    flagship: true,
    description:
      "A full-stack reading and document management platform with role-based access, PDF handling, and reading progress tracking.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    demoUrl: "https://waraq.tech",
    githubUrl: "https://github.com/arthursensai/waraq",
    caseStudyUrl: "/projects/waraq",
  },
  {
    title: "ArcFlow",
    description:
      "A habit-tracking application with streak mechanics and daily focus tracking, built to help users stay consistent with personal goals.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/arthursensai/arcflow",
  },
  {
    title: "ClipNote",
    description:
      "A text summarization tool that leverages AI to condense long articles and documents while preserving key information.",
    tags: ["Node.js", "Express", "React", "Hugging Face API"],
    demoUrl: "https://clipnote-frontend.onrender.com/",
    githubUrl: "https://github.com/arthursensai/ClipNote",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Selected Work
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Proof, not claims
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`flex flex-col rounded-xl border bg-white p-6 transition-all duration-300 hover:shadow-lg ${
                project.flagship
                  ? "border-blue-200 shadow-sm"
                  : "border-gray-200"
              }`}
            >
              {project.flagship && (
                <span className="inline-flex items-center self-start px-2.5 py-1 mb-4 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wide">
                  Flagship Project
                </span>
              )}

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
                {project.caseStudyUrl && (
                  <Link
                    to={project.caseStudyUrl}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Case Study
                    <ArrowUpRight className="ml-1" size={14} />
                  </Link>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors ml-auto"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={14} className="mr-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/arthursensai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-300"
          >
            <Github className="mr-2" size={18} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;

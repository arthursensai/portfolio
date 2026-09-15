import { Github, ArrowUpRight, FileText, Users, BookMarked, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const stack = ["Next.js", "TypeScript", "Supabase", "PostgreSQL"];

const capabilities = [
  {
    icon: ShieldCheck,
    label: "Role-based access control",
    description: "Authentication and permissions handled with Supabase Auth.",
  },
  {
    icon: FileText,
    label: "Document uploads & storage",
    description: "PDF upload, storage, and automatic cover extraction.",
  },
  {
    icon: Users,
    label: "Multi-author linking",
    description: "Documents can be linked to multiple authors.",
  },
  {
    icon: BookMarked,
    label: "Reading progress tracking",
    description: "Tracks where a reader left off across documents.",
  },
];

const FeaturedProject = () => {
  return (
    <section
      id="waraq"
      className="py-20 bg-white border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-6 bg-blue-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            Featured Project
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Editorial mockup card in place of a live screenshot */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-slate-950">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900 border-b border-slate-800">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span className="ml-3 text-[11px] text-slate-500 font-mono">waraq.tech</span>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center min-h-[260px]">
                <span className="font-serif italic text-3xl sm:text-4xl text-white mb-3">
                  Waraq
                </span>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  A reading and document management platform for tracking what
                  you read, across every document and author.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Built by Mohammed Ait Sidi Bah
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Waraq
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A full-stack reading and document management platform built to
              make long-term reading easier to organize and track.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {capabilities.map(({ icon: Icon, label, description }) => (
                <div key={label} className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      {label}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://waraq.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                View Waraq
                <ArrowUpRight className="ml-2" size={16} />
              </a>
              <Link
                to="/projects/waraq"
                className="inline-flex items-center text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300"
              >
                Read the case study
                <ArrowUpRight className="ml-1" size={14} />
              </Link>
              <a
                href="https://github.com/arthursensai/waraq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-500 font-medium hover:text-gray-800 transition-colors duration-300"
                aria-label="Waraq GitHub repository"
              >
                <Github className="mr-1.5" size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;

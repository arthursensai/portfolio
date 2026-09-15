import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, ShieldCheck, FileText, Users, BookMarked } from 'lucide-react';

const stack = ["Next.js", "TypeScript", "Supabase", "PostgreSQL"];

const built = [
  {
    icon: ShieldCheck,
    title: "Authentication & role-based access",
    description: "Access control built on Supabase Auth, so who can see or edit what is enforced close to the data.",
  },
  {
    icon: FileText,
    title: "Document management",
    description: "PDF upload, storage, and automatic cover extraction for uploaded documents.",
  },
  {
    icon: Users,
    title: "Multi-author linking",
    description: "A document can be linked to more than one author without duplicating records.",
  },
  {
    icon: BookMarked,
    title: "Reading progress tracking",
    description: "Keeps track of where a reader left off across their documents.",
  },
];

const challenges = [
  "Modeling roles and permissions with Supabase Auth and Row Level Security, so access control lives close to the data instead of being scattered across the app.",
  "Handling PDF uploads reliably and generating cover previews from uploaded files.",
  "Designing a schema that lets a single document link to multiple authors without duplicating data.",
  "Tracking reading progress per user, per document, without adding friction to the reading experience.",
];

const learned = [
  "How much of a full-stack product gets decided in the data model, long before a single UI component gets built.",
  "The value of getting authentication and permissions right early, since almost every other feature ends up building on top of it.",
  "That file handling — uploads, storage, previews — has more edge cases than it looks like from the outside.",
];

const improvements = [
  "Add more automated test coverage around the upload and permissions logic.",
  "Document the schema and Row Level Security policies more thoroughly, for my own future reference.",
  "Revisit the reading-progress data model as the feature set grows.",
];

const architectureSteps = [
  "Next.js",
  "Supabase Auth",
  "PostgreSQL",
  "Supabase Storage",
  "Application features",
];

const WaraqCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Building Waraq — Mohammed Ait Sidi Bah';
  }, []);

  return (
    <main className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-10"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to portfolio
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-6 bg-blue-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            Case Study
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Building Waraq
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          A full-stack reading and document management platform built to
          make long-term reading easier to organize and track.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-5 mb-16">
          <a
            href="https://waraq.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View Waraq
            <ArrowUpRight className="ml-2" size={14} />
          </a>
          <a
            href="https://github.com/arthursensai/waraq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="mr-1.5" size={16} />
            GitHub
          </a>
        </div>

        <div className="space-y-14">
          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              The Problem
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Long-form reading material — PDFs, papers, articles — tends to
              pile up across devices and folders with no consistent way to
              track what's been read, who wrote it, or where you left off.
              Waraq exists to give that material a proper home.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              The Idea
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Instead of another generic file manager, Waraq is built
              specifically around reading: documents are linked to their
              authors, access is controlled per user, and progress is
              tracked as you go — so the platform understands documents as
              things to be read, not just files to be stored.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Architecture
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Waraq is a Next.js application with Supabase handling
              authentication and file storage, and PostgreSQL as the
              underlying database.
            </p>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex flex-col gap-0">
                {architectureSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
                        {index + 1}
                      </span>
                      {index < architectureSteps.length - 1 && (
                        <span className="w-px h-8 bg-gray-300" aria-hidden="true" />
                      )}
                    </div>
                    <span className="text-gray-800 font-medium pb-8 last:pb-0">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              What I Built
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {built.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      {title}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Engineering Challenges
            </h2>
            <ul className="space-y-3">
              {challenges.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              What I Learned
            </h2>
            <ul className="space-y-3">
              {learned.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              What I'd Improve
            </h2>
            <ul className="space-y-3 mb-6">
              {improvements.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed italic">
              I built this, I learned from it, and I know what I'd improve —
              that's the point.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap items-center gap-5">
          <a
            href="https://waraq.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            View Waraq
            <ArrowUpRight className="ml-2" size={16} />
          </a>
          <Link
            to="/#work"
            className="inline-flex items-center text-gray-600 font-medium hover:text-blue-600 transition-colors"
          >
            See more work
            <ArrowUpRight className="ml-1" size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WaraqCaseStudy;

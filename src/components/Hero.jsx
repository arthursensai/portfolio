import { memo } from "react";
import DynamicTitle from "../components/DynamicTitle";

const SkillTags = memo(() => {
  const skills = [
    "Next.js",
    "TypeScript",
    "React",
    "Supabase",
    "PostgreSQL",
    "Node.js",
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {skills.map((skill) => (
        <div
          key={skill}
          className="px-4 py-2 bg-blue-950/80 text-blue-200 rounded-full text-sm font-medium 
                     transition-all duration-300 hover:bg-blue-800 hover:scale-105 hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          tabIndex="0"
          role="button"
          aria-label={`${skill} technology`}
        >
          {skill}
        </div>
      ))}
    </div>
  );
});

const BackgroundElements = memo(() => (
  <div
    className="absolute inset-0 overflow-hidden pointer-events-none"
    aria-hidden="true"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 opacity-50" />

    {/* Dot grid, same technique used on the Waraq landing page */}
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #ffffff 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* Single ambient glow, same technique used on the Waraq landing page */}
    <div
      className="absolute right-0 top-0 h-120 w-120 rounded-full opacity-60"
      style={{
        background:
          "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)",
      }}
    />
  </div>
));

const Home = () => {
  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900"
        role="banner"
        aria-label="Hero section introducing Mohamed, Full-Stack Developer"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Full-Stack Developer
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.08]">
              Hi, I'm{" "}
              <span className="relative inline-block italic text-blue-300">
                <DynamicTitle />
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 animate-expand"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="text-xl text-slate-200 mb-6 leading-relaxed max-w-xl">
              Full-Stack Developer specializing in React, Next.js, and
              backend development. Passionate about creating responsive,
              user-friendly web applications with modern technologies.
            </p>

            <SkillTags />

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo("projects")}
                className="px-6 py-3 bg-blue-700 text-white rounded-md font-medium 
                         hover:bg-blue-600 focus:bg-blue-600
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                         active:transform active:translate-y-0 hover:cursor-pointer"
                aria-label="View my projects"
              >
                View My Work
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-6 py-3 border-2 border-blue-400 text-blue-300 rounded-md font-medium 
                         hover:bg-blue-900/50 focus:bg-blue-900/50
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                         active:transform active:translate-y-0 hover:cursor-pointer"
                aria-label="Contact me"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <BackgroundElements />
      </section>

      {/* Optimized CSS with better performance */}
      <style jsx>{`
        @keyframes expand {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
          will-change: transform;
        }

        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          will-change: opacity, transform;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Home;

import { memo } from "react";

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

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 pt-24 pb-16"
        aria-label="Introduction: Mohammed Ait Sidi Bah, Full-Stack Developer &amp; Builder"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Full-Stack Developer &amp; Builder
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.08]">
              Mohammed Ait Sidi Bah
            </h1>

            <p className="text-xl text-slate-200 mb-4 leading-relaxed max-w-xl">
              I build useful software from idea to production.
            </p>

            <p className="text-base text-slate-300 mb-8 leading-relaxed max-w-xl">
              Currently building{" "}
              <a
                href="#waraq"
                className="text-blue-300 underline underline-offset-4 decoration-blue-400/50 hover:text-blue-200 hover:decoration-blue-300 transition-colors"
              >
                Waraq
              </a>{" "}
              — a full-stack reading and document management platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#waraq"
                className="px-6 py-3 bg-blue-700 text-white rounded-md font-medium 
                         hover:bg-blue-600 focus:bg-blue-600
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                         active:transform active:translate-y-0"
                aria-label="Explore Waraq, my featured project"
              >
                Explore Waraq
              </a>
              <a
                href="https://github.com/arthursensai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-blue-400 text-blue-300 rounded-md font-medium 
                         hover:bg-blue-900/50 focus:bg-blue-900/50
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                         active:transform active:translate-y-0"
                aria-label="View my GitHub profile"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        <BackgroundElements />
      </section>

      <style>{`
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

export default Hero;

import React from 'react';

const Home = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Mohamed</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Full-Stack Developer specializing in React, Tailwind CSS, and backend development.
            Passionate about creating responsive, user-friendly web applications.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">JavaScript</div>
            <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</div>
            <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Tailwind CSS</div>
            <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Firebase</div>
            <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Express.js</div>
            <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Node.js</div>
            <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">MongoDB</div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        
        {/* Code-inspired decorative elements */}
        <div className="absolute right-16 bottom-16 text-6xl opacity-20 z-0">♕</div>
        <div className="absolute left-10 top-20 opacity-5 z-0 text-9xl font-mono">{`{}`}</div>
        <div className="absolute left-32 bottom-24 opacity-10 z-0 text-5xl font-mono">{`</>`}</div>
        
        {/* React logo */}
        <div className="absolute right-24 top-24 w-32 h-32 opacity-20 z-0 animate-spin-slow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
            <g fill="#61DAFB">
              <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
              <circle cx="420.9" cy="296.5" r="45.7"/>
              <path d="M520.5 78.1z"/>
            </g>
          </svg>
        </div>
        
        {/* Additional tech-related decorative elements */}
        <div className="absolute right-48 bottom-48 w-24 h-24 opacity-10 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
          </svg>
        </div>
        
        {/* MongoDB leaf */}
        <div className="absolute left-48 top-48 w-20 h-20 opacity-10 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4DB33D">
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
          </svg>
        </div>
        
        {/* Animated dots for a tech/digital feel */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute h-2 w-2 rounded-full bg-blue-400 top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute h-2 w-2 rounded-full bg-blue-400 top-3/4 left-1/3 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-blue-400 top-1/2 left-3/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-blue-400 top-1/3 left-2/3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-blue-400 top-2/3 left-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Tailwind utility class for slow animation - add this to your tailwind.config.js */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}

export default Home;
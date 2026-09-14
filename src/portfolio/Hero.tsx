import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Alex Chen
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate Full-Stack Developer crafting beautiful, performant web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image / Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl mb-2">👨‍💻</div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Developer & Designer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                5+
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Building digital experiences that matter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a full-stack developer with over 5 years of experience building web applications 
              that are both beautiful and functional. I specialize in React, TypeScript, and Node.js, 
              with a keen eye for design and user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through blog posts and mentoring. I believe in writing clean, 
              maintainable code that scales.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-indigo-500 mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-500 mb-1">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-pink-500 mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-500 mb-1">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Open Source Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

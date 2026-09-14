import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration. Built with React, Node.js, and Stripe.',
    image: '🛒',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    category: 'fullstack',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, drag-and-drop, and team features.',
    image: '📋',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    category: 'fullstack',
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and data visualization.',
    image: '🌤️',
    tags: ['React', 'D3.js', 'API', 'Tailwind'],
    category: 'frontend',
    link: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered tool that generates marketing copy, blog posts, and social media content using GPT models.',
    image: '🤖',
    tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
    category: 'fullstack',
    link: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness application with workout tracking, progress charts, and personalized recommendations.',
    image: '💪',
    tags: ['React Native', 'Firebase', 'Charts', 'Auth'],
    category: 'frontend',
    link: '#',
  },
  {
    title: 'REST API Framework',
    description: 'A lightweight, modular REST API framework with built-in authentication, rate limiting, and documentation.',
    image: '🔌',
    tags: ['Node.js', 'Express', 'JWT', 'Swagger'],
    category: 'backend',
    link: '#',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full Stack' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work across different technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium text-sm group/link"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

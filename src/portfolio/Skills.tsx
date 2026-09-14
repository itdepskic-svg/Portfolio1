const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / Django', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    items: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 80 },
      { name: 'AWS / Cloud', level: 75 },
      { name: 'CI/CD', level: 82 },
    ],
  },
  {
    category: 'Design',
    icon: '✨',
    items: [
      { name: 'Figma', level: 85 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Motion Design', level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{skillGroup.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.name}
                      </span>
                      <span className="text-sm text-indigo-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

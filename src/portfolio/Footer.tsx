export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-indigo-400 transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Web Development</p>
              <p className="text-gray-400 text-sm">UI/UX Design</p>
              <p className="text-gray-400 text-sm">API Development</p>
              <p className="text-gray-400 text-sm">Consulting</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Alex Chen. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

import Navbar from './portfolio/Navbar';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Projects from './portfolio/Projects';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

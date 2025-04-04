import React, { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold dark:text-white">Nayan Fulambarkar</h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="text-white" /> : <Moon />}
        </button>
      </nav>

      <main className="container mx-auto px-4 pt-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <footer className="bg-white dark:bg-gray-900 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/nayanfulambarkar" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/nayan-fulambarkar-413675259" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nayanjain660@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Mail size={24} />
            </a>
            <a href="tel:+917709088392" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Phone size={24} />
            </a>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            © {new Date().getFullYear()} Nayan Fulambarkar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
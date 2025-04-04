import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <img
              src="../nayan.jpg"
              alt="Nayan Fulambarkar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
              FullStack Developer <br />& AI/ML Enthusiast
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Crafting beautiful, responsive, and user-friendly web experiences while exploring the frontiers of artificial intelligence.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors dark:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
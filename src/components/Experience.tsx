import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Experience</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Frontend Web Development Intern</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Skill Savvy Interns</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Developed responsive web interfaces using modern frontend technologies</li>
              <li>Successfully delivered 3 solo projects, improving UI/UX performance</li>
              <li>Collaborated with senior developers to implement best practices</li>
              <li>Gained hands-on experience with React and related technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
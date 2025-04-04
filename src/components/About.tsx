import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">About Me</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate Frontend Developer with a keen interest in AI/ML technologies. My journey in tech has been driven by a desire to create impactful digital experiences that combine beautiful design with intelligent functionality.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            With expertise in React, JavaScript, HTML, and CSS, I specialize in building responsive and intuitive web applications. My background in AI/ML, particularly in Supervised/Unsupervised Learning and Reinforcement Learning, allows me to bring unique perspectives to frontend development.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            I'm constantly learning and exploring new technologies, always looking for ways to push the boundaries of what's possible in web development while maintaining a focus on user experience and accessibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
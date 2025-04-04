import React from 'react';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    color: string;
  }[];
}

const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML/CSS", level: 80, color: "bg-green-500" },
      { name: "JavaScript", level: 70, color: "bg-yellow-500" },
      { name: "React", level: 60, color: "bg-orange-500" }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "MySQL", level: 60, color: "bg-yellow-500" },
      { name: "JDBC, XAMPP", level: 50, color: "bg-orange-500" }
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 75, color: "bg-green-500" },
      { name: "JavaScript", level: 70, color: "bg-yellow-500" }
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "Supervised/Unsupervised Learning", level: 50, color: "bg-orange-500" },
      { name: "Reinforcement Learning", level: 40, color: "bg-red-500" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "VS Code, Eclipse, NetBeans", level: 75, color: "bg-green-500" }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Team Leadership, Communication, Time Management", level: 80, color: "bg-green-500" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Skills</h2>
        <div className="grid gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 dark:text-white">{skillCategory.category}</h3>
              <div className="space-y-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
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
};

export default Skills;
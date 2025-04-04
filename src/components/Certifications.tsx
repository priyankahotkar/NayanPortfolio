import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: "SIH 2024 Participation",
    description: "Developed an AI-powered traffic management prototype that demonstrated innovative solutions for urban traffic control."
  },
  {
    title: "Google Cloud Certification",
    description: "Completed comprehensive training in cloud computing fundamentals, covering essential Google Cloud Platform services and best practices."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Certifications & Accomplishments</h2>
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-start gap-4"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Award className="text-blue-600 dark:text-blue-300" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  techStack: string[];
  description: string;
  features: string[];
  image: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "Traffic Lights Automation System",
    techStack: ["Python", "OpenCV", "YOLO", "ESP32", "Raspberry Pi"],
    description: "AI-based traffic control system that reduced congestion by 25%, achieving 80% model accuracy in vehicle detection and traffic flow optimization.",
    features: [
      "Real-time vehicle detection and counting",
      "Adaptive signal timing adjustment",
      "Traffic flow analysis and optimization",
      "Integration with existing infrastructure"
    ],
    image: "../traffic.png"
  },
  {
    title: "MentorConnect Platform",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Google Calendar API", "Jitsi Meet", "Firebase"],
    description: "A comprehensive mentorship platform connecting students with industry professionals, featuring real-time communication and automated scheduling.",
    features: [
      "Secure authentication system",
      "Real-time chat functionality",
      "Automated calendar management",
      "Video conferencing integration"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI Chatbot Assistant",
    techStack: ["Python", "Gemini AI API", "Streamlit", "LangChain", "NLTK"],
    description: "An intelligent chatbot powered by Google's Gemini AI, capable of natural language understanding and contextual responses with advanced conversation capabilities.",
    features: [
      "Natural language processing and understanding",
      "Context-aware responses",
      "Multi-turn conversation handling",
      "Integration with external knowledge bases",
      "Real-time response generation"
    ],
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "SIH 2024 Conversational Image Recognition Chatbot",
    techStack: ["Python", "PyTorch", "Transformers", "CLIP", "FastAPI", "Redis"],
    description: "An advanced AI system developed for Smart India Hackathon 2024 that combines computer vision and natural language processing to enable interactive conversations about images.",
    features: [
      "Multi-modal understanding of images and text",
      "Real-time image analysis and feature extraction",
      "Context-aware conversation handling",
      "Scalable architecture with Redis caching",
      "Support for multiple Indian languages"
    ],
    image: "../ImageChatbot.png"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold dark:text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="dark:text-white" />
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="font-bold mb-2 dark:text-white">Key Features</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
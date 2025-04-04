import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Email:</strong>{' '}
                <a href="mailto:nayanjain660@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                  nayanjain660@gmail.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Phone:</strong>{' '}
                <a href="tel:+917709088392" className="hover:text-blue-600 dark:hover:text-blue-400">
                  +91-7709088392
                </a>
              </p>
              <div className="pt-4">
                <h4 className="font-bold mb-2 dark:text-white">Find me on</h4>
                <div className="space-y-2">
                  <a
                    href="https://leetcode.com/u/nayaan__1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    LeetCode
                  </a>
                  <a
                    href="https://linkedin.com/in/nayan-fulambarkar-413675259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/nayanfulambarkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
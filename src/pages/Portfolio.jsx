import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-500 mb-10 text-center"
        >
          Hello, I'm Carmen
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-gray-800 shadow-lg rounded-2xl p-6 border-l-4 border-pink-500 hover:scale-105 transform transition duration-300"
            >
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold text-pink-400 mb-2">{card.title}</h2>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    title: 'About Me',
    description: 'A short summary about my background, career switch, and passion for cyber security.',
    image: 'https://via.placeholder.com/400x200?text=About+Me'
  },
  {
    title: 'Projects',
    description: 'A showcase of the full-stack apps and security projects I’ve worked on recently.',
    image: 'https://via.placeholder.com/400x200?text=Projects'
  },
  {
    title: 'Skills',
    description: 'Languages, frameworks, tools and security concepts I’m comfortable with.',
    image: 'https://via.placeholder.com/400x200?text=Skills'
  },
  {
    title: 'Contact',
    description: 'Let’s get in touch — email, GitHub, LinkedIn or a contact form.',
    image: 'https://via.placeholder.com/400x200?text=Contact'
  }
];

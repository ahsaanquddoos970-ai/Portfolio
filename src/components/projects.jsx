'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './projects.css';

// Project data
const projects = [
 {
    title: 'Cricket Quiz',
    description:
      '5 categories of cricket quizzes. Includes a timer and score tracking with leaderboard functionality.',
    url: 'https://github.com/ahsaanquddoos970-ai/Cricket-Quiz',
    website: 'https://cricket-quiz-eta.vercel.app/',
    image: '/cricket_quiz.png',
    tags: ['React', 'TailwindCSS', 'Framer-motion'],
  },
  {
    title: 'Tomato App',
    description:
      'Tomato is a modern food ordering web app where users can explore different food categories.',
    url: 'https://github.com/ahsaanquddoos970-ai/Tomato_Food_web',
    website: 'https://tomato-food-web-alpha.vercel.app/',
    image: '/tomato.png',
    tags: ['React','javaScript', 'HTML','CSS'],
  },
     {
    title: 'Tech Zone',
    description:
      'Tech Zone is a modern web app for exploring and showcasing technology products and services',
    url: 'https://github.com/ahsaanquddoos970-ai/Tech-Zone-Project',
    website: 'https://tech-zone-project-rgcw.vercel.app/',
    image: '/techzone.png',
    tags: ['React','tavaScript','HTML','CSS'],
  },
  {
    title: 'Bistro Food Web App',
    description:
      'Bistro is a modern and responsive food web app designed to provide users with an easy and engaging way to explore delicious meals and food options.',
    url: 'https://github.com/ahsaanquddoos970-ai/Bistro-web',
    website: 'https://bistro-web-tau.vercel.app/',
    image: '/bistro.png',
    tags: ['React','typeScript', 'Web Development'],
  },
  
  
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Featured Projects</h2>
        <p className="projects__subtitle">
          Here are some of my recent projects.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects__grid"
        >
          {projects.map((proj) => (
            <div key={proj.title} className="projects__card">
              {/* Scanline overlay for the card */}
              <div className="projects__scanlines"></div>

              {/* Top glowing edge */}
              <div className="projects__top-edge"></div>

              {/* Project Image */}
              <div className="projects__image-wrap">
                <img
                  src={proj.image}
                  alt={`${proj.title} preview`}
                  className="projects__image"
                />
                <div className="projects__image-overlay"></div>
              </div>

              <h3 className="projects__card-title">
                <span className="projects__card-caret">&gt;</span> {proj.title}
              </h3>

              <div className="projects__tags">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="projects__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="projects__desc">{proj.description}</p>

              <div className="projects__links">
                {proj.website && (
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                    aria-label={`Visit ${proj.title} website`}
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                  aria-label={`View ${proj.title} on GitHub`}
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

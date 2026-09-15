import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'C/C++', icon: <span>C++</span> },
      { name: 'HTML5', icon: <span>HTML</span> },
      { name: 'CSS3', icon: <span>CSS</span> },
      { name: 'JavaScript', icon: <span>JS</span> },

    ],
  },
  {
    category: 'Tools & Frameworks',
    skills: [
      { name: 'React', icon: <span>⚛</span> },
      { name: 'Tailwind CSS', icon: <span>TW</span> },
      { name: 'Git', icon: <span>Git</span> },
      { name: 'GitHub', icon: <span>GH</span> },
      { name: 'VS Code', icon: <span>VS</span> },

    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Communication', icon: <span>💬</span> },
      { name: 'Problem Solving', icon: <span>💡</span> },
      { name: 'Teamwork', icon: <span>👥</span> },

    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="skills__title">
          <span className="skills__title-caret">&gt;</span>System_Capabilities
        </h2>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="skills__card"
            >
              {/* Corner Accents */}
              <div className="skills__corner skills__corner--tl"></div>
              <div className="skills__corner skills__corner--tr"></div>
              <div className="skills__corner skills__corner--bl"></div>
              <div className="skills__corner skills__corner--br"></div>

              <div className="skills__card-header">
                <h3 className="skills__category">{group.category}</h3>
                <span className="skills__index">[{index + 1}/3]</span>
              </div>

              <div className="skills__list">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="skills__item">
                    <div className="skills__icon">
                      {skill.icon}
                    </div>
                    <p className="skills__name">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hero__content"
      >
        {/* Terminal Text Intro */}
        <div className="hero__intro">
          <span className="hero__user">guest@portfolio</span>
          <span className="hero__colon">:</span>
          <span className="hero__tilde">~</span>$ whoami
        </div>

        {/* Glitching / Glowing Name */}
        <h1 className="hero__name">
         Ahsaan
        </h1>

        {/* Typewriter Effect Container */}
        <div className="hero__typewriter">
          <span className="hero__prompt">&gt;</span>
          <Typewriter
            words={['Crafting web experiences', 'Exploring data patterns', 'Building innovative solutions']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hero__actions"
        >
          <a href="#projects" className="hero__btn hero__btn--primary">
            <span className="hero__btn-label">[ VIEW PROJECTS ]</span>
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            <span className="hero__btn-label">[ INIT CONTACT ]</span>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}

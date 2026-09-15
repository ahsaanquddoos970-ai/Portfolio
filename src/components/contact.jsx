import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

import { motion } from 'framer-motion';
import './contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="contact__card"
      >
        {/* Animated border lines */}
        <div className="contact__edge contact__edge--top"></div>
        <div className="contact__edge contact__edge--bottom"></div>

        <h2 className="contact__title">
          <span className="contact__title-caret">&gt;</span>INIT_CONTACT
        </h2>

        <div className="contact__terminal">
          <p className="contact__terminal-cmd">$ sys.transmit_message()</p>
          <p>Ready to collaborate or interact?</p>
          <p>Select a secure transmission channel below.</p>
        </div>

        <div className="contact__links">
          <a
            href="mailto:ahsaan.dev010@gmail.com"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} className="contact__link-icon" />
            <span className="contact__link-label">EMAIL</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ahsaan-quddoos-576a81420"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="contact__link-icon" />
            <span className="contact__link-label">LINKEDIN</span>
          </a>

          <a
            href="https://github.com/ahsaanquddoos970-ai"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="contact__link-icon" />
            <span className="contact__link-label">GITHUB</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

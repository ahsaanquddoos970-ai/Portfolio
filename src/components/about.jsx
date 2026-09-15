
import { motion } from 'framer-motion';
import './about.css';

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="about__container"
      >
        <div className="about__card">

          {/* Terminal Header for the entire card */}
          <div className="about__terminal-bar">
            <div className="about__dot about__dot--red"></div>
            <div className="about__dot about__dot--yellow"></div>
            <div className="about__dot about__dot--green"></div>
            <span className="about__terminal-title">dossier.exe - bash</span>
          </div>

          {/* Left Side: Avatar Holder / Scan */}
          <div className="about__avatar-col">
            <div className="about__avatar-frame">
              <div className="about__avatar-inner">
                <span className="about__avatar-text">[ IMAGE DATA<br/>CORRUPTED ]</span>
                {/* Scanline overlay */}
                <div className="about__scanlines"></div>
                <div className="about__scan-line"></div>
              </div>
            </div>

            <div className="about__status">
              <p className="about__status-row">USER_ID: <span className="about__status-value">#8086-INIT</span></p>
              <p className="about__status-row">STATUS: <span className="about__status-value about__status-value--online">ONLINE</span></p>
              <p className="about__status-row">CLASS: <span className="about__status-value about__status-value--class">DEVELOPER</span></p>
            </div>
          </div>

          {/* Right Side: Text & Stats */}
          <div className="about__content-col">
            <h2 className="about__title">
              <span className="about__title-caret">&gt;</span>ABOUT_ME
            </h2>

            <div className="about__bio">
              <p>
                I&apos;m a 3rd-year <span className="about__highlight">Computer Science student</span> at the Virtual University of Pakistan. I&apos;m passionate about creating innovative solutions and exploring the latest technologies in the field.
              </p>
              <p>
                I have a strong interest in <span className="about__highlight">web development</span> and <span className="about__highlight--alt">AI</span> . I enjoy exploring how technology can be used to solve real-world problems and create useful, user-friendly digital solutions. I&apos;m always looking to improve my skills through projects, learning, and hands-on experience.
              </p>
              <p>
                Outside of academics and tech, I&apos;m a <span className="about__highlight">Cricket enthusiast</span> who enjoys the teamwork, strategy, and passion the game brings.
              </p>
            </div>

            {/* Terminal Style Skill Output */}
             <div className="about__terminal">
              <div className="about__terminal-cmd">
                <span className="about__terminal-prompt">~</span>$ ./load_core_skills.sh
              </div>

              <div>
                <div className="about__skill-row">
                  <span>[SYS.SKILL] WEB_DEV</span>
                  <span>[||||||||  ]</span>
                </div>
                <div className="about__bar-track">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="about__bar-fill"
                  ></motion.div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

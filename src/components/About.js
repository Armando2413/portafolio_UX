import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faBehance, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const About = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/armandoquezada/'
    },
    {
      name: 'Behance',
      icon: faBehance,
      url: 'https://www.behance.net/armandoquezada'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/armandoquezada'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://instagram.com/armandoquezada'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants}>Sobre mí</motion.h2>
        
        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <p>
              Soy un diseñador UX/UI apasionado por crear experiencias digitales 
              que combinen la funcionalidad con la estética. Mi enfoque se centra 
              en utilizar datos y análisis para informar decisiones de diseño, 
              mientras lidero equipos hacia soluciones innovadoras.
            </p>
            <p>
              Con experiencia en investigación de usuarios, prototipado y diseño 
              de interfaces, me especializo en transformar problemas complejos en 
              soluciones elegantes y efectivas. Mi objetivo es crear productos 
              digitales que no solo sean hermosos, sino que también mejoren 
              significativamente la vida de los usuarios.
            </p>
          </div>
          
          <motion.div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1,
                  color: 'var(--color-accent)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={link.icon} />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="/path-to-your-cv.pdf"
            className="cv-button"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'var(--color-accent)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faFileDownload} />
            <span>Descargar CV</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
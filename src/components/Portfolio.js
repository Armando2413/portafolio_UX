import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // use projects imported from data/projects.js

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <motion.div
        className="portfolio-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Portfolio</h2>
        
        <motion.div className="projects-grid">
          {(() => {
            const projectsToShow = projects.slice(0, 3);
            return projectsToShow.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-category">{project.category}</span>
              </div>
            </motion.div>
            ));
          })()}
        </motion.div>

        <div className="portfolio-controls" style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/projects" className="btn-secondary" aria-label="Ver todos los proyectos">
            Ver todos los proyectos
          </Link>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="project-modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>

                <div className="modal-content">
                  <h2>{selectedProject.title}</h2>
                  
                  <section className="project-section">
                    <h3>El Problema</h3>
                    <p>{selectedProject.problem}</p>
                  </section>

                  <section className="project-section">
                    <h3>La Solución</h3>
                    <p>{selectedProject.solution}</p>
                  </section>

                  <section className="project-section">
                    <h3>Proceso de Diseño</h3>
                    <ul>
                      {selectedProject.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="project-section">
                    <h3>Prototipo</h3>
                    <div className="figma-embed">
                      <iframe 
                        title="Figma Prototype"
                        width="100%"
                        height="450"
                        src={selectedProject.figmaEmbed}
                        allowFullScreen
                      />
                    </div>
                  </section>

                  <section className="project-section">
                    <h3>Resultados</h3>
                    <ul className="results-list">
                      {selectedProject.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const timeline = [
    {
      id: 1,
      title: 'Lead UX Designer — Fintech Co.',
      period: '2022 — Presente',
      location: 'Ciudad de México',
      details: [
        'Lideré un equipo de 5 diseñadores en proyectos de producto financiero.',
        'Implementé un proceso de diseño centrado en datos y métricas que redujo fricción en onboarding en 35%.',
        'Coordiné pruebas de usabilidad y A/B testing con resultados cuantificables.'
      ]
    },
    {
      id: 2,
      title: 'Senior UX Researcher — Agencia Digital',
      period: '2019 — 2022',
      location: 'Remoto / Oficina híbrida',
      details: [
        'Conduje estudios de investigación con usuarios y entrevistas en profundidad.',
        'Diseñé dashboards analíticos para medir impacto del diseño en KPIs',
        'Facilité workshops de ideación y roadmaps de producto'
      ]
    },
    {
      id: 3,
      title: 'Maestría en Diseño Interactivo',
      period: '2017 — 2019',
      location: 'Universidad Ejemplo',
      details: [
        'Tesis en diseño basado en evidencia y métricas de usabilidad.'
      ]
    }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="experience section-padding">
      <div className="container experience-container">
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Experiencia y Formación
        </motion.h2>

        <motion.div
          className="timeline"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {timeline.map((entry, idx) => (
            <motion.article key={entry.id} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`} variants={item}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h3 className="timeline-title">{entry.title}</h3>
                <span className="timeline-meta">{entry.period} • {entry.location}</span>
                <ul className="timeline-details">
                  {entry.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="skills-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>Explora mis habilidades técnicas y blandas en la sección de Habilidades.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

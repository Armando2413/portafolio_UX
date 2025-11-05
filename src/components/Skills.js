import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skillBars = [
  { name: 'UX Research', value: 90 },
  { name: 'UI Design', value: 88 },
  { name: 'Prototipado', value: 85 },
  { name: 'Liderazgo', value: 82 },
  { name: 'Analítica', value: 92 },
  { name: 'Colaboración', value: 87 },
  { name: 'Comunicación', value: 90 }
];

// Simple RadarChart using SVG
const RadarChart = ({ data, size = 260 }) => {
  const categories = data.map(d => d.name);
  const values = data.map(d => d.value / 100);
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 30;
  const angle = (2 * Math.PI) / categories.length;

  // Points for polygon
  const points = values.map((v, i) => {
    const a = -Math.PI / 2 + i * angle; // start top
    const r = v * radius;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    return `${x},${y}`;
  }).join(' ');

  // Outer grid points
  const gridPoints = Array.from({ length: categories.length }).map((_, i) => {
    const a = -Math.PI / 2 + i * angle;
    const x = cx + radius * Math.cos(a);
    const y = cy + radius * Math.sin(a);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="radar-svg">
      <defs>
        <linearGradient id="radarGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>

      {/* grid polygon */}
      <polygon points={gridPoints} fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {/* radial lines */}
      {categories.map((cat, i) => {
        const a = -Math.PI / 2 + i * angle;
        const x = cx + radius * Math.cos(a);
        const y = cy + radius * Math.sin(a);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      })}

      {/* animated filled polygon */}
      <motion.polygon
        points={points}
        fill="url(#radarGrad)"
        fillOpacity="0.18"
        stroke="url(#radarGrad)"
        strokeWidth="2"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* labels */}
      {categories.map((cat, i) => {
        const a = -Math.PI / 2 + i * angle;
        const x = cx + (radius + 18) * Math.cos(a);
        const y = cy + (radius + 18) * Math.sin(a);
        return (
          <text key={i} x={x} y={y} fill="var(--color-text)" fontSize="11" textAnchor={Math.cos(a) > 0.1 ? 'start' : Math.cos(a) < -0.1 ? 'end' : 'middle'} dominantBaseline="middle">
            {cat}
          </text>
        );
      })}
    </svg>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container skills-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >Habilidades</motion.h2>

        <div className="skills-grid">
          <div className="skill-bars">
            {skillBars.map((s, i) => (
              <motion.div className="skill-row" key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="skill-meta">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-value">{s.value}%</span>
                </div>
                <div className="skill-bar-outer">
                  <motion.div className="skill-bar-inner"
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="skill-radar">
            <RadarChart data={skillBars} size={320} />
            <p className="radar-note">Vista rápida de habilidades — escala 0-100%</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

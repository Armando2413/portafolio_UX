import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Ingresa tu nombre';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Ingresa un correo válido';
    if (!form.message.trim()) e.message = 'Escribe un mensaje';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate();
    if (Object.keys(eobj).length > 0) {
      setErrors(eobj);
      return;
    }

    // simple honeypot anti-spam: if the hidden "website" field was filled, abort
    if (form.website && form.website.trim() !== '') {
      console.warn('Spam detected via honeypot field');
      return;
    }

    setIsSending(true);

    try {
      // Try EmailJS if env variables are configured (recommended)
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID; // now called public key in EmailJS

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || 'Contacto desde portfolio',
        message: form.message,
      };

      if (serviceId && templateId && userId) {
        // send via EmailJS
        await emailjs.send(serviceId, templateId, templateParams, userId);
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '', website: '' });
      } else {
        // Fallback: open user's email client via mailto
        const mailto = `mailto:armando.quezada@example.com?subject=${encodeURIComponent(
          (form.subject || 'Contacto desde portfolio') + ' - ' + form.name
        )}&body=${encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
        window.location.href = mailto;
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '', website: '' });
      }
    } catch (err) {
      console.error('Email send error:', err);
      setSendError(true);
      setIsSending(false);
      return;
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >Contacto</motion.h2>

        <div className="contact-grid">
          <motion.form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-note">
            {/* honeypot - leave hidden from users */}
            <input type="text" name="website" value={form.website || ''} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            <label>
              Nombre
              <input name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" aria-invalid={errors.name ? 'true' : 'false'} required />
              {errors.name && <span className="field-error" role="alert">{errors.name}</span>}
            </label>

            <label>
              Correo
              <input name="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" aria-invalid={errors.email ? 'true' : 'false'} required />
              {errors.email && <span className="field-error" role="alert">{errors.email}</span>}
            </label>

            <label>
              Asunto
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Asunto (opcional)" />
            </label>

            <label>
              Mensaje
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Escribe tu mensaje aquí" rows="6" aria-invalid={errors.message ? 'true' : 'false'} required />
              {errors.message && <span className="field-error" role="alert">{errors.message}</span>}
            </label>

            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={isSending} aria-busy={isSending}>
                {isSending ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              <a className="mailto-fallback" href="mailto:armando.quezada@example.com">Enviar por correo</a>
            </div>
          </motion.form>

          <motion.div className="contact-info" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3>Correo directo</h3>
            <p><a href="mailto:armando.quezada@example.com">armando.quezada@example.com</a></p>

            <h3>Sígueme</h3>
            <p>
              <a href="https://www.linkedin.com/in/armandoquezada/" target="_blank" rel="noreferrer">LinkedIn</a> •
              <a href="https://www.behance.net/armandoquezada" target="_blank" rel="noreferrer"> Behance</a> •
              <a href="https://github.com/armandoquezada" target="_blank" rel="noreferrer"> GitHub</a>
            </p>

            <h3>Nota</h3>
            <p>El formulario abre tu cliente de correo por defecto (mailto). Si quieres integración directa con EmailJS, dime y la configuro (necesitaré tu serviceId/templateId/userId).</p>
          </motion.div>
        </div>

          <motion.div className="thankyou" initial={{ opacity: 0, scale: 0.9 }} animate={(sent || sendError) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}>
            {sent && (
              <div className="thankyou-card">
                <motion.div className="check" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                  ✓
                </motion.div>
                <h4>Gracias — ¡mensaje enviado!</h4>
                <p>Te contestaré en breve. También puedes escribirme directamente a <a href="mailto:armando.quezada@example.com">armando.quezada@example.com</a>.</p>
              </div>
            )}
            {sendError && (
              <div className="error-card">
                <motion.div className="error-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                  !
                </motion.div>
                <h4>Error al enviar el mensaje</h4>
                <p>Lo siento, hubo un problema al enviar el mensaje. ¿Quieres intentar de nuevo o usar tu cliente de correo?</p>
                <div className="error-actions">
                  <button onClick={() => { setSendError(false); handleSubmit(); }} className="btn-retry">
                    Reintentar
                  </button>
                  <a className="btn-mailto" href={`mailto:armando.quezada@example.com?subject=${encodeURIComponent(
                    (form.subject || 'Contacto desde portfolio') + ' - ' + form.name
                  )}&body=${encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`}>
                    Usar cliente de correo
                  </a>
                </div>
              </div>
            )}
          </motion.div>
      </div>
    </section>
  );
};

export default Contact;

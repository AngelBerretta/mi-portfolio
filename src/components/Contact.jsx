
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="fade-in">
      <h2>Contacto</h2>
      <p>Conéctate conmigo a través de las siguientes plataformas:</p>
      <div className="contact-grid">
        <a href="https://www.linkedin.com/in/angelberretta" target="_blank" rel="noopener noreferrer" className="contact-card">
          <i className="fab fa-linkedin" style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}></i>
          <span>LinkedIn</span>
        </a>
        <a href="mailto:angelcursodeingles2@gmail.com" className="contact-card">
          <i className="fas fa-envelope" style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}></i>
          <span>Email</span>
        </a>
        <a href="https://wa.me/5492346694273" target="_blank" rel="noopener noreferrer" className="contact-card">
          <i className="fab fa-whatsapp" style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}></i>
          <span>WhatsApp</span>
        </a>
        <a href="https://github.com/AngelBerretta" target="_blank" rel="noopener noreferrer" className="contact-card">
          <i className="fab fa-github" style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}></i>
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
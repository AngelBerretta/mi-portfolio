import React, { useEffect, useState } from 'react';
import profilePhoto from '../assets/profile.jpg'; 

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
        <img 
          src={profilePhoto} 
          alt="Angel Berretta" 
          className="profile-photo pulse" 
          style={{animationDelay: '0.5s'}}
        />
      </div>
      
      <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.4s'}}>
        <h1>Angel Berretta</h1>
      </div>
      
      <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.6s'}}>
        <h2 className="hero-subtitle">Desarrollador Web</h2>
      </div>
      
      <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.8s'}}>
        <div className="location-container">
          <p>Desarrollador Web Full Stack en formación de</p>
          <div className="location-country">
            <span>Buenos Aires, Argentina</span>
            <span className="flag">🇦🇷</span>
          </div>
        </div>
      </div>
      
      <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '1s'}}>
        <p className="hero-quote">
          ¡Estoy listo para aportar creatividad y compromiso a nuevos desafíos!
        </p>
      </div>
      
      <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{animationDelay: '1.2s'}}>
        <a href="#projects" className="cta-button button">Ver mis proyectos</a>
      </div>
    </section>
  );
};

export default Hero;
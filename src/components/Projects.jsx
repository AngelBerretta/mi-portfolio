import React, { useState, useEffect } from 'react';

// Agregar 'image' a cada proyecto con la URL de la captura de pantalla
const projects = [
  {
    name: 'Redonda-fc',
    description: 'Portal web deportivo Redonda-fc. Desarrollado como práctica de desarrollo web utilizando HTML, CSS, SCSS y Bootstrap.',
    technologies: 'HTML5 semántico, CSS3 / SCSS modular, Bootstrap 5.3, Bootstrap Icons, Google Fonts (Roboto), JSON, Metodología multipágina estática',
    demo: 'https://redondafc.netlify.app',
    github: 'https://github.com/AngelBerretta/Redonda-fc',
    image: 'https://i.imgur.com/3iR9hDf.jpeg'
  },
  {
    name: 'CoffeeCraft',
    description: 'Sitio web estático para una cafetería ficticia llamado CoffeeCraft. Desarrollado como práctica de desarrollo web utilizando HTML, CSS y JavaScript.',
    technologies: 'HTML, CSS y JavaScript.',
    demo: 'https://coffecrafft.netlify.app/',
    github: 'https://github.com/AngelBerretta/CoffeeCraft',
    image: 'https://i.imgur.com/ulzMzcK.jpeg'
  },
  {
    name: 'Serenity Studio',
    description: 'Landing page elegante y minimalista orientada a estudios de meditación, yoga o bienestar.',
    technologies: 'HTML, CSS y JavaScript.',
    demo: 'https://serenityestudio.netlify.app',
    github: 'https://github.com/AngelBerretta/SERENITY-STUDIO',
    image: 'https://i.imgur.com/y7dkKq9.jpeg'
  },
  {
    name: 'PAWCARE',
    description: 'Landing page moderna y atractiva orientada a servicios veterinarios o cuidado de mascotas.',
    technologies: 'HTML, CSS y JavaScript.',
    demo: 'https://we-pawcare.netlify.app',
    github: 'https://github.com/AngelBerretta/PAWCARE',
    image: 'https://i.imgur.com/7IHVagZ.jpeg'
  },
  {
    name: 'appweather',
    description: 'Aplicación del clima moderna y responsive que muestra condiciones actuales y pronóstico de 3 días, con fondos dinámicos que cambian según el clima.',
    technologies: 'HTML5, CSS3 (con animaciones y efectos visuales), JavaScript (ES6), OpenWeatherMap API, Font Awesome para íconos',
    demo: 'https://around-weather.netlify.app',
    github: 'https://github.com/AngelBerretta/appweather',
    image: 'https://i.imgur.com/p7fvhO3.jpeg'
  },
  {
    name: 'ShopFast',
    description: 'Tienda online moderna que incluye funcionalidades de carrito de compras, filtrado de productos, autenticación y diseño responsive.',
    technologies: 'React, Vite, TailwindCSS, JavaScript (ES6+), Context API',
    demo: 'https://theshopfast.netlify.app',
    github: 'https://github.com/AngelBerretta/shop',
    image: 'https://i.imgur.com/zcNbQne.jpeg'
  },
  // NUEVO PROYECTO AGREGADO
  {
    name: 'TerraCart',
    description: 'E-commerce ecológico ficticio desarrollado como proyecto de práctica. Incluye catálogo dinámico, carrito de compras, modo oscuro, búsqueda, filtros y sistema de login simulado. Construido utilizando HTML, CSS y JavaScript (Vanilla JS), con datos almacenados en localStorage.',
    technologies: 'HTML, CSS y JavaScript.',
    demo: 'https://terracart.netlify.app/',
    github: 'https://github.com/AngelBerretta/TerraCart',
    image: 'https://i.imgur.com/10AYBLA.jpeg'
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Número de proyectos a mostrar inicialmente
  const initialProjectsCount = 3;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleProjects(prev => [...prev, index]);
        }
      });
    }, { threshold: 0.1 });

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el, index) => {
      el.dataset.index = index;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [showAllProjects]); // Re-ejecutar cuando cambie showAllProjects

  // Filtrar proyectos basado en si se muestran todos o solo algunos
  const displayedProjects = showAllProjects 
    ? projects 
    : projects.slice(0, initialProjectsCount);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects">
      <h2 className="fade-in">Proyectos</h2>
      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${visibleProjects.includes(index) ? 'fade-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={`Captura de pantalla del proyecto ${project.name}`} 
                className="project-image"
                loading="lazy"
              />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="technologies"><strong>Tecnologías:</strong> {project.technologies}</p>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Botón para mostrar más proyectos */}
      {!showAllProjects && projects.length > initialProjectsCount && (
        <div className="show-more-container fade-in" style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            onClick={toggleShowAllProjects}
            style={{
              padding: '12px 30px',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <i className="fas fa-eye"></i>
            Ver más proyectos ({projects.length - initialProjectsCount} más)
          </button>
        </div>
      )}
      
      {/* Botón para mostrar menos proyectos */}
      {showAllProjects && (
        <div className="show-less-container fade-in" style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            onClick={toggleShowAllProjects}
            style={{
              padding: '12px 30px',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <i className="fas fa-eye-slash"></i>
            Ver menos proyectos
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
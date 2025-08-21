import React from 'react';

const Skills = () => {
  const skills = [
    { 
      name: 'React', 
      icon: 'fab fa-react',
      description: 'Desarrollo de interfaces modernas y componentes reutilizables',
      color: '#61DAFB'
    },
    { 
      name: 'JavaScript', 
      icon: 'fab fa-js-square',
      description: 'Programación funcional, ES6+ y manipulación del DOM',
      color: '#F7DF1E'
    },
    { 
      name: 'HTML5', 
      icon: 'fab fa-html5',
      description: 'Estructura semántica y accesibilidad web',
      color: '#E34F26'
    },
    { 
      name: 'CSS3', 
      icon: 'fab fa-css3-alt',
      description: 'Diseño responsive, Flexbox, Grid y animaciones',
      color: '#1572B6'
    },
    { 
      name: 'Bootstrap', 
      icon: 'fab fa-bootstrap',
      description: 'Framework CSS para desarrollo rápido y responsive',
      color: '#7952B3'
    },
    { 
      name: 'Git', 
      icon: 'fab fa-git-alt',
      description: 'Control de versiones y trabajo colaborativo',
      color: '#F05032'
    },
    { 
      name: 'Responsive Design', 
      icon: 'fas fa-mobile-alt',
      description: 'Diseño adaptable a todos los dispositivos',
      color: '#22D3EE'
    },
    { 
      name: 'UI/UX', 
      icon: 'fas fa-pencil-ruler',
      description: 'Diseño centrado en la experiencia de usuario',
      color: '#EF4444'
    }
  ];

  return (
    <section id="skills" className="fade-in">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon" style={{ color: skill.color }}>
              <i className={skill.icon}></i>
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
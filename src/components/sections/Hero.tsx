import Typewriter from '../animations/Typewriter';
import FadeIn from '../animations/FadeIn';
import SlideIn from '../animations/SlideIn';
import ArgentinaFlag from '../ui/ArgentinaFlag';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 50,
        y: (e.clientY / window.innerHeight) * 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = [
    "Desarrollador Web Full Stack",
    "Frontend Developer", 
    "React Developer",
    "TypeScript Enthusiast",
    "UI/UX Enthusiast"
  ];

  return (
    <section 
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden" 
      id="inicio"
      style={{
        scrollMarginTop: '80px'
      }}
    >
      {/* Efecto de partículas con movimiento de mouse */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px] animate-pulse" 
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <SlideIn direction="down" delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-surface-dark/50 border border-gray-300 dark:border-gray-700 backdrop-blur-sm text-sm">
            <span className="text-xl">👋</span>
            <span className="text-primary font-medium">Hola, bienvenido a mi portafolio</span>
          </div>
        </SlideIn>
        
        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
            Soy <span className="text-gradient">Angel Berretta</span>
          </h1>
        </FadeIn>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-3xl md:text-5xl font-display font-bold text-gray-800 dark:text-gray-300 min-h-[60px] md:min-h-[72px]">
          <FadeIn delay={0.6}>
            <div className="flex items-center gap-2">
              <Typewriter 
                texts={roles}
                speed={80}
                deleteSpeed={40}
                delay={2000}
                infinite={true}
                className="text-gray-800 dark:text-white"
              />
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.8}>
          <div className="max-w-2xl mx-auto">
            <div className="text-lg text-gray-700 dark:text-gray-400">
              Desarrollador Web Full Stack en formación de Buenos Aires, Argentina{" "}
              <span className="inline-flex items-center ml-2">
                <ArgentinaFlag size="md" />
              </span>
              <br />
              ¡Estoy listo para aportar creatividad y compromiso a nuevos desafíos!
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-glow flex items-center justify-center gap-2"
              href="#proyectos"
            >
              Ver proyectos <i className="fas fa-arrow-right text-xs"></i>
            </motion.a>
            
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-surface-hover text-gray-900 dark:text-white font-medium transition-all flex items-center justify-center gap-2"
  href={`${import.meta.env.BASE_URL}cv-angel-berretta.pdf`}
  download="CV_Angel_Berretta.pdf"
>
  Descargar CV <i className="fas fa-download text-xs"></i>
</motion.a>

          </div>
        </FadeIn>
        
        <FadeIn delay={1.2}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-xs text-gray-600 dark:text-gray-500">
              <span>Desplázate para descubrir</span>
              <i className="fas fa-chevron-down mt-1"></i>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
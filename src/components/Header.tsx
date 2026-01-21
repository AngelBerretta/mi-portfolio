import ThemeToggle from './ui/ThemeToggle';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: 'fas fa-home' },
    { id: 'sobre-mi', label: 'Sobre mí', icon: 'fas fa-user' },
    { id: 'habilidades', label: 'Habilidades', icon: 'fas fa-code' },
    { id: 'proyectos', label: 'Proyectos', icon: 'fas fa-project-diagram' },
    { id: 'contacto', label: 'Contacto', icon: 'fas fa-envelope' }
  ];

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset para que active antes

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para inicializar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave con offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura del header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold font-display"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', repeatDelay: 5 }}
            >
              &lt;/&gt;
            </motion.div>
            <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
              Angel.dev
            </span>
          </motion.div>
          
          {/* Menú para desktop */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
              whileTap={{ scale: 0.9 }}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </motion.button>
            
            <ThemeToggle />
            
            <motion.a
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-all shadow-glow-sm"
              href="#contacto"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contacto');
              }}
            >
              Contrátame
            </motion.a>
          </div>
        </div>
        
        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg mt-2 p-4 shadow-xl"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <i className={item.icon}></i>
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  className="sm:hidden flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all gap-2"
                  href="#contacto"
                  variants={itemVariants}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contacto');
                  }}
                >
                  <i className="fas fa-handshake"></i>
                  Contrátame
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
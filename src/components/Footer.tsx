const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-light dark:bg-background-dark py-8 border-t border-gray-200 dark:border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © 2026 Angel Berretta. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 dark:text-gray-600 text-xs mt-1">
            Desarrollado con React, TypeScript & Tailwind CSS
          </p>
        </div>
        
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
          aria-label="Volver arriba"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Extraer todas las tecnologías únicas de los proyectos
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => techSet.add(tag));
    });
    return ['Todos', ...Array.from(techSet)].slice(0, 10); // Limitar a 7 filtros
  }, []);

  // Filtrar proyectos
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return projects;
    }
    return projects.filter(project => 
      project.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter]);

  // Paginación
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Resetear a primera página al cambiar filtro
  };

const handleNextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  }
};

const handlePrevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  }
};

const handlePageClick = (pageNumber: number) => {
  setCurrentPage(pageNumber);
  document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
};


  return (
    <section 
      className="py-20 bg-background-light dark:bg-background-dark" 
      id="proyectos"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Mis Proyectos
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-500">
                Una colección de mis trabajos más recientes. {filteredProjects.length} proyectos encontrados.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <a
              className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors group"
              href="https://github.com/AngelBerretta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todo en GitHub 
              <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform"></i>
            </a>
          </FadeIn>
        </div>
        
        {/* Filtros */}
        <FadeIn delay={0.6}>
          <div className="flex flex-wrap gap-2 mb-10">
            {allTechnologies.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => handleFilterClick(tech)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tech
                    ? 'bg-primary text-white shadow-glow-sm'
                    : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </FadeIn>
        
{/* Proyectos - Grid completamente responsivo */}
<AnimatePresence mode="wait">
  <motion.div
    key={activeFilter + currentPage}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
  >
    {currentProjects.map((project, index) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="h-full"
      >
        <ProjectCard project={project} />
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>
        
        {/* Mensaje si no hay proyectos */}
        {currentProjects.length === 0 && (
          <FadeIn>
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <i className="fas fa-search text-3xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No se encontraron proyectos
              </h3>
              <p className="text-gray-500">
                Intenta con otro filtro o vuelve a "Todos"
              </p>
            </div>
          </FadeIn>
        )}
        
        {/* Paginación */}
        {totalPages > 1 && (
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="text-sm text-gray-500">
                Mostrando {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} de {filteredProjects.length} proyectos
              </div>
              
              <div className="flex items-center gap-2">
                {/* Botón anterior */}
                <motion.button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === 1
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                  whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                >
                  <i className="fas fa-chevron-left mr-2"></i>
                  Anterior
                </motion.button>
                
                {/* Números de página */}
                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <motion.button
                      key={pageNumber}
                      onClick={() => handlePageClick(pageNumber)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === pageNumber
                          ? 'bg-primary text-white shadow-glow-sm'
                          : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {pageNumber}
                    </motion.button>
                  ))}
                </div>
                
                {/* Select móvil */}
                <div className="sm:hidden">
                  <select
                    value={currentPage}
                    onChange={(e) => handlePageClick(Number(e.target.value))}
                    className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                      <option key={pageNumber} value={pageNumber}>
                        Página {pageNumber}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Botón siguiente */}
                <motion.button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === totalPages
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                  whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                >
                  Siguiente
                  <i className="fas fa-chevron-right ml-2"></i>
                </motion.button>
              </div>
              
              <div className="text-sm text-gray-500">
                Filtro: <span className="font-medium text-primary">{activeFilter}</span>
              </div>
            </div>
          </FadeIn>
        )}
        
        {/* Estadísticas */}
        <FadeIn delay={1}>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
                <div className="text-sm text-gray-500">Proyectos totales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">{projects.filter(p => p.demoUrl !== '#').length}</div>
                <div className="text-sm text-gray-500">Proyectos en vivo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">{projects.filter(p => p.codeUrl !== '#').length}</div>
                <div className="text-sm text-gray-500">Código disponible</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  {Array.from(new Set(projects.flatMap(p => p.tags))).length}
                </div>
                <div className="text-sm text-gray-500">Tecnologías usadas</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
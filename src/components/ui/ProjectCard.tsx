import { Project } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getTechnologyIcon = (tech: string) => {
    const iconMap: Record<string, string> = {
      React: 'fab fa-react',
      TypeScript: 'fas fa-code',
      Tailwind: 'fas fa-palette',
      HTML: 'fab fa-html5',
      CSS: 'fab fa-css3-alt',
      JavaScript: 'fab fa-js',
      Bootstrap: 'fab fa-bootstrap',
      API: 'fas fa-cloud',
      Vite: 'fas fa-bolt',
      LocalStorage: 'fas fa-database',
      SCSS: 'fab fa-sass',
      'CSS3/SCSS': 'fab fa-sass',
      HTML5: 'fab fa-html5',
      'Node.js': 'fab fa-node-js',
      Express: 'fas fa-server',
      MongoDB: 'fas fa-database',
      Firebase: 'fas fa-fire',
      'Next.js': 'fas fa-bolt',
      GraphQL: 'fas fa-project-diagram'
    };

    return iconMap[tech] || 'fas fa-code';
  };

  const getTechnologyColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      React: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      TypeScript: 'bg-blue-600/10 text-blue-600 border-blue-600/20',
      Tailwind: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      HTML: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      CSS: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      JavaScript: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      Bootstrap: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      API: 'bg-green-500/10 text-green-500 border-green-500/20',
      Vite: 'bg-yellow-600/10 text-yellow-600 border-yellow-600/20',
      LocalStorage: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
      SCSS: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
      'CSS3/SCSS': 'bg-pink-500/10 text-pink-500 border-pink-500/20',
      HTML5: 'bg-orange-600/10 text-orange-600 border-orange-600/20'
    };

    return colorMap[tech] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  const defaultImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%23151E32'/%3E%3Ctext x='50%25' y='50%25' fill='%23CBD5E1' font-size='20' text-anchor='middle' dy='.3em'%3E" +
    encodeURIComponent(project.title) +
    '%3C/text%3E%3C/svg%3E';

  return (
    <>
      {/* CARD */}
      <motion.div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 flex flex-col h-full hover:shadow-xl dark:hover:shadow-primary/10"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* IMAGEN DE LA CARD CON ZOOM + INDICADOR VISUAL */}
        <motion.div
          className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-900 group"
          layoutId={`image-${project.id}`}
        >
          <img
            src={imageError ? defaultImage : project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* INDICADOR VISUAL DE MODAL (SOLO ÍCONO) */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 flex items-center justify-center text-white backdrop-blur-sm bg-black/30 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v4" />
                <path d="M10 14 21 3" />
                <path d="M21 15v4a2 2 0 0 1-2 2h-4" />
                <path d="M3 21h4a2 2 0 0 1 2-2v-4" />
                <path d="M3 3v4a2 2 0 0 1 2 2h4" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* CONTENIDO DE LA CARD */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 5).map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs rounded-full border flex items-center gap-1 ${getTechnologyColor(
                  tag
                )}`}
              >
                <i className={`${getTechnologyIcon(tag)} text-xs`} />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* MODAL PREVIEW - ZOOM DESDE LA CARD */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-surface-dark rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGEN DEL MODAL CON ZOOM COMPARTIDO */}
              <motion.div
                className="relative w-full aspect-[16/9] bg-gray-100 dark:bg-gray-900"
                layoutId={`image-${project.id}`}
              >
                <img
                  src={imageError ? defaultImage : project.image}
                  alt={project.title}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />

                {/* BOTÓN CERRAR - SOLO TEXTO */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-xs text-gray-200 hover:text-white transition underline-offset-2 hover:underline"
                >
                  Cerrar
                </button>
              </motion.div>

              {/* CONTENIDO DEL MODAL */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full border ${getTechnologyColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BOTONES DE ACCIÓN */}
                <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-4">
                  <div className="flex gap-4">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-primary"
                      >
                        Ver código
                      </a>
                    )}
                  </div>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:opacity-90 transition"
                    >
                      Ver demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;


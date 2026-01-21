import FadeIn from '../animations/FadeIn';
import SlideIn from '../animations/SlideIn';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section 
      className="py-20 bg-background-light dark:bg-background-dark" 
      id="sobre-mi"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 relative group">
            <SlideIn direction="right" delay={0.2}>
              {/* Contenedor principal */}
              <div className="profile-image-wrapper">
                {/* Efecto de brillo */}
                <div className="profile-glow"></div>
                {/* Efecto de borde animado */}
                <div className="profile-border-animation"></div>
                
                {/* Contenedor de la imagen */}
                <motion.div 
                  className="profile-image-container w-48 h-48"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Tu imagen */}
                  <img 
                    src="/profile.jpg" 
                    alt="Angel Berretta"
                    className="profile-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('profile-placeholder');
                        parent.innerHTML = `
                          <div class="flex flex-col items-center justify-center">
                            <i class="fas fa-user profile-placeholder-icon"></i>
                            <span class="profile-placeholder-name">ANGEL</span>
                            <span class="profile-placeholder-lastname">BERETTA</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  
                  {/* Superposición */}
                  <div className="profile-image-overlay"></div>
                  
                  {/* Indicador de estado */}
                  <div className="profile-status"></div>
                </motion.div>
                
                {/* Elementos decorativos */}
                <div className="profile-decoration profile-decoration-1"></div>
                <div className="profile-decoration profile-decoration-2"></div>
                <div className="profile-decoration profile-decoration-3"></div>
                
                {/* Badge de experiencia */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-surface-dark backdrop-blur border border-primary/30 p-4 rounded-2xl shadow-lg z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <span className="text-primary font-bold text-xl">1+</span>
                    </div>
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-400 uppercase tracking-wider">
                      Años de<br />Experiencia
                    </div>
                  </div>
                </motion.div>
              </div>
            </SlideIn>
          </div>
          
          {/* Resto del componente (se mantiene igual)... */}
          <div className="md:col-span-8 space-y-6">
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-4 mb-2">
                <motion.span 
                  className="h-1 w-10 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                ></motion.span>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                  Sobre mí
                </h2>
              </div>
            </FadeIn>
            
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <SlideIn direction="up" delay={0.6}>
                <p>
                  Soy un desarrollador web con{" "}
                  <span className="text-primary font-semibold">1 año de experiencia</span> en sistemas web propios, 
                  apasionado por crear interfaces modernas y reactivas.
                </p>
              </SlideIn>
              
              <SlideIn direction="up" delay={0.8}>
                <p>
                  Me especializo en{" "}
                  <span className="text-gray-900 dark:text-white font-medium">páginas estáticas y landing pages</span>, 
                  utilizando tecnologías frontend actuales para entregar soluciones eficientes y atractivas. 
                  Mi enfoque combina un código limpio con un diseño centrado en el usuario.
                </p>
              </SlideIn>
            </div>
            
            <FadeIn delay={1}>
              <div className="pt-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Mi enfoque de trabajo:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div 
                    className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Calidad garantizada</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Código limpio y documentado</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Desarrollo rápido</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Entregas en tiempo récord</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <i className="fas fa-comments"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Comunicación clara</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Actualizaciones constantes</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Soluciones creativas</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Innovación en cada proyecto</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={1.2}>
              <div className="pt-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">¿Por qué trabajar conmigo?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-rocket text-primary mt-1"></i>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Compromiso total:</span> Me involucro al 100% en cada proyecto, 
                      asegurando que cada detalle sea perfecto.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-sync-alt text-primary mt-1"></i>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Aprendizaje continuo:</span> Me mantengo actualizado con las últimas 
                      tecnologías y mejores prácticas del desarrollo web.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-users text-primary mt-1"></i>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Trabajo en equipo:</span> Excelentes habilidades de comunicación 
                      y colaboración para trabajar eficientemente en equipo.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
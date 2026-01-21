import { skills } from '../../data/skills';
import FadeIn from '../animations/FadeIn';
import { motion } from 'framer-motion';

const Skills = () => {
  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'from-blue-500 to-blue-600',
      yellow: 'from-yellow-400 to-yellow-500',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-400 to-purple-600',
      red: 'from-red-500 to-red-600',
      cyan: 'from-cyan-400 to-cyan-500',
      pink: 'from-pink-400 to-pink-500',
      gray: 'from-gray-400 to-gray-500',
      green: 'from-green-500 to-green-600'
    };
    return colorMap[color] || 'from-primary to-primary';
  };

  // Duplicar skills para el efecto infinito
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section 
      className="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden" 
      id="habilidades"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Gradientes decorativos */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark rounded-full border border-gray-200 dark:border-gray-800 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-500">Siempre actualizándome</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            
            <p className="text-gray-500 max-w-lg mx-auto text-lg">
              Las tecnologías que uso día a día para crear experiencias digitales increíbles.
            </p>
          </FadeIn>
        </div>

        {/* Marquee Container */}
        <div className="relative mb-16">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
          
          {/* Primera fila - izquierda a derecha */}
          <div className="overflow-hidden mb-4">
            <motion.div 
              className="flex gap-4"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`row1-${skill.id}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3 px-6 py-4 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getColorClass(skill.color)} flex items-center justify-center text-white text-lg shadow-lg`}>
                      <i className={skill.icon}></i>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Segunda fila - derecha a izquierda */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-4"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {duplicatedSkills.reverse().map((skill, index) => (
                <motion.div
                  key={`row2-${skill.id}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3 px-6 py-4 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getColorClass(skill.color)} flex items-center justify-center text-white text-lg shadow-lg`}>
                      <i className={skill.icon}></i>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <FadeIn delay={0.5}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-8 border-t border-gray-200 dark:border-gray-800">
            {[
              { value: '12+', label: 'Tecnologías' },
              { value: '1+', label: 'Años de experiencia' },
              { value: '8+', label: 'Proyectos completados' },
              { value: '∞', label: 'Ganas de aprender' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
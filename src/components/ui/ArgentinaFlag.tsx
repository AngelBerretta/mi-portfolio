import { motion } from 'framer-motion';

interface ArgentinaFlagProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const ArgentinaFlag = ({ size = 'md', animated = true }: ArgentinaFlagProps) => {
  const sizeClasses = {
    sm: 'w-5 h-4',
    md: 'w-6 h-5',
    lg: 'w-8 h-6'
  };

  const sunSize = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };

  const raySize = {
    sm: 'w-0.5 h-1.5',
    md: 'w-1 h-2',
    lg: 'w-1 h-2.5'
  };

  const FlagContent = () => (
    <div className={`${sizeClasses[size]} rounded overflow-hidden shadow-sm border border-gray-300 dark:border-gray-700 relative`}>
      {/* Franja superior - Celeste */}
      <div className="h-1/3 bg-gradient-to-r from-sky-400 to-sky-500"></div>
      
      {/* Franja central - Blanca con sol */}
      <div className="h-1/3 bg-white relative flex items-center justify-center">
        <div className={`${sunSize[size]} bg-yellow-500 rounded-full relative`}>
          {/* Rayos del sol */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className={`${raySize[size]} bg-yellow-500 absolute left-1/2 top-1/2 origin-center`}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-6px)`,
                borderRadius: '2px'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Franja inferior - Celeste */}
      <div className="h-1/3 bg-gradient-to-r from-sky-400 to-sky-500"></div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="inline-block"
      >
        <FlagContent />
      </motion.div>
    );
  }

  return <FlagContent />;
};

export default ArgentinaFlag;
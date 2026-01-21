import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  infinite?: boolean;
  className?: string;
}

const Typewriter = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 1500, 
  infinite = true,
  className 
}: TypewriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: number;

    if (!isPaused) {
      const currentFullText = texts[currentTextIndex];

      if (!isDeleting && currentText === currentFullText) {
        // Pausa al completar escritura
        timer = window.setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, delay);
        setIsPaused(true);

      } else if (isDeleting && currentText === '') {
        // Pasa al siguiente texto
        setIsDeleting(false);

        setCurrentTextIndex((prev) => {
          if (!infinite && prev === texts.length - 1) {
            return prev; // se detiene en el último texto
          }
          return (prev + 1) % texts.length;
        });

      } else {
        // Escribe o borra caracteres
        timer = window.setTimeout(() => {
          setCurrentText((prev) =>
            isDeleting
              ? prev.substring(0, prev.length - 1)
              : currentFullText.substring(0, prev.length + 1)
          );
        }, isDeleting ? deleteSpeed : speed);
      }
    }

    return () => window.clearTimeout(timer);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    isPaused,
    texts,
    speed,
    deleteSpeed,
    delay,
    infinite
  ]);

  return (
    <span className={`inline-block ${className ?? ''}`}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

export default Typewriter;

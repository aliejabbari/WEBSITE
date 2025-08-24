import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VintageFloatingElementsProps {
  className?: string;
}

const VintageFloatingElements: React.FC<VintageFloatingElementsProps> = ({ className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    {
      type: 'symbol',
      content: '∞',
      delay: 0,
      duration: 8,
      size: '1.5rem',
      color: '#D4AF37'
    },
    {
      type: 'symbol',
      content: 'φ',
      delay: 1,
      duration: 10,
      size: '1.2rem',
      color: '#8B4513'
    },
    {
      type: 'symbol',
      content: 'π',
      delay: 2,
      duration: 12,
      size: '1.3rem',
      color: '#CD853F'
    },
    {
      type: 'symbol',
      content: '∑',
      delay: 3,
      duration: 9,
      size: '1.4rem',
      color: '#D4AF37'
    },
    {
      type: 'dot',
      content: '•',
      delay: 0.5,
      duration: 6,
      size: '0.8rem',
      color: '#D4AF37'
    },
    {
      type: 'dot',
      content: '·',
      delay: 1.5,
      duration: 7,
      size: '0.6rem',
      color: '#8B4513'
    },
    {
      type: 'dot',
      content: '◦',
      delay: 2.5,
      duration: 8,
      size: '0.7rem',
      color: '#CD853F'
    }
  ];

  return (
    <div className={`vintage-floating-elements ${className}`}>
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`floating-element ${element.type}`}
          style={{
            position: 'absolute',
            fontSize: element.size,
            color: element.color,
            textShadow: `0 0 8px ${element.color}80`,
            pointerEvents: 'none',
            zIndex: 1
          }}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100
            ],
            y: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100
            ]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {element.content}
        </motion.div>
      ))}

      {/* Interactive floating particles that follow mouse */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="mouse-particle"
          style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            background: '#D4AF37',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(212, 175, 55, 0.8)',
            pointerEvents: 'none',
            zIndex: 2
          }}
          animate={{
            x: mousePosition.x + (index - 1) * 20,
            y: mousePosition.y + (index - 1) * 20,
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3
          }}
        />
      ))}

      {/* Vintage geometric shapes */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`shape-${index}`}
          className="vintage-shape"
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            borderRadius: index % 2 === 0 ? '50%' : '0%',
            pointerEvents: 'none',
            zIndex: 1
          }}
          initial={{
            opacity: 0,
            rotate: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            rotate: 360,
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ]
          }}
          transition={{
            duration: 15 + index * 2,
            delay: index * 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default VintageFloatingElements;

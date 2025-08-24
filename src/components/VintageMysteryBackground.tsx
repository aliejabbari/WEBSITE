import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VintageMysteryBackgroundProps {
  className?: string;
}

const VintageMysteryBackground: React.FC<VintageMysteryBackgroundProps> = ({ className = '' }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const generateMysteryPattern = () => {
    const patterns = [];
    for (let i = 0; i < 8; i++) {
      patterns.push({
        id: i,
        x: Math.sin(time * 0.01 + i) * 50 + 50,
        y: Math.cos(time * 0.015 + i) * 50 + 50,
        size: Math.sin(time * 0.02 + i) * 20 + 30,
        opacity: Math.sin(time * 0.03 + i) * 0.3 + 0.1,
        rotation: time * 0.5 + i * 45
      });
    }
    return patterns;
  };

  return (
    <div className={`vintage-mystery-background ${className}`}>
      {/* Animated mystery circles */}
      {generateMysteryPattern().map((pattern) => (
        <motion.div
          key={pattern.id}
          className="mystery-circle"
          style={{
            position: 'absolute',
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
            width: `${pattern.size}px`,
            height: `${pattern.size}px`,
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '50%',
            opacity: pattern.opacity,
            pointerEvents: 'none',
            zIndex: 0
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [pattern.opacity * 0.5, pattern.opacity, pattern.opacity * 0.5],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8 + pattern.id * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Vintage grid lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`grid-${i}`}
          className="vintage-grid-line"
          style={{
            position: 'absolute',
            left: `${i * 20}%`,
            top: 0,
            width: '1px',
            height: '100%',
            background: 'linear-gradient(180deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
            pointerEvents: 'none',
            zIndex: 0
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`grid-h-${i}`}
          className="vintage-grid-line-horizontal"
          style={{
            position: 'absolute',
            left: 0,
            top: `${i * 20}%`,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
            pointerEvents: 'none',
            zIndex: 0
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      {/* Floating vintage symbols */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="floating-vintage-symbol"
          style={{
            position: 'absolute',
            fontSize: '1.5rem',
            color: 'rgba(212, 175, 55, 0.4)',
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            pointerEvents: 'none',
            zIndex: 1
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          {['∞', 'φ', 'π', '∑', '∫', '∇'][i]}
        </motion.div>
      ))}

      {/* Mystery energy waves */}
      <motion.div
        className="mystery-wave"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '200px',
          height: '200px',
          border: '2px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        animate={{
          scale: [0.5, 2, 0.5],
          opacity: [0.3, 0.1, 0.3],
          borderWidth: ['2px', '1px', '2px']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="mystery-wave-2"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '300px',
          height: '300px',
          border: '1px solid rgba(139, 69, 19, 0.15)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        animate={{
          scale: [0.3, 1.5, 0.3],
          opacity: [0.2, 0.05, 0.2],
          borderWidth: ['1px', '0.5px', '1px']
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Vintage texture overlay */}
      <motion.div
        className="vintage-texture-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='vintage-pattern' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Ccircle cx='10' cy='10' r='0.5' fill='rgba(212,175,55,0.05)'/%3E%3Ccircle cx='90' cy='20' r='0.3' fill='rgba(139,69,19,0.03)'/%3E%3Ccircle cx='50' cy='80' r='0.4' fill='rgba(212,175,55,0.04)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23vintage-pattern)'/%3E%3C/svg%3E")`,
          opacity: 0.3,
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'multiply'
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default VintageMysteryBackground;

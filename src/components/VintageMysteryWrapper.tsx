import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VintageMysteryWrapperProps {
  children: React.ReactNode;
  variant?: 'fade' | 'pulse' | 'drift' | 'mystery' | 'vintage';
  intensity?: number;
  className?: string;
  delay?: number;
}

const VintageMysteryWrapper: React.FC<VintageMysteryWrapperProps> = ({
  children,
  variant = 'mystery',
  intensity = 1,
  className = '',
  delay = 0
}) => {
  const [mysteryPhase, setMysteryPhase] = useState(0);
  const [fadeIntensity, setFadeIntensity] = useState(0.3);

  useEffect(() => {
    const interval = setInterval(() => {
      setMysteryPhase(prev => (prev + 1) % 100);
      setFadeIntensity(0.3 + Math.sin(Date.now() * 0.001) * 0.2);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getVariantAnimation = () => {
    switch (variant) {
      case 'fade':
        return {
          opacity: [0.3, 0.8, 0.3],
          scale: [0.98, 1.02, 0.98],
          filter: [
            'brightness(0.8) contrast(1.2)',
            'brightness(1.2) contrast(1.4)',
            'brightness(0.8) contrast(1.2)'
          ]
        };
      case 'pulse':
        return {
          opacity: [0.4, 1, 0.4],
          scale: [0.95, 1.05, 0.95],
          filter: [
            'brightness(0.7) sepia(0.3)',
            'brightness(1.3) sepia(0.1)',
            'brightness(0.7) sepia(0.3)'
          ]
        };
      case 'drift':
        return {
          x: [0, 2, -2, 0],
          y: [0, -1, 1, 0],
          opacity: [0.5, 0.9, 0.5],
          filter: [
            'brightness(0.8) hue-rotate(0deg)',
            'brightness(1.1) hue-rotate(5deg)',
            'brightness(0.8) hue-rotate(0deg)'
          ]
        };
      case 'mystery':
        return {
          opacity: [0.2, 0.9, 0.2],
          scale: [0.9, 1.1, 0.9],
          filter: [
            'brightness(0.6) contrast(1.5) sepia(0.4)',
            'brightness(1.4) contrast(1.8) sepia(0.1)',
            'brightness(0.6) contrast(1.5) sepia(0.4)'
          ]
        };
      case 'vintage':
        return {
          opacity: [0.4, 0.8, 0.4],
          scale: [0.98, 1.02, 0.98],
          filter: [
            'brightness(0.8) sepia(0.5) contrast(1.3)',
            'brightness(1.1) sepia(0.2) contrast(1.5)',
            'brightness(0.8) sepia(0.5) contrast(1.3)'
          ]
        };
      default:
        return {
          opacity: [0.3, 0.8, 0.3],
          scale: [0.98, 1.02, 0.98]
        };
    }
  };

  const getMysteryOverlay = () => {
    if (variant === 'mystery') {
      return (
        <motion.div
          className="mystery-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at ${50 + Math.sin(mysteryPhase * 0.1) * 20}% ${50 + Math.cos(mysteryPhase * 0.1) * 20}%, 
              rgba(212, 175, 55, ${0.1 + Math.sin(mysteryPhase * 0.05) * 0.05}) 0%, 
              transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 1,
            mixBlendMode: 'overlay'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{
            duration: 3 + intensity * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      );
    }
    return null;
  };

  return (
    <motion.div
      className={`vintage-mystery-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
    >
      {/* Vintage border glow */}
      <motion.div
        className="vintage-border"
        style={{
          position: 'absolute',
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          background: `linear-gradient(45deg, 
            rgba(212, 175, 55, ${0.3 * intensity}), 
            rgba(139, 69, 19, ${0.2 * intensity}), 
            rgba(212, 175, 55, ${0.3 * intensity}))`,
          borderRadius: '8px',
          zIndex: -1,
          opacity: 0.6
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{
          duration: 4 + intensity * 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main content with mystery animation */}
      <motion.div
        className="mystery-content"
        animate={getVariantAnimation()}
        transition={{
          duration: 2 + intensity * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }}
        style={{
          position: 'relative',
          zIndex: 2
        }}
      >
        {children}
        {getMysteryOverlay()}
      </motion.div>

      {/* Floating mystery particles */}
      {variant === 'mystery' && (
        <motion.div
          className="mystery-particles"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="mystery-particle"
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: '#D4AF37',
                borderRadius: '50%',
                boxShadow: '0 0 4px rgba(212, 175, 55, 0.8)',
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                x: [0, Math.sin(i) * 20, 0],
                y: [0, Math.cos(i) * 15, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Vintage texture overlay */}
      <motion.div
        className="vintage-texture"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='vintage' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Ccircle cx='20' cy='20' r='1' fill='rgba(212,175,55,0.1)'/%3E%3Ccircle cx='80' cy='40' r='0.5' fill='rgba(139,69,19,0.1)'/%3E%3Ccircle cx='40' cy='80' r='0.8' fill='rgba(212,175,55,0.1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23vintage)'/%3E%3C/svg%3E")`,
          opacity: 0.1 * intensity,
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'multiply'
        }}
        animate={{
          opacity: [0.05 * intensity, 0.15 * intensity, 0.05 * intensity]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default VintageMysteryWrapper;

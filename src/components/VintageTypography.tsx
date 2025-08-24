import React from 'react';
import { motion } from 'framer-motion';

interface VintageTypographyProps {
  children: React.ReactNode;
  variant?: 'title' | 'heading' | 'subtitle' | 'body' | 'code' | 'mystery';
  className?: string;
  delay?: number;
  animate?: boolean;
}

const VintageTypography: React.FC<VintageTypographyProps> = ({
  children,
  variant = 'body',
  className = '',
  delay = 0,
  animate = true
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'title':
        return {
          fontFamily: "'Cinzel', 'Playfair Display', serif",
          fontSize: '4.5rem',
          fontWeight: 900,
          color: '#D4AF37',
          textShadow: '0 0 30px rgba(212, 175, 55, 0.9), 0 0 60px rgba(212, 175, 55, 0.4)',
          letterSpacing: '0.3em',
          lineHeight: 1.2,
          filter: 'contrast(1.3) brightness(1.1)'
        };
      case 'heading':
        return {
          fontFamily: "'Cinzel', 'Orbitron', monospace",
          fontSize: '3rem',
          fontWeight: 700,
          color: '#D4AF37',
          textShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.3)',
          letterSpacing: '0.2em',
          lineHeight: 1.3,
          filter: 'contrast(1.2) brightness(1.05)'
        };
      case 'subtitle':
        return {
          fontFamily: "'Crimson Text', 'Playfair Display', serif",
          fontSize: '1.5rem',
          color: '#E8E8E8',
          textShadow: '0 0 10px rgba(232, 232, 232, 0.6), 0 0 20px rgba(232, 232, 232, 0.2)',
          letterSpacing: '0.1em',
          lineHeight: 1.4,
          filter: 'contrast(1.1)'
        };
      case 'body':
        return {
          fontFamily: "'Crimson Text', 'Source Code Pro', monospace",
          fontSize: '1.1rem',
          color: '#E8E8E8',
          textShadow: '0 0 5px rgba(232, 232, 232, 0.3)',
          lineHeight: 1.8,
          filter: 'contrast(1.05)'
        };
      case 'code':
        return {
          fontFamily: "'Fira Code', 'Source Code Pro', monospace",
          fontSize: '0.9rem',
          color: '#D4AF37',
          textShadow: '0 0 8px rgba(212, 175, 55, 0.6)',
          letterSpacing: '0.05em',
          lineHeight: 1.6,
          filter: 'contrast(1.2) brightness(1.1)'
        };
      case 'mystery':
        return {
          fontFamily: "'Cinzel', 'Playfair Display', serif",
          fontSize: '2.5rem',
          fontWeight: 600,
          color: '#D4AF37',
          textShadow: '0 0 15px rgba(212, 175, 55, 0.7), 0 0 30px rgba(212, 175, 55, 0.3)',
          letterSpacing: '0.15em',
          lineHeight: 1.3,
          filter: 'contrast(1.4) brightness(1.2) sepia(0.2)'
        };
      default:
        return {
          fontFamily: "'Crimson Text', serif",
          fontSize: '1rem',
          color: '#E8E8E8',
          lineHeight: 1.6
        };
    }
  };

  const getMysteryAnimation = () => {
    if (variant === 'mystery') {
      return {
        opacity: [0.3, 1, 0.3],
        scale: [0.95, 1.05, 0.95],
        textShadow: [
          '0 0 15px rgba(212, 175, 55, 0.7), 0 0 30px rgba(212, 175, 55, 0.3)',
          '0 0 25px rgba(212, 175, 55, 1), 0 0 50px rgba(212, 175, 55, 0.6)',
          '0 0 15px rgba(212, 175, 55, 0.7), 0 0 30px rgba(212, 175, 55, 0.3)'
        ],
        filter: [
          'contrast(1.4) brightness(1.2) sepia(0.2)',
          'contrast(1.8) brightness(1.4) sepia(0.1)',
          'contrast(1.4) brightness(1.2) sepia(0.2)'
        ]
      };
    }
    return {};
  };

  if (!animate) {
    return (
      <div 
        className={`vintage-typography ${variant} ${className}`}
        style={getVariantStyles()}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`vintage-typography ${variant} ${className}`}
      style={getVariantStyles()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      whileHover={variant === 'mystery' ? {
        scale: 1.02,
        textShadow: '0 0 30px rgba(212, 175, 55, 1), 0 0 60px rgba(212, 175, 55, 0.5)',
        filter: 'contrast(1.6) brightness(1.3) sepia(0.1)'
      } : {}}
    >
      {variant === 'mystery' && (
        <motion.div
          animate={getMysteryAnimation()}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {children}
        </motion.div>
      )}
      {variant !== 'mystery' && children}
    </motion.div>
  );
};

export default VintageTypography;

import React from 'react';
import { motion } from 'framer-motion';

interface MathMysteryOverlayProps {
  variant: 'golden_ratio' | 'fibonacci_spiral' | 'sacred_geometry' | 'cosmic_flow' | 'mathematical_waves' | 'geometric_volumes';
  isVisible: boolean;
}

const MathMysteryOverlay: React.FC<MathMysteryOverlayProps> = ({ variant, isVisible }) => {
  const getGeometricElements = () => {
    switch (variant) {
      case 'golden_ratio':
        return {
          primaryColor: '#D4AF37',
          secondaryColor: '#8B4513',
          elements: [
            { type: 'spiral', size: 80, delay: 0 },
            { type: 'golden_rectangle', size: 60, delay: 0.5 },
            { type: 'pentagon', size: 40, delay: 1 },
            { type: 'golden_ratio_circles', size: 100, delay: 1.5 }
          ]
        };
      case 'fibonacci_spiral':
        return {
          primaryColor: '#8B4513',
          secondaryColor: '#D4AF37',
          elements: [
            { type: 'fibonacci_rectangles', size: 70, delay: 0 },
            { type: 'spiral_curve', size: 90, delay: 0.3 },
            { type: 'fibonacci_dots', size: 50, delay: 0.8 },
            { type: 'growth_pattern', size: 80, delay: 1.2 }
          ]
        };
      case 'sacred_geometry':
        return {
          primaryColor: '#CD853F',
          secondaryColor: '#D4AF37',
          elements: [
            { type: 'flower_of_life', size: 85, delay: 0 },
            { type: 'metatron_cube', size: 75, delay: 0.4 },
            { type: 'sacred_triangle', size: 55, delay: 0.9 },
            { type: 'geometric_mandala', size: 95, delay: 1.3 }
          ]
        };
      case 'cosmic_flow':
        return {
          primaryColor: '#8B4513',
          secondaryColor: '#CD853F',
          elements: [
            { type: 'energy_waves', size: 90, delay: 0 },
            { type: 'quantum_field', size: 70, delay: 0.2 },
            { type: 'cosmic_spiral', size: 80, delay: 0.7 },
            { type: 'flow_lines', size: 60, delay: 1.1 }
          ]
        };
      case 'mathematical_waves':
        return {
          primaryColor: '#CD853F',
          secondaryColor: '#8B4513',
          elements: [
            { type: 'sine_wave', size: 85, delay: 0 },
            { type: 'interference_pattern', size: 75, delay: 0.3 },
            { type: 'harmonic_circles', size: 65, delay: 0.8 },
            { type: 'wave_field', size: 95, delay: 1.2 }
          ]
        };
      case 'geometric_volumes':
        return {
          primaryColor: '#D4AF37',
          secondaryColor: '#CD853F',
          elements: [
            { type: 'platonic_solids', size: 70, delay: 0 },
            { type: 'geometric_net', size: 80, delay: 0.4 },
            { type: 'volume_shapes', size: 60, delay: 0.9 },
            { type: 'geometric_grid', size: 90, delay: 1.3 }
          ]
        };
      default:
        return {
          primaryColor: '#D4AF37',
          secondaryColor: '#8B4513',
          elements: [
            { type: 'mystery_shape', size: 70, delay: 0 },
            { type: 'geometric_pattern', size: 60, delay: 0.5 }
          ]
        };
    }
  };

  const config = getGeometricElements();

  const renderGeometricElement = (element: any, index: number) => {
    const { type, size, delay } = element;
    
    switch (type) {
      case 'spiral':
        return (
          <motion.div
            key={index}
            className="geometric-element spiral"
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              border: `2px solid ${config.primaryColor}`,
              borderRadius: '50%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8],
              rotate: [0, 360, 720],
              opacity: [0, 0.8, 0.4]
            }}
            transition={{
              duration: 6,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case 'golden_rectangle':
        return (
          <motion.div
            key={index}
            className="geometric-element golden-rectangle"
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size * 0.618}px`,
              border: `1px solid ${config.secondaryColor}`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.9],
              rotate: [0, 180, 360],
              opacity: [0, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case 'pentagon':
        return (
          <motion.div
            key={index}
            className="geometric-element pentagon"
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8],
              rotate: [0, 360],
              opacity: [0, 0.7, 0.4]
            }}
            transition={{
              duration: 10,
              delay: delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <polygon
                points="50,10 80,35 70,70 30,70 20,35"
                fill="none"
                stroke={config.primaryColor}
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        );

      case 'fibonacci_rectangles':
        return (
          <motion.div
            key={index}
            className="geometric-element fibonacci-rectangles"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.9],
              opacity: [0, 0.8, 0.4]
            }}
            transition={{
              duration: 7,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[1, 1, 2, 3, 5].map((ratio, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: `${size * ratio * 0.1}px`,
                  height: `${size * ratio * 0.1}px`,
                  border: `1px solid ${config.primaryColor}`,
                  left: `${i * 15}px`,
                  top: `${i * 15}px`
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        );

      case 'flower_of_life':
        return (
          <motion.div
            key={index}
            className="geometric-element flower-of-life"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.9],
              rotate: [0, 360],
              opacity: [0, 0.7, 0.4]
            }}
            transition={{
              duration: 12,
              delay: delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: `${size * 0.3}px`,
                  height: `${size * 0.3}px`,
                  border: `1px solid ${config.primaryColor}`,
                  borderRadius: '50%',
                  left: `${Math.cos(i * Math.PI / 3) * size * 0.15}px`,
                  top: `${Math.sin(i * Math.PI / 3) * size * 0.15}px`
                }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        );

      case 'sine_wave':
        return (
          <motion.div
            key={index}
            className="geometric-element sine-wave"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.9],
              opacity: [0, 0.8, 0.4]
            }}
            transition={{
              duration: 8,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width={`${size}px`} height={`${size * 0.5}px`} viewBox={`0 0 ${size} ${size * 0.5}`}>
              <path
                d={`M 0,${size * 0.25} Q ${size * 0.25},0 ${size * 0.5},${size * 0.25} T ${size},${size * 0.25}`}
                fill="none"
                stroke={config.primaryColor}
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </motion.div>
        );

      case 'platonic_solids':
        return (
          <motion.div
            key={index}
            className="geometric-element platonic-solids"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8],
              rotate: [0, 360],
              opacity: [0, 0.7, 0.4]
            }}
            transition={{
              duration: 15,
              delay: delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: `${size * 0.2}px`,
                  height: `${size * 0.2}px`,
                  border: `1px solid ${config.primaryColor}`,
                  borderRadius: i % 2 === 0 ? '50%' : '0%',
                  left: `${Math.cos(i * Math.PI / 2.5) * size * 0.2}px`,
                  top: `${Math.sin(i * Math.PI / 2.5) * size * 0.2}px`
                }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
              />
            ))}
          </motion.div>
        );

      default:
        return (
          <motion.div
            key={index}
            className="geometric-element default"
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              border: `2px solid ${config.primaryColor}`,
              borderRadius: '50%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8],
              opacity: [0, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
    }
  };

  return (
    <motion.div
      className={`math-mystery-overlay ${variant}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8 
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        zIndex: 10,
        backdropFilter: 'blur(2px)'
      }}
    >
      {/* Subtle background pattern */}
      <motion.div
        className="overlay-pattern"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 30%, ${config.primaryColor}05 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, ${config.secondaryColor}03 0%, transparent 50%)`,
          zIndex: -1
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Render geometric elements */}
      {config.elements.map((element, index) => 
        renderGeometricElement(element, index)
      )}

      {/* Subtle border glow */}
      <motion.div
        className="overlay-border-glow"
        style={{
          position: 'absolute',
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          border: `1px solid ${config.primaryColor}30`,
          borderRadius: '9px',
          zIndex: -1
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.98, 1.01, 0.98]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default MathMysteryOverlay;

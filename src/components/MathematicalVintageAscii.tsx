import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MathematicalVintageAsciiProps {
  variant?: 'golden_ratio' | 'fibonacci_spiral' | 'sacred_geometry' | 'cosmic_flow' | 'mathematical_waves' | 'geometric_volumes' | 'space_harmonics' | 'vintage_equations';
  intensity?: number;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const MathematicalVintageAscii: React.FC<MathematicalVintageAsciiProps> = ({ 
  variant = 'golden_ratio', 
  intensity = 1,
  className = '',
  size = 'medium'
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Dynamic sizing based on variant and size prop
    let width = size === 'small' ? 50 : size === 'large' ? 100 : 80;
    let height = size === 'small' ? 25 : size === 'large' ? 50 : 40;
    
    let grid: string[][] = [];
    let time = 0;
    let animationFrameId: number;
    let phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    
    // Enhanced ASCII characters for richer vintage mathematical aesthetic
    const asciiChars = [' ', '.', '·', ':', ';', '¦', '=', '+', '-', '∗', '※', '#', '@', '&', '%', '~', '^', 'v', '<', '>', '|', '/', '\\', '∞', '∆', '∇'];
    
    function initGrid() {
      grid = [];
      for (let y = 0; y < height; y++) {
        let row = [];
        for (let x = 0; x < width; x++) {
          row.push(' ');
        }
        grid.push(row);
      }
    }
    
    function render() {
      let html = '';
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          html += grid[y][x];
        }
        html += '<br>';
      }
      if (canvas) {
        canvas.innerHTML = html;
      }
    }
    
    function update() {
      initGrid();
      
      // Refined timing for more elegant animations
      const t = time * 0.008 * intensity; // Slightly faster but still graceful
      
      switch (variant) {
        case 'golden_ratio': updateGoldenRatio(t); break;
        case 'fibonacci_spiral': updateFibonacciSpiral(t); break;
        case 'sacred_geometry': updateSacredGeometry(t); break;
        case 'cosmic_flow': updateCosmicFlow(t); break;
        case 'mathematical_waves': updateMathematicalWaves(t); break;
        case 'geometric_volumes': updateGeometricVolumes(t); break;
        case 'space_harmonics': updateSpaceHarmonics(t); break;
        case 'vintage_equations': updateVintageEquations(t); break;
        default: updateGoldenRatio(t);
      }
      
      time++;
    }
    
    function updateGoldenRatio(t: number) {
      // Enhanced golden ratio with logarithmic spiral and harmonics
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          
          // Golden ratio spiral with logarithmic growth
          const logSpiral = Math.sin(Math.log(dist + 1) * phi - t * 0.6 + angle * phi);
          const goldenWave = Math.cos(dist * 0.12 * phi + t * 0.4 + angle * (phi - 1));
          const fibonacci = Math.sin(dist * 0.09 - t * 0.5 + angle * (phi * phi));
          const harmony = Math.cos(dist * 0.07 * phi - t * 0.3 + angle * (2 * phi));
          
          const combined = (logSpiral * 0.4 + goldenWave * 0.3 + fibonacci * 0.2 + harmony * 0.1);
          
          if (Math.abs(combined) > 0.2) {
            const intensity = Math.abs(combined);
            const charIndex = Math.floor(intensity * 20 + Math.sin(t * 0.1 + x * 0.1) * 3);
            grid[y][x] = asciiChars[Math.min(Math.max(charIndex, 1), asciiChars.length - 1)];
          }
        }
      }
      
      // Golden ratio spiral points with natural growth
      if (time % 6 === 0) {
        for (let i = 0; i < 8; i++) {
          const angle = i * 2 * Math.PI / phi + t * 0.15;
          const radius = Math.exp(angle * 0.2) * 0.8;
          const x = Math.floor(width / 2 + radius * Math.cos(angle));
          const y = Math.floor(height / 2 + radius * Math.sin(angle));
          if (x >= 0 && x < width && y >= 0 && y < height) {
            grid[y][x] = asciiChars[Math.floor(Math.sin(t + i) * 5) + 12];
          }
        }
      }
    }
    
    function updateFibonacciSpiral(t: number) {
      // Fibonacci with natural sequence progression
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          
          // Fibonacci sequence ratios creating natural spirals
          const fib1 = Math.sin(dist * 0.13 - t * 0.45 + angle * 1.618);
          const fib2 = Math.cos(dist * 0.08 - t * 0.35 + angle * 2.618) * Math.sin(t * 0.1);
          const fib3 = Math.sin(dist * 0.05 - t * 0.25 + angle * 4.236) * Math.cos(dist * 0.02);
          const growth = Math.exp(-dist * 0.03) * Math.sin(angle * 5 + t * 0.3);
          
          const combined = (fib1 * 0.4 + fib2 * 0.3 + fib3 * 0.2 + growth * 0.1);
          
          if (Math.abs(combined) > 0.25) {
            const intensity = Math.abs(combined);
            const charIndex = Math.floor(intensity * 18 + Math.cos(t * 0.08 + y * 0.1) * 4);
            grid[y][x] = asciiChars[Math.min(Math.max(charIndex, 2), asciiChars.length - 1)];
          }
        }
      }
      
      // Fibonacci sequence visualization
      if (time % 8 === 0) {
        let a = 1, b = 1;
        for (let i = 0; i < 12; i++) {
          const temp = a + b;
          a = b;
          b = temp;
          
          const angle = i * Math.PI * 0.4 + t * 0.08;
          const radius = Math.log(i + 2) * 2;
          const x = Math.floor(width / 2 + radius * Math.cos(angle));
          const y = Math.floor(height / 2 + radius * Math.sin(angle));
          if (x >= 0 && x < width && y >= 0 && y < height) {
            grid[y][x] = asciiChars[Math.floor(i % 8) + 8];
          }
        }
      }
    }
    
    function updateSacredGeometry(t: number) {
      // Sacred geometry with multiple overlapping patterns
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          
          // Platonic solid harmonics
          const hexagon = Math.sin(6 * angle + t * 0.25) * Math.exp(-dist * 0.05);
          const pentagon = Math.sin(5 * angle - t * 0.2) * Math.cos(dist * 0.08);
          const octagon = Math.sin(8 * angle + t * 0.15) * Math.sin(dist * 0.06 - t * 0.1);
          const vesica = Math.sin(dist * 0.12 - t * 0.35) * Math.cos(angle * 2);
          const flower = Math.cos(angle * 12 + t * 0.3) * Math.sin(dist * 0.1);
          
          const combined = (hexagon * 0.25 + pentagon * 0.25 + octagon * 0.2 + vesica * 0.15 + flower * 0.15);
          
          if (Math.abs(combined) > 0.18) {
            const intensity = Math.abs(combined);
            const charIndex = Math.floor(intensity * 22 + Math.sin(angle * 3 + t * 0.1) * 3);
            grid[y][x] = asciiChars[Math.min(Math.max(charIndex, 1), asciiChars.length - 1)];
          }
        }
      }
      
      // Geometric mandala patterns
      if (time % 10 === 0) {
        for (let ring = 0; ring < 3; ring++) {
          for (let i = 0; i < 6 + ring * 6; i++) {
            const angle = i * 2 * Math.PI / (6 + ring * 6) + t * 0.03 * (ring + 1);
            const radius = (ring + 1) * 4;
            const x = Math.floor(width / 2 + radius * Math.cos(angle));
            const y = Math.floor(height / 2 + radius * Math.sin(angle));
            if (x >= 0 && x < width && y >= 0 && y < height) {
              grid[y][x] = asciiChars[Math.floor(ring * 6 + i % 8) + 6];
            }
          }
        }
      }
    }
    
    function updateCosmicFlow(t: number) {
      // Cosmic flow with quantum field equations
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          
          // Quantum field fluctuations
          const quantum = Math.sin(dist * 0.09 - t * 0.4 + angle * 2.7) * Math.cos(t * 0.12);
          const relativity = Math.cos(dist * 0.07 - t * 0.25 + angle * 1.9) * Math.sin(dist * 0.02);
          const darkmatter = Math.sin(dist * 0.11 - t * 0.35 + angle * 3.4) * Math.exp(-dist * 0.02);
          const spacetime = Math.cos(dist * 0.05 - t * 0.45 + angle * 2.1) * Math.sin(angle * 4);
          const wormhole = Math.sin(Math.log(dist + 1) - t * 0.3) * Math.cos(angle * 6);
          
          const combined = (quantum * 0.25 + relativity * 0.2 + darkmatter * 0.2 + spacetime * 0.2 + wormhole * 0.15);
          
          if (Math.abs(combined) > 0.12) {
            const intensity = Math.abs(combined);
            const charIndex = Math.floor(intensity * 25 + Math.sin(dist * 0.1 + t * 0.15) * 4);
            grid[y][x] = asciiChars[Math.min(Math.max(charIndex, 1), asciiChars.length - 1)];
          }
        }
      }
      
      // Cosmic particle streams
      if (time % 12 === 0) {
        for (let i = 0; i < 15; i++) {
          const angle = (i / 15) * 2 * Math.PI + t * 0.05;
          const radius = Math.sin(t * 0.1 + i) * 12 + 8;
          const x = Math.floor(width / 2 + radius * Math.cos(angle));
          const y = Math.floor(height / 2 + radius * Math.sin(angle));
          if (x >= 0 && x < width && y >= 0 && y < height) {
            grid[y][x] = asciiChars[Math.floor(Math.random() * 8) + 15];
          }
        }
      }
    }
    
    function updateMathematicalWaves(t: number) {
      // Complex wave interference with harmonics
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          
          // Harmonic wave equations with phase relationships
          const wave1 = Math.sin(dx * 0.16 + t * 0.4) * Math.cos(dy * 0.13 + t * 0.25);
          const wave2 = Math.sin((dx + dy) * 0.09 + t * 0.32) * Math.cos((dx - dy) * 0.07 + t * 0.18);
          const wave3 = Math.sin(dx * 0.12 - dy * 0.06 + t * 0.45) * Math.cos(dy * 0.09 - dx * 0.04 + t * 0.22);
          const standing = Math.sin(Math.sqrt(dx * dx + dy * dy) * 0.08 + t * 0.5) * Math.cos(t * 0.15);
          const interference = Math.sin(dx * 0.05 + dy * 0.05 + t * 0.35) * Math.sin(dx * 0.08 - dy * 0.08 - t * 0.28);
          
          const combined = (wave1 * 0.25 + wave2 * 0.2 + wave3 * 0.2 + standing * 0.2 + interference * 0.15);
          
          if (Math.abs(combined) > 0.15) {
            const intensity = Math.abs(combined);
            const charIndex = Math.floor(intensity * 20 + Math.sin(dx * 0.1 + dy * 0.1 + t * 0.1) * 3);
            grid[y][x] = asciiChars[Math.min(Math.max(charIndex, 2), asciiChars.length - 1)];
          }
        }
      }
      
      // Wave propagation nodes
      if (time % 15 === 0) {
        for (let x = 0; x < width; x += 4) {
          for (let y = 0; y < height; y += 3) {
            const phase = Math.sin(x * 0.2 + y * 0.2 + t * 0.1);
            if (phase > 0.6) {
              grid[y][x] = asciiChars[Math.floor(phase * 10) + 8];
            }
          }
        }
      }
    }
    
    function updateGeometricVolumes(t: number) {
      // 3D geometric projections with rotation
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          
          // 3D shape projections with rotation matrices
          const cube = Math.sin(dx * 0.11 + t * 0.25) * Math.sin(dy * 0.11 + t * 0.25) * Math.cos(t * 0.15);
          const sphere = Math.sin(dist * 0.09 - t * 0.35) * Math.exp(-dist * 0.03);
          const cylinder = Math.sin(angle * 4 + t * 0.18) * Math.cos(dist * 0.07 - t * 0.28);
          const torus = Math.sin(dist * 0.12 - t * 0.4) * Math.cos(angle * 6 + t * 0.12);
          const tetrahedron = Math.sin(angle * 3 + t * 0.2) * Math.cos(dist * 0.08 + t * 0.3);
          const icosahedron = Math.sin(angle * 5 + t * 0.16) * Math.sin(dist * 0.06 - t * 0.32);
          
          const combined = (cube * 0.2 + sphere * 0.18 + cylinder * 0.17 + torus * 0.16 + tetrahedron * 0.15 + icosahedron * 0.14);
          
          if (Math.abs(combined) > 0.2) {
            const intensity = Math.abs(combined);
            const charIndex = Math.floor(intensity * 18 + Math.cos(angle * 2 + t * 0.08) * 4);
            grid[y][x] = asciiChars[Math.min(Math.max(charIndex, 2), asciiChars.length - 1)];
          }
        }
      }
      
      // Rotating geometric wireframes
      if (time % 20 === 0) {
        const shapes = [4, 6, 8]; // Square, hexagon, octagon
        shapes.forEach((sides, shapeIndex) => {
          const radius = 6 + shapeIndex * 2;
          for (let i = 0; i < sides; i++) {
            const angle = i * 2 * Math.PI / sides + t * 0.02 * (shapeIndex + 1);
            const x = Math.floor(width / 2 + radius * Math.cos(angle));
            const y = Math.floor(height / 2 + radius * Math.sin(angle));
            if (x >= 0 && x < width && y >= 0 && y < height) {
              grid[y][x] = asciiChars[Math.floor(shapeIndex * 4 + i % 6) + 10];
            }
          }
        });
      }
    }
    
    function updateSpaceHarmonics(t: number) {
      // Celestial mechanics and orbital harmonics
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          
          // Orbital resonance patterns
          const orbital1 = Math.sin(dist * 0.11 - t * 0.28 + angle * 2.4) * Math.cos(t * 0.08);
          const orbital2 = Math.cos(dist * 0.08 - t * 0.22 + angle * 3.2) * Math.sin(angle + t * 0.12);
          const orbital3 = Math.sin(dist * 0.14 - t * 0.35 + angle * 1.7) * Math.exp(-dist * 0.02);
          const resonance = Math.cos(dist * 0.06 - t * 0.15 + angle * 2.8) * Math.sin(dist * 0.03);
          const gravitational = Math.sin(1 / (dist * 0.1 + 1) + t * 0.3) * Math.cos(angle * 4);
          const planetary = Math.cos(angle * 7 + t * 0.18) * Math.sin(dist * 0.09 - t * 0.25);
          
          const combined = (orbital1 * 0.2 + orbital2 * 0.18 + orbital3 * 0.17 + resonance * 0.16 + gravitational * 0.15 + planetary * 0.14);
          
          if (Math.abs(combined) > 0.14) {
            const intensity = Math.abs(combined);
            const charIndex = Math.floor(intensity * 24 + Math.sin(angle * 3 + t * 0.1) * 3);
            grid[y][x] = asciiChars[Math.min(Math.max(charIndex, 1), asciiChars.length - 1)];
          }
        }
      }
      
      // Multi-body orbital system
      if (time % 14 === 0) {
        const bodies = [
          { radius: 4, speed: 0.15, phase: 0 },
          { radius: 7, speed: 0.10, phase: Math.PI / 3 },
          { radius: 10, speed: 0.07, phase: Math.PI / 2 },
          { radius: 13, speed: 0.05, phase: Math.PI }
        ];
        
        bodies.forEach((body, i) => {
          const angle = t * body.speed + body.phase;
          const x = Math.floor(width / 2 + body.radius * Math.cos(angle));
          const y = Math.floor(height / 2 + body.radius * Math.sin(angle));
          if (x >= 0 && x < width && y >= 0 && y < height) {
            grid[y][x] = asciiChars[Math.floor(i * 3) + 18];
          }
          
          // Orbital trails
          for (let trail = 1; trail <= 3; trail++) {
            const trailAngle = angle - trail * 0.2;
            const tx = Math.floor(width / 2 + body.radius * Math.cos(trailAngle));
            const ty = Math.floor(height / 2 + body.radius * Math.sin(trailAngle));
            if (tx >= 0 && tx < width && ty >= 0 && ty < height) {
              grid[ty][tx] = asciiChars[Math.max(1, Math.floor((4 - trail) * 2))];
            }
          }
        });
      }
    }
    
    function updateVintageEquations(t: number) {
      // Classical mathematical equations with vintage typography
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          
          // Classical mathematical constants and functions
          const euler = Math.sin(dist * 0.09 - t * 0.24 + Math.E * angle * 0.3) * Math.cos(t * 0.08);
          const pi = Math.cos(dist * 0.07 - t * 0.18 + Math.PI * angle * 0.2) * Math.sin(dist * 0.03);
          const natural = Math.sin(dist * 0.12 - t * 0.32 + Math.log(dist + 1.5) * 0.6) * Math.exp(-dist * 0.04);
          const golden = Math.cos(dist * 0.08 - t * 0.22 + phi * angle * 0.4) * Math.sin(angle * 3);
          const trigonometric = Math.sin(angle * 6 + t * 0.26) * Math.cos(dist * 0.06 - t * 0.15);
          const logarithmic = Math.cos(Math.log(dist * 0.5 + 1) + t * 0.3) * Math.sin(angle * 2);
          
          const combined = (euler * 0.18 + pi * 0.17 + natural * 0.17 + golden * 0.16 + trigonometric * 0.16 + logarithmic * 0.16);
          
          if (Math.abs(combined) > 0.16) {
            const intensity = Math.abs(combined);
            const charIndex = Math.floor(intensity * 22 + Math.cos(dx * 0.1 + dy * 0.1 + t * 0.05) * 4);
            grid[y][x] = asciiChars[Math.min(Math.max(charIndex, 2), asciiChars.length - 1)];
          }
        }
      }
      
      // Mathematical symbol constellation
      if (time % 25 === 0) {
        const symbols = ['=', '+', '-', '∗', '/', '\\', '|', '^', 'v', '<', '>', '~', '∞', '∆', '∇', '※'];
        const equations = [
          { x: width * 0.2, y: height * 0.3, symbols: ['e', '=', '2', '.', '7', '1', '8'] },
          { x: width * 0.7, y: height * 0.4, symbols: ['π', '=', '3', '.', '1', '4', '1'] },
          { x: width * 0.4, y: height * 0.7, symbols: ['φ', '=', '1', '.', '6', '1', '8'] }
        ];
        
        // Place mathematical constants
        equations.forEach((eq, eqIndex) => {
          eq.symbols.forEach((symbol, i) => {
            const x = Math.floor(eq.x + i * 2 - eq.symbols.length);
            const y = Math.floor(eq.y + Math.sin(t * 0.05 + eqIndex) * 2);
            if (x >= 0 && x < width && y >= 0 && y < height) {
              grid[y][x] = symbol;
            }
          });
        });
        
        // Scatter additional symbols
        for (let i = 0; i < 12; i++) {
          const x = Math.floor(Math.random() * width);
          const y = Math.floor(Math.random() * height);
          const symbolPhase = Math.sin(t * 0.1 + i);
          if (symbolPhase > 0.7) {
            grid[y][x] = symbols[Math.floor(Math.random() * symbols.length)];
          }
        }
      }
    }
    
    function animate() {
      update();
      render();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    if (isVisible) {
      initGrid();
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
      
      if (canvas) {
        canvas.innerHTML = '';
      }
      
      grid = [];
      time = 0;
    };
  }, [variant, intensity, isVisible, size]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`mathematical-vintage-ascii ${className}`}
      style={{
        fontSize: size === 'small' ? '7px' : size === 'large' ? '11px' : '9px',
        color: '#D4AF37', // Warm golden color for vintage feel
        textShadow: '0 0 6px rgba(212, 175, 55, 0.7)',
        filter: 'contrast(1.2) brightness(1.1)',
        mixBlendMode: 'multiply',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        fontFamily: 'Courier New, monospace'
      }}
    >
      <div 
        ref={canvasRef}
        style={{
          lineHeight: '1.1',
          letterSpacing: '0.03em',
          userSelect: 'none',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.7
        }}
      />
    </motion.div>
  );
};

export default MathematicalVintageAscii;
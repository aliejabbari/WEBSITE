import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EnhancedAsciiFlowProps {
  variant?: 'quantum' | 'neural' | 'fractal' | 'chaos' | 'synthwave' | 'hologram' | 'cyberpunk' | 'biomech';
  intensity?: number;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const EnhancedAsciiFlow: React.FC<EnhancedAsciiFlowProps> = ({ 
  variant = 'quantum', 
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
    let width = size === 'small' ? 40 : size === 'large' ? 120 : 80;
    let height = size === 'small' ? 20 : size === 'large' ? 60 : 40;
    
    let grid: string[][] = [];
    let time = 0;
    let animationFrameId: number;
    let particles: any[] = [];
    let fields: any[] = [];
    
    // Enhanced character sets for different effects
    const quantumChars = [' ', '⚛', '⚡', '⚙', '⚛', '⚡', '⚙', '⚛', '⚡', '⚙'];
    const neuralChars = [' ', '●', '○', '◉', '◎', '◐', '◑', '◒', '◓', '◔', '◕'];
    const fractalChars = [' ', '█', '░', '▒', '▓', '▄', '▌', '▐', '▀', '▌', '▐'];
    const chaosChars = [' ', '✺', '✻', '✼', '✽', '✾', '✿', '❀', '❁', '❂', '❃'];
    const synthwaveChars = [' ', '~', '≈', '≈', '≈', '≈', '≈', '≈', '≈', '≈', '≈'];
    const hologramChars = [' ', '◊', '◇', '◈', '◉', '◎', '◐', '◑', '◒', '◓'];
    const cyberpunkChars = [' ', '⚡', '⚙', '⚛', '⚡', '⚙', '⚛', '⚡', '⚙', '⚛'];
    const biomechChars = [' ', '◉', '◎', '◐', '◑', '◒', '◓', '◔', '◕', '◉', '◎'];
    
    let charSet = quantumChars;
    
    // Set character set based on variant
    switch (variant) {
      case 'quantum': charSet = quantumChars; break;
      case 'neural': charSet = neuralChars; break;
      case 'fractal': charSet = fractalChars; break;
      case 'chaos': charSet = chaosChars; break;
      case 'synthwave': charSet = synthwaveChars; break;
      case 'hologram': charSet = hologramChars; break;
      case 'cyberpunk': charSet = cyberpunkChars; break;
      case 'biomech': charSet = biomechChars; break;
      default: charSet = quantumChars;
    }
    
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
      
      const t = time * 0.01 * intensity;
      
      switch (variant) {
        case 'quantum': updateQuantum(t); break;
        case 'neural': updateNeural(t); break;
        case 'fractal': updateFractal(t); break;
        case 'chaos': updateChaos(t); break;
        case 'synthwave': updateSynthwave(t); break;
        case 'hologram': updateHologram(t); break;
        case 'cyberpunk': updateCyberpunk(t); break;
        case 'biomech': updateBiomech(t); break;
        default: updateQuantum(t);
      }
      
      time++;
    }
    
    function updateQuantum(t: number) {
      // Quantum field simulation with superposition
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Multiple quantum states
          const state1 = Math.sin(dist * 0.1 - t + Math.atan2(dy, dx) * 2);
          const state2 = Math.cos(dist * 0.08 + t * 0.7 + Math.atan2(dy, dx) * 3);
          const state3 = Math.sin(dist * 0.12 - t * 0.5 + Math.atan2(dy, dx) * 1.5);
          
          const superposition = (state1 + state2 + state3) / 3;
          
          if (Math.abs(superposition) > 0.4) {
            const charIndex = Math.floor((Math.abs(superposition) + 0.1) * 8);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
      
      // Add quantum particles
      if (time % 2 === 0) {
        for (let i = 0; i < 8; i++) {
          const x = Math.floor(Math.random() * width);
          const y = Math.floor(Math.random() * height);
          if (Math.random() > 0.8) {
            grid[y][x] = charSet[Math.floor(Math.random() * 4) + 2];
          }
        }
      }
    }
    
    function updateNeural(t: number) {
      // Neural network simulation
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const activation = Math.sin(x * 0.15 + t * 0.6) * 
                           Math.cos(y * 0.12 + t * 0.4) * 
                           Math.sin((x + y) * 0.08 + t * 0.8);
          
          if (Math.abs(activation) > 0.3) {
            const charIndex = Math.floor((Math.abs(activation) + 0.2) * 8);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
      
      // Neural connections
      for (let i = 0; i < 12; i++) {
        const x1 = Math.floor(Math.random() * width);
        const y1 = Math.floor(Math.random() * height);
        const x2 = Math.floor(Math.random() * width);
        const y2 = Math.floor(Math.random() * height);
        
        // Draw connection line
        const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
        for (let step = 0; step <= steps; step++) {
          const x = Math.floor(x1 + (x2 - x1) * step / steps);
          const y = Math.floor(y1 + (y2 - y1) * step / steps);
          if (x >= 0 && x < width && y >= 0 && y < height) {
            if (Math.random() > 0.7) {
              grid[y][x] = charSet[Math.floor(Math.random() * 3) + 1];
            }
          }
        }
      }
    }
    
    function updateFractal(t: number) {
      // Mandelbrot-like fractal generation
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const cx = (x - width / 2) * 0.02;
          const cy = (y - height / 2) * 0.02;
          
          let zx = 0, zy = 0;
          let iteration = 0;
          const maxIterations = 20;
          
          while (zx * zx + zy * zy < 4 && iteration < maxIterations) {
            const temp = zx * zx - zy * zy + cx;
            zy = 2 * zx * zy + cy;
            zx = temp;
            iteration++;
          }
          
          if (iteration < maxIterations) {
            const charIndex = Math.floor((iteration / maxIterations) * 8);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
    }
    
    function updateChaos(t: number) {
      // Chaotic attractor simulation
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          
          // Lorenz attractor
          const a = 10, b = 28, c = 8/3;
          const x1 = dx * 0.01, y1 = dy * 0.01, z1 = 0;
          
          const dx1 = a * (y1 - x1);
          const dy1 = x1 * (b - z1) - y1;
          const dz1 = x1 * y1 - c * z1;
          
          const magnitude = Math.sqrt(dx1 * dx1 + dy1 * dy1 + dz1 * dz1);
          
          if (magnitude > 5) {
            const charIndex = Math.floor((magnitude / 50) * 8);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
    }
    
    function updateSynthwave(t: number) {
      // Synthwave aesthetic with retro vibes
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const wave1 = Math.sin(x * 0.2 + t * 0.5);
          const wave2 = Math.sin(y * 0.15 + t * 0.3);
          const wave3 = Math.sin((x + y) * 0.1 + t * 0.7);
          const wave4 = Math.cos(x * 0.1 - y * 0.05 + t * 0.4);
          
          const combined = (wave1 + wave2 + wave3 + wave4) / 4;
          
          if (combined > 0.15) {
            const charIndex = Math.floor((combined + 1) * 4);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
      
      // Add retro grid lines
      for (let x = 0; x < width; x += 4) {
        for (let y = 0; y < height; y++) {
          if (Math.random() > 0.9) {
            grid[y][x] = charSet[Math.floor(Math.random() * 3) + 1];
          }
        }
      }
    }
    
    function updateHologram(t: number) {
      // Holographic projection effect
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Holographic interference patterns
          const interference1 = Math.sin(dist * 0.1 - t + Math.atan2(dy, dx) * 2);
          const interference2 = Math.cos(dist * 0.08 + t * 0.6 + Math.atan2(dy, dx) * 1.5);
          const interference3 = Math.sin(dist * 0.12 - t * 0.4 + Math.atan2(dy, dx) * 2.5);
          
          const combined = (interference1 + interference2 + interference3) / 3;
          
          if (Math.abs(combined) > 0.25) {
            const charIndex = Math.floor((Math.abs(combined) + 0.2) * 8);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
      
      // Add holographic glitches
      if (Math.random() > 0.95) {
        const glitchX = Math.floor(Math.random() * width);
        const glitchY = Math.floor(Math.random() * height);
        grid[glitchY][glitchX] = charSet[Math.floor(Math.random() * charSet.length)];
      }
    }
    
    function updateCyberpunk(t: number) {
      // Cyberpunk aesthetic with digital corruption
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const corruption = Math.sin(x * 0.1 + t * 0.8) * 
                           Math.cos(y * 0.08 + t * 0.6) * 
                           Math.sin((x + y) * 0.05 + t * 0.9);
          
          if (Math.abs(corruption) > 0.35) {
            const charIndex = Math.floor((Math.abs(corruption) + 0.1) * 8);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
      
      // Digital corruption effects
      if (Math.random() > 0.98) {
        const corruptX = Math.floor(Math.random() * width);
        const corruptY = Math.floor(Math.random() * height);
        const corruptWidth = Math.floor(Math.random() * 5) + 1;
        const corruptHeight = Math.floor(Math.random() * 3) + 1;
        
        for (let dx = 0; dx < corruptWidth; dx++) {
          for (let dy = 0; dy < corruptHeight; dy++) {
            const x = corruptX + dx;
            const y = corruptY + dy;
            if (x >= 0 && x < width && y >= 0 && y < height) {
              grid[y][x] = charSet[Math.floor(Math.random() * charSet.length)];
            }
          }
        }
      }
    }
    
    function updateBiomech(t: number) {
      // Biomechanical organic patterns
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Organic wave patterns
          const organic1 = Math.sin(dist * 0.12 - t * 0.5 + Math.atan2(dy, dx) * 1.8);
          const organic2 = Math.cos(dist * 0.09 + t * 0.7 + Math.atan2(dy, dx) * 2.2);
          const organic3 = Math.sin(dist * 0.15 - t * 0.3 + Math.atan2(dy, dx) * 1.3);
          
          const combined = (organic1 + organic2 + organic3) / 3;
          
          if (Math.abs(combined) > 0.3) {
            const charIndex = Math.floor((Math.abs(combined) + 0.15) * 8);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
      
      // Add organic growth patterns
      if (time % 4 === 0) {
        for (let i = 0; i < 6; i++) {
          const x = Math.floor(Math.random() * width);
          const y = Math.floor(Math.random() * height);
          if (Math.random() > 0.7) {
            // Grow organic pattern
            for (let dx = -1; dx <= 1; dx++) {
              for (let dy = -1; dy <= 1; dy++) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                  if (Math.random() > 0.5) {
                    grid[ny][nx] = charSet[Math.floor(Math.random() * 4) + 2];
                  }
                }
              }
            }
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
      particles = [];
      fields = [];
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
      transition={{ duration: 1, ease: "easeOut" }}
      className={`enhanced-ascii-container ${className}`}
      style={{
        fontSize: size === 'small' ? '6px' : size === 'large' ? '12px' : '8px',
        color: '#00ffff',
        textShadow: '0 0 8px rgba(0, 255, 255, 0.6)',
        filter: 'contrast(1.3) brightness(1.2)',
        mixBlendMode: 'screen',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      <div 
        ref={canvasRef}
        style={{
          lineHeight: '1',
          letterSpacing: '0.02em',
          userSelect: 'none',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.6
        }}
      />
    </motion.div>
  );
};

export default EnhancedAsciiFlow;

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ComplexAsciiFlowProps {
  variant?: 'matrix' | 'particles' | 'waves' | 'flow' | 'circuit';
  intensity?: number;
  className?: string;
}

const ComplexAsciiFlow: React.FC<ComplexAsciiFlowProps> = ({ 
  variant = 'matrix', 
  intensity = 1,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 60;
    let height = 30;
    let grid: string[][] = [];
    let time = 0;
    let animationFrameId: number;
    
    // Enhanced ASCII characters for different effects
    const matrixChars = [' ', '0', '1', '█', '░', '▒', '▓', '▄', '▌', '▐', '▀'];
    const particleChars = [' ', '·', '•', '◦', '○', '●', '◉', '◎', '◐', '◑', '◒', '◓'];
    const waveChars = [' ', '~', '≈', '≈', '≈', '≈', '≈', '≈', '≈', '≈', '≈'];
    const flowChars = [' ', '·', ':', ';', '=', '+', '#', '@', '&', '%', '§'];
    const circuitChars = [' ', '┌', '┐', '└', '┘', '├', '┤', '┬', '┴', '─', '│', '┼'];
    
    let charSet = matrixChars;
    
    // Set character set based on variant
    switch (variant) {
      case 'matrix':
        charSet = matrixChars;
        break;
      case 'particles':
        charSet = particleChars;
        break;
      case 'waves':
        charSet = waveChars;
        break;
      case 'flow':
        charSet = flowChars;
        break;
      case 'circuit':
        charSet = circuitChars;
        break;
      default:
        charSet = matrixChars;
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
        case 'matrix':
          updateMatrix(t);
          break;
        case 'particles':
          updateParticles(t);
          break;
        case 'waves':
          updateWaves(t);
          break;
        case 'flow':
          updateFlow(t);
          break;
        case 'circuit':
          updateCircuit(t);
          break;
        default:
          updateMatrix(t);
      }
      
      time++;
    }
    
    function updateMatrix(t: number) {
      // Enhanced Matrix-style digital rain effect
      for (let x = 0; x < width; x++) {
        const columnHeight = Math.floor(Math.sin(x * 0.1 + t) * 8 + 18);
        const speed = Math.sin(x * 0.05 + t * 0.5) * 0.5 + 1;
        
        for (let y = 0; y < height; y++) {
          if (y < columnHeight) {
            const intensity = Math.sin(y * 0.2 - t * speed + x * 0.1);
            const charIndex = Math.floor((intensity + 1) * 5);
            if (charIndex > 2) {
              grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
            }
          }
        }
      }
      
      // Add random matrix particles
      for (let i = 0; i < 8; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        if (Math.random() > 0.8) {
          grid[y][x] = charSet[Math.floor(Math.random() * 4) + 2];
        }
      }
    }
    
    function updateParticles(t: number) {
      // Enhanced particle system with physics
      const particles: Array<{x: number, y: number, vx: number, vy: number, life: number, type: number}> = [];
      
      // Generate new particles
      if (time % 2 === 0) {
        for (let i = 0; i < 6; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            life: Math.random() * 120 + 60,
            type: Math.floor(Math.random() * 3)
          });
        }
      }
      
      // Update existing particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        // Bounce off boundaries with energy loss
        if (particle.x < 0 || particle.x >= width) {
          particle.vx *= -0.7;
          particle.x = Math.max(0, Math.min(width - 1, particle.x));
        }
        if (particle.y < 0 || particle.y >= height) {
          particle.vy *= -0.7;
          particle.y = Math.max(0, Math.min(height - 1, particle.y));
        }
        
        // Draw particle
        const x = Math.floor(particle.x);
        const y = Math.floor(particle.y);
        if (x >= 0 && x < width && y >= 0 && y < height && particle.life > 0) {
          const charIndex = Math.floor((particle.life / 120) * (charSet.length - 1));
          grid[y][x] = charSet[charIndex];
        }
        
        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });
    }
    
    function updateWaves(t: number) {
      // Enhanced ocean wave patterns
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const wave1 = Math.sin(x * 0.15 + t * 0.6);
          const wave2 = Math.sin(y * 0.12 + t * 0.4);
          const wave3 = Math.sin((x + y) * 0.08 + t * 0.8);
          const wave4 = Math.cos(x * 0.1 - y * 0.05 + t * 0.3);
          
          const combined = (wave1 + wave2 + wave3 + wave4) / 4;
          
          if (combined > 0.15) {
            const charIndex = Math.floor((combined + 1) * 4);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
    }
    
    function updateFlow(t: number) {
      // Enhanced fluid dynamics simulation
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const angle = Math.atan2(dy, dx);
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Multiple wave functions creating complex interference
          const wave1 = Math.sin(dist * 0.12 - t + angle * 2.5);
          const wave2 = Math.sin(x * 0.08 + y * 0.04 + t * 0.9);
          const wave3 = Math.cos(dist * 0.06 - t * 0.7 + angle * 3.5);
          const wave4 = Math.sin(dist * 0.18 + t * 0.4);
          
          const combined = (wave1 + wave2 + wave3 + wave4) / 4;
          
          // Create flowing patterns
          if (combined > 0.25) {
            const charIndex = Math.floor((combined + 1) * 5);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          } else if (combined < -0.25) {
            grid[y][x] = charSet[Math.floor(Math.random() * 3) + 1];
          }
        }
      }
      
      // Add random flow particles
      for (let i = 0; i < 12; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        if (Math.random() > 0.75) {
          grid[y][x] = charSet[Math.floor(Math.random() * charSet.length)];
        }
      }
    }
    
    function updateCircuit(t: number) {
      // Circuit board pattern
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const circuit1 = Math.sin(x * 0.3 + t * 0.2);
          const circuit2 = Math.cos(y * 0.25 + t * 0.15);
          const circuit3 = Math.sin((x + y) * 0.1 + t * 0.1);
          
          const combined = (circuit1 + circuit2 + circuit3) / 3;
          
          if (Math.abs(combined) > 0.3) {
            const charIndex = Math.floor(Math.abs(combined) * 8);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
      
      // Add circuit connections
      for (let i = 0; i < 15; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        if (Math.random() > 0.85) {
          grid[y][x] = charSet[Math.floor(Math.random() * 4) + 7];
        }
      }
    }
    
    function animate() {
      update();
      render();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    // Start animation when component is visible
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
  }, [variant, intensity, isVisible]);

  // Intersection observer to start animation when visible
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
      className={`complex-ascii-container ${className}`}
      style={{
        fontSize: '8px',
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
          opacity: 0.4
        }}
      />
    </motion.div>
  );
};

export default ComplexAsciiFlow;

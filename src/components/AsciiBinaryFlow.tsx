import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AsciiBinaryFlowProps {
  variant?: 'flow' | 'matrix' | 'waves' | 'particles';
  intensity?: number;
  className?: string;
}

const AsciiBinaryFlow: React.FC<AsciiBinaryFlowProps> = ({ 
  variant = 'flow', 
  intensity = 1,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 80;
    let height = 40;
    let grid: string[][] = [];
    let time = 0;
    let animationFrameId: number;
    
    // ASCII characters for different effects
    const flowChars = [' ', '·', ':', ';', '=', '+', '#', '@', '&', '%'];
    const matrixChars = [' ', '0', '1', '█', '░', '▒', '▓'];
    const waveChars = [' ', '~', '≈', '≈', '≈', '≈', '≈'];
    const particleChars = [' ', '·', '•', '◦', '○', '●', '◉', '◎'];
    
    let charSet = flowChars;
    
    // Set character set based on variant
    switch (variant) {
      case 'matrix':
        charSet = matrixChars;
        break;
      case 'waves':
        charSet = waveChars;
        break;
      case 'particles':
        charSet = particleChars;
        break;
      default:
        charSet = flowChars;
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
        case 'waves':
          updateWaves(t);
          break;
        case 'particles':
          updateParticles(t);
          break;
        default:
          updateFlow(t);
      }
      
      time++;
    }
    
    function updateFlow(t: number) {
      // Complex fluid dynamics simulation
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const dx = x - width / 2;
          const dy = y - height / 2;
          const angle = Math.atan2(dy, dx);
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Multiple wave functions creating complex interference
          const wave1 = Math.sin(dist * 0.15 - t + angle * 2);
          const wave2 = Math.sin(x * 0.1 + y * 0.05 + t * 0.8);
          const wave3 = Math.cos(dist * 0.08 - t * 0.6 + angle * 3);
          
          const combined = (wave1 + wave2 + wave3) / 3;
          
          // Create flowing patterns
          if (combined > 0.3) {
            const charIndex = Math.floor((combined + 1) * 4);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          } else if (combined < -0.3) {
            grid[y][x] = charSet[Math.floor(Math.random() * 3) + 1];
          }
        }
      }
      
      // Add random flow particles
      for (let i = 0; i < 15; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        if (Math.random() > 0.7) {
          grid[y][x] = charSet[Math.floor(Math.random() * charSet.length)];
        }
      }
    }
    
    function updateMatrix(t: number) {
      // Matrix-style digital rain effect
      for (let x = 0; x < width; x++) {
        const columnHeight = Math.floor(Math.sin(x * 0.1 + t) * 10 + 20);
        for (let y = 0; y < height; y++) {
          if (y < columnHeight) {
            const intensity = Math.sin(y * 0.2 - t + x * 0.1);
            if (intensity > 0.5) {
              grid[y][x] = charSet[Math.floor(Math.random() * 4) + 2];
            } else if (intensity > 0) {
              grid[y][x] = charSet[1];
            }
          }
        }
      }
    }
    
    function updateWaves(t: number) {
      // Ocean wave patterns
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const wave1 = Math.sin(x * 0.2 + t * 0.5);
          const wave2 = Math.sin(y * 0.15 + t * 0.3);
          const wave3 = Math.sin((x + y) * 0.1 + t * 0.7);
          
          const combined = (wave1 + wave2 + wave3) / 3;
          
          if (combined > 0.2) {
            const charIndex = Math.floor((combined + 1) * 3);
            grid[y][x] = charSet[Math.min(charIndex, charSet.length - 1)];
          }
        }
      }
    }
    
    function updateParticles(t: number) {
      // Particle system with physics
      const particles: Array<{x: number, y: number, vx: number, vy: number, life: number}> = [];
      
      // Generate new particles
      if (time % 3 === 0) {
        for (let i = 0; i < 5; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: Math.random() * 100 + 50
          });
        }
      }
      
      // Update existing particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        // Bounce off boundaries
        if (particle.x < 0 || particle.x >= width) particle.vx *= -0.8;
        if (particle.y < 0 || particle.y >= height) particle.vy *= -0.8;
        
        // Draw particle
        const x = Math.floor(particle.x);
        const y = Math.floor(particle.y);
        if (x >= 0 && x < width && y >= 0 && y < height && particle.life > 0) {
          const charIndex = Math.floor((particle.life / 100) * (charSet.length - 1));
          grid[y][x] = charSet[charIndex];
        }
        
        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`ascii-container ${className}`}
      style={{
        fontSize: '10px',
        color: '#00ffff',
        textShadow: '0 0 10px rgba(0,255,255,0.8)',
        filter: 'contrast(1.2) brightness(1.1)',
        mixBlendMode: 'screen'
      }}
    >
      <div 
        ref={canvasRef}
        style={{
          lineHeight: '1.1',
          letterSpacing: '0.05em',
          userSelect: 'none',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
    </motion.div>
  );
};

export default AsciiBinaryFlow;

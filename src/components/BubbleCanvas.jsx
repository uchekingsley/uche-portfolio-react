import React, { useEffect, useRef } from 'react';

const BubbleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = [];
    let lastMouse = { x: width / 2, y: height / 2 };

    class Particle {
      constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx * 0.1 + (Math.random() - 0.5) * 2;
        this.vy = vy * 0.1 + (Math.random() - 0.5) * 2 - 1; // slight upward drift
        this.radius = Math.random() * 4 + 2;
        this.life = 1.0;
        this.decay = Math.random() * 0.02 + 0.01;
        // Tech Blue/Cyan colors
        this.r = 6;
        this.g = 182;
        this.b = 212;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.radius *= 0.95;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.life})`;
        ctx.fill();
      }
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const vx = mouseX - lastMouse.x;
      const vy = mouseY - lastMouse.y;
      
      lastMouse.x = mouseX;
      lastMouse.y = mouseY;

      const speed = Math.sqrt(vx * vx + vy * vy);
      if (speed > 1) {
        const spawnCount = Math.min(Math.floor(speed / 5) + 1, 5);
        for (let i = 0; i < spawnCount; i++) {
          const scatterX = mouseX + (Math.random() - 0.5) * 10;
          const scatterY = mouseY + (Math.random() - 0.5) * 10;
          particles.push(new Particle(scatterX, scatterY, vx, vy));
        }
      }
    };

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Ambient bubbles floating up randomly when idle
      if (Math.random() < 0.03) {
        particles.push(new Particle(Math.random() * width, height + 20, (Math.random() - 0.5) * 2, -10));
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        
        if (p.life <= 0 || p.radius < 0.5) {
          particles.splice(i, 1);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
    />
  );
};

export default BubbleCanvas;

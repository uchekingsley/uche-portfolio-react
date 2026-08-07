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

    let streaks = [];
    let particles = [];
    const maxStreaks = 45; // slightly reduced count for performance when combined with particles
    let lastMouse = { x: width / 2, y: height / 2 };
    let mouse = { x: null, y: null, radius: 100 };

    // --- Light Streak (Falling Rain-like Streaks) ---
    class LightStreak {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -20 - Math.random() * 50;
        this.length = Math.random() * 25 + 10;
        this.speed = Math.random() * 1.5 + 1; // gentle fall speed
        this.width = Math.random() * 1.2 + 0.4;
        this.alpha = Math.random() * 0.3 + 0.15; // subtle grey/white
      }

      update() {
        this.y += this.speed;

        // Mouse interaction: push streaks horizontally if they get close
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 2;
          }
        }

        if (this.y > height + this.length) {
          this.reset();
        }
      }

      draw() {
        const gradient = ctx.createLinearGradient(
          this.x, this.y - this.length,
          this.x, this.y
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.8, `rgba(200, 200, 200, ${this.alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${this.alpha})`);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.length);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    // --- Particle (Interactive Pink/Purple Bubbles) ---
    class Particle {
      constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx * 0.08 + (Math.random() - 0.5) * 1.2;
        this.vy = vy * 0.08 + (Math.random() - 0.5) * 1.2 - 0.8; // upward drift
        this.radius = Math.random() * 5 + 2;
        this.life = 1.0;
        this.decay = Math.random() * 0.015 + 0.01;
        
        // Randomly pick between the two theme colors: Electric Blue (#3b82f6) and Ice Blue (#38bdf8)
        if (Math.random() < 0.5) {
          this.r = 59;
          this.g = 130;
          this.b = 246;
        } else {
          this.r = 56;
          this.g = 189;
          this.b = 248;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.radius *= 0.96;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.life * 0.6})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(${this.r}, ${this.g}, ${this.b}, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const init = () => {
      streaks = [];
      for (let i = 0; i < maxStreaks; i++) {
        streaks.push(new LightStreak());
      }
      particles = [];
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      mouse.x = mouseX;
      mouse.y = mouseY;

      const vx = mouseX - lastMouse.x;
      const vy = mouseY - lastMouse.y;
      
      lastMouse.x = mouseX;
      lastMouse.y = mouseY;

      const speed = Math.sqrt(vx * vx + vy * vy);
      if (speed > 1) {
        const spawnCount = Math.min(Math.floor(speed / 4) + 1, 4);
        for (let i = 0; i < spawnCount; i++) {
          const scatterX = mouseX + (Math.random() - 0.5) * 8;
          const scatterY = mouseY + (Math.random() - 0.5) * 8;
          particles.push(new Particle(scatterX, scatterY, vx, vy));
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    let animationFrameId;
    const animate = () => {
      // Clear with trail fade
      ctx.fillStyle = 'rgba(13, 14, 20, 0.16)';
      ctx.fillRect(0, 0, width, height);

      // Update & Draw Light Streaks (Background Rain)
      streaks.forEach(streak => {
        streak.update();
        streak.draw();
      });

      // Update & Draw Particles (Interactive Bubbles)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        
        if (p.life <= 0 || p.radius < 0.5) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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

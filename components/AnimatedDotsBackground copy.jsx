"use client";
import React, { useEffect, useState, useRef } from "react";

const spacing = 20;
const radius = 1.5;

const AnimatedDotsBackground = () => {
  const [points, setPoints] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const mouse = useRef({ x: 400, y: 300 });

  // начальная генерация точек
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });

      const temp = [];
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width * 2; x += spacing) {
          temp.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
      setPoints(temp);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // курсор
  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // анимация
  useEffect(() => {
    let raf;

    const animate = () => {
      setPoints((pts) =>
        pts.map((p) => {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(300 / dist, 5);
          const angle = Math.atan2(dy, dx);

          // волна
          const wave =
            Math.sin(p.ox * 0.005 + performance.now() * 0.002) * 1.5;

          // движение
          p.vx += Math.cos(angle) * force + (p.ox - p.x) * 0.01;
          p.vy += Math.sin(angle) * force + (p.oy + wave - p.y) * 0.01;

          p.vx *= 0.9;
          p.vy *= 0.9;

          p.x += p.vx;
          p.y += p.vy;

          return { ...p };
        })
      );
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      width="300%"
      height="200%"
      viewBox={`0 0 ${dimensions.width * 3} ${dimensions.height * 2}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "black",
        overflow: "hidden",
      }}
    >
      {points.map((p, i) => {
        const r = Math.min(255, 100 + Math.abs(p.x - p.ox));
        const b = 255 - Math.abs(p.y - p.oy);
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={radius}
            fill={`rgb(${r},80,${b})`}
          />
        );
      })}
    </svg>
  );
};

export default AnimatedDotsBackground;

"use client";
import React, { useEffect, useState, useRef } from "react";

const spacing = 15;
const radius = 1.3;

// Генерация основной траектории кисти (по диагонали экрана)
const generateBrushPath = (width, height) => {
  const path = [];
  const step = 25;
  for (let t = -width; t < width * 2; t += step) {
    path.push({ x: t, y: (t * height) / width });
  }
  return path;
};

// Генерация локальной траектории кисти вокруг курсора
const generateCursorBrush = (centerX, centerY) => {
  const size = 6;
  const step = 10;
  const path = [];
  for (let y = -size; y <= size; y++) {
    for (let x = -size; x <= size; x++) {
      if (x * x + y * y <= size * size) {
        path.push({ x: centerX + x * step, y: centerY + y * step });
      }
    }
  }
  return path;
};

const AnimatedDotsBackground = () => {
  const [points, setPoints] = useState([]);
  const [brushPath, setBrushPath] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const mouse = useRef({ x: -9999, y: -9999 });
  const brushStep = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      setBrushPath(generateBrushPath(width, height));

      const temp = [];
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width * 2; x += spacing) {
          temp.push({ x, y, ox: x, oy: y, vx: 0, vy: 0, heat: 0 });
        }
      }
      setPoints(temp);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let raf;

    const animate = () => {
      if (!brushPath.length) return;

      const currentPoint1 = brushPath[Math.floor(brushStep.current % brushPath.length)];
      const currentPoint2 = brushPath[Math.floor((brushStep.current + 20) % brushPath.length)];
      const currentPoint3 = brushPath[Math.floor((brushStep.current + 40) % brushPath.length)];

      const inViewport =
        mouse.current.x >= 0 &&
        mouse.current.x <= dimensions.width &&
        mouse.current.y >= 0 &&
        mouse.current.y <= dimensions.height;

      const cursorBrush = inViewport
        ? generateCursorBrush(mouse.current.x, mouse.current.y)
        : [];

      brushStep.current += 0.3;

      setPoints((pts) =>
        pts.map((p) => {
          const dx = inViewport ? mouse.current.x - p.x : 0;
          const dy = inViewport ? mouse.current.y - p.y : 0;
          const distMouse = inViewport ? Math.sqrt(dx * dx + dy * dy) || 1 : 1;
          const force = inViewport ? Math.min(100 / distMouse, 1.5) : 0;
          const angle = Math.atan2(dy, dx);

          const wave = inViewport
            ? Math.sin(p.ox * 0.005 + performance.now() * 0.002) * 1.5
            : 0;

          p.vx += Math.cos(angle) * force + (p.ox - p.x) * 0.01;
          p.vy += Math.sin(angle) * force + (p.oy + wave - p.y) * 0.01;

          p.vx *= 0.9;
          p.vy *= 0.9;

          p.x += p.vx;
          p.y += p.vy;

          const bdist1 = Math.hypot(currentPoint1.x - p.x, currentPoint1.y - p.y);
          const bdist2 = Math.hypot(currentPoint2.x - p.x, currentPoint2.y - p.y);
          const bdist3 = Math.hypot(currentPoint3.x - p.x, currentPoint3.y - p.y);

          let cursorDist = 9999;
          for (const b of cursorBrush) {
            const d = Math.hypot(b.x - p.x, b.y - p.y);
            if (d < cursorDist) cursorDist = d;
          }

          if (bdist1 < 30 || bdist2 < 30 || bdist3 < 30 || cursorDist < 30) {
            p.heat = 1;
          } else {
            p.heat *= 0.96;
          }

          return { ...p };
        })
      );

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [brushPath, dimensions]);

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
        const r = 100 + p.heat * 155;
        const b = 255 - p.heat * 180;
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={radius}
            fill={`rgb(${r.toFixed(0)},80,${b.toFixed(0)})`}
          />
        );
      })}
    </svg>
  );
};

export default AnimatedDotsBackground;

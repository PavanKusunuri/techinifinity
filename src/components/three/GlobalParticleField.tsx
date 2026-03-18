"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobalParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create sparse ambient particles
    const COUNT = 60;
    const positions = new Float32Array(COUNT * 3);
    const velocities: number[] = [];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities.push(
        (Math.random() - 0.5) * 0.003,
        (Math.random() - 0.5) * 0.003,
        0
      );
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Check dark mode
    const isDark = () => document.documentElement.classList.contains("dark");

    const material = new THREE.PointsMaterial({
      size: 0.06,
      color: new THREE.Color("#22D3EE"),
      transparent: true,
      opacity: 0.18,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const updateSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    updateSize();

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const pos = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        // Wrap around edges
        if (pos[i * 3] > 10) pos[i * 3] = -10;
        if (pos[i * 3] < -10) pos[i * 3] = 10;
        if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -10;
        if (pos[i * 3 + 1] < -10) pos[i * 3 + 1] = 10;
      }
      geometry.attributes.position.needsUpdate = true;

      // Adapt color for light/dark
      material.color.set(isDark() ? "#22D3EE" : "#6366F1");
      material.opacity = isDark() ? 0.18 : 0.12;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => updateSize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

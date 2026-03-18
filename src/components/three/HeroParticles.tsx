"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 180;
const CONNECTION_DISTANCE = 2.8;
const MAX_CONNECTIONS = 400;

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    // ── Particles ──
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities: number[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
      velocities.push(
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.008,
        0
      );
    }

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));

    const pointMat = new THREE.PointsMaterial({
      size: 0.07,
      color: new THREE.Color("#818CF8"),
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointGeo, pointMat);
    scene.add(points);

    // ── Connection lines ──
    const linePositions = new Float32Array(MAX_CONNECTIONS * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

    const lineMat = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({
        color: new THREE.Color("#818CF8"),
        transparent: true,
        opacity: 0.15,
      })
    );
    scene.add(lineMat);

    const updateSize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    updateSize();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = ((e.touches[0].clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = -((e.touches[0].clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    let animId: number;
    const pos = pointGeo.attributes.position.array as Float32Array;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Move particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        if (pos[i * 3] > 7) pos[i * 3] = -7;
        if (pos[i * 3] < -7) pos[i * 3] = 7;
        if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5;
        if (pos[i * 3 + 1] < -5) pos[i * 3 + 1] = 5;
      }
      pointGeo.attributes.position.needsUpdate = true;

      // Subtle camera parallax on mouse move
      camera.position.x += (mouse.current.x * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouse.current.y * 0.2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Build connection lines
      let lineIdx = 0;
      const lp = lineGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT && lineIdx < MAX_CONNECTIONS; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < MAX_CONNECTIONS; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            lp[lineIdx * 6] = pos[i * 3];
            lp[lineIdx * 6 + 1] = pos[i * 3 + 1];
            lp[lineIdx * 6 + 2] = pos[i * 3 + 2];
            lp[lineIdx * 6 + 3] = pos[j * 3];
            lp[lineIdx * 6 + 4] = pos[j * 3 + 1];
            lp[lineIdx * 6 + 5] = pos[j * 3 + 2];
            lineIdx++;
          }
        }
      }
      // Zero out unused slots
      for (let k = lineIdx; k < MAX_CONNECTIONS; k++) {
        lp[k * 6] = lp[k * 6 + 1] = lp[k * 6 + 2] = 0;
        lp[k * 6 + 3] = lp[k * 6 + 4] = lp[k * 6 + 5] = 0;
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, lineIdx * 2);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => updateSize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      pointGeo.dispose();
      lineGeo.dispose();
      pointMat.dispose();
      (lineMat.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

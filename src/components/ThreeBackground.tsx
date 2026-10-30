"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07070b, 0.025);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Particle Cloud with Dual Neon Palette (Orange & Cyan)
    const particleCount = 650;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorOrange = new THREE.Color("#ff7a00");
    const colorCyan = new THREE.Color("#00f0ff");
    const colorViolet = new THREE.Color("#8b5cf6");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 45;

      const pick = i % 3;
      const c = pick === 0 ? colorOrange : pick === 1 ? colorCyan : colorViolet;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      scales[i] = Math.random() * 0.15 + 0.05;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 2. Floating Cyber Geometric Core (Icosahedron Wireframe)
    const geoIcosa = new THREE.IcosahedronGeometry(7, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff7a00,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    });
    const icosahedron = new THREE.Mesh(geoIcosa, wireMat);
    icosahedron.position.set(12, -2, -10);
    scene.add(icosahedron);

    // 3. Second Ambient Ring Core
    const geoTorus = new THREE.TorusGeometry(10, 0.25, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    const torus = new THREE.Mesh(geoTorus, torusMat);
    torus.position.set(-14, 6, -14);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    // Mouse and Cursor-Movement Scroll Tracker
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollOffset = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      scrollOffset = window.scrollY * 0.008;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let animId: number;

    const renderLoop = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth lerp camera tracking cursor movements
      currentX += (targetX * 3.5 - currentX) * 0.045;
      currentY += (targetY * 2.5 - scrollOffset - currentY) * 0.045;

      camera.position.x = currentX;
      camera.position.y = currentY;
      camera.lookAt(0, -scrollOffset * 0.3, 0);

      // Rotate geometric meshes
      icosahedron.rotation.x = elapsed * 0.12 + targetY * 0.5;
      icosahedron.rotation.y = elapsed * 0.18 + targetX * 0.5;

      torus.rotation.z = elapsed * 0.08;
      torus.rotation.y = elapsed * 0.1 + targetX * 0.3;

      // Subtle particle ocean oscillation
      particles.rotation.y = elapsed * 0.02 + targetX * 0.08;
      particles.rotation.x = elapsed * 0.01 + targetY * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMat.dispose();
      geoIcosa.dispose();
      wireMat.dispose();
      geoTorus.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorInteraction() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth elastic spring for trailing ring
  const springConfig = { damping: 24, stiffness: 280, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const trailX = useSpring(mouseX, { damping: 18, stiffness: 160 });
  const trailY = useSpring(mouseY, { damping: 18, stiffness: 160 });

  useEffect(() => {
    // Only activate on pointer-fine devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsPointer(true);
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Set global CSS variables for cursor-driven parallax
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty("--mouse-x", `${normX}`);
      document.documentElement.style.setProperty("--mouse-y", `${normY}`);
      document.documentElement.style.setProperty("--cursor-px-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-px-y", `${e.clientY}px`);

      // Detect if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest("button, a, input, textarea, [role='button'], .cursor-pointer")
        );
        setIsHoveringClickable(isClickable);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted || !isPointer) return null;

  return (
    <>
      {/* 1. Ambient Dynamic Spotlight that glides with cursor */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at var(--cursor-px-x, -500px) var(--cursor-px-y, -500px), rgba(255, 122, 0, 0.07) 0%, rgba(0, 240, 255, 0.04) 35%, transparent 70%)`,
        }}
      />

      {/* 2. Trailing Holographic Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-[#ff7a00]/40 mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHoveringClickable ? 52 : 34,
          height: isHoveringClickable ? 52 : 34,
          backgroundColor: isHoveringClickable ? "rgba(255, 122, 0, 0.12)" : "transparent",
          borderColor: isHoveringClickable ? "#ff7a00" : "rgba(0, 240, 255, 0.4)",
          transition: "width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease-out, border-color 0.25s ease-out",
        }}
      />

      {/* 3. High-Precision Laser Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-[#ff7a00] shadow-[0_0_12px_#ff7a00]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHoveringClickable ? 0.5 : 1,
          transition: "scale 0.2s ease-out",
        }}
      />
    </>
  );
}

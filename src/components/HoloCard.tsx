"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface HoloCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function HoloCard({
  children,
  className = "",
  onClick,
  isSelected = false,
}: HoloCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth springs for 3D rotation
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (max 12 degrees)
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    rotateX.set(rotX);
    rotateY.set(rotY);

    // Glare position percentage
    const pX = (x / rect.width) * 100;
    const pY = (y / rect.height) * 100;
    setGlarePos({ x: pX, y: pY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group cursor-pointer transition-shadow duration-300 ${className}`}
    >
      {/* Dynamic Specular Holographic Glare */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl z-30 transition-opacity duration-300 mix-blend-overlay"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(400px circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.35), rgba(0, 240, 255, 0.15) 40%, transparent 80%)`,
        }}
      />

      {/* Subtle chromatic border line */}
      <div
        className={`pointer-events-none absolute -inset-[1px] rounded-[1.6rem] transition-opacity duration-500 z-10 ${
          isSelected
            ? "opacity-100 bg-gradient-to-r from-[#ff7a00] via-[#00f0ff] to-[#8b5cf6]"
            : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#ff7a00]/60 via-[#00f0ff]/40 to-transparent"
        }`}
      />

      <div className="relative z-20 h-full flex flex-col justify-between [transform:translateZ(10px)]">
        {children}
      </div>
    </motion.div>
  );
}


"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export const Scene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        <Suspense fallback={null}>
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2} position={[2, 1, -2]}>
              <MeshDistortMaterial
                color="#10b981"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
                metalness={0.8}
              />
            </Sphere>
          </Float>

          <Float speed={5} rotationIntensity={2} floatIntensity={3}>
            <Sphere args={[0.5, 64, 64]} scale={1.5} position={[-3, -2, -1]}>
              <MeshDistortMaterial
                color="#064e3b"
                attach="material"
                distort={0.5}
                speed={3}
                roughness={0.1}
              />
            </Sphere>
          </Float>
        </Suspense>
        
        {/* Subtle grid or particles can be added here */}
      </Canvas>
    </div>
  );
};

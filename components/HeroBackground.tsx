"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const count = 800;

  const [positions, basePositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 6;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
    }
    return [pos, base];
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    // Smooth mouse follow
    mouseRef.current.x += (pointer.x * viewport.width * 0.3 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * viewport.height * 0.3 - mouseRef.current.y) * 0.02;

    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArr[i3] = basePositions[i3] + Math.sin(t * 0.3 + i * 0.01) * 0.15 + mouseRef.current.x * 0.05;
      posArr[i3 + 1] = basePositions[i3 + 1] + Math.cos(t * 0.2 + i * 0.015) * 0.15 + mouseRef.current.y * 0.05;
      posArr[i3 + 2] = basePositions[i3 + 2] + Math.sin(t * 0.1 + i * 0.02) * 0.1;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#14b8a6"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        gl={{ antialias: false, alpha: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}

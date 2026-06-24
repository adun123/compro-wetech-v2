"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox, Torus, Icosahedron, Octahedron } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    
    // Subtle mouse parallax
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.1, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.1, 0.05);
  });

  const shapes = useMemo(() => [
    { geometry: "torus", position: [-2.5, 0.5, -2], scale: 0.8, speed: 0.3 },
    { geometry: "icosahedron", position: [2, -0.5, -1.5], scale: 0.6, speed: 0.5 },
    { geometry: "octahedron", position: [-1, 1.5, -3], scale: 0.5, speed: 0.4 },
    { geometry: "roundedBox", position: [1.5, 1, -2.5], scale: 0.7, speed: 0.6 },
    { geometry: "torus", position: [2.5, -1, -2], scale: 0.4, speed: 0.35 },
    { geometry: "icosahedron", position: [-2, -1.2, -1.8], scale: 0.55, speed: 0.45 },
  ], []);

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <Float
          key={i}
          speed={shape.speed}
          rotationIntensity={0.5}
          floatIntensity={0.8}
          position={shape.position as [number, number, number]}
        >
          {shape.geometry === "torus" && (
            <Torus args={[shape.scale, shape.scale * 0.3, 16, 32]}>
              <MeshDistortMaterial
                color="#0d9488"
                attach="material"
                distort={0.3}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                transparent
                opacity={0.7}
              />
            </Torus>
          )}
          {shape.geometry === "icosahedron" && (
            <Icosahedron args={[shape.scale, 1]}>
              <MeshDistortMaterial
                color="#14b8a6"
                attach="material"
                distort={0.2}
                speed={2}
                roughness={0.1}
                metalness={0.9}
                transparent
                opacity={0.6}
              />
            </Icosahedron>
          )}
          {shape.geometry === "octahedron" && (
            <Octahedron args={[shape.scale]}>
              <MeshDistortMaterial
                color="#2dd4bf"
                attach="material"
                distort={0.25}
                speed={1.8}
                roughness={0.15}
                metalness={0.85}
                transparent
                opacity={0.65}
              />
            </Octahedron>
          )}
          {shape.geometry === "roundedBox" && (
            <RoundedBox args={[shape.scale * 1.2, shape.scale * 1.2, shape.scale * 1.2]} radius={0.1} smoothness={4}>
              <MeshDistortMaterial
                color="#042f2e"
                attach="material"
                distort={0.15}
                speed={1.2}
                roughness={0.3}
                metalness={0.7}
                transparent
                opacity={0.8}
              />
            </RoundedBox>
          )}
        </Float>
      ))}
    </group>
  );
}

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 300;

  const [positions, basePositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 8;
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
    
    const mouseX = pointer.x * 0.5;
    const mouseY = pointer.y * 0.5;

    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArr[i3] = basePositions[i3] + Math.sin(t * 0.2 + i * 0.02) * 0.2 + mouseX * 0.1;
      posArr[i3 + 1] = basePositions[i3 + 1] + Math.cos(t * 0.15 + i * 0.025) * 0.2 + mouseY * 0.1;
      posArr[i3 + 2] = basePositions[i3 + 2] + Math.sin(t * 0.1 + i * 0.015) * 0.15;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
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
        size={0.015}
        color="#2dd4bf"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function ConnectingLines() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const count = 20;
  
  const { positions, colorOpacities } = useMemo(() => {
    const pos = new Float32Array(count * 6); // 2 points per line
    const colors = new Float32Array(count * 6);
    
    for (let i = 0; i < count; i++) {
      const x1 = (Math.random() - 0.5) * 8;
      const y1 = (Math.random() - 0.5) * 6;
      const z1 = (Math.random() - 0.5) * 4 - 2;
      const x2 = x1 + (Math.random() - 0.5) * 2;
      const y2 = y1 + (Math.random() - 0.5) * 2;
      const z2 = z1 + (Math.random() - 0.5) * 1;
      
      pos[i * 6] = x1; pos[i * 6 + 1] = y1; pos[i * 6 + 2] = z1;
      pos[i * 6 + 3] = x2; pos[i * 6 + 4] = y2; pos[i * 6 + 5] = z2;
      
      // Teal gradient colors
      colors[i * 6] = 0.05; colors[i * 6 + 1] = 0.58; colors[i * 6 + 2] = 0.54;
      colors[i * 6 + 3] = 0.18; colors[i * 6 + 4] = 0.83; colors[i * 6 + 5] = 0.75;
    }
    return { positions: pos, colorOpacities: colors };
  }, []);

  useFrame(({ clock }) => {
    if (!lineRef.current) return;
    const t = clock.getElapsedTime();
    const material = lineRef.current.material;
    if (!Array.isArray(material)) {
      material.opacity = 0.15 + Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colorOpacities, 3]} />
      </bufferGeometry>
      <lineBasicMaterial vertexColors transparent opacity={0.2} />
    </lineSegments>
  );
}

export default function HeroBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#14b8a6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#2dd4bf" />
        <FloatingShapes />
        <Particles />
        <ConnectingLines />
      </Canvas>
    </div>
  );
}

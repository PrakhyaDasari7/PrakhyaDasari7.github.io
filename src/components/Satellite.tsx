"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const Satellite = () => {
  const satelliteRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (satelliteRef.current) {
      // Add gentle floating motion
      satelliteRef.current.rotation.y += 0.002;
      satelliteRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const createPanelGrid = (position: [number, number, number]) => (
    <group position={position}>
      {/* Base Panel */}
      <mesh>
        <boxGeometry args={[2, 1.2, 0.05]} />
        <meshPhongMaterial 
          color="#404040" 
          shininess={80}
          specular="#808080"
        />
      </mesh>

      {/* Main Grid Lines */}
      <group position={[0, 0, 0.03]}>
        {/* Horizontal Lines */}
        {[...Array(12)].map((_, i) => (
          <mesh key={`h-${i}`} position={[0, (i * 0.1) - 0.55, 0]}>
            <boxGeometry args={[2, 0.015, 0.01]} />
            <meshPhongMaterial 
              color="#666666" 
              shininess={90}
              specular="#a0a0a0"
            />
          </mesh>
        ))}
        {/* Vertical Lines */}
        {[...Array(16)].map((_, i) => (
          <mesh key={`v-${i}`} position={[(i * 0.133) - 1, 0, 0]}>
            <boxGeometry args={[0.015, 1.2, 0.01]} />
            <meshPhongMaterial 
              color="#666666" 
              shininess={90}
              specular="#a0a0a0"
            />
          </mesh>
        ))}
      </group>

      {/* Fine Detail Grid */}
      <group position={[0, 0, 0.035]}>
        {/* Fine Horizontal Lines */}
        {[...Array(24)].map((_, i) => (
          <mesh key={`fh-${i}`} position={[0, (i * 0.05) - 0.55, 0]}>
            <boxGeometry args={[2, 0.003, 0.005]} />
            <meshPhongMaterial 
              color="#808080" 
              shininess={100}
              specular="#c0c0c0"
            />
          </mesh>
        ))}
        {/* Fine Vertical Lines */}
        {[...Array(32)].map((_, i) => (
          <mesh key={`fv-${i}`} position={[(i * 0.0665) - 1, 0, 0]}>
            <boxGeometry args={[0.003, 1.2, 0.005]} />
            <meshPhongMaterial 
              color="#808080" 
              shininess={100}
              specular="#c0c0c0"
            />
          </mesh>
        ))}
      </group>

      {/* Edge Frame */}
      <mesh position={[0, 0, 0.04]}>
        <boxGeometry args={[2.05, 1.25, 0.02]} />
        <meshPhongMaterial 
          color="#2a2a2a" 
          shininess={100}
          specular="#ffffff"
        />
      </mesh>
    </group>
  );

  return (
    <group ref={satelliteRef} scale={3.645}>
      {/* Main satellite body */}
      <mesh>
        <boxGeometry args={[1.5, 0.8, 0.8]} />
        <meshPhongMaterial 
          color="#e8e8e8" 
          shininess={80}
          specular="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Solar Panels with enhanced grid */}
      <group position={[0, 0, 0]}>
        {/* Left Panel */}
        {createPanelGrid([-2, 0, 0])}
        {/* Right Panel */}
        {createPanelGrid([2, 0, 0])}
      </group>

      {/* Antennas */}
      <group>
        {/* Main antenna */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.8]} />
          <meshPhongMaterial 
            color="#c0c0c0" 
            shininess={100}
            specular="#ffffff"
          />
        </mesh>
        {/* Secondary antenna */}
        <mesh position={[0, 0.4, 0.5]} rotation={[0, 0, Math.PI * 0.15]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6]} />
          <meshPhongMaterial 
            color="#c0c0c0" 
            shininess={100}
            specular="#ffffff"
          />
        </mesh>
      </group>

      {/* Additional details */}
      <mesh position={[0, 0, 0.45]}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
        <meshPhongMaterial 
          color="#4a4a4a" 
          shininess={90}
          specular="#ffffff"
        />
      </mesh>

      {/* Extra panel details */}
      <mesh position={[0, -0.2, 0.45]}>
        <boxGeometry args={[0.5, 0.2, 0.05]} />
        <meshPhongMaterial 
          color="#8a8a8a" 
          shininess={80}
          specular="#ffffff"
        />
      </mesh>
    </group>
  );
};

export const SatelliteScene = () => {
  return (
    <group position={[0, 0, -8]}>
      <ambientLight intensity={0.6} />
      {/* Main front light */}
      <pointLight 
        position={[10, 10, 10]} 
        intensity={2}
        color="#ffffff" 
      />
      {/* Back rim light */}
      <pointLight 
        position={[-10, -10, -10]} 
        intensity={1.2} 
        color="#b0c4de"
      />
      {/* Top fill light */}
      <pointLight 
        position={[0, 8, 0]} 
        intensity={1.5} 
        color="#fff5e6"
      />
      {/* Side accent lights */}
      <pointLight
        position={[8, 0, 0]}
        intensity={1.2}
        color="#e6f0ff"
      />
      <pointLight
        position={[-8, 0, 0]}
        intensity={1.2}
        color="#e6f0ff"
      />
      {/* Subtle bottom light */}
      <pointLight
        position={[0, -5, 5]}
        intensity={0.8}
        color="#ffffff"
      />
      <Satellite />
    </group>
  );
}; 
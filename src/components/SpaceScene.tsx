"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls, Preload } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

const StarsField = () => {
  const starsRef = useRef<THREE.Points>(null)

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group>
      <Stars
        ref={starsRef}
        radius={300}
        depth={50}
        count={5000}
        factor={6}
        saturation={0}
        fade
        speed={1}
      />
      <Stars
        radius={100}
        depth={50}
        count={8000}
        factor={4}
        saturation={0}
        fade
        speed={1.5}
      />
    </group>
  )
}

const SpaceScene = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020817]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020817]/80" />
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <StarsField />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default SpaceScene 
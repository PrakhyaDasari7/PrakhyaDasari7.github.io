"use client"
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

const Planet = () => {
  const planetRef = useRef<THREE.Mesh>(null)
  const ringsRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (planetRef.current) {
      planetRef.current.rotation.y = clock.getElapsedTime() * 0.2
      planetRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.x = -0.5
      ringsRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group>
      {/* Planet */}
      <Sphere ref={planetRef} args={[1, 32, 32]}>
        <meshPhongMaterial
          color="#4169e1"
          emissive="#000030"
          specular="#101010"
          shininess={10}
        />
      </Sphere>

      {/* Rings */}
      <mesh ref={ringsRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 16, 100]} />
        <meshPhongMaterial
          color="#6495ed"
          emissive="#000030"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Atmosphere glow */}
      <Sphere args={[1.2, 32, 32]}>
        <meshPhongMaterial
          color="#4169e1"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}

export default Planet 
"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SatelliteScene } from './Satellite'

interface Star {
  top: number;
  left: number;
  size: 'tiny' | 'small' | 'medium' | 'large';
  duration: number;
  delay: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const starSizes: Array<'tiny' | 'small' | 'medium' | 'large'> = [
      'tiny', 'tiny', 'tiny',
      'small', 'small',
      'medium',
      'large'
    ]
    const newStars = [...Array(40)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: starSizes[Math.floor(Math.random() * starSizes.length)],
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className={`star star-${star.size} absolute`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            '--twinkle-duration': `${star.duration}s`,
            '--twinkle-delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
      {/* Added 'pt-16' for padding-top */}
      <StarField />
      <div className="text-center z-10 px-4 flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative mx-auto"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 relative mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-md animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-white/20 overflow-hidden">
              <Image
                src="/prakhya.jpeg"
                alt="Prakhya Dasari"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-spin-slow" 
                 style={{ transform: 'scale(1.2) rotate(45deg)' }} />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 glow"
        >
          Prakhya Dasari
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full Stack Developer | MS in Information Systems
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 glow-hover"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
      
      <div className="w-screen h-[32rem] relative z-10">
        <Canvas camera={{ position: [0, 0, 18], fov: 35 }}>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
          <SatelliteScene />
        </Canvas>
      </div>
    </div>
  )
}

export default Hero
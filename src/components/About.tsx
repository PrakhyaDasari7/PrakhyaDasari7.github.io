"use client"
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Planet from './Planet'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              I&apos;m a passionate Software Engineer with expertise in full-stack development.
            </p>
            <p>
              I&apos;m currently pursuing my Master&apos;s in Software Engineering Systems at Northeastern University. Throughout my journey, I&apos;ve had the opportunity to work on diverse projects that have enhanced my technical skills and problem-solving abilities. I&apos;m particularly drawn to creating intuitive user experiences and optimizing system performance.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[400px]"
        >
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Planet />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.5}
              autoRotate
              autoRotateSpeed={1}
            />
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}

export default About 
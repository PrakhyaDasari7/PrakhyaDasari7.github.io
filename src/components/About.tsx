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
          <div className="space-y-4">
            <p className="text-lg text-gray-300">

            I'm a software developer who loves building smart, user-friendly applications. With over 3 years of experience, I specialize in creating efficient solutions using .NET, React, and cloud platforms like AWS and Azure. I enjoy solving complex problems, improving performance, and making technology easier to use.       
            </p>

            <p className="text-lg text-gray-300">

            I'm passionate about working in fast-paced teams, where I can learn, collaborate, and deliver practical solutions. Recently, I've been exploring and implementing Gen AI technologies, excited by their potential to transform user experiences and streamline processes. Whether it's optimizing systems, fixing critical issues, or leveraging AI for smarter solutions, I'm always eager to tackle new challenges and keep learning.
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
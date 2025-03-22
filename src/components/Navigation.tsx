"use client"
import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          PD
        </motion.div>
        <div className="flex space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation 
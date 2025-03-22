"use client"
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Developed a full-stack e-commerce platform with React.js and Node.js, featuring user authentication, product management, and payment integration.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://github.com/prakhyadasari7'
  },
  {
    title: 'Inventory Management System',
    description: 'Built an inventory management system using .NET Core and SQL Server, implementing real-time tracking and automated notifications.',
    tech: ['.NET Core', 'SQL Server', 'Azure', 'C#'],
    link: 'https://github.com/prakhyadasari7'
  },
  {
    title: 'Portfolio Website',
    description: 'Created an interactive portfolio website using modern web technologies and space-themed design.',
    tech: ['Next.js', 'Three.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://github.com/prakhyadasari7'
  },
  {
    title: 'Weather Dashboard',
    description: 'Developed a weather dashboard application integrating multiple APIs and featuring interactive data visualization.',
    tech: ['React', 'APIs', 'Chart.js', 'CSS3'],
    link: 'https://github.com/prakhyadasari7'
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300"
    >
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white/10 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors duration-300 text-sm flex items-center"
      >
        View Project →
      </a>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
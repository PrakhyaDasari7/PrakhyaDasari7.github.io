"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SkillItem = ({ name, delay }: { name: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center justify-center bg-blue-900/60 backdrop-blur-sm border border-blue-400/20 rounded-lg p-4 hover:bg-blue-800/70 hover:border-blue-300/30 transition-all duration-300"
  >
    <span className="text-blue-200 font-medium">{name}</span>
  </motion.div>
);

const SkillCategory = ({ title, skills, delay }: { title: string; skills: string[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="space-y-6 bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-white/10 transition-colors duration-300"
  >
    <h3 className="text-2xl font-semibold text-white/90 mb-8">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <SkillItem key={skill} name={skill} delay={delay + index * 0.1} />
      ))}
    </div>
  </motion.div>
);

const Stars = () => {
  const [stars, setStars] = useState<Array<{ top: string; left: string; delay: string }>>([]);

  useEffect(() => {
    // Generate stars only on client-side
    const newStars = Array.from({ length: 30 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`
    }));
    setStars(newStars);
  }, []);

  if (stars.length === 0) return null; // Don't render anything during SSR

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-50"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  const skillCategories = {
    languages: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "HTML5",
      "CSS3",
      "SQL",
      "C++"
    ],
    frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Tailwind CSS",
      "Three.js",
      "Redux",
      "GraphQL",
     
    ],
    databases: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "DynamoDB",
      "Firebase",
      "Elasticsearch",
      "SQLite"
    ],
    devops: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitHub Actions",
      "Terraform",
      "Azure",
      
    ]
  };

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <Stars />

      <div className="max-w-[90rem] mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20 text-white/90"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          <SkillCategory 
            title="Programming Languages" 
            skills={skillCategories.languages} 
            delay={0.2} 
          />
          <SkillCategory 
            title="Frameworks & Libraries" 
            skills={skillCategories.frameworks} 
            delay={0.3} 
          />
          <SkillCategory 
            title="Databases" 
            skills={skillCategories.databases} 
            delay={0.4} 
          />
          <SkillCategory 
            title="Cloud & DevOps" 
            skills={skillCategories.devops} 
            delay={0.5} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills; 
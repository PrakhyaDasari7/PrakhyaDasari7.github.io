"use client";

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import { useState } from 'react';
import * as THREE from 'three';

interface ExperienceData {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  color: string;
}

const Planet = ({ position, color, isSelected, onClick, title, company }: { 
  position: [number, number, number]; 
  color: string;
  isSelected: boolean;
  onClick: () => void;
  title: string;
  company: string;
}) => {
  return (
    <group position={position} onClick={onClick}>
      <mesh>
        <sphereGeometry args={[4, 32, 32]} />
        <meshPhongMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 0.5 : 0.2}
          shininess={100}
        />
      </mesh>
      <mesh>
        <ringGeometry args={[5, 5.6, 64]} />
        <meshPhongMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 0.3 : 0.1}
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
        />
      </mesh>
      <Html
        center
        style={{
          width: '250px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          opacity: isSelected ? 1 : 0.8,
          transition: 'opacity 0.3s',
          position: 'absolute',
          left: '0',
        }}
      >
        <div 
          style={{
            background: 'rgba(0,0,0,0.4)',
            padding: '12px',
            borderRadius: '8px',
            backdropFilter: 'blur(4px)',
            width: '100%',
          }}
        >
          <div className="text-base font-semibold mb-1 leading-tight">{title}</div>
          <div className="text-sm text-blue-300 leading-tight">{company}</div>
        </div>
      </Html>
    </group>
  );
};

const ExperienceScene = ({ experiences, selectedId, onSelect }: { 
  experiences: ExperienceData[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}) => {
  return (
    <Canvas camera={{ position: [0, 3, 45], fov: 50 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 1.8}
        rotateSpeed={0.5}
        enableDamping={true}
        dampingFactor={0.05}
      />
      {experiences.map((exp, index) => (
        <Planet
          key={exp.id}
          position={[index * 18 - (experiences.length - 1) * 9, 0, 0]}
          color={exp.color}
          isSelected={selectedId === exp.id}
          onClick={() => onSelect(exp.id)}
          title={exp.title}
          company={exp.company}
        />
      ))}
    </Canvas>
  );
};

const Experience = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const experiences: ExperienceData[] = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Infosys",
      duration: "Jun 2020 - Nov 2020",
      description: [
        "Developed and maintained cloud-native applications using React and Spring Boot",
        "Implemented CI/CD pipelines using Jenkins and Docker",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ],
      color: "#ce644d" 
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Infosys",
      duration: "Dec 2023 - Aug 2022",
      description: [
        "Led end-to-end SDLC for web application using C#, .NET, Angular and Azure, improving user interaction by 25%",
        "Engineered responsive front-end components with custom forms and filters, resulting in 30% faster data retrieval",
        "Built and integrated 15+ Power BI reports processing data from 2,300+ sensors for real-time insights",
        "Guided Azure migration of 10+ TB data with zero disruptions, reducing planning time by 20%",
        "Automated 20+ Azure Data Factory pipelines, cutting manual work by 40% and saving 50+ team hours monthly"
      ],
      color: "#3336a0" // 
    },
    {
      id: 3,
      title: "Graduate Teaching Assistant",
      company: "Northeastern University",
      duration: "Sep 2023 - Apr 2024",
      description: [
        "Assisted professors in teaching advanced Agile Software Development concepts",
        "Mentored students in Agile methodologies and project management topics and tools",
        "Graded assignments and provided constructive feedback"
      ],
      color: "#369ca6" 
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Bright Mind Enrichment",
      duration: "Jun 2024 - Present",
      description: [
        "Developed scalable API features for Street Care app, increasing volunteer participation by 25%",
        "Implemented Agile and CI/CD workflows, reducing development time by 40%",
        "Optimized database and caching, improving page load times from 5s to <1s",
        "Fixed critical registration bug affecting 200+ users within 24 hours"
      ],
      color: "#952f3e" 
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 relative w-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-950/20 to-black/0" />
      
      <div className="w-screen relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20 text-white/90"
        >
          Work Experience
        </motion.h2>

        <div className="h-[80vh] mb-8">
          <ExperienceScene 
            experiences={experiences}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        {selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 -mt-8"
          >
            {experiences.map((exp) => (
              exp.id === selectedId && (
                <div key={exp.id}>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-blue-300 mb-2">{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience; 
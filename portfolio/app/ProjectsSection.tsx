"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Sparkles, Github, Eye } from "lucide-react";
import MotionSection from "./MotionSection";

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
  colors: { from: string, to: string };
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <MotionSection id="projects">
    <div className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full blur-3xl" />
      </div>

      {/* Title */}
      <motion.div 
        className="flex items-center justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative"
          animate={{ 
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-xl opacity-50" />
          <Briefcase className="w-12 h-12 text-violet-500 relative z-10" strokeWidth={2.5} />
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
          Mes Projets
        </h2>
        <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
      </motion.div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: index * 0.1 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative flex flex-col flex-grow bg-white/10 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden shadow-xl">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.name} 
                    width={600} 
                    height={600} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    priority={index < 3} 
                  />
                  
                  {/* Gradient overlay */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.colors.from}90, ${project.colors.to}95)` 
                    }}
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.85 }}
                  />

                  {/* Project name badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                    <h3 className="font-bold text-white text-lg">{project.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/30 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + techIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "rgba(139, 92, 246, 0.4)",
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex gap-4">
                  {project.githubLink && project.githubLink !== "#" && (
                    <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-4 rounded-lg bg-gray-700/50 text-white font-semibold hover:bg-gray-600/70 transition-colors flex items-center justify-center gap-2" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                      <Github className="w-5 h-5" />
                      Voir le code
                    </motion.a>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <motion.a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 px-4 rounded-lg bg-blue-600/80 text-white font-semibold hover:bg-blue-500/90 transition-colors flex items-center justify-center gap-2" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                      <Eye className="w-5 h-5" />
                      Visiter le site
                    </motion.a>
                  )}
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </MotionSection>
);

export default ProjectsSection;
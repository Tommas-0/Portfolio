"use client";

import { motion } from "framer-motion";
import { Code, Sparkles, Zap } from "lucide-react";
import MotionSection from "./MotionSection";

interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
}

interface SkillsSectionProps {
  skills: Skills;
}

const SkillCategory = ({ 
  title, 
  skills, 
  colorFrom,
  colorTo,
  icon: Icon,
  delay = 0
}: { 
  title: string; 
  skills: string[]; 
  colorFrom: string;
  colorTo: string;
  icon: any;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative"
  >
    {/* Background glow */}
    <div className={`absolute -inset-4 bg-gradient-to-r ${colorFrom} ${colorTo} opacity-20 blur-3xl rounded-3xl`} />
    
    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/50 shadow-2xl">
      {/* Title with icon */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`p-3 rounded-xl bg-gradient-to-br ${colorFrom} ${colorTo}`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${colorFrom} ${colorTo} bg-clip-text text-transparent`}>
          {title}
        </h3>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="group relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            whileHover={{ 
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${colorFrom} ${colorTo} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 rounded-xl`} />
            
            <div className={`relative p-4 text-center rounded-xl bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50 border border-white/20 dark:border-gray-700/30 backdrop-blur-sm transition-all duration-300 group-hover:border-opacity-60 group-hover:shadow-lg`}>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {skill}
              </span>
              
              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <MotionSection id="skills">
    <div className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
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
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-xl opacity-50" />
          <Code className="w-12 h-12 text-green-500 relative z-10" strokeWidth={2.5} />
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Compétences
        </h2>
        <Zap className="w-8 h-8 text-yellow-500 animate-pulse" />
      </motion.div>

      {/* Categories */}
      <div className="space-y-12 max-w-7xl mx-auto">
        <SkillCategory 
          title="Frontend" 
          skills={skills.frontend} 
          colorFrom="from-blue-500"
          colorTo="to-cyan-500"
          icon={Code}
          delay={0}
        />
        <SkillCategory 
          title="Backend" 
          skills={skills.backend} 
          colorFrom="from-violet-500"
          colorTo="to-purple-500"
          icon={Zap}
          delay={0.2}
        />
        <SkillCategory 
          title="Outils & Méthodes" 
          skills={skills.tools} 
          colorFrom="from-green-500"
          colorTo="to-emerald-500"
          icon={Sparkles}
          delay={0.4}
        />
      </div>
    </div>
  </MotionSection>
);

export default SkillsSection;
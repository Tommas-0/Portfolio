"use client";

import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import MotionSection from "./MotionSection";

interface AboutSectionProps {
  about: string;
}

const AboutSection = ({ about }: AboutSectionProps) => (
  <MotionSection id="about">
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Title with animated icon */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50" />
          <User className="w-12 h-12 text-blue-500 relative z-10" strokeWidth={2.5} />
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          À propos de moi
        </h2>
        <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
      </motion.div>

      {/* Content card with glassmorphism */}
      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />

        <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-gray-700/50 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-center mb-6">
              {about}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">20</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Ans</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Années d'études</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Nancy</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">France</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
        </div>
      </motion.div>
    </div>
  </MotionSection>
);

export default AboutSection;
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, Sparkles, MessageCircle, FileDown, Download, Eye } from "lucide-react";
import MotionSection from "./MotionSection";

interface ContactSectionProps {
  email: string;
  phone: string;
}

const ContactSection = ({ email, phone }: ContactSectionProps) => (
  <MotionSection id="contact">
    <div className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-full blur-3xl animate-pulse" />
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
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-xl opacity-50" />
          <Mail className="w-12 h-12 text-pink-500 relative z-10" strokeWidth={2.5} />
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
          Contact
        </h2>
        <MessageCircle className="w-8 h-8 text-rose-500 animate-bounce" />
      </motion.div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-red-500/20 rounded-3xl blur-2xl" />
          
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-gray-700/50 shadow-2xl">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mb-10"
            >
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                N'hésitez pas à me contacter pour toute collaboration ou opportunité professionnelle.
              </p>
              <motion.div
                className="mt-4 flex items-center justify-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Réponse rapide garantie
                </span>
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </motion.div>
            </motion.div>

            {/* Contact cards */}
            <div className="space-y-6">
              {/* Email card */}
              <motion.a
                href={`mailto:${email}`}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl blur-md opacity-50" />
                  <div className="relative bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl p-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    {email}
                  </p>
                </div>

                <motion.div
                  className="transition-transform"
                  animate={{ 
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Send className="w-6 h-6 text-pink-500" />
                </motion.div>
              </motion.a>

              {/* Phone card */}
              <motion.a
                href="tel:+33642126664"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/30 hover:border-rose-500/60 transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  x: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-red-500 rounded-xl blur-md opacity-50" />
                  <div className="relative bg-gradient-to-br from-rose-500 to-red-500 rounded-xl p-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Téléphone</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                    +33 6 42 12 66 64
                  </p>
                </div>

                <motion.div
                  animate={{ 
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MessageCircle className="w-6 h-6 text-rose-500" />
                </motion.div>
              </motion.a>
            </div>

            {/* Divider */}
            <motion.div
              className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* CV Download Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Découvrez mon parcours complet
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Bouton Voir le CV */}
                <motion.a
                  href="/CV_Tommas.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye className="w-6 h-6" />
                  <span>Voir le CV</span>
                </motion.a>

                {/* Bouton Télécharger le CV */}
                <motion.a
                  href="/CV_Tommas.pdf"
                  download="CV_Tommas_Curci.pdf"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FileDown className="w-6 h-6" />
                  </motion.div>
                  
                  <span>Télécharger</span>
                  
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </div>

              <motion.p
                className="mt-4 text-sm text-gray-500 dark:text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Format PDF • Mis à jour en 2025
              </motion.p>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-tr from-rose-500/20 to-red-500/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </div>
  </MotionSection>
);

export default ContactSection;
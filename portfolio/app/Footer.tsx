"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Heart, Sparkles } from "lucide-react";

interface FooterProps {
  name: string;
  github: string;
  linkedin: string;
  email: string;
}

const Footer = ({ name, github, linkedin, email }: FooterProps) => (
  <footer className="relative mt-24 overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-blue-500/10" />
    
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500 to-violet-500 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    <div className="relative">
      {/* Top border with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      <div className="container mx-auto px-4 py-12">
        {/* Social links */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { href: "https://github.com/Tommas-0", icon: Github, color: "from-gray-700 to-gray-900", hoverColor: "hover:text-gray-700 dark:hover:text-gray-300" },
            { href: "https://www.linkedin.com/in/tommas-curci-6080a3305", icon: Linkedin, color: "from-blue-600 to-blue-800", hoverColor: "hover:text-blue-600 dark:hover:text-blue-400" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              
              {/* Icon container */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-4 border border-gray-200 dark:border-gray-700 group-hover:border-opacity-0 transition-all duration-300 shadow-lg">
                <social.icon className={`w-7 h-7 text-gray-600 dark:text-gray-400 ${social.hoverColor} transition-colors duration-300`} />
              </div>

              {/* Sparkle on hover */}
              <motion.div
                className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {new Date().getFullYear()}</span>
            <motion.span
              className="font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {name}
            </motion.span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Fait avec
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.div>
            </span>
          </div>
          
          <motion.p
            className="mt-2 text-sm text-gray-500 dark:text-gray-500"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Tous droits réservés
          </motion.p>
        </motion.div>

        {/* Decorative floating elements */}
        <div className="absolute bottom-0 left-10 opacity-30">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-6 h-6 text-blue-500" />
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 right-10 opacity-30">
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-8 h-8 text-purple-500" />
          </motion.div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
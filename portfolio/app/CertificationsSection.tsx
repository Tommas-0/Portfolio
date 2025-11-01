"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, X, Sparkles, Trophy, CheckCircle2, Star, Download, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";
import MotionSection from "./MotionSection";

interface Certification {
  id: number;
  name: string;
  authority: string;
  imageUrl: string;
  link: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Filtrer les certifications pour exclure les deux premières
  const filteredCertifications = certifications.filter(cert => 
    !(cert.name === "Web Development MSc Pro" && cert.authority === "Epitech") &&
    !(cert.name === "Certification Web" && cert.authority === "Epitech")
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <MotionSection id="certifications">
      <div className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[700px] h-[700px] bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full blur-3xl animate-pulse" />
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
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-xl opacity-50" />
            <Award className="w-12 h-12 text-amber-500 relative z-10" strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <Trophy className="w-8 h-8 text-yellow-500 animate-bounce" />
        </motion.div>

        {/* Certifications grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group relative block cursor-pointer"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.15 
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {/* Glowing border on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-3xl" />
                
                <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-amber-500/20 dark:border-amber-500/30 shadow-2xl overflow-hidden group-hover:border-amber-500/60 transition-all duration-300">
                  
                  {/* Top decorative bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" />
                  
                  {/* Content */}
                  <div className="p-8">
                    {/* Image container with premium frame */}
                    <motion.div 
                      className="relative mx-auto mb-6 w-full h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 p-4 border-2 border-amber-500/20 shadow-inner"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image 
                        src={cert.imageUrl} 
                        alt={`Logo ${cert.authority}`} 
                        fill={true} 
                        style={{ objectFit: "contain" }} 
                        className="relative z-10 p-2" 
                      />
                      
                      {/* Zoom icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="bg-white/90 rounded-full p-3"
                        >
                          <ZoomIn className="w-8 h-8 text-amber-500" />
                        </motion.div>
                      </div>

                      {/* Corner decorations */}
                      <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-amber-500/30 rounded-tl-lg" />
                      <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-amber-500/30 rounded-tr-lg" />
                      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-amber-500/30 rounded-bl-lg" />
                      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-amber-500/30 rounded-br-lg" />
                    </motion.div>

                    {/* Title and authority */}
                    <div className="text-center mb-4">
                      <motion.h3 
                        className="font-bold text-2xl text-gray-900 dark:text-white mb-3 flex items-center justify-center gap-2"
                      >
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                        {cert.name}
                      </motion.h3>
                      
                      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        <p className="text-lg font-medium">{cert.authority}</p>
                      </div>
                    </div>

                    {/* Verified badge */}
                    <div className="flex items-center justify-center gap-2 mt-6 p-3 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </motion.div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Certification Vérifiée
                      </span>
                    </div>
                  </div>

                  {/* Bottom glow bar */}
                  <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal pour afficher l'image en grand */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-white fill-white" />
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedCert.name}</h3>
                        <p className="text-amber-100">{selectedCert.authority}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <motion.a
                        href={selectedCert.imageUrl}
                        download={`${selectedCert.name.replace(/\s+/g, '_')}_${selectedCert.authority.replace(/\s+/g, '_')}.jpg`}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-5 h-5 text-white" />
                      </motion.a>
                      
                      <motion.button
                        onClick={() => setSelectedCert(null)}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <X className="w-6 h-6 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-[calc(90vh-120px)] bg-gray-100 dark:bg-gray-800 p-8">
                  <Image
                    src={selectedCert.imageUrl}
                    alt={selectedCert.name}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Trophy className="w-full h-full text-yellow-500" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Award className="w-full h-full text-amber-500" />
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default CertificationsSection;
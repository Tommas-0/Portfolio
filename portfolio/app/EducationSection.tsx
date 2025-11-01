"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, Award } from "lucide-react";
import MotionSection from "./MotionSection";

interface Education {
    id: number;
    degree: string;
    school: string;
    location: string;
    period: string;
    description?: string[];
    color: { from: string; to: string };
}

interface EducationSectionProps {
    education: Education[];
}

const EducationSection = ({ education }: EducationSectionProps) => (
    <MotionSection id="education">
        <div className="relative">
            {/* Background effects */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[700px] h-[700px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-3xl animate-pulse" />
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
                        y: [0, -10, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50" />
                    <GraduationCap className="w-12 h-12 text-cyan-500 relative z-10" strokeWidth={2.5} />
                </motion.div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    Formation
                </h2>
                <BookOpen className="w-8 h-8 text-blue-500 animate-pulse" />
            </motion.div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 hidden md:block" />

                <div className="space-y-10">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: index * 0.15
                            }}
                        >
                            {/* Timeline dot */}
                            <motion.div
                                className="absolute left-8 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-white dark:border-gray-900 hidden md:block -translate-x-1/2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.3 }}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                    animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Content card */}
                            <div className="md:ml-20">
                                <motion.div
                                    className="group relative"
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {/* Glow effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${edu.color.from} ${edu.color.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-3xl`} />

                                    <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-cyan-500/20 dark:border-blue-500/30 shadow-xl group-hover:border-blue-500/60 transition-all duration-300">
                                        {/* Top accent bar */}
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color.from} ${edu.color.to} rounded-t-3xl`} />

                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex-grow">
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                                    {edu.degree}
                                                </h3>

                                                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                                                    <div className="flex items-center gap-2">
                                                        <motion.div
                                                            animate={{ rotate: [0, 5, -5, 0] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            className={`p-2 rounded-lg bg-gradient-to-r ${edu.color.from} ${edu.color.to}`}
                                                        >
                                                            <GraduationCap className="w-4 h-4 text-white" />
                                                        </motion.div>
                                                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                                                            {edu.school}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4 text-blue-500" />
                                                        <span>{edu.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Period badge */}
                                            <motion.div
                                                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${edu.color.from} ${edu.color.to} text-white font-semibold shadow-lg`}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm whitespace-nowrap">{edu.period}</span>
                                            </motion.div>
                                        </div>

                                        {/* Description */}
                                        {edu.description && (
                                            <div className="space-y-2 mt-4">
                                                {edu.description.map((desc, i) => (
                                                    <motion.p
                                                        key={i}
                                                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.15 + i * 0.1 }}
                                                    >
                                                        {desc}
                                                    </motion.p>
                                                ))}
                                            </div>
                                        )}

                                        {/* Bottom decorative element */}
                                        <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Award className="w-16 h-16 text-blue-500" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </MotionSection>
);

export default EducationSection;
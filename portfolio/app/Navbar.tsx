"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
    name: string;
}

const Navbar = ({ name }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "À propos" },
        { href: "#projects", label: "Projets" },
        { href: "#skills", label: "Compétences" },
        { href: "#certifications", label: "Certifications" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo / Nom */}
                    <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="relative"
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        {name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                            </motion.div>

                            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hidden sm:block">
                                {name}
                            </span>
                        </Link>
                    </motion.div>

                    {/* Navigation Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-medium transition-colors relative group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Bouton Accueil + Menu Mobile */}
                    <div className="flex items-center gap-4">
                        {/* Bouton Accueil */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Home className="w-4 h-4" />
                                <span className="hidden sm:inline">Accueil</span>
                            </Link>
                        </motion.div>

                        {/* Menu burger (mobile) */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            <motion.div
                className="md:hidden overflow-hidden"
                initial={false}
                animate={{ height: isMenuOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-4 py-4 space-y-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 hover:text-purple-500 dark:hover:text-purple-400 font-medium transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
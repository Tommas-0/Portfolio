"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TypingTitle = ({ text }: { text: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    });
    return controls.stop;
  }, [count, text.length]);

  return (
    <motion.p className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-8 h-10 flex items-center justify-center tracking-wider
                        [text-shadow:0_0_15px_rgba(0,0,0,1),0_2px_8px_rgba(0,0,0,0.9),0_0_30px_rgba(37,99,235,0.5)]">
      {displayText || <span>&nbsp;</span>}
    </motion.p>
  );
};

const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/code-1.jpg', '/code-2.jpg', '/code-3.jpg', '/code-4.jpg'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 1.1 }}
          transition={{ duration: 2, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <div className="relative w-full h-full">
            <Image src={image} alt={`Background ${index + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" className="object-cover" priority={index === 0} quality={75} />
          </div>
          <div className="absolute inset-0 radial-scrim" />
        </motion.div>
      ))}
    </>
  );
};

interface HeroSectionProps {
  name: string;
  title: string;
}

const HeroSection = ({ name, title }: HeroSectionProps) => (
  <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <div className="absolute inset-0 w-screen h-screen -z-10"><BackgroundSlideshow /></div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="z-10 max-w-4xl px-6"
    >
      <motion.h1
        className="text-5xl sm:text-7xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {name}
      </motion.h1>
      <TypingTitle text={title} />
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/portfolio"
          className="inline-block group text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 
                    dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 
                  font-bold rounded-full text-lg px-10 py-5 text-center transition-all duration-300 ease-out hover:scale-105"
        >
          <span className="flex items-center gap-3">
            Découvrir mes projets
            <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
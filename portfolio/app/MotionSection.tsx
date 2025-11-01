"use client";
import { motion } from "framer-motion";

const MotionSection = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ type: "spring", stiffness: 100, damping: 25, duration: 0.6 }}
    className="py-28 sm:py-40 mb-16"
  >
    {children}
  </motion.section>
);

export default MotionSection;
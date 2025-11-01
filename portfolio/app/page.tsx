"use client";

import HeroSection from "./HeroSection";
import { portfolioData } from "./data";

export default function Home() {
  return (
    <main>
      <HeroSection name={portfolioData.name} title={portfolioData.title} />
    </main>
  );
}
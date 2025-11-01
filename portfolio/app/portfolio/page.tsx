"use client";

import { portfolioData } from "../data";
import Navbar from "../Navbar";
import AboutSection from "../AboutSection";
import ProjectsSection from "../ProjectsSection";
import SkillsSection from "../SkillsSection";
import CertificationsSection from "../CertificationsSection";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

export default function PortfolioPage() {
  return (
    <>
      <Navbar name={portfolioData.name} />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <AboutSection about={portfolioData.about} />
          <ProjectsSection projects={portfolioData.projects} />
          <SkillsSection skills={portfolioData.skills} />
          <CertificationsSection certifications={portfolioData.certifications} />
          <ContactSection email={portfolioData.email} phone={portfolioData.phone} />
        </div>
        <Footer name={portfolioData.name} github={portfolioData.github} linkedin={portfolioData.linkedin} email={portfolioData.email} />
      </main>
    </>
  );
}
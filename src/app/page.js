"use client";
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#d4dbfa]">
      <Navbar activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

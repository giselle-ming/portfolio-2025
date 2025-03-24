"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProjectsPage from "../components/ProjectsPage";

export default function Home() {
  const [activeLink, setActiveLink] = useState("/projects");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#d4dbfa]">
      <Navbar activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsPage />
      </div>
    </main>
  );
}

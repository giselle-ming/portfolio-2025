"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);

  return (
    <section className="text-white" id="about">
      <div className="rounded-full md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="hidden lg:block"
          src="/images/about-img.png"
          alt="image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#343660] mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#343660]">
            I'm a passionate software engineer based in Toronto. I graduated
            with honors in Mobile Application Design and Development from
            Algonquin College in Ottawa, where I focused on hybrid and native
            mobile app development, full-stack web development, and UX/UI
            design. I also hold a Bachelor of Engineering in Software
            Engineering from Universidad Católica Andrés Bello (UCAB) in
            Caracas, Venezuela. Additionally, I've worked as an auditor and
            research analyst.
          </p>
          <div className="mt-4"></div>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-[#8C58AB] text-[#e0e7ff] rounded-md text-sm font-medium">
              Web Developer
            </span>
            <span className="px-4 py-2 bg-[#8C58AB] text-[#e0e7ff] rounded-md text-sm font-medium">
              Web Design
            </span>
            <span className="px-4 py-2 bg-[#8C58AB] text-[#e0e7ff] rounded-md text-sm font-medium">
              Software Engineer
            </span>
            <span className="px-4 py-2 bg-[#8C58AB] text-[#e0e7ff] rounded-md text-sm font-medium">
              Mobile Development
            </span>
            <span className="px-4 py-2 bg-[#8C58AB] text-[#e0e7ff] rounded-md text-sm font-medium">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-[#8C58AB] text-[#e0e7ff] rounded-md text-sm font-medium">
              UI/UX Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

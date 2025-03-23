"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleDownload = () => {
    const fileUrl = "/Resume-Giselle_Mingue_Rios.pdf";
    const fileName = "Resume-Giselle_Mingue.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 h-[60vh]">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-gradient-to-br from-[#343660] to-[#BA68C8] bg-clip-text">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Giselle",
                4000,
                "a Software Engineer",
                4000,
                "a Web Developer",
                4000,
                "a Mobile Developer",
                4000,
                "a UX/UI Designer",
                4000,
              ]}
              wrapper="span"
              className="text-[#BA68C8]"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#0c1740] text-base sm:text-lg mb-6 lg:text-xl">
            Emerging front-end developer with experience in web application and
            mobile development. Proficient in JavaScript, React, and various
            front-end technologies. Strong problem-solving skills and a
            collaborative team player.
          </p>
          <div>
            <a
              href="mailto:giselle@berraming.com?subject=I%20want%20to%20hire%20you!"
              className="px-5 py-2.5 w-full mb-2 sm:w-fit rounded-md mr-4 bg-gradient-to-br from-[#343660] to-[#BA68C8] text-white inline-block transition-transform transform hover:scale-105"
            >
              Hire me
            </a>
            <button
              onClick={handleDownload}
              className="relative w-full sm:w-fit inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm text-[#3C3966] rounded-lg group bg-gradient-to-br from-[#343660] to-[#BA68C8] group-hover:from-purple-500 hover:text-white hover:scale-105 dark:text-white focus:outline-none"
            >
              <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-[#d4dbfa] text-[#3C3966] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent hover:text-white">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 hidden lg:block">
          <div className="lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] relative mt-3">
            <Image
              src="/images/hero.svg"
              alt="Avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 h-[60vh]">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-gradient-to-br from-[#343660] to-[#BA68C8] bg-clip-text">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Giselle",
                4000,
                "Software Engineer",
                4000,
                "Web Developer",
                4000,
                "Mobile Developer",
                4000,
                "UX/UI Designer",
                4000,
              ]}
              wrapper="span"
              className="text-[#BA68C8]"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#0c1740] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a full-stack developer with a passion for creating beautiful and
            functional websites.
          </p>
          <div>
            <a
              href="mailto:giselle@berraming.com?subject=I%20want%20to%20hire%20you"
              className="px-5 py-2.5 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-[#343660] to-[#BA68C8] text-white inline-block transition-transform transform hover:scale-105"
            >
              Hire me
            </a>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm text-[#3C3966] rounded-lg group bg-gradient-to-br from-[#343660] to-[#BA68C8] group-hover:from-purple-500 hover:text-white hover:scale-102 dark:text-white focus:outline-none">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#d4dbfa] dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 hidden lg:block">
          <div className="rounded-full w-[500px] h-[500px] lg:w-[350px] lg:h-[350px] relative mt-3">
            <Image
              src="/images/hero.svg"
              alt="Avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

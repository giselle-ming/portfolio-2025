import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-90 md:h-70 lg:h-80 rounded-lg relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-lg bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-20 transition-all duration-500 ">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-[#212e63] rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <div className="flex items-center">
          <h1 className="text-[#BA68C8] font-bold text-2xl">{">"}</h1>
          <TypeAnimation
            sequence={[title, 4000]}
            wrapper="span"
            className="text-[#212e63] font-bold text-2xl pl-2"
            speed={10}
            repeat={1}
          />
        </div>
        <p className="text-[#0c1740]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Retro Media Player",
    description:
      "A nostalgic web-based media player built with HTML, CSS, and JavaScript, designed with a retro aesthetic and featuring a collection of classic old-school songs.",
    image: "/images/projects/mediaplayer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselle-ming/media-player",
    previewUrl: "https://giselle-ming.github.io/media-player/",
  },
  {
    id: 2,
    title: "Movie Time App",
    description:
      "A React-based movie app that lets users search for movies, view details, and add favorites. Built with SASS for styling and The Movie Database (TMDb) API for fetching movie data.",
    image: "/images/projects/tmdb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselle-ming/tmdb-project",
    previewUrl: "https://movietime-tmdb.netlify.app/",
  },
  {
    id: 3,
    title: "Gifter App",
    description:
      "React application that helps users save and organize gift ideas effortlessly. It features Google Authentication, a MongoDB database for data storage, and a Node.js & Express API for seamless backend functionality.",
    image: "/images/projects/giftr.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselle-ming/giftr-react",
    previewUrl: "https://giftr-react.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-8 text-center text-4xl font-bold text-[#343660] mt-4 mb-8 md:mb-12">
        Selected Projects
      </h2>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button
          onClick={() => window.location.replace("/projects")}
          type="submit"
          className="mt-10 px-5 py-2.5 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-bl from-[#343660] to-[#BA68C8] hover:scale-102 text-white"
        >
          Discover more
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;

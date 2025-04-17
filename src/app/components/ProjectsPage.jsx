"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./ProjectTag";

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
  {
    id: 4,
    title: "Meal Planner",
    description:
      "Simple web application that allows users to browse meal categories, view recipe cards, and explore detailed meal information, including ingredients and instructions. Built with HTML, CSS, and JavaScript, leveraging TheMealDB API for dynamic content.",
    image: "/images/projects/mealplanner.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselle-ming/basic-recipes",
    previewUrl: "https://giselle-ming.github.io/basic-recipes/",
  },
  {
    id: 5,
    title: "two-page-site",
    description:
      "A basic 2-page website built with pure HTML and CSS, showcasing a clean and responsive layout without any JavaScript or frameworks.",
    image: "/images/projects/two-page-site.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselle-ming/HTML-two-page-site",
    previewUrl: "https://giselle-ming.github.io/HTML-two-page-site/",
  },
  {
    id: 6,
    title: "React Native Giftr App",
    description:
      "The React Native Giftr App Project is a mobile application designed to facilitate the collection of gift ideas for individuals. It aims to provide users with a convenient way to organize and manage gift ideas for their friends and family members.",
    image: "/images/projects/giftr-rnative.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/giselle-ming/gifter-react-native",
    previewUrl: "https://github.com/giselle-ming/gifter-react-native",
  },
  {
    id: 7,
    title: "Doors Open Ottawa",
    description:
      "A mobile application that provides users with information about the Doors Open Ottawa event. It allows users to view a list of participating buildings, access building details, and view building locations on a map.",
    image: "/images/projects/opendoorsottawa.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/giselle-ming/Doors-Open-Ottawa-App",
    previewUrl: "https://github.com/giselle-ming/Doors-Open-Ottawa-App",
  },
  {
    id: 8,
    title: "MovieNightFlutter",
    description:
      "MovieNightFlutter is a Flutter app that lets you swipe through movie recommendations, similar to Tinder, to find your next film to watch. Like or dislike movies to discover new favorites in a fun and interactive way.",
    image: "/images/projects/movienightflutter.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/giselle-ming/MovieNightFlutter",
    previewUrl: "https://github.com/giselle-ming/MovieNightFlutter",
  },
  {
    id: 9,
    title: "Invoice Reader",
    description:
      "Web-based application that allows users to upload invoices or receipts and extract key information such as vendor details, invoice number, date, total amount, and line items. The application uses OCR (Optical Character Recognition) to process the uploaded files and display the extracted data in a user-friendly format.",
    image: "/images/projects/invoicereader.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselle-ming/auto-invoice",
    previewUrl: "giselle-ming.github.io/auto-invoice/",
  },
];

const ProjectsPage = () => {
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
    <section id="projects" className="mb-15">
      <h2 className="mt-8 text-center text-4xl font-bold text-[#343660] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
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
    </section>
  );
};

export default ProjectsPage;

"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import SkillsSection from "../components/SkillsSection";
import TimelineSection from "../components/TimelineSection";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillCategories = [
  {
    category: "Mobile Development",
    level: 85,
    skills: [
      { name: "Android", icon: "/icons/android.png" },
      { name: "Dart", icon: "/icons/dart.png" },
      { name: "Flutter", icon: "/icons/flutter.png" },
      { name: "Kotlin", icon: "/icons/kotlin.png" },
      { name: "Swift", icon: "/icons/swift.png" },
    ],
  },
  {
    category: "Web Development",
    level: 90,
    skills: [
      { name: "Javascript/Typescript", icon: "/icons/js.png" },
      { name: "React/React Native", icon: "/icons/react.png" },
      { name: "Node.js/Express", icon: "/icons/node.png" },
      { name: "HTML/CSS", icon: "/icons/html.png" },
      { name: "Bootstrap/SASS", icon: "/icons/bootstrap.png" },
    ],
  },
  {
    category: "Backend & Databases",
    level: 75,
    skills: [
      { name: "Python", icon: "/icons/python.png" },
      { name: "C#", icon: "/icons/csharp.png" },
      { name: "SQL", icon: "/icons/sql.svg" },
      { name: "MySQL/SQL Server/MongoDB/Firebase", icon: "/icons/mongodb.png" },
      { name: "Azure", icon: "/icons/azure.png" },
      { name: "AWS", icon: "/icons/aws.png" },
    ],
  },
  {
    category: "Automation & Tools",
    level: 75,
    skills: [
      { name: "UiPath", icon: "/icons/uipath.png" },
      { name: "Microsoft Power Platform", icon: "/icons/ms.png" },
      { name: "DevOps", icon: "/icons/devops.png" },
      { name: "Git", icon: "/icons/git.png" },
      { name: "Cypress/Selenium", icon: "/icons/cypress.svg" },
    ],
  },
  {
    category: "Design & Prototyping",
    level: 70,
    skills: [
      { name: "Adobe Illustrator/Photoshop", icon: "/icons/ps.png" },
      { name: "Figma", icon: "/icons/figma.png" },
    ],
  },
];

const experiences = [
  {
    title: "Research/Analysis Officer – Casual Contract",
    company: "Transport Canada",
    date: "Sep 2024 – Current",
    description: [
      "Collaborated in the development of internal reporting software, contributing to the design and implementation of features for improved reporting and analytics.",
      "Created automated test cases that validate software and product requirements.",
      "Applied problem-solving skills to identify areas for optimization.",
    ],
  },
  {
    title: "FSWEP Student",
    company: "Transport Canada",
    date: "May 2023 – Sep 2024",
    description: [
      "Provided support to the Corporate Planning and Reporting team in various internal services and development projects to ensure the effective operations of the department.",
      "Developed and implemented automation solutions using Microsoft Power Platform and Azure.",
    ],
  },
  {
    title: "Internal Auditor",
    company: "Ernst & Young  – Caracas, Venezuela",
    date: "Apr 2019 – Dec 2019",
    description: [
      "Assessed the compliance of the COSO framework and evaluated adherence to risk and control standards within an important banking institution in South America.",
      "Performed risk assessments on key business activities and processes.",
      "Improved procedures involved in IT and operational audits.",
    ],
  },
];

const education = [
  {
    degree: "Mobile Application Design and Development",
    school:
      "Algonquin College of Applied Arts and Technology – Ottawa, Ontario",
    date: "Sep 2022 – Jun 2024",
    description: [
      "Graduated with Honors.",
      "Coursework: Hybrid mobile application development; Full-stack web development; User experience and user interface design; Native mobile application development.",
      "Relevant Project:",
      "Applied Project: Robotic Process Automation (RPA) for HR Department Transcript Processing – Team Leader.",
      "Oversaw the development of the RPA solution using UiPath to automate transcript processing, including monitoring Outlook inbox, data capture, attachment handling, uploading to Jira.",
      "Presented the final RPA solution to the Client, Communication Security Establishment (CSE) and received positive feedback.",
    ],
  },
  {
    degree: "Bachelor of Engineering in Software Engineering",
    school: "Universidad Católica Andrés Bello (UCAB) – Caracas, Venezuela",
    date: "Oct 2014 – Feb 2020",
    description: [
      "Coursework: Operating Systems; Programming Languages; Computer Architecture; Calculus I-IV; Project Management; Software Engineering Principles; Database Management; Data Structures & Algorithms; Web Development.",
      "Thesis Project: Compliance of the COSO Framework in the CAF (Development Bank of Latin America).",
    ],
  },
];

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#d4dbfa] to-[#e8d4fa]">
//       <Navbar />
//       <div className="container mt-24 mx-auto px-12 py-4 suppressHydrationWarning">
//         <motion.h1
//           className="text-4xl font-bold text-[#343660] mb-8"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           My Resume
//         </motion.h1>

//         {/* Skills Section */}
//         <section className="mb-16">
//           <motion.h2
//             className="text-3xl font-semibold text-[#343660] mb-6"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Core Skills
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {skillCategories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//               >
//                 {/* Circular Progress for Category */}
//                 <div className="w-24 h-24 mb-4">
//                   <CircularProgressbar
//                     value={category.level}
//                     text={`${category.level}%`}
//                     styles={buildStyles({
//                       textColor: "#343660",
//                       pathColor: "#BA68C8",
//                       trailColor: "#e0e0e0",
//                     })}
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-[#343660] mb-4">
//                   {category.category}
//                 </h3>
//                 {/* List of Skills */}
//                 <ul className="list-none text-md text-[#485073]">
//                   {category.skills.map((skill, i) => (
//                     <li key={i} className="mb-1 flex items-center">
//                       {/* Replace the src with the path to your logo or use an icon */}
//                       <img
//                         src={`/icons/${skill
//                           .toLowerCase()
//                           .replace(/ /g, "-")}.png`}
//                         alt={`${skill} logo`}
//                         className="w-5 h-5 mr-2"
//                       />
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Timeline Section */}
//         <motion.h2
//           className="text-3xl font-semibold text-[#343660] mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Experience
//         </motion.h2>

//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-1/2 top-0 w-1 bg-[#BA68C8] h-full transform -translate-x-1/2"></div>

//           {/* Timeline Items */}
//           {[...experiences, ...education]
//             .sort(
//               (a, b) =>
//                 new Date(b.date.split(" - ")[0]) -
//                 new Date(a.date.split(" - ")[0])
//             ) // Sort chronologically
//             .map((item, index) => (
//               <motion.div
//                 key={index}
//                 className={`flex items-center mb-12 ${
//                   index % 2 === 0 ? "justify-start" : "justify-end"
//                 }`}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//               >
//                 <div
//                   className={`relative w-1/2 ${
//                     index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
//                   }`}
//                 >
//                   <h3 className="text-xl font-bold text-[#343660]">
//                     {item.title || item.degree}
//                   </h3>
//                   <p className="text-sm text-[#485073]">
//                     {item.company || item.school}
//                   </p>
//                   <p className="text-sm text-[#485073] italic">{item.date}</p>
//                   <ul className="list-none mt-2 text-[#343660]">
//                     {item.description.map((desc, i) => (
//                       <li key={i} className="mb-1">
//                         {desc}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 {/* Dot */}
//                 <div className="w-8 h-8 bg-[#BA68C8] rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
//               </motion.div>
//             ))}
//         </div>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  // Combine experiences and education into a single timeline array
  const timelineItems = [...experiences, ...education].sort(
    (a, b) =>
      new Date(b.date.split(" - ")[0]) - new Date(a.date.split(" - ")[0])
  );

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#d4dbfa] to-[#e8d4fa]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 suppressHydrationWarning">
        <motion.h1
          className="text-4xl font-bold text-[#343660] mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Resume
        </motion.h1>

        {/* Skills Section */}
        <SkillsSection skillCategories={skillCategories} />

        {/* Timeline Section */}
        <TimelineSection items={timelineItems} />
      </div>
    </main>
  );
}

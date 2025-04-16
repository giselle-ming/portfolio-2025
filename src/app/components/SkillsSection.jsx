import { motion } from "framer-motion";
import SkillCategory from "./SkillCategory";

export default function SkillsSection({ skillCategories }) {
  return (
    <section className="mb-[-4rem] md:mb-[-2rem] sm:mb-[-2rem] lg:mb-[-2rem]">
      {/* Animated Section Title */}
      <motion.h2
        className="text-3xl font-semibold text-[#343660] text-center mb-[-6rem] md:mb-[-2rem] sm:mb-[-2rem] lg:mb-[-2rem] mt-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Core Skills
      </motion.h2>

      {/* Animated Skill Categories */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Stagger animation for children
            },
          },
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <SkillCategory category={category} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

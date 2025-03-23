import { motion } from "framer-motion";

export default function TimelineItem({ item, isLeftAligned }) {
  return (
    <motion.div
      className={`flex flex-col sm:flex-row items-center mb-12 ${
        isLeftAligned ? "sm:justify-start" : "sm:justify-end"
      }`}
      initial={{ opacity: 0, x: isLeftAligned ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`relative w-full sm:w-1/2 ${
          isLeftAligned ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
        }`}
      >
        <h3 className="text-lg sm:text-xl font-bold text-[#343660]">
          {item.title || item.degree}
        </h3>
        <p className="text-sm text-[#485073]">{item.company || item.school}</p>
        <p className="text-sm text-[#485073] italic">{item.date}</p>
        <ul className="list-none mt-2 text-[#343660]">
          {item.description.map((desc, i) => (
            <li key={i} className="mb-1">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#BA68C8] rounded-full absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"></div>
    </motion.div>
  );
}

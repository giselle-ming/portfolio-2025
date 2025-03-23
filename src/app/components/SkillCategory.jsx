import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function SkillCategory({ category }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-4">
        <CircularProgressbar
          value={category.level}
          text={`${category.level}%`}
          styles={buildStyles({
            textColor: "#343660",
            pathColor: "#BA68C8",
            trailColor: "#e0e0e0",
          })}
        />
      </div>
      <h2 className="text-2xl font-bold text-[#343660] mb-4">
        {category.category}
      </h2>
      <ul className="list-none text-xl text-[#485073]">
        {category.skills.map((skill, i) => (
          <li key={i} className="mb-1 flex items-center">
            <img
              src={skill.icon}
              alt={`${skill.name} logo`}
              className="w-5 h-5 mr-2"
            />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

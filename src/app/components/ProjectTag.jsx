import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#343660] border-primary-500"
    : "text-[#BA68C8] hover:scale-105";
  return (
    <button
      className={`${buttonStyles} rounded-md border-3 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

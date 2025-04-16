import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:scale-105 flex items-center space-x-2"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;

"use client";
import React, { useEffect } from "react";
import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    title: "About",
    path: "/#about",
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <BriefcaseIcon className="h-5 w-5" />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FolderIcon className="h-5 w-5" />,
  },
  {
    title: "Contact",
    path: "/#contact",
    icon: <EnvelopeIcon className="h-5 w-5" />,
  },
];

const Navbar = ({ activeLink, handleLinkClick }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [showName, setShowName] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowName(true);
      } else {
        setShowName(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed mx-auto h-20 top-0 left-0 right-0 z-50 bg-[#d4dbfa] backdrop-blur-md">
      <div className="flex container h-20 lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="text-[#343660] font-bold text-2xl">
          {showName ? <span>Giselle Mingue</span> : null}
        </div>
        <div className="mobile-menu bg-[#d4dbfa] block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-[#485073] text-[#485073] hover:scale-105"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-[#485073] text-[#485073] hover:scale-105"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`group flex items-center space-x-2 hover:scale-105 ${
                  activeLink === link.path
                    ? "text-[#BA68C8] font-bold"
                    : "text-[#485073]"
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {React.cloneElement(link.icon, {
                  className: `h-5 w-5 ${
                    activeLink === link.path
                      ? "text-[#BA68C8]"
                      : "text-[#485073] group-hover:text-[#343660]"
                  }`,
                })}
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <div className="mobile-menu bg-[#d4dbfa] bg-opacity-90 absolute top-15 left-0 w-full z-20">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`group flex items-center space-x-2 ${
                  activeLink === link.path
                    ? "text-[#BA68C8] font-bold"
                    : "text-[#485073]"
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {React.cloneElement(link.icon, {
                  className: `h-5 w-5 ${
                    activeLink === link.path
                      ? "text-[#BA68C8]"
                      : "text-[#485073] group-hover:text-[#343660]"
                  }`,
                })}
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

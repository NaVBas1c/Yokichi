import React, { useEffect, useState } from "react";
import { PiPawPrintFill, PiLinkSimpleBold } from "react-icons/pi";
import { FaPaintBrush } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { HiMenu } from "react-icons/hi";
import { BiSolidDownArrow } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const navItems = [
    { label: "Home", path: "/", icon: <PiPawPrintFill className="w-5 h-5" /> },
    {
      label: "Works and Commision",
      path: "/Comm",
      icon: <FaPaintBrush className="w-5 h-5" />,
    },
    {
      label: "T.O.S",
      path: "/tos",
      icon: <TbFileDescription className="w-5 h-5" />,
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <PiLinkSimpleBold className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to check if link is active
  const isActive = (path) => {
    return currentPath === path;
  };

  // Get active link classes
  const getLinkClasses = (path, isMobile = false) => {
    const base = `
  ${isMobile ? "flex" : "inline-flex"}
  items-center gap-1
  px-4 py-2 rounded-xl
  transition-all duration-300
`;

    const active = isActive(path)
      ? "bg-[#2C56A0] text-white font-bold shadow-md text-md"
      : "text-[#DBECF9] hover:bg-[#1E3E78] hover:text-white";

    return `${base} ${active}`;
  };

  return (
    <header className="w-full bg-[#1D254D]">
      <div className="max-w-full mx-auto flex items-center justify-between px-4 py-4 text-md">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3 font-medium text-md">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`${getLinkClasses(item.path)} flex items-center gap-2`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#edf1ff] hover:text-[#2C56A0] focus:outline-none transition-all duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <BiSolidDownArrow className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden bg-[#1D254D] border-t border-[#2C56A0] transition-all duration-300 ease-in-out ${isMenuOpen
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="flex flex-col space-y-3 px-4 py-6 font-medium text-lg">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={toggleMenu}
              className={`${getLinkClasses(
                item.path,
                true
              )} flex items-center gap-3`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default Header;

"use client";
import { FC } from "react";
import { useState } from "react";
import Navlink from "./Navlink";
import MenuOverlay from "./MenuOverlay";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

interface navLinkProps {
  title: string;
  path: string;
}

const navLinks: navLinkProps[] = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#ffffff] bg-opacity-100">
      <div className="flex items-center justify-evenly p-8">
        <h1 className="flex text-4xl">Milena</h1>
        <div className="mobile-menu block sm:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-pink-600 hover:text-pink-300"
            >
              <IoMdMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-pink-600 hover:text-pink-300"
            >
              <IoMdClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden sm:block sm:w-auto" id="navbar">
          <ul className="flex p-4 sm:p-0 sm:flex-row sm:space-x-8 ">
            {navLinks.map((link, index: number) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;

"use client";
import { FC } from "react";
import { useState } from "react";
import Navlink from "./Navlink";
import MenuOverlay from "./MenuOverlay";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import MilenaLogo from "../assets/MilenaLogo.mp4";

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
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#ffffff] bg-opacity-100 shadow-md">
      <div className="flex items-center justify-evenly p-4">
        <div className="relative h-32 w-40">
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-full"
            src={MilenaLogo}
            autoPlay
            loop
            muted
          />
        </div>
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
        <div className="menu hidden sm:flex sm:w-auto" id="navbar">
          <ul className="flex space-x-8">
            {navLinks.map((link, index: number) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;

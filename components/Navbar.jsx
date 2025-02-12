import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div> */}
      <nav className="w-full flex fixed px-5 lg:px-8 xl:px-[8%] py-4 justify-between bg-white items-center z-9999">
        <a href="#top" className="flex items-end gap-2">
          <h1 className="text-2xl">Prasanna</h1>
          <div className="w-2 h-2 mb-3 bg-red-500 rounded-full"></div>
        </a>

        <ul className=" gap-6 hidden shadow-md bg-white rounded-full  bg-opacity-50 md:flex px-12 py-3">
          <li>
            <a className="font-Bri cursor-pointer" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Bri" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Bri" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Bri" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Bri" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex gap-3 items-center">
          <button>
            {" "}
            <Image src={assets.moon_icon} alt="image" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-10 py-2 border border-gray-400 rounded-full"
          >
            Contact
            <Image
              className="w-3 h-3"
              alt="image"
              src={assets.arrow_icon}
            ></Image>
          </a>
          <button onClick={openMenu} className="block md:hidden ml-2">
            {" "}
            <Image src={assets.menu_black} alt="image" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className=" fixed text-xl top-0 -right-64 gap-6 bg-red-300 h-screen flex flex-col shadow-md w-64 transition duration-500 md:hidden px-12 py-12"
        >
          <div
            onClick={closeMenu}
            className="cursor-pointer absolute top-7 right-7 w-7 h-7 p-2 rounded-full bg-black/10"
          >
            <Image src={assets.close_black} alt="image" />
          </div>
          <li>
            <a
              onClick={closeMenu}
              className=" font-Bricolage_Grotesque"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-Bricolage_Grotesque"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-Bricolage_Grotesque"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-Bricolage_Grotesque"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-Bricolage_Grotesque"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

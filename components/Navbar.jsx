import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex fixed px-5 lg:px-8 xl:px-[8%] py-4 justify-between items-center z-50">
      <a href="#top" className="flex items-end gap-2">
        <h1 className="text-2xl">Prasanna</h1>
        <div className="w-2 h-2 mb-3 bg-red-500 rounded-full"></div>
      </a>

      <ul className=" gap-6 hidden md:flex px-12 py-3">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="flex">
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 px-10 py-2 border border-gray-400 rounded-full"
        >
          Contact
          <Image className="w-3 h-3" alt="" src={assets.arrow_icon}></Image>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

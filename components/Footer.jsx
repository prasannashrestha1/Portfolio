import React from "react";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <section
      id="services"
      className="w-full text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px]  gap-6 md:gap-8 justify-center items-center z-50 scroll-mt-20"
    >
      <div className="w-full flex flex-col gap-2 items-center ">
        <a href="#top" className="flex items-end gap-2">
          <h1 className="text-3xl text-center">Prasanna</h1>
          <div className="w-2 h-2 mb-3 bg-red-500 rounded-full"></div>
        </a>
        <div className="flex group items-center justify-center gap-2 cursor-pointer">
          <IoMailOutline className="w-5 h-5 group-hover:text-blue-500" />
          <p className="hover:underline group-hover:text-blue-500">
            shresthaprasanna230@gmail.com
          </p>
        </div>
      </div>
      <div className="flex pt-5 border-t w-full items-center justify-between gap-4">
        <p className="text-sm">
          © 2025 Prasanna Shrestha. All rights reserved.
        </p>
        <div className="flex  gap-4 justify-between">
          <p className="hover:text-blue-700 cursor-pointer text-sm">
            Terms of Service
          </p>
          <p className="hover:text-blue-700 cursor-pointer text-sm">
            Privacy Policy
          </p>
          <p className="hover:text-blue-700 cursor-pointer text-sm">
            Connect with me
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

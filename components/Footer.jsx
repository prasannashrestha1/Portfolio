import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px]  gap-6 md:gap-8 justify-center items-center z-50 scroll-mt-20"
    >
      <motion.div className="w-full flex flex-col gap-2 items-center ">
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
      </motion.div>
      <div className="flex flex-col pt-5 border-t w-full items-end justify-between gap-4">
        <div className="w-full flex items-center justify-between gap-4">
          {" "}
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
        <div className="w-full flex gap-4 justify-end">
          <a
            target="_blank"
            href="https://www.facebook.com/prasanna.shrestha.988"
            className="icons group hover:bg-blue-500 hover:border-blue-500 "
          >
            <FaFacebookF className=" group-hover:text-white" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/prasanna__shrestha1/"
            className="icons group hover:bg-red-500 hover:border-red-500 "
          >
            <FaInstagram className=" group-hover:text-white" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/prasanna-shrestha-7673261a0/"
            className="icons group hover:bg-blue-500 hover:border-blue-500 "
          >
            <FaLinkedin className=" group-hover:text-white" />
          </a>
          <a
            target="_blank"
            href="https://github.com/prasannashrestha1"
            className="icons group hover:bg-black hover:border-black dark:hover:border-white"
          >
            <FaGithub className=" group-hover:text-white" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;

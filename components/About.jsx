import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="snap-start w-full min-h-screen text-center dark:bg-[#1B1B1B] flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px] sm:py-[40px] md:py-[80px] gap-8 md:gap-12  items-center  scroll-mt-20"
    >
      <div className="flex w-full flex-col gap-4">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl"
        >
          Introduction
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-3xl lg:text-4xl "
        >
          About Me
        </motion.h3>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col w-full lg:flex-row gap-6 md:gap-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full  flex justify-center items-center lg:hidden "
        >
          <Image
            src={assets.Prasanna_cover}
            className="min-w-0 max-w-[400px] object-cover rounded-xl shadow-xl lg:border-2 border-slate-500"
            alt=""
          />
        </motion.div>
        <Image
          src={assets.Prasanna_cover}
          alt=""
          className="min-w-0 max-w-[400px] object-cover lg:rounded-full hidden lg:block shadow-xl lg:border-2 border-slate-500"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col gap-6 w-full md:gap-8 lg:max-w-[800px]"
        >
          <p>
            I am an experienced Bubble Developer with a year of expertise,
            including Bubble development and familiarity with other no-code
            platforms. Throughout my career, I have collaborated with
            prestigious organizations, contributing to their success and growth.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 gap-2 md:gap-0 sm:grid-cols-3 md:max-w-[740px]"
          >
            {infoList.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                key={index}
                className="card"
              >
                <Image
                  src={isDarkMode ? item.iconDark : item.icon}
                  alt=""
                  className="w-6"
                />
                <h4 className=" text-lg md:text-2xl">{item.title}</h4>
                <p className=" text-sm md:text-md">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex text-start flex-col gap-2">
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Tools i use
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="grid grid-cols-6 gap-2 w-fit"
            >
              {toolsData.map((item, index) => (
                <div
                  key={index}
                  className="border p-2 sm:p-3 hover:bg-lightHover dark:hover:bg-darkHover/80 hover:-translate-y-1 transition-all ease-in-out duration-300 shadow-lg rounded-lg w-fit h-fit border-slate-300"
                >
                  <Image src={item} alt="" className="w-[35px]" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;

import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section
      id="services"
      className="snap-start w-full min-h-screen text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px] sm:py-[40px] md:py-[80px] gap-8 md:gap-12 items-center justc z-50 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8 max-w-[800px]"
      >
        <div className="flex flex-col gap-4">
          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl"
          >
            What i offer
          </motion.h4>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className=" text-3xl lg:text-4xl "
          >
            My Services
          </motion.h2>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className=" text-md lg:text-lg "
        >
          I am an experienced Frontend Developer with expertise in design and
          development, specializing in Bubble, React, and other no-code
          platforms. I offer end-to-end solutions for building responsive and
          dynamic web applications.
        </motion.h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 max-w-7xl text-start"
      >
        {serviceData.map((item, index) => (
          <motion.a
            whileHover={{ scale: 1.01 }}
            href=""
            key={index}
            className="flex bg-blue-100/10 dark:bg-blue-700/10 flex-col m-2 border rounded-xl gap-3  p-6 md:p-8 text-slate-500 border-slate-400 shadow-lg hover:shadow-black dark:hover:shadow-white hover:bg-lightHover dark:hover:bg-darkHover/80 hover:-translate-y-1.5 transition-all ease-in-out duration-500 "
          >
            <Image src={item.icon} alt="" className="w-7 h-7" />
            <h4 className="text-lg md:text-xl dark:text-white text-black">
              {item.title}
            </h4>
            <p className="text-md md:text-[15px] leading-5 dark:text-slate-300">
              {item.description}
            </p>
            <p className="text-sm md:text-md dark:text-slate-400">Read more</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;

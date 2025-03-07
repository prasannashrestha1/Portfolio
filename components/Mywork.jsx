import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Mywork = ({ isDarkMode }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <section
      id="work"
      className="snap-start w-full min-h-screen dark:bg-[#1B1B1B] text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px] sm:py-[40px] md:py-[80px] gap-8 md:gap-12  items-center z-50 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8 max-w-[800px]"
      >
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl"
          >
            My Portfolio
          </motion.h3>
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className=" text-3xl lg:text-4xl "
          >
            My latest work
          </motion.h3>
        </div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className=" text-md lg:text-lg "
        >
          Welcome to my web development portfolio! Explore a collection of
          projects we built showcasing my expertise in front-end development.
        </motion.h3>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid w-full grid-cols-1 md:grid-cols-2  xl:grid-cols-4 max-w-7xl "
      >
        {workData.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            key={index}
            style={{
              backgroundImage: `url(${item.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col group m-2 border rounded-xl gap-3 text-start p-6 md:p-8 text-slate-500 border-slate-400 shadow-lg hover:shadow-2xl"
          >
            <div
              onClick={() => openInNewTab(`${item.link}`)}
              className={`flex grow justify-between mt-28 ${
                item.link && "cursor-pointer"
              }  bg-white p-4 gap-2 rounded-xl group-hover:-translate-x-1.5 transition-all ease-in-out duration-500`}
            >
              <div>
                <h4 className="text-md leading-[10px] md:text-lg  text-black">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm md:text-[15px] leading-5">
                  {item.description}
                </p>
              </div>
              <div className="rounded-full p-2 md:p-3 h-fit border shadow-[2px_2px_0_#000] transition group-hover:bg-blue-400">
                <Image
                  alt=""
                  src={assets.send_icon}
                  className="w-3 h-3 md:w-4 md:h-4"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <button className="px-8 py-2 rounded-full dark:text-white/80 text-gray-700 border border-slate-500 hover:bg-lightHover dark:hover:bg-darkHover/60 hover:scale-105 duration-500">
          Show More
        </button>
      </motion.div>
    </section>
  );
};

export default Mywork;

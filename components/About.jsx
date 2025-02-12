import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px] sm:py-[40px] md:py-[80px] gap-8 md:gap-12  items-center z-50 scroll-mt-20"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl">Introduction</h3>
        <h3 className=" text-3xl lg:text-4xl ">About Me</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="w-full  lg:hidden flex items-center justify-center">
          <Image
            src={assets.Prasanna_cover}
            className="max-w-[400px] object-cover rounded-xl shadow-xl lg:border-2 border-slate-500"
            alt=""
          />
        </div>
        <Image
          src={assets.Prasanna_cover}
          alt=""
          className="max-w-[400px] object-cover lg:rounded-full hidden lg:block shadow-xl lg:border-2 border-slate-500"
        />
        <div className="flex flex-col gap-6 lg:w-full md:gap-8 max-w-[800px]">
          <p>
            I am an experienced Bubble Developer with a year of expertise,
            including Bubble development and familiarity with other no-code
            platforms. Throughout my career, I have collaborated with
            prestigious organizations, contributing to their success and growth.
          </p>
          <div className="grid grid-cols-1 gap-2 md:gap-0 sm:grid-cols-3 max-w-[740px]">
            {infoList.map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-8 m-2 border shadow-sm hover:shadow-black hover:bg-lightHover hover:-translate-y-1.5 transition-all ease-in-out duration-500 drop-shadow-xl text-start border-slate-300 rounded-2xl flex flex-col gap-4 h-full cursor-pointer"
              >
                <Image src={item.icon} alt="" className="w-6" />
                <h4 className=" text-lg md:text-2xl">{item.title}</h4>
                <p className=" text-sm md:text-md">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex text-start flex-col gap-2">
            <p>Tools i use</p>
            <div className="grid grid-cols-6 gap-2 w-fit">
              {toolsData.map((item, index) => (
                <div
                  key={index}
                  className="border p-3  hover:bg-lightHover hover:-translate-y-1 transition-all ease-in-out duration-300 shadow-lg rounded-lg w-fit h-fit border-slate-300"
                >
                  <Image src={item} className="w-[35px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

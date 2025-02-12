import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px] sm:py-[40px] md:py-[80px] gap-8 md:gap-12  items-center z-50 scroll-mt-20"
    >
      <div className="flex flex-col gap-8 max-w-[800px]">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">What i offer</h3>
          <h3 className=" text-3xl lg:text-4xl ">My Services</h3>
        </div>

        <h3 className=" text-md lg:text-lg ">
          I am an experienced Frontend Developer with expertise in design and
          development, specializing in Bubble, React, and other no-code
          platforms. I offer end-to-end solutions for building responsive and
          dynamic web applications.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 max-w-7xl ">
        {serviceData.map((item, index) => (
          <a
            href=""
            key={index}
            className="flex flex-col m-2 border rounded-xl gap-3 text-start p-6 md:p-8 text-slate-500 border-slate-400 shadow-lg hover:shadow-black hover:bg-lightHover hover:-translate-y-1.5 transition-all ease-in-out duration-500 "
          >
            <Image src={item.icon} alt="" className="w-7 h-7" />
            <h4 className="text-lg md:text-xl text-black">{item.title}</h4>
            <p className="text-md md:text-[15px] leading-5">
              {item.description}
            </p>
            <p className="text-sm md:text-md">Read more</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;

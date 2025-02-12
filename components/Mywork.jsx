import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Mywork = () => {
  return (
    <section
      id="work"
      className="w-full  text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px] sm:py-[40px] md:py-[80px] gap-8 md:gap-12  items-center z-50 scroll-mt-20"
    >
      <div className="flex flex-col gap-8 max-w-[800px]">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">My Portfolio</h3>
          <h3 className=" text-3xl lg:text-4xl ">My latest work</h3>
        </div>

        <h3 className=" text-md lg:text-lg ">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development
        </h3>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2  xl:grid-cols-4 max-w-7xl ">
        {workData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col group m-2 border rounded-xl gap-3 text-start p-6 md:p-8 text-slate-500 border-slate-400 shadow-lg hover:shadow-2xl"
          >
            <div className="flex grow justify-between mt-28 bg-white p-4 rounded-xl group-hover:-translate-x-1.5 transition-all ease-in-out duration-500 ">
              <div>
                <h4 className="text-md leading-[10px] md:text-lg  text-black">
                  {item.title}
                </h4>
                <p className="text-sm md:text-[15px] leading-5">
                  {item.description}
                </p>
              </div>
              <div className="rounded-full p-3 h-fit border shadow-[2px_2px_0_#000] transition group-hover:bg-blue-400">
                <Image alt="" src={assets.send_icon} className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="px-8 py-2 rounded-full text-gray-700 border border-slate-500 hover:bg-lightHover hover:scale-105 duration-500">
          Show More
        </button>
      </div>
    </section>
  );
};

export default Mywork;

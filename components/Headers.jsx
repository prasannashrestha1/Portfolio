import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Headers = () => {
  return (
    <section className="w-full text-center flex flex-col h-screen px-5 lg:px-8 xl:px-[8%] py-4 gap-6 md:gap-7s justify-center items-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="border-4 border-red-400 rounded-full shadow-xl">
          <Image
            src={assets.prasanna}
            className="w-[250px] sm:w-[300px]"
            alt=""
          />
        </div>

        <div className="flex gap-2 items-center text-lg md:text-xl">
          <p>Hi! I'm Prasanna Shrestha</p>
          <Image src={assets.hand_icon} alt="" className="w-4 h-4" />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 max-w-[640px]">
        <h1 className=" text-4xl  lg:text-5xl">
          Bubble Developer & Aspiring Mern Stack Developer{" "}
        </h1>
        <h3 className="text-lg md:text-xl">
          Experienced in Bubble development for web apps, I’m seeking a
          frontend/backend intern role to expand my expertise and deepen my
          technical skills.
        </h3>
      </div>
      <div className="min-[475px]:flex-row flex-col max-[475px]:w-full flex gap-3">
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border hover:shadow-md hover:-translate-x-1.5 transition-all ease-in-out duration-500 border-white hover:bg-darkHover rounded-full bg-black text-white flex items-center justify-center gap-2"
        >
          {" "}
          Connect with me
          <Image src={assets.right_arrow_white} className="w-4 " alt="" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 hover:shadow-md py-3 border hover:translate-x-1.5 transition-all ease-in-out duration-500 border-black hover:bg-lightHover rounded-full bg-white text-black flex items-center justify-center gap-2"
        >
          {" "}
          My Resume
          <Image src={assets.download_icon} className="w-4 " alt="" />
        </a>
      </div>
    </section>
  );
};

export default Headers;

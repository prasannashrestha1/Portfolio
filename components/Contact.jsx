import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="work"
      className="w-full  text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px] sm:py-[40px] md:py-[80px] gap-8 md:gap-12  items-center z-50 scroll-mt-20"
    >
      <div className="flex flex-col gap-8 flex-1 max-w-[800px]">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">Connect with me</h3>
          <h3 className=" text-3xl lg:text-4xl ">Get in touch</h3>
        </div>

        <h3 className=" text-md lg:text-lg ">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </h3>
      </div>

      <div className="flex flex-col gap-8 max-w-[800px] w-full ">
        <div className="flex flex-1 gap-4">
          <input
            type="text"
            className="border-2 grow h-[48px] rounded-xl outline-none p-4 hover:border-blue-400 focus:border-blue-400"
            placeholder="Enter your name"
          />
          <input
            className="border-2 grow h-[48px] rounded-xl outline-none p-4 hover:border-blue-400 focus:border-blue-400"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <textarea
          rows={10}
          className="border-2  rounded-xl outline-none p-4 hover:border-blue-400 focus:border-blue-400"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div>
        <button className="px-8 py-2 rounded-full flex items-center gap-4 text-white border bg-black border-slate-500 hover:bg-darkHover hover:translate-x-1 duration-500">
          Submit Now
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Contact;

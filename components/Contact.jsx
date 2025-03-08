import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import Footer from "./Footer";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("Submit Now");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "43a17180-4731-4d07-aee1-5112386f23da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Email Submitted Successfully");
      setResult("Submit Now");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Submit Now");
      toast.error("Something went wrong. Try again later");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="snap-start w-full min-h-screen text-center flex flex-col px-5 lg:px-8 xl:px-[8%] py-[20px] sm:py-[40px] md:py-[80px] gap-8 md:gap-12 items-center bg-[url(/footer-bg-color.png)] dark:bg-none bg-no-repeat bg-center z-10 scroll-mt-20"
    >
      <div className="flex flex-col gap-8 flex-1 max-w-[800px]">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl"
          >
            Connect with me
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" text-3xl lg:text-4xl "
          >
            Get in touch
          </motion.h3>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className=" text-md lg:text-lg "
        >
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </motion.h3>
      </div>

      <motion.form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 max-w-[800px] w-full items-center"
      >
        <div className="flex w-full flex-col sm:flex-row flex-1 gap-4">
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            type="text"
            className="border-2 grow h-[48px] dark:bg-darkHover/30 dark:border-white/20 rounded-xl outline-none p-4 hover:border-blue-400 focus:border-blue-400"
            placeholder="Enter your name"
            name="name"
            required
          />
          <motion.input
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="border-2 grow  h-[48px] dark:bg-darkHover/30 dark:border-white/20 rounded-xl outline-none p-4 hover:border-blue-400 focus:border-blue-400"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          rows={10}
          className="border-2 w-full rounded-xl dark:bg-darkHover/30 dark:border-white/20 outline-none p-4 hover:border-blue-400 focus:border-blue-400"
          placeholder="Enter your message"
          name="message"
          required
        ></motion.textarea>
        <button
          type="submit"
          className="px-8 py-2 w-fit rounded-full flex items-center gap-4 text-white border bg-black border-slate-500 hover:bg-darkHover hover:translate-x-1 duration-500"
        >
          {result}
          <FaArrowRight />
        </button>
      </motion.form>
      <Footer isDarkMode={isDarkMode} />
    </motion.section>
  );
};

export default Contact;

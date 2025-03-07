"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import Mywork from "@/components/Mywork";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export const runtime = "edge";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col w-screen">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className=" max-h-[90vh] snap-y overflow-y-auto grow z-3">
        <Headers isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Mywork isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <ToastContainer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

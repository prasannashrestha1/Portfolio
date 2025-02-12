"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import Mywork from "@/components/Mywork";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="w-full mx-auto  gap-10">
      <Navbar />
      <Headers />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

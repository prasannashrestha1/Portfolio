"use client";
import About from "@/components/About";
import Headers from "@/components/Headers";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full mx-auto ">
      <Navbar />
      <Headers />
      <About />
    </div>
  );
}

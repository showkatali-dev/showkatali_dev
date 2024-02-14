"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "@/components/common/Navigation";
import ReactParticles from "@/components/common/ReactParticles";
import { ToastContainer } from "react-toastify";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navigation />
        {children}
        <ReactParticles />
        <ToastContainer />
      </div>
    </>
  );
};

export default CustomLayout;

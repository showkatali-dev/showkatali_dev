"use client";

import { useMediaQuery } from "react-responsive";
import { ScaleLoader } from "react-spinners";

const Spinner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <div
      className={`w-full flex justify-center items-center ${
        isMobile ? "h-[90vh]" : "h-screen"
      }`}
    >
      <ScaleLoader margin={5} width={6} height={45} color="#fb5343" />
    </div>
  );
};

export default Spinner;

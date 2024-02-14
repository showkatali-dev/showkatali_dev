"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TitleTyper = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <>MERN stack Web Developer</>;
  return (
    <TypeAnimation
      sequence={[
        "MERN stack Web Developer",
        2000,
        "Specialized in React.js",
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default TitleTyper;

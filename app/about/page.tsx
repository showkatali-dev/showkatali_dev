import PersonalInfo from "@/components/About/PersonalInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about my personal details, skills, experiences and passion for web development.",
};

const About = () => {
  return (
    <div className="container mx-auto px-8 py-12 overflow-hidden relative">
      <h1
        className="font-bold text-4xl md:text-5xl text-center text-white mb-8 md:mb-12"
        data-aos="zoom-in"
      >
        About <span className="text-gradient-primary">Me</span>
      </h1>
      <PersonalInfo />
    </div>
  );
};

export default About;

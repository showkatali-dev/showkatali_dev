"use client";

import { FaEye, FaGithub } from "react-icons/fa";
import { Project } from "@/types/Project.type";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  const { name, image, description, technologies, github, live } = project;

  return (
    <div
      className="card rounded-lg shadow-md shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 overflow-hidden bg-base-100/50 group"
      data-aos="fade-up"
    >
      <div className="relative w-full h-60 overflow-hidden">
        <div
          className={`h-max transition-transform duration-700 hover:duration-[3000ms] ease-linear transform translate-y-0 group-hover:-translate-y-[calc(100%-15rem)]`}
        >
          <Image
            src={image}
            width={320}
            height={600}
            alt={name}
            className="object-cover object-top w-full"
          />
        </div>
      </div>
      <div className="text-center p-5 relative border-t border-white/10">
        <h2 className="text-gradient-primary font-bold text-2xl mx-auto">
          {name}
        </h2>
        <p>{description}</p>
        <div
          className={`absolute inset-0 bg-base-300 transition duration-500 p-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100`}
        >
          <p className="mb-2 text-sm">
            <span className="font-semibold text-secondary">Technologies:</span>{" "}
            {technologies}
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href={github}
              target="blank"
              className="btn btn-primary btn-outline gap-1 btn-sm"
            >
              <FaGithub />
              Github
            </a>
            <a
              href={live}
              target="blank"
              className="btn btn-primary gap-1 btn-sm"
            >
              <FaEye />
              Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

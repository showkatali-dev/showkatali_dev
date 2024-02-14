"use client";

import CountUp from "react-countup";
import { FaDownload } from "react-icons/fa";
import InitialDataLoader from "../common/InitialDataLoader";

const PersonalInfo = () => {
  return (
    <div className="mb-12 lg:mb-0">
      <div
        className="px-4 py-1 mx-auto mb-8 rounded-md w-fit bg-white/5"
        data-aos="zoom-in"
        data-aos-delay={300}
      >
        <span className="text-lg font-medium text-gradient-primary">
          Personal Infos
        </span>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div data-aos="fade-right">
          <div className="grid grid-cols-2 gap-6 mb-10 font-medium">
            <div className="space-y-6">
              <p className="flex flex-wrap items-center gap-2">
                First Name:
                <span className="text-secondary">Showkat</span>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                Age:
                <span className="text-secondary">23 Years</span>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                Phone:
                <span className="text-secondary">+8801749424840</span>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                Address:
                <span className="text-secondary">Dinajpur, Bangladesh</span>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                Language:
                <span className="text-secondary">Bangla, English</span>
              </p>
            </div>
            <div className="space-y-6">
              <p className="flex flex-wrap items-center gap-2">
                Last Name:
                <span className="text-secondary">Ali</span>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                Nationality:
                <span className="text-secondary">Bangladeshi</span>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                Email:
                <a
                  href="mailto:showkatali.dev@gmail.com"
                  target="_blank"
                  className="text-green-400 hover:underline"
                  rel="noreferrer"
                >
                  showkatali.dev@gmail.com
                </a>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                LinkedIn:
                <a
                  href="https://www.linkedin.com/in/md-showkat-ali"
                  target="_blank"
                  className="text-green-400 hover:underline"
                  rel="noreferrer"
                >
                  Showkat Ali
                </a>
              </p>
              <p className="flex flex-wrap items-center gap-2">
                Github:
                <a
                  href="https://github.com/showkatali-dev"
                  target="_blank"
                  className="text-green-400 hover:underline"
                  rel="noreferrer"
                >
                  Showkat Ali
                </a>
              </p>
            </div>
          </div>
          <a
            href="/Resume of Showkat Ali.pdf"
            target="_blank"
            rel="noreferrer"
            download={"Resume of Showkat Ali"}
            className="my-btn"
          >
            Download Resume{" "}
            <span>
              <FaDownload />
            </span>
          </a>
        </div>
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="p-6 border-2 border-white/10 rounded-xl h-fit bg-base-100/50">
            <h3 className="mb-2 text-6xl font-bold text-gradient-primary">
              <InitialDataLoader initialValue={30}>
                <CountUp start={0} duration={5} end={30} />
              </InitialDataLoader>
              +
            </h3>
            <p className="flex uppercase text-secondary">
              <span className="block w-6 mt-4 mr-4 border-t-2 border-white/50" />
              Completed <br /> Projects
            </p>
          </div>
          <div className="p-6 border-2 border-white/10 rounded-xl h-fit bg-base-100/50">
            <h3 className="mb-2 text-6xl font-bold text-gradient-primary">
              <InitialDataLoader initialValue={150}>
                <CountUp start={0} duration={5} end={150} />
              </InitialDataLoader>
              +
            </h3>
            <p className="flex uppercase text-secondary">
              <span className="block w-6 mt-4 mr-4 border-t-2 border-white/50" />
              Problem <br /> Solved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

import { FaDownload } from "react-icons/fa";
import "./DownloadResume.css";

const DownloadResume = () => {
  return (
    <div className="absolute z-20 right-8 lg:right-16 -top-20">
      <a
        href="/Resume of Showkat Ali.pdf"
        target="_blank"
        rel="noreferrer"
        download={"Resume of Showkat Ali"}
        className="button hover:bg-base-100/50"
        data-aos="zoom-out"
      >
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
        <span className="line-4"></span>
        <span className="line-5"></span>
        <span className="line-6"></span>
        <p className="m-2 font-extrabold text-gradient-primary active:scale-95">
          Download Resume{" "}
          <FaDownload className="inline text-xl text-primary animate-bounce" />
        </p>
      </a>
    </div>
  );
};

export default DownloadResume;

import { FaArrowRight } from "react-icons/fa";
import DownloadResume from "@/components/DownloadResume/DownloadResume";
import Image from "next/image";
import Link from "next/link";
import TitleTyper from "@/components/TitleTyper";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-3 place-content-center py-20 pb-24 md:pb-20 gap-14 px-8">
      <DownloadResume />
      <div
        className="z-10 w-full max-w-sm aspect-[1/1.18] my-auto rounded-3xl order-2 lg:order-1 relative img-block"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <Image
          src="/assets/showkat_img_nyiomy.png"
          width={384}
          height={453}
          alt="Showkat Ali"
          className="w-full h-full object-cover object-top bg-base-100 rounded-3xl"
        />
      </div>
      <div
        className="lg:col-span-2 flex flex-col justify-center max-w-2xl order-1 lg:order-2"
        data-aos="fade-left"
      >
        <h4 className="text-xl lg:text-2xl mb-2 md:mb-3 font-bold">
          Hi, I&#39;m
        </h4>
        <h1 className="font-bold max-[400px]:text-4xl text-5xl lg:text-6xl uppercase text-gradient-primary mb-3 md:mb-4">
          Showkat Ali
        </h1>
        <h1 className="font-bold max-[400px]:text-2xl text-3xl lg:text-4xl">
          <TitleTyper />
        </h1>
        <p className="my-5 md:my-8 lg:leading-[35px] font-medium">
          Self-taught programmer with proficiency in MERN stack, solid
          understanding of JavaScript, HTML and CSS. Committed to continuous
          learning and staying updated with industry trends. Skilled in creating
          responsive user interfaces and building RESTful APIs.
        </p>
        <Link href="/about" className="my-btn">
          More About Me
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </div>
      <div className="bg-gradient-primary absolute top-0 right-0 left-0 w-1/5 h-full -rotate-12 scale-150 hidden lg:block z-0" />
    </div>
  );
};

export default Home;

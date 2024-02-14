"use client";

import { BsFillChatFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Home",
    to: "/",
    icon: <AiFillHome />,
    transform: "translate-x-0",
  },
  {
    name: "About",
    to: "/about",
    icon: <BsFillPersonFill />,
    transform: "translate-x-[4.5rem]",
  },
  {
    name: "Skills",
    to: "/skills",
    icon: <GiSkills />,
    transform: "translate-x-[9rem]",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    icon: <BsBriefcaseFill />,
    transform: "translate-x-[13.5rem]",
  },
  {
    name: "Contact",
    to: "/contact",
    icon: <BsFillChatFill />,
    transform: "translate-x-[18rem]",
  },
];

const Navigation = () => {
  const pathname = usePathname() || "/";

  return (
    <>
      {/* for larger device */}
      <div className="hidden fixed right-4 top-0 bottom-0 h-screen md:flex flex-col items-end justify-center gap-6 z-50">
        {menus.map((menu, index) => (
          <Link
            key={index}
            href={menu.to}
            className={`btn btn-neutral px-auto w-12 h-12 flex-nowrap overflow-hidden hover:w-full rounded-full nav-btn transition-all duration-500 border-transparent hover:border-transparent ${
              menu.to === pathname ? "active" : ""
            }`}
            style={{ transitionProperty: "width" }}
          >
            {menu.icon}
            <span className="ml-2 text-base normal-case text hidden">
              {menu.name}
            </span>
          </Link>
        ))}
      </div>

      {/* for small device */}
      <div className="md:hidden grid place-content-center fixed w-full bottom-0 bg-[#232323] z-50">
        <div className="flex px-4 pt-4 gap-4">
          <span
            className={`w-14 h-14 rounded-full bg-gradient-primary absolute -translate-y-12 border-4 border-base-100 duration-500 ${
              menus.find((menu) => menu.to === pathname)?.transform
            }`}
          ></span>
          {menus.map((menu, i) => (
            <Link
              href={menu.to}
              className="w-14 flex flex-col items-center hover:cursor-pointer"
              key={i}
            >
              <span
                className={`text-xl flex justify-center items-center duration-500 ${
                  menu.to === pathname
                    ? "-translate-y-[1.9rem] text-white"
                    : "translate-y-0"
                }`}
              >
                {menu.icon}
              </span>
              <span
                className={`${
                  menu.to === pathname
                    ? "-translate-y-2 opacity-100"
                    : "translate-y-8 opacity-0"
                } duration-700 font-medium text-sm`}
              >
                {menu.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;

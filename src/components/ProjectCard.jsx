import React from "react";
import { NetflixClone } from "../assets/index";
import { styles } from "../styles";
const ProjectCard = () => {
  return (
    <div
      className={` md:w-[655px] lg:w-[80vw] p-6 lg:p-10 rounded-[10px] bg-secondaryBlue mx-auto
      lg:flex lg:items-start lg:gap-14  hover:scale-110 transition-all ease-in-out cursor-pointer`}
    >
      <div className="w-full  rounded-[5px]">
        <img
          src={NetflixClone}
          alt="NetflixClone"
          className="w-[322px] lg:h-[200px] lg:w-[600px] object-cover md:w-full rounded-[5px] hover:scale-110 transition-all ease-in-out"
        />
      </div>
      <div className="">
        <h1 className="text-medium lg:text-2xl font-bold font-GeneralSans py-4 lg:py-0">
          Portfolio website
        </h1>
        <p className="text-small lg:text-base lg:mt-3">
          A sleek and dynamic portfolio website showcasing my skills and side
          projects. Developed with ReactJS and styled with TailwindCSS, it
          offers a visually appealing and informative platform to highlight my
          expertise and accomplishments.
        </p>
        <div
          className={`${styles.flexBetweenCenter} lg:justify-start lg:gap-6 mt-5 lg:mt-10 `}
        >
          <a
            href="/"
            className="  px-[22px] py-[6px] bg-primaryBlue text-sm text-center rounded-lg"
          >
            Live Demo
          </a>
          <a
            href="/"
            className="  px-[22px] py-[6px] bg-dimWhite text-black text-sm text-center rounded-lg"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { styles } from "../styles";
const ProjectCard = ({ img, title, desc, demoLink, sourceCode }) => {
  return (
    <div
      className={` md:w-[655px] lg:w-[80vw] max-w-[1096px] p-6 lg:p-10 rounded-[10px] bg-secondaryBlue mx-auto
      lg:flex lg:items-start  lg:gap-14  hover:scale-110 transition-all ease-in-out cursor-pointer`}
    >
      <div className="lg:w-1/2 w-full grow-0 shrink-0  rounded-[5px]">
        <img
          src={img}
          alt="NetflixClone"
          className="w-[322px] lg:h-[200px] lg:w-[600px] min-w-[322px]  object-cover md:w-full rounded-[5px] md:hover:scale-110 transition-all ease-in-out"
        />
      </div>
      <div className="">
        <h1 className="text-medium lg:text-2xl font-bold font-GeneralSans py-4 lg:py-0">
          {title}
        </h1>
        <p
          className={`${styles.regularText}  lg:mt-3 max-w-[322px] md:max-w-none`}
        >
          {desc}
        </p>
        <div
          className={`${styles.flexBetweenCenter} lg:justify-start lg:gap-6 mt-5 lg:mt-10 `}
        >
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              className="  px-[22px] py-[6px] bg-primaryBlue text-sm text-center rounded-lg hover:bg-[#414273be]"
            >
              Live Demo
            </a>
          )}
          {sourceCode && (
            <a
              href={sourceCode}
              className="  px-[22px] py-[6px] bg-dimWhite text-black text-sm text-center rounded-lg hover:bg-[#bdbec150] hover:text-white"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

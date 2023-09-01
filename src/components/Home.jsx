import React from "react";
import { Instagram, Github, Linkedin } from "../assets/index";
import { styles } from "../styles";
import { Button } from "./index";

const Home = () => {
  return (
    <section className="w-[100%]  md:h-fit lg:h-[100vh] px-[30px] py-[64px] md:px-[72px] lg:px-[180px] ">
      {/* // =============================Gradient Background========================================= */}

      {/* <div
        className="pointer-events-none w-[200px] h-[200px]    rounded-full top-0 
       absolute left-[50%] -translate-x-[50%] -translate-y-[50%] bg-green-500 blur-[100px] z-0"
      ></div>
      <div
        className="pointer-events-none w-[400px] h-[400px]  rounded-full top-0 
       absolute left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primaryBlue blur-[200px] z-0"
      ></div> */}

      {/* =================================Main title=============================================== */}

      <div className="text-center z-10 flex flex-col gap-4 mt-32 items-center justify-between">
        <h1 className={`${styles.headingText} `}>
          Hi 👋 I am{" "}
          <span className={`text-primaryBlue font-[900]`}>
            Jelsinge Prajwal{" "}
          </span>
        </h1>

        <p className={`${styles.regularText}`}>
          Dedicated Computer Science Engineer who loves building stuff
        </p>
        <div>
          <Button
            classes={
              "bg-primaryBlue text-white text-small md:px-[34px]   w-[7.5rem] md:w-[180px] text-sm hover:scale-110  transition-all ease-in-out "
            }
            text={"View Resume"}
          />
          <Button
            classes={
              "ml-10 bg-dimWhite text-black text-small  md:px-[34px]  w-[7.5rem] md:w-[180px] text-sm hover:scale-110  transition-all ease-in-out"
            }
            text={"Contact Me"}
          />
        </div>
      </div>
      {/* ====================== Social Media Handle Button============================ */}
      <div className="mt-40 md:mt-0">
        <div
          className={`w-[150px] relative ml-[1.875rem] mt-[3rem] md:ml-[8rem] lg:ml-[16rem] md:mt-[2rem] lg:mt-[3rem]`}
        >
          <h1 className={`text-xs font-bold text-primaryBlue`}>
            Let's Connect
          </h1>
          <svg className="w-[100px] translate-x-[3rem]" viewBox="0 0 300 300">
            <path
              fill="#184BFF"
              d="M224.49 197.82c-25.8-11.64-51.65-23.18-77.4-34.92-13.9-6.34-32.02-15.07-39.07-29.66 4.38.79 8.82 1.3 13.26 1.55 12.26.69 25.01-2.38 29.18-15.31 3.41-10.56-.88-22.85-10.74-28.23-10.49-5.73-24.41-3.62-32.96 4.63-7 6.75-10.2 16.72-9.65 26.36-3.68-1.19-6.84-2.41-9.08-3.44-23.99-11.06-41.64-34.78-38.98-61.99.5-5.12-7.5-5.09-8 0-2.76 28.22 14.85 54.36 39.32 67.11 5.86 3.05 12.03 5.43 18.37 7.19 3.59 11.33 12.19 20.06 21.86 26.63 13.67 9.3 29.6 15.28 44.59 22.05l55.26 24.93c4.66 2.1 8.73-4.79 4.04-6.91zM105.06 121.5c-.46-10.87 5.27-22.11 16.42-24.86 9.83-2.43 20.82 2.51 22.04 13.32 2.24 19.81-20.27 18.95-38.15 14.61-.15-1-.26-2.02-.3-3.07z"
            ></path>
            <path
              fill="#184BFF"
              d="M258.06 206.7a805.18 805.18 0 01-47.48-48.18c-3.47-3.82-9.11 1.85-5.66 5.66a806.35 806.35 0 0042.69 43.65c-21.36 7.36-41.45 17.93-59.56 31.5-4.07 3.05-.09 10 4.04 6.91 19.42-14.55 41.03-25.67 64.21-32.86 2.77-.86 4.04-4.56 1.77-6.69z"
            ></path>
          </svg>
        </div>
        <div className={` mx-auto ${styles.flexCenter}  gap-5`}>
          <a href="/">
            <img
              src={Instagram}
              className="w-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all ease-in-out"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src={Linkedin}
              className="w-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all ease-in-out"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src={Github}
              className="w-6 opacity-80 hover:opacity-100 hover:scale-105 transition-all ease-in-out"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

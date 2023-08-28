import React from "react";
import { easeIn, motion } from "framer-motion";
import { HandShake, Instagram, Github, Linkedin } from "../assets/index";
import { styles } from "../styles";
import { Button } from "./index";
const Home = () => {
  return (
    <section className="w-[100%] h-[100vh] md:h-fit px-[30px] py-[64px] md:px-[72px] lg:px-[180px] ">
      {/* // =============================Gradient Background========================================= */}

      {/* <div
        className="pointer-events-none w-[200px] h-[200px]    rounded-full top-0 
       absolute left-[50%] -translate-x-[50%] -translate-y-[50%] bg-green-500 blur-[120px] z-0"
      ></div>
      <div
        className="pointer-events-none w-[400px] h-[400px]  rounded-full top-0 
       absolute left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primaryBlue blur-[300px] z-0"
      ></div> */}

      {/* =================================Main title=============================================== */}

      <div className="text-center z-10 flex flex-col gap-4 mt-40 items-center justify-between">
        <h1 className={`${styles.headingText}`}>
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
              "bg-primaryBlue text-white text-small md:px-[34px]   w-[7.5rem] md:w-[180px] text-sm "
            }
            text={"View Resume"}
          />
          <Button
            classes={
              "ml-10 bg-dimWhite text-black text-small  md:px-[34px]  w-[7.5rem] md:w-[180px] text-sm "
            }
            text={"Contact Me"}
          />
        </div>
      </div>
      {/* ====================== Social Media Handle Button============================ */}
      <div className={`mt-[100px] lg:mt-10 relative`}>
        <div className={`md:ml-[150px]`}>
          <h1 className={`text-xs text-primaryBlue font-bold`}>Lets Connect</h1>
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: easeIn }}
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`translate-x-[3.5rem]`}
          >
            <motion.path
              d="M66.5988 58.6866C58.9448 55.2334 51.2759 51.8099 43.6368 48.327C39.5131 46.4461 34.1375 43.8562 32.046 39.5279C33.3454 39.7622 34.6626 39.9135 35.9798 39.9877C39.6169 40.1924 43.3995 39.2816 44.6366 35.4457C45.6482 32.3129 44.3755 28.6669 41.4503 27.0708C38.3383 25.3709 34.2087 25.9969 31.6722 28.4444C29.5955 30.4469 28.6462 33.4047 28.8094 36.2645C27.7176 35.9115 26.7802 35.5496 26.1156 35.244C18.9986 31.9629 13.7624 24.9259 14.5516 16.8536C14.6999 15.3347 12.3266 15.3436 12.1782 16.8536C11.3594 25.2256 16.5837 32.9804 23.8432 36.7629C25.5816 37.6678 27.4121 38.3738 29.2929 38.896C30.358 42.2572 32.9093 44.8471 35.7781 46.7962C39.8335 49.5552 44.5594 51.3293 49.0064 53.3377L65.4002 60.7336C66.7827 61.3566 67.9902 59.3126 66.5988 58.6836V58.6866ZM31.1679 36.045C31.0314 32.8202 32.7313 29.4857 36.0391 28.6699C38.9554 27.949 42.2157 29.4145 42.5777 32.6215C43.2422 38.4984 36.5642 38.2433 31.2598 36.9558C31.2153 36.6591 31.1827 36.3565 31.1708 36.045H31.1679Z"
              fill="#184BFF"
            />
            <path
              d="M76.5581 61.321C71.6647 56.756 66.9653 51.9873 62.4724 47.0276C61.4429 45.8943 59.7697 47.5764 60.7932 48.7067C64.8498 53.1816 69.0744 57.5012 73.4579 61.6562C67.1211 63.8397 61.1611 66.9755 55.7885 71.0012C54.581 71.9061 55.7618 73.9679 56.987 73.0512C62.7483 68.7347 69.1592 65.4358 76.036 63.3027C76.8577 63.0476 77.2345 61.9499 76.5611 61.318L76.5581 61.321Z"
              fill="#184BFF"
            />
          </motion.svg>
        </div>
        <div
          className={`rounded-full bg-primaryBlue w-12 h-12 mt-10 lg:mt-0 ${styles.flexCenter} absolute left-1/2 -translate-x-1/2`}
        >
          <img src={HandShake} alt="" className="w-6" />
        </div>
      </div>
    </section>
  );
};

export default Home;

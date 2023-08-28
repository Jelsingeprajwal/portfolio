import React from "react";
import { ProfilePic } from "../assets/index";
import { styles } from "../styles";
const AboutMe = () => {
  return (
    <section className="w-[100%] h-[100vh] px-[30px] pt-[72px] md:px-[72px] lg:px-[180px] ">
      {/* Watermark */}
      <h1
        style={{
          textShadow:
            "1px 0 0 white,0 1px 0 white,-1px 0 0 white,0 -1px 0 white",
        }}
        className={`${styles.waterMark}`}
      >
        ABOUT ME
      </h1>
      {/* About me */}
      <div
        className={`mt-16 ${styles.flexVerticalCenter} md:flex-row md:items-start gap-16 `}
      >
        <div className="w-[200px] md:w-[300px] lg:w-[470px] h-full relative shrink-0">
          {/* <div className="  h-full absolute bg-white top-0 z-0"></div> */}
          <img
            className="w-[200px] md:w-[300px] lg:w-[400px] z-20"
            src={ProfilePic}
            alt=""
          />
        </div>
        <div
          className={`${styles.regularText} text-center md:text-start  opacity-70 mt-10`}
        >
          <h1>
            I'm a B.Tech trailblazer, riding the waves of Computer Science at
            MallaReddy College of Engineering and Technology. With an 8.01 GPA
            symphony, my academic journey paints a canvas of excellence.
          </h1>
          <br />
          <h1>
            Fueled by passion, I'm a knowledge connoisseur, dancing on the edge
            of innovation. From pixels to algorithms, I craft solutions beyond
            the horizon. My arsenal flaunts C/C++, Python, HTML/CSS, and
            JavaScript, while databases like MySQL, NodeJS, and MongoDB bow to
            my command.
          </h1>
          <br />
          <h1>
            I'm not just code; I'm vision in action. Equipped with a futuristic
            mindset, I'm on a quest to sync brilliance with technology. Ready to
            script my legacy in the realm of Computer Science, I seek the
            platform where my skills paint the masterpiece of tomorrow.{" "}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

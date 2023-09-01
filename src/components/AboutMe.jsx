import React, { useEffect, useRef } from "react";
import { ProfilePic } from "../assets/index";
import { styles } from "../styles";
import { easeIn, motion, spring, useAnimation, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const watermarkControl = useAnimation();
  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      // Fire the animation
      watermarkControl.start("visible");
    }
  }, [isInView]);
  return (
    <section className="w-[100%]  px-[30px] pt-[72px] md:px-[72px] lg:px-[180px] mt-10 ">
      {/* Watermark */}
      <div className="" ref={ref}>
        <motion.h1
          variants={{
            hidden: { translateX: "100vw", opacity: 0 },
            visible: { translateX: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={watermarkControl}
          transition={{ duration: 1.5, ease: easeIn }}
          style={{
            textShadow:
              "1px 0 0 #D9D9D9,0 1px 0 #D9D9D9,-1px 0 0 #D9D9D9,0 -1px 0 #D9D9D9 ",
          }}
          className={`${styles.waterMark} h-full`}
        >
          ABOUT ME
        </motion.h1>
      </div>
      {/* About me */}
      <div
        className={`mt-16 ${styles.flexVerticalCenter} md:flex-row md:items-start gap-16 `}
      >
        <div className="w-[12.5rem] md:w-[30vw] lg:w-[30vw] h-full relative shrink-0 ">
          <img
            className="w-[12.5rem] md:w-[30vw] lg:w-[30vw] z-20"
            src={ProfilePic}
            alt=""
          />
        </div>
        <div
          className={`${styles.regularText} text-center md:text-start  opacity-70 mt-10 `}
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

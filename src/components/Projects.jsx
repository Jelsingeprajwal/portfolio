import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { styles } from "../styles";
import { ProjectCard } from "./index";
const Projects = () => {
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
    <section className=" px-[30px] py-40">
      {/* Watermark */}
      <div className="" ref={ref}>
        <motion.h1
          variants={{
            hidden: { translateX: "-100vw", opacity: 0 },
            visible: { translateX: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={watermarkControl}
          transition={{ duration: 1.5, ease: easeIn }}
          style={{
            textShadow:
              "1px 0 0 #D9D9D9,0 1px 0 #D9D9D9,-1px 0 0 #D9D9D9,0 -1px 0 #D9D9D9 ",
          }}
          className={`${styles.waterMark}  text-center md:absolute md:left-0 whitespace-nowrap`}
        >
          MY PROJECTS
        </motion.h1>
      </div>
      <div className="pt-16 md:pt-20 lg:pt-40 w-fit mx-auto">
        <h1 className="text-center md:text-left ">
          Top projects I've developed so far:
        </h1>
        <div className="mt-10 grid gap-10 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { easeIn, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { styles } from "../styles";
import { Copy } from "../assets/index";
import { Form } from "./index";
const Contact = () => {
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
    <section className="w-[100%]   pb-28 px-[30px] md:px-[72px] lg:px-[180px]">
      <div ref={ref}>
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
          CONTACT ME
        </motion.h1>
      </div>
      <div className="pt-16 md:pt-20 lg:pt-40 flex flex-col gap-20 lg:flex-row lg:gap-30 relative">
        <div className={`flex flex-col gap-10`}>
          <h1
            className={`text-4xl md:text-5xl lg:text-[64px] font-bold text-primaryBlue`}
          >
            Have a Project?
          </h1>
          <div>
            <h1 className={`text-medium md:text-[32px] font-semibold `}>
              Get in touch
            </h1>
            <p className="text-small md:text-base mt-4 lg:w-[375px]">
              Ready to take the next step? Let's connect and weave our stories
              together. Fill out the contact form and let's embark on an
              extraordinary journey of collaboration and growth!
            </p>
          </div>
          <div>
            <h1>Contact me via email</h1>
            <div
              className={`h-[42px] border border-primaryBlue rounded-[5px] ${styles.flexBetweenCenter} px-4 py-2 mt-4 hover:bg-[#281E29] max-w-[375px]`}
            >
              <h1>jelsinge.prajwal@gmail.com</h1>
              <img src={Copy} alt="Copy" />
            </div>
          </div>
        </div>
        <div className="lg:max-w-[575px] lg:w-[475px]">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import { Button } from "./index";
import { Menu } from "../assets/index";
import { styles } from "../styles";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header
      className={`fixed top-0 right-0 left-0 px-[30px] py-[26px] 
      w-full h-[4rem] md:px-[72px] max-w-[1366px] mx-auto ${styles.flexBetweenCenter} backdrop-blur-[10px] z-50 shadow-sm shadow-[#ffffff1a]`}
    >
      <a href="/" className="text-medium">
        J. Prajwal
      </a>
      <div
        className={`hidden lg:flex ${styles.flexBetweenCenter} gap-[11.1rem]`}
      >
        <nav>
          <ul className={`${styles.flexBetweenCenter} gap-9 text-small `}>
            <li>
              <Link
                to="home"
                smooth={true}
                className="cursor-pointer hover:text-primaryBlue transition-colors ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                className="cursor-pointer hover:text-primaryBlue transition-colors ease-in-out"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                className="cursor-pointer hover:text-primaryBlue transition-colors ease-in-out"
              >
                Project
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="contactMe" smooth={true} offset={-150}>
          <Button
            classes={
              " h-[1.88rem] rounded-[.88rem] bg-dimWhite text-black text-small px-[34px]"
            }
            text={"Get in touch"}
          />
        </Link>
      </div>

      <button
        className="block lg:hidden"
        onClick={() =>
          document.getElementById("mobileNav").classList.toggle("hidden")
        }
      >
        <img src={Menu} alt="Menu Button" className="w-6" />
      </button>
      {/* Mobile Navbar */}
      <nav
        id="mobileNav"
        className={`h-[90vh] left-0 right-0 bg-primaryDark lg:hidden absolute
         top-[10vh] ${styles.flexVerticalCenter} justify-center gap-20 
         transition-opacity duration-100 ease-in-out hidden
         
         `}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              onClick={() =>
                document.getElementById("mobileNav").classList.toggle("hidden")
              }
              to="home"
              smooth={true}
              className={`cursor-pointer block  bg-secondaryBlue  transition-colors ease-in-out w-[340px] h-16 rounded-[10px] ${styles.flexCenter}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() =>
                document.getElementById("mobileNav").classList.toggle("hidden")
              }
              to="skills"
              smooth={true}
              className={`cursor-pointer block  bg-secondaryBlue  transition-colors ease-in-out w-[340px] h-16 rounded-[10px] ${styles.flexCenter}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() =>
                document.getElementById("mobileNav").classList.toggle("hidden")
              }
              to="projects"
              smooth={true}
              className={`cursor-pointer block  bg-secondaryBlue  transition-colors ease-in-out w-[340px] h-16 rounded-[10px] ${styles.flexCenter}`}
            >
              Project
            </Link>
          </li>
        </ul>
        <Link
          to="contactMe"
          smooth={true}
          offset={-150}
          onClick={() =>
            document.getElementById("mobileNav").classList.toggle("hidden")
          }
        >
          <Button
            classes={
              " h-[1.88rem] rounded-[.88rem] bg-dimWhite text-black text-small px-[54px]"
            }
            text={"Get in touch"}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

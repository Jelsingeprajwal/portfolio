import React from "react";
import { Button } from "./index";
import { Menu } from "../assets/index";
import { styles } from "../styles";
const Header = () => {
  return (
    <header
      className={`fixed top-0 right-0 left-0 px-[30px] py-[26px] 
      w-full h-[4rem] md:px-[72px] max-w-[1366px] mx-auto ${styles.flexBetweenCenter}  backdrop-blur-[10px] z-50`}
    >
      <div className="text-medium">J. Prajwal</div>
      <div
        className={`hidden lg:flex ${styles.flexBetweenCenter} gap-[11.1rem]`}
      >
        <nav>
          <ul className={`${styles.flexBetweenCenter} gap-9 text-small `}>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Project</span>
            </li>
            <li>
              <span>Skills</span>
            </li>
          </ul>
        </nav>
        <div>
          <Button
            classes={
              " h-[1.88rem] rounded-[.88rem] bg-dimWhite text-black text-small px-[34px]"
            }
            text={"Get in touch"}
          />
        </div>
      </div>
      <button className="block lg:hidden">
        <img src={Menu} alt="Menu Button" className="w-6" />
      </button>
    </header>
  );
};

export default Header;

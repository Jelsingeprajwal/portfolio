import React from "react";
import { styles } from "../styles";

const Button = ({ classes, text }) => {
  return (
    <button
      className={`${classes}  font-bold  h-[1.88rem]   rounded-[.88rem] `}
    >
      {text}
    </button>
  );
};

export default Button;

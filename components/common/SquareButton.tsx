"use client";

import { SquareButtonProps } from "@/types";

const SquareButton = ({
  title,
  containerStyles,
  handleClick,
  btnType, color
}: SquareButtonProps) => {

  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={containerStyles}
      onClick={handleClick}
      style={{backgroundColor: color}}
    >
      <span >{title}</span>
    </button>
  );
};

export default SquareButton;

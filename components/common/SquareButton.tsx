"use client";

import { SquareButtonProps } from "@/types";

const SquareButton = ({
  title,
  containerStyles,
  handleClick,
  btnType
}: SquareButtonProps) => {

  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={containerStyles}
      onClick={handleClick}
    >
      <span >{title}</span>
    </button>
  );
};

export default SquareButton;

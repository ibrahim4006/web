import { ChoiceBoxesProps } from "@/types";
import React from "react";

const ChoiceBoxes = ({
  points,
  direction,
  handleClick,
  isActive,
}: ChoiceBoxesProps) => {
  const className = `flex-col w-32 h-10 border  ${
    points
      ? isActive
        ? direction === "left"
          ? "rounded-l-lg active cursor-pointer"
          : "rounded-r-lg active cursor-pointer"
        : direction === "left"
        ? "rounded-l-lg cursor-pointer"
        : "rounded-r-lg cursor-pointer"
      : direction === "left"
      ? "rounded-l-lg opacity-[0.15]"
      : "rounded-r-lg opacity-[0.15]"
  } flex items-center justify-center`;

  return (
    <div className={className} onClick={handleClick}>
      {points && <p className="basis-1/2 text-sm ">x:{points.x.toFixed(2)}% {isActive}</p>}
      {points && <p className="basis-1/2 text-sm ">y:{points.y.toFixed(2)}%</p>}
    </div>
  );
};

export default ChoiceBoxes;

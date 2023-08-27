import { AnswerBoxesProps } from "@/types";
import React, { useState } from "react";

const AnswerBoxes = ({
  choice,
  containerStyles,
  handleClick,
  isOpen
}: AnswerBoxesProps) => {
  return (
    <button className={containerStyles} onClick={handleClick}>
     { isOpen && <hr className="absolute w-10 border -right-7"></hr>}
      <div className="circle-inner">{choice}</div>
    </button>
  );
};

export default AnswerBoxes;

import React from "react";

type Props = {};

const ChoiceBox = ({ answer }: { answer: string }) => {
  return (
    <div
      className={`absolute border-x-[5px] rounded-sm w-full h-full -z-10`}
      style={{ borderInlineColor: `${answer}`, backgroundColor: `${answer}`}}
    >
      <div
        className={`border-y-[1px] rounded-sm w-full h-full bg-[#F7F6F1] px-2 py-1`}
        style={{ borderBlockColor: `${answer}` }}
      ></div>
    </div>
  );
};

export default ChoiceBox;

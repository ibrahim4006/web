import React from "react";

type Props = {};

const ChoiceBox = ({ answer }: { answer: string }) => {
  return (
    <div
      className={`absolute top-0 border-x-[5px] rounded-sm w-fit -z-30  bg-[${answer}] border-x-[${answer}]`}
    >
      <div
        className={`border-y-[1px] rounded-sm w-full bg-[#F7F6F1] px-2 py-1 border-y-[${answer}]`}
      >
        ChoiceBoxadad
      </div>
    </div>
  );
};

export default ChoiceBox;

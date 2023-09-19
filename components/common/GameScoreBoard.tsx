import Image from "next/image";
import React from "react";


const GameScoreBoard = ({  }) => {
  return (
    <div
      key={"scoreboard "}
      className={"flex justify-center relative"}
    >
      <Image
        src="/gamescoreboard.svg"
        alt="Boomerang Ok"
        className="absolute -top-[3px] "
        width={200}
        height={200}
      />
      <div className="flex justify-center items-center absolute top-[1px]  w-[200px] text-[#0D0D0D] text-sm">
        <div className="w-[100px] text-end">
          <span className="font-bold">12</span>
          <span className="font-light pr-6"> p</span>
        </div>
        <div className=" w-[100px] text-start">
          <span className="font-bold pl-[20px]">
            {23} : {59}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameScoreBoard;

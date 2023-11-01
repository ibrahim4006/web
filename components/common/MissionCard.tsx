import Image from "next/image";
import React from "react";
import Denemedrop from "../profile/denemedrop";
import Hexagon from "../common/Hexagon";
import CardOuterMinimal from "./CardOuterMinimal";

type Props = {};

const MissionCard = ({ topx, topy, width, height, children }) => {
  return (
    <div
      className=" absolute bg-[#0D0D0D] rounded-sm min-w-fit min-h-fit overflow-visible flex justify-center items-center flex-col z-50"
      style={{
        position: "absolute",
        left: topx ? `${topx}px` : "",
        top: topy ? `${topy}px` : "",
        width: width ? `${width}px` : "",
        height: height ? `${height}px` : "",
      }}
    >
      <div key={"outer design shapes"}>
        <div className="card-frame-top "></div>
        <div className="card-frame-bottom"></div>
        <CardOuterMinimal/>
      </div>

      <div
        key={"card content"}
        className=" flex justify-center items-center w-full h-full relative text-white inverse-hover"
      >
        {children}
      </div>
    </div>
  );
};

export default MissionCard;

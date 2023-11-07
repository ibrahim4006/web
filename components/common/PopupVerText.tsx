import Image from "next/image";
import React from "react";
import Denemedrop from "../profile/denemedrop";
import Hexagon from "../common/Hexagon";
import CardOuter from "./CardOuter";

type Props = {};

const PopupVerText = ({ topx, topy, width, height, children }) => {
  return (
    <div
      className=" absolute bg-[#0D0D0D] rounded-sm min-w-fit min-h-fit overflow-visible flex justify-center items-center flex-col animate_content_closing floating-horizontal px-20 py-16"
      style={{
        position: "absolute",
        animationDelay: `${0.5 * Math.random()}s`,
        animationIterationCount: 1,
        left: topx ? `${topx}px` : "",
        top: topy ? `${topy}px` : "",
        width: width ? `${width}px` : "",
        height: height ? `${height}px` : "",
        zIndex: 60,
      }}
    >
      <div key={"outer design shapes"}>
        <div className="card-frame-right "></div>
        <div className="card-frame-left"></div>
        <div key={"black dot1"} className="black-dot-1"></div>
        <div key={"black dot2"} className="black-dot-2"></div>
        <div key={"black dot3"} className="black-dot-3"></div>
        <CardOuter />
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

export default PopupVerText;

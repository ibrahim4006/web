import { GameToggleButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {};

const GameToggleButton = ({ setChatShow, chatShow }:GameToggleButtonProps) => {
  return (
    <div
      key={"chat toggle button"}
      className="inverse-hover left-0 top-[47%] mr-4 absolute z-50 flex justify-center items-center group toggle-holder h-12"
      onClick={() => setChatShow(!chatShow)}
      style={{ filter: chatShow ? "invert(1)" : ""}}
    >
      <Image
        src="/bumerang_parça/bumerangtek.svg"
        alt="chat toggle button "
        width={20}
        height={20}
        className={
          chatShow
            ? "-rotate-90 translate-x-3 transition-transform duration-500  toggle"
            : "rotate-90  translate-x-6 transition-transform duration-500 toggle2"
        }
        //64% previously
        onClick={() => setChatShow(!chatShow)}
      />
      <Image
        src="/bumerang_parça/bumerangtek.svg"
        alt="chat toggle button "
        width={30}
        height={30}
        className={
          chatShow
            ? "-rotate-90  transition-transform duration-500 group-hover:scale-150 "
            : "rotate-90  -translate-x-3 transition-transform duration-500 group-hover:scale-150"
        }
        //64% previously
        onClick={() => setChatShow(!chatShow)}
      />
    </div>
  );
};

export default GameToggleButton;

// <Image
//         src="/bumerang_parça/Vector-top-fill.svg"
//         alt="chat toggle button "
//         width={30}
//         height={30}
//         className={chatShow ? "-rotate-90 h-[11.14px]" : "rotate-90 h-[11.14px] "}
//         //64% previously
//         onClick={() => setChatShow(!chatShow)}
//       />
//       <Image
//         src="/bumerang_parça/Vector-center-fill.svg"
//         alt="chat toggle button "
//         width={30}
//         height={30}
//         className={chatShow ? "rotate-0 h-[24.49px]" : "rotate-180 h-[24.49px] "}
//         //64% previously
//         onClick={() => setChatShow(!chatShow)}
//       />
//       <Image
//         src="/bumerang_parça/Vector-bottom-fill.svg"
//         alt="chat toggle button "
//         width={30}
//         height={30}
//         className={chatShow ? "rotate-90 h-[11.3px]" : "-rotate-90 h-[11.3px] "}
//         //64% previously
//         onClick={() => setChatShow(!chatShow)}
//       />

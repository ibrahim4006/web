import React from "react";

type Props = {};

const BottomQButton = ({ key, text, onClick, height, width }) => {
  return (
    <div
      className="relative top-0 flex justify-between items-center bg-[#F7F6F1] w-24 h-16 rounded-md group inverse-hover"
      onClick={onClick}
      style={{
        height: height ? `${height}px` : "",
        width: width ? `${width}px` : "",
      }}
    >
      <div className="arrow arrow-left absolute -left-[6px]" />
      <div
        className="w-1/4 group-hover:w-1/2 h-full border-[1px] border-[#0D0D0D] border-r-0 rounded-md rounded-tr-none rounded-br-none relative duration-500"
      >
        <div className="absolute -top-[2px] right-0 w-3 h-1 rounded-full bg-[#0D0D0D] group-hover:-right-2 duration-200" />
        <div className="absolute -bottom-[2px] right-0 w-3 h-1 rounded-full bg-[#0D0D0D] group-hover:-right-2  duration-200" />
      </div>
      <div
        className="absolute w-[80%] h-[72%] right-0 left-0 mx-auto flex center rounded-sm"
        style={{ backgroundColor: text == "" ? "#0D0D0D" : "#D9D9D9" }}
      >
        <span className="font-bold text-2xl flex center text-[#0D0D0D]">
          {text}
        </span>
      </div>
      <div className="w-1/4 group-hover:w-1/2 h-full border-[1px] border-[#0D0D0D] border-l-0 rounded-md rounded-tl-none rounded-bl-none relative duration-500">
        <div className="absolute -top-[2px] left-0 w-3 h-1 rounded-full bg-[#0D0D0D] group-hover:-left-2  duration-200" />
        <div className="absolute -bottom-[2px] left-0 w-3 h-1 rounded-full bg-[#0D0D0D] group-hover:-left-2  duration-200" />
      </div>
      <div className="arrow arrow-right absolute -right-[6px]" />
    </div>
  );
};

export default BottomQButton;

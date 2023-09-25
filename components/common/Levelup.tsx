import React from "react";

type Props = {};

const dotgen = (num) => {
  let dots = [];
  for (let i = 0; i < num; i++) {
    dots.push(
      <div className="h-1 w-1 bg-[#F7F6F1] mx-[10px] my-[8.66px] rounded-full " />
    );
  }
  return <div className="flex flex-row w-fit">{dots}</div>;
};

const dotgenlarge = (num, pad) => {
  let dots = [];
  let container = [];
  for (let i = 0; i < num; i++) {
    dots.push(
      <div
        className="h-3 w-3 bg-[#F7F6F1] mx-[6px] my-[4.65px] rounded-full dotgenlarge"
        style={{ animationDelay: `${1.5- i * 0.1}s` }}
      />
    );
  }
  container.push(
    <div className="flex flex-row w-fit" style={{ paddingLeft: pad }}>
      {dots}
    </div>
  );
  return container;
};

const Levelup = () => {
  return (
    <div className="flex w-[270px] h-[270px] flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center  relative">
        {dotgen(6)}
        {dotgen(7)}
        {dotgen(8)}
        {dotgen(9)}
        {dotgen(10)}
        {dotgen(11)}
        {dotgen(10)}
        {dotgen(9)}
        {dotgen(8)}
        {dotgen(7)}
        {dotgen(6)}
      </div>
      <div className=" flex flex-col w-[270px] h-[270px] justify-center absolute ">
        {dotgenlarge(4, 87)}
        {dotgenlarge(5, 75)}
        {dotgenlarge(5, 63)}
        {dotgenlarge(5, 51)}
        {dotgenlarge(5, 63)}
        {dotgenlarge(5, 75)}
        {dotgenlarge(4, 87)}
      </div>
    </div>
  );
};

export default Levelup;

import React from "react";
import Image from "next/image";

const Hexagon = ({
  iskele,
  index,
  x,
  y,
  text,
  handleClick,
  tick,
}) => {
  return (
    <div
      key={`${iskele}.iskele ${index + 1}.altıgen`}
      className={"group inverse-hover"}
      onClick={handleClick}
    >
      <div
        key={`${iskele}.iskele ${index + 1}.altıgen köşe grubu`}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(${x}px, ${y}px)`,
          zIndex: 100,
        }}
      >
        <div
          key={`${iskele}.iskele ${index + 1}altıgen 1.köşe`}
          className={tick ? "tick_1_clicked_animation" : "tick_1 tick_1_animation"}
        />
        <div
          key={`${iskele}.iskele ${index + 1}altıgen 2.köşe`}
          className={tick ? "tick_2_clicked_animation" : "tick_2 tick_2_animation"}
        />
        <div
          key={`${iskele}.iskele ${index + 1}altıgen 3.köşe`}
          className={tick ? "tick_3_clicked_animation" : "tick_3 tick_3_animation"}
        />
        <div
          key={`${iskele}.iskele ${index + 1}altıgen 4.köşe`}
          className={tick ? "tick_4_clicked_animation tick_4_clicked_inf" : "tick_4 tick_4_animation"}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            color: "rgb(247,246,241)",
          }}
          className= {tick ? "inverse-hover uppercase whitespace-break-spaces text-center text-base font-bold duration-300" : "inverse-hover uppercase whitespace-break-spaces text-center text-base font-bold duration-300"}
        >
          {text}
        </div>
      </div>
      <Image
        src="/altıgen.svg"
        width={180}
        height={180}
        alt={`${index + 1}.altıgen`}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        }}
        className="group-hover:w-[215px] duration-150"
      />
      <Image
        src="/siyah_altıgen.svg"
        width={140}
        height={140}
        alt={`${index + 1}.altıgen`}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        }}
        className={tick ? "inverse-hover w-[170px] duration-300 group-hover:w-[180px] group-active:w-[215px]" : "group-hover:w-[180px] inverse-hover duration-150 group-active:w-[215px]"}
          
        
      />
    </div>
  );
};

export default Hexagon;

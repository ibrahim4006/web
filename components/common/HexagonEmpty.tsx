import React from "react";
import Image from "next/image";

const HexagonEmpty = ({
  iskele,
  index,
  x,
  y,
  text,
  handleClick,
  tick,
  textsize,
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
          className={
            tick ? "tick_1_clicked_animation" : "tick_1 tick_1_animation"
          }
        />
        <div
          key={`${iskele}.iskele ${index + 1}altıgen 2.köşe`}
          className={
            tick ? "tick_2_clicked_animation" : "tick_2 tick_2_animation"
          }
        />
        <div
          key={`${iskele}.iskele ${index + 1}altıgen 3.köşe`}
          className={
            tick ? "tick_3_clicked_animation" : "tick_3 tick_3_animation"
          }
        />
        <div
          key={`${iskele}.iskele ${index + 1}altıgen 4.köşe`}
          className={
            tick
              ? "tick_4_clicked_animation tick_4_clicked_inf"
              : "tick_4 tick_4_animation"
          }
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            color: "rgb(247,246,241)",
          }}
          className={
            tick
              ? "inverse-hover uppercase whitespace-break-spaces text-center text-base font-bold duration-300"
              : "inverse-hover uppercase whitespace-break-spaces text-center text-base font-bold duration-300"
          }
        >
          <span
            style={{
              fontSize: `${textsize}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {text}
          </span>
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
    </div>
  );
};

export default HexagonEmpty;

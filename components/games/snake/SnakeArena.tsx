import React from "react";
import { CANVAS_SIZE } from "@/constants";
import Image from "next/image";
import { SnakeArenaProps } from "@/types";
import MainCard from "@/components/common/MainCard";

const SnakeArena = ({
  canvasRef,
  gameOver,
  correctnumber,
  combo,
  startGamePopup,
}: SnakeArenaProps) => {
  return (
    <>
      <canvas
        className="border"
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && (
        <div className="absolute top-0 left-0">
          <MainCard />
          <h1 className="text-white">Black</h1>
        </div>
      )}
      <Image
        src="/gamescore.svg"
        alt="Boomerang Ok"
        className="absolute top-0 left-[20%]"
        width={200}
        height={200}
      />
      <div className="flex justify-center items-center space-x-12 absolute top-1 left-[23%] text-[#0D0D0D]">
        <div className="font-bold">{12}<span className="font-light ml-2">p</span></div>
        <div className="font-bold">{3} : {18}</div>
      </div>
    </>
  );
};

export default SnakeArena;

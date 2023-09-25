import PageTag from "@/components/common/PageTag";
import SquareButton from "@/components/common/SquareButton";
import { TopNameTag } from "@/components/common/TopNameTag";
import React from "react";
import SnakeArena from "@/components/games/snake/SnakeArena";
import Image from "next/image";
import GameScoreBoard from "@/components/common/GameScoreBoard";
import InGameButtons from "@/components/common/InGameButtons";
import ChatArea from "@/components/common/ChatArea";
import { useState, useEffect } from "react";
import LoadingAnimation from "@/components/common/LoadingAnimation";
import ChatToggleButton from "@/components/common/ChatToggleButton";
import ChoiceBox from "@/components/common/ChoiceBox";
import Canvas from "@/components/common/Canvas";

type Props = {};

const page = (props: Props) => {
  const [chatShow, setChatShow] = useState(false);
  const [questionexist, setQuestionExist] = useState(false);
  const { canvasRef, onMouseDown, clear, setColor, undo } = Canvas();
  const [canvasShow, setCanvasShow] = useState(false);

  return (
    <div>
      <PageTag tag="YARIŞMA / İSTİLA" />
      <TopNameTag nametag="İSTİLA" game={true} />
       <LoadingAnimation chatShow={chatShow} /> 
      <div className={`h-[938px] flex flex-row justify-between relative `}>
        <div
          key={"left region "}
          className={
            chatShow
              ? "h-full w-full xl:w-1/2 2xl:w-[1233px] transition-width duration-300 ease-in-out slider-target"
              : "h-full w-full transition-width duration-300 ease-in-out slider-target"
          }
        >
          <GameScoreBoard />
          <InGameButtons
            clear={clear}
            canvasShow={canvasShow}
            setCanvasShow={setCanvasShow}
            setColor={setColor}
            undo={undo}
          />
          <ChatToggleButton setChatShow={setChatShow} chatShow={chatShow} />

          <canvas
            ref={canvasRef}
            onMouseDown={onMouseDown}
            width={1920}
            height={868}
            className={
              canvasShow
                ? " canvas absolute top-0 z-40 h-[755px] sm:h-[868px]"
                : "canvas pointer-events-none absolute top-0 -z-40 h-[820px] sm:h-[868px]"
            }
          />

          <div key={"score boxes"} className="relative top-20 left-28 w-16">
            {[...Array(4)].map((_, boxIndex) => (
              <div
                key={`${boxIndex} second`}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "transparent",
                  border: "1px solid rgb(13,13,13)",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              />
            ))}
            {[...Array(6)].map((_, boxIndex) => (
              <div
                key={`${boxIndex} second`}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "rgb(13,13,13)",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              />
            ))}
          </div>
        </div>
        <div
          key="chat section"
          className={
            chatShow
              ? " h-full w-full md:w-[590px] right-0 absolute z-30 xl:z-1 transition-right duration-500 ease-in-out bg-[#F7F6F1]   xl:bg-transparent"
              : " h-full w-full md:w-[590px] -right-[1000px] absolute z-30 xl:z-1 transition-right duration-500 ease-in-out bg-[#F7F6F1]   xl:bg-transparent"
          }
        >
          <ChatArea />
        </div>
      </div>
    </div>
  );
};

export default page;

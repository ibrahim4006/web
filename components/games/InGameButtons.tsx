import SquareButton from "@/components/common/SquareButton";
import { useSubjectState } from "@/contexts/SubjectContext";
import { InGameButtonGameProps } from "@/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const InGameButtons = ({
  fetchQuestion,
  studentAnswer,
  checkAnswer,
  setIsliked,
  questionArray,
  clear,
  canvasShow,
  setCanvasShow,
  setColor,
  undo,
  gameOver,
  isliked,
  activeQuestion,
  newQuestion,
  buttonName
}: InGameButtonGameProps) => {
  const [canvas, setCanvas] = useState(false);
  const [hex, setHex] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const glasbeyColors = [
    "#0000FF",
    "#FF0000",
    "#00FF00",
    "#000000",
    "#FFFF00",
    "#00FFFF",
    "#FF00FF",
    "#800000",
    "#008000",
    "#000080",
    "#808000",
    "#800080",
    "#008080",
    "#808080",
    "#C00000",
    "#00C000",
    "#0000C0",
    "#C0C000",
    "#C000C0",
    "#00C0C0",
    "#C0C0C0",
    "#400000",
    "#004000",
    "#000040",
  ];

  function getRandomHexColor() {
    const hexColor = glasbeyColors[currentIndex];
    setCurrentIndex(
      (currentIndex) => (currentIndex + 1) % glasbeyColors.length
    );
    console.log(currentIndex);
    setHex(hexColor);
    return hexColor;
  }

  return (
    <div
      key={"inGameButtons"}
      className="h-fit pb-[2px] w-full relative top-[868px] flex justify-center flex-row items-center border-t "
    >
      <div
        key={"primary buttons"}
        className=" flex justify-center flex-col  sm:flex-row items-center "
      >
        <div className="space-x-[15px]  py-4 flex items-center justify-center">
          <SquareButton
            title={buttonName}
            containerStyles={
              newQuestion
                ? "ingame-btn inverse-hover"
                : "ingame-btn inverse-hover opacity-25"
            }
            handleClick={
              newQuestion ? () => fetchQuestion(questionArray[activeQuestion]) : undefined
            }
          />
          <SquareButton
            title="Kontrol Et"
            containerStyles={
              studentAnswer && !newQuestion
                ? "ingame-btn inverse-hover"
                : "ingame-btn inverse-hover opacity-25"
            }
            handleClick={
              studentAnswer
                ? () => checkAnswer(questionArray[activeQuestion])
                : undefined
            }
          />
          <button
            key={"bookmark"}
            type="button"
            className="ingame-btn inverse-hover group flex justify-center items-center"
            style={{ backgroundColor: isliked ? "bg-[#0D0D0D]" : "" }}
          >
            <Image
              src="/bookmark.svg"
              alt="kaydet"
              width={16}
              height={16}
              className={
                isliked
                  ? "object-contain h-5 lg:h-6 group-hover:invert"
                  : "object-contain h-5 lg:h-6 group-hover:invert"
              }
              onClick={() => setIsliked(!isliked)}
              style={{ filter: isliked ? "invert(1)" : "" }}
            />
          </button>
        </div>
        <div key={"merkez kalem button"} className="">
          <SquareButton
            title={canvasShow ? "KALEMİ KAPAT" : "KALEM"}
            containerStyles={
              canvasShow
                ? "ingame-btn md:my-4 inverse-hover bg-[#FF0000]/90 mx-[15px] z-10"
                : "ingame-btn mb-2 sm:my-4 inverse-hover mx-[15px] z-10"
            }
            handleClick={() => {
              if (window.innerWidth > 640) {
                setCanvasShow(!canvasShow);
              }
            }}
            color={hex}
          />
        </div>

        <div
          key={"secondary buttons"}
          className={
            canvasShow
              ? "  space-x-[15px]  py-4 flex justify-center items-center"
              : "hidden"
          }
        >
          <button
            key={"renk"}
            type="button"
            className="ingame-btn inverse-hover group flex justify-center items-center"
          >
            <Image
              src="/palette.svg"
              alt="renk"
              width={23}
              height={16}
              className="object-contain h-5 lg:h-6 group-hover:invert"
              onClick={() => setColor(getRandomHexColor())}
            />
          </button>
          <SquareButton
            title="TEMİZLE"
            containerStyles="ingame-btn inverse-hover active"
            handleClick={() => clear()}
          />
          <SquareButton
            title="GERİ AL"
            containerStyles="ingame-btn inverse-hover"
            handleClick={() => undo()}
          />
        </div>

        <div className="arrow arrow-left absolute -top-[3.5px] right-0"></div>
        <div className="arrow arrow-right absolute -top-[3.5px] left-0"></div>
      </div>
    </div>
  );
};

export default InGameButtons;

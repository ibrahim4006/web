import React, { useState } from "react";
import SquareButton from "./SquareButton";
import Image from "next/image";

type Props = {};

const InGameButtons = ({
  clear,
  canvasShow,
  setCanvasShow,
  setColor,
  undo,
  isliked,
  setIsliked,
}) => {
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
      className={
        canvasShow
          ? "h-fit pb-[2px] w-full relative top-[755px] sm:top-[868px] flex justify-center md:flex-row flex-col items-center border-t z-10 border-t-[#adada9]"
          : "h-fit pb-[2px] w-full relative top-[820px] sm:top-[868px] flex justify-center md:flex-row flex-col items-center border-t z-10 border-t-[#adada9]"
      }
    >
      <div
        key={"primary buttons"}
        className=" flex justify-center flex-col  sm:flex-row items-center "
      >
        <div className="space-x-[15px]  py-4 flex items-center justify-center">
          <SquareButton
            title="AYRIL"
            containerStyles="ingame-btn inverse-hover;"
            // handleClick={
            //   isSnakeTrue && isGameStopped
            //     ? continueGame
            //     : gameOver
            //     ? startGame
            //     : !isGameStopped && !isAppleTaken
            //     ? stopGame
            //     : !newGame
            //     ? NewGame
            //     : stopGame
            //}
          />
          <SquareButton
            title="KONTROL ET"
            containerStyles="ingame-btn inverse-hover active "
            handleClick={() => takeQuestion("fetch")}
          />
          <button
            key={"bookmark"}
            type="button"
            className="ingame-btn inverse-hover group flex justify-center items-center"
            style={{ backgroundColor: isliked ? "#0D0D0D" : "" }}
          >
            <Image
              src="/bookmark.svg"
              alt="kaydet"
              width={16}
              height={16}
              className={
                isliked
                  ? "object-contain h-5 lg:h-6 invert"
                  : "object-contain h-5 lg:h-6 group-hover:invert"
              }
              onClick={() => setIsliked(!isliked)}
            />
          </button>
          {/* <SquareButton
            title="BEĞEN"
            containerStyles="ingame-btn inverse-hover"
            handleClick={() => takeQuestion("fetch")}
          /> */}
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
          onClick={() => setColor(getRandomHexColor())}
        >
          <Image
            src="/palette.svg"
            alt="renk"
            width={23}
            height={16}
            className="object-contain h-5 lg:h-6 group-hover:invert"
          />
        </button>
        {/* <SquareButton
          title="R"
          containerStyles="ingame-btn inverse-hover"
          handleClick={() => setColor(getRandomHexColor())}
        /> */}
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
  );
};

export default InGameButtons;

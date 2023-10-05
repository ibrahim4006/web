import React, { useState } from "react";
import Image from "next/image";
import SquareButton from "../common/SquareButton";

type Props = {};

const CanvasButtons = ({
  clear,
  canvasShow,
  setCanvasShow,
  setColor,
  undo,
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
          ? "h-fit pb-[2px] w-full sticky flex justify-center md:flex-row flex-col items-center border-t z-50 bg-[#F7F6F1] border-t-[#adada9]"
          : "h-fit pb-[2px] w-full sticky flex justify-center md:flex-row flex-col items-center border-t z-50 bg-[#F7F6F1] opacity-0 pointer-events-none border-t-[#adada9]"
      }
      style={{ top: `${window.innerHeight - 75}px` }}
    >
      <div
        key={"primary buttons"}
        className=" flex justify-center flex-col  sm:flex-row items-center "
      >
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
          className="ingame-btn inverse-hover group flex justify-center items-center bg-[#F7F6F1]"
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
          containerStyles="ingame-btn inverse-hover active bg-[#F7F6F1]"
          handleClick={() => clear()}
        />
        <SquareButton
          title="GERİ AL"
          containerStyles="ingame-btn inverse-hover bg-[#F7F6F1]"
          handleClick={() => undo()}
        />
      </div>

      <div className="arrow arrow-left absolute -top-[3.5px] right-0"></div>
      <div className="arrow arrow-right absolute -top-[3.5px] left-0"></div>
    </div>
  );
};

export default CanvasButtons;

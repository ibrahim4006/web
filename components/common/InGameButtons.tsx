import React, { useState } from "react";
import SquareButton from "./SquareButton";

type Props = {};

const InGameButtons = (props: Props) => {
  const [canvas, setCanvas] = useState(false);

  return (
    <div
      key={"inGameButtons"}
      className="h-[70px] pb-[2px] w-full relative top-[868px] flex justify-center flex-row items-center border-t "
    >
      <div key={"primary buttons"} className=" flex flex-row">
        <div className=" ml-[65px] space-x-[15px]">
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
            containerStyles="ingame-btn inverse-hover active"
            handleClick={() => takeQuestion("fetch")}
          />
          <SquareButton
            title="KAYDET"
            containerStyles="ingame-btn inverse-hover "
            handleClick={() => takeQuestion("fetch")}
          />
          <SquareButton
            title={canvas ? "KALEMİ KAPAT" : "KALEM"}
            containerStyles={
              canvas
                ? "ingame-btn inverse-hover bg-[#FF0000]/90"
                : "ingame-btn inverse-hover"
            }
            handleClick={() => setCanvas(!canvas)}
          />
        </div>
        <div
          key={"secondary buttons"}
          className={canvas ? " ml-[15px] mr-[65px] space-x-[15px]" : "hidden"}
        >
          <SquareButton
            title="SİLGİ"
            containerStyles="ingame-btn inverse-hover"
            handleClick={() => checkAnswer()}
          />
          <SquareButton
            title="TEMİZLE"
            containerStyles="ingame-btn inverse-hover active"
            handleClick={() => takeQuestion("fetch")}
          />
          <SquareButton
            title="GERİ AL"
            containerStyles="ingame-btn inverse-hover"
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
        </div>
      </div>

      <div className="arrow arrow-left absolute -top-[3.5px] right-0"></div>
      <div className="arrow arrow-right absolute -top-[3.5px] left-0"></div>
    </div>
  );
};

export default InGameButtons;

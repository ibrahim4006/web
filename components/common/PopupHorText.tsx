import Image from "next/image";
import React from "react";
import SquareButton from "./SquareButton";

type Props = {};

const PopupHorText = ({
  topx,
  topy,
  width,
  height,
  children,
  den,
  num,
  iconsrc,
  buttonLeft,
  buttonRight,
  buttonRightAction,
  buttonLeftAction,
}) => {
  return (
    <div
      id={"PopupHorText"}
      className=" absolute bg-[#0D0D0D] rounded-sm min-w-fit min-h-fit overflow-visible flex justify-center items-center flex-col animate_content_closing floating-horizontal z-50"
      style={{
        position: "absolute",
        animationDelay: `${0.5 + Math.random() * 0.5}s`,
        left: topx ? `${topx}px` : "",
        top: topy ? `${topy}px` : "",
        width: width ? `${width}px` : "",
        height: height ? `${height}px` : "",
      }}
    >
      <div key={"outer design shapes"} className="w-full h-full">
        <div className="card-frame-top"></div>
        <div className="card-frame-bottom"></div>
        <Image
          src="/card/bottom-left.svg"
          alt="bottom left"
          width={47}
          height={72}
          className={"absolute -bottom-3 -left-3"}
        />
        <Image
          src="/card/top-right.svg"
          alt="top left"
          width={77}
          height={72}
          className={"absolute -top-4 -left-2 -rotate-90"}
        />
        <Image
          src="/card/bottom-left.svg"
          alt="bottom right"
          width={47}
          height={72}
          className={"absolute -bottom-6 -right-0 -rotate-90"}
        />
        <Image
          src="/card/top-right.svg"
          alt="top right"
          width={77}
          height={72}
          className={"absolute -top-3 -right-3"}
        />
      </div>
      <div className="flip-hor-card flex center relative bg-[#0D0D0D] px-48 py-[70px]">
        <div className="flip-hor-card-inner">
          <div
            key={"front"}
            className="flip-hor-card-front flex justify-center items-center"
          >
            <div
              key={"card content"}
              className=" flex justify-center items-center w-full h-full relative text-white inverse-hover"
            >
              {children}
            </div>
          </div>
          <div
            key={"back"}
            className="flip-hor-card-back flex justify-center items-center"
          >
            {!buttonLeft && !buttonRight && (
              <div className="flex items-center justify-between w-96 flex-row inverse-hover space-x-3">
                <Image
                  src={iconsrc}
                  alt="logo_oyun"
                  width={20}
                  height={20}
                  className="scale-125 invert"
                />
                <span className="text-base text-[#f7f6f1] whitespace-nowrap">
                  {`${num} / ${den}`}
                </span>
                <div className="w-52 h-3 border border-solid border-[#f7f6f1] mb-5 mt-5 relative overflow-hidden">
                  <div
                    className="bg-[#f7f6f1] h-3"
                    style={{
                      width: `${(num / den) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            )}
            {buttonLeft && buttonRight && (
              <div
                key={"card button holder"}
                className="flex justify-center items-center p-6"
              >
                <SquareButton
                  title={buttonLeft}
                  containerStyles="card-btn inverse-hover "
                  handleClick={buttonLeftAction}
                />
                <SquareButton
                  title={buttonRight}
                  containerStyles="card-btn inverse-hover "
                  handleClick={buttonRightAction}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupHorText;

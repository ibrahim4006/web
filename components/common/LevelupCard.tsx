import Image from "next/image";
import React, { useEffect } from "react";
import SquareButton from "./SquareButton";
import Denemedrop from "../profile/denemedrop";
import Hexagon from "./Hexagon";
import Levelup from "./Levelup";

type Props = {};

const LevelupCard = (props: Props) => {
  return (
    <div className=" absolute w-[1000px] h-[1000px] top-0 left-[460px] flex justify-center items-center z-50 just rotate-90 floating-vertical">
      <div className=" bg-[#0D0D0D] rounded-sm relative overflow-visible flex justify-center items-center flex-col h-[500px] w-[700px] right-3 animate_content_opening">
        <div className="card-frame-right z-50 animate_content_opening"></div>
        <div className="card-frame-left z-50 animate_content_opening"></div>
        <div key={"black dot1"} className="black-dot-1"></div>
        <div key={"black dot2"} className="black-dot-2"></div>
        <div key={"black dot3"} className="black-dot-3"></div>
        <Image
          src="/card/bottom-left.svg"
          alt="bottom left"
          width={47}
          height={72}
          className={"absolute -bottom-3 -left-3 z-50"}
        />
        <Image
          src="/card/top-left.svg"
          alt="top left"
          width={77}
          height={72}
          className={"absolute -top-11 -left-8 z-50"}
        />
        <Image
          src="/card/bottom-right.svg"
          alt="bottom right"
          width={77}
          height={77}
          className={"absolute -bottom-11 -right-8 z-50"}
        />
        <Image
          src="/card/top-right.svg"
          alt="top right"
          width={65}
          height={72.33}
          className={"absolute -top-3 -right-3 z-50"}
        />
        <div
          key={"card content"}
          className=" flex justify-center items-center w-full h-full relative text-white inverse-hover"
        >
          <div className="flip-card absolute right-[40%]">
            <div className="flip-card-inner">
              <div className="flip-card-front flex justify-center items-center">
                <Levelup />
              </div>
              <div className="flip-card-back flex justify-center items-center invert">
                <Hexagon
                  iskele={0}
                  index={0}
                  x={0}
                  y={0}
                  key={`level`}
                  text={18}
                  textsize={48}
                />
              </div>
            </div>
          </div>
          <div
            key={"stat holder"}
            className="flex justify-between invert -rotate-90 whitespace-nowrap text-black h-8 absolute right-[5%] space-x-12 font-bold"
          >
            <div className="flex center scale-125">
              <Image
                src="/logo_deneme.png"
                alt="logo_deneme"
                width={20}
                height={20}
              />
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
              >
                0 / 30
              </span>
            </div>
            <div className="flex center scale-125">
              <Image
                src="/logo_yarisma.svg"
                alt="lolol"
                width={30}
                height={30}
              />
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
              >
                0 / 30
              </span>
            </div>
            <div className="flex center scale-125">
              <Image src="/logo_oyun.svg" alt="lolol" width={20} height={20} />
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
              >
                0 / 30
              </span>
            </div>
          </div>
          <span className="-rotate-90 font-light text-2xl flex text-center flex-col pt-16">
          </span>
        </div>

        {/* <span className=" py-12 flex justify-center text-[#F7F6F1] font-light">
          Devam etmek ister misin?
        </span> <div
          key={"card button holder"}
          className="flex justify-center items-center p-6 border-t-2 border-t-[#F7F6F115]"
        >
          <SquareButton
            title="devam"
            containerStyles="card-btn inverse-hover "
            handleClick={() => takeQueadadastion("fetch")}
          />
          <SquareButton
            title="çekil"
            containerStyles="card-btn inverse-hover "
            handleClick={() => takeQuesadadtion("fetch")}
          />
        </div> */}
      </div>
    </div>
  );
};

export default LevelupCard;

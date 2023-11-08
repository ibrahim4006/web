import React, { useEffect } from "react";
import SquareButton from "../common/SquareButton";
import PopupHorText from "../common/PopupHorText";
import PopupVerText from "../common/PopupVerText";
import Hexagon from "../common/Hexagon";

type Props = {};

const YarısmaSonu = (props: Props) => {
  return (
    <div className="absolute w-full h-full">
      <div className="relative h-full w-screen center z-10 flex items-center justify-center backdrop-blur-sm"/>
      <PopupHorText
        topx={65}
        topy={300}
        iconsrc={"/logo_oyun.svg"}
        num={3}
        den={4}
        buttonLeft={"deneme"}
        buttonRight={"oyun"}
      >
        <div className="text-center">
          <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
            LEVELİ GEÇMEK İÇİN GEREKEN <br />
            <span className="font-bold ">4 OYUNDAN 3`ÜNÜ </span>
            <br />
            TAMAMLAMIŞ OLDUNUZ.
          </span>
        </div>
      </PopupHorText>
      <PopupHorText
        topx={65}
        topy={600}
        iconsrc={"/logo_oyun.svg"}
        num={3}
        den={4}
      >
        <div className="text-center">
          <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
            BU OYUNDA TOPLAM <br />
            <span className="font-bold ">14 SORUNUN 13’ÜNÜ </span>
            <br />
            DOĞRU İŞARETLEDİNİZ.
          </span>
        </div>
      </PopupHorText>
      <PopupVerText topx={540} topy={255} width={844} height={600}>
        <div className="h-full w-full items-center flex flex-col">
          <div className="flex justify-center space-x-6 items-center h-fit">
            <span className="text-3xl font-extralight text-[#f7f6f1]">13</span>
            <span className="text-6xl font-black text-[#f7f6f1]">
              KAZANDINIZ!
            </span>
            <span className="text-3xl font-extralight text-[#f7f6f1]">16</span>
          </div>
          <span className="text-base font-light text-[#f7f6f1] py-3">
            12:26
          </span>

          <div
            key={"users info"}
            className="w-full h-48 flex justify-between my-16"
          >
            <span className="text-4xl font-bold opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
              VS
            </span>
            <div
              key={"left user"}
              className="w-1/2 flex flex-row justify-between"
            >
              <div className="w-1/2 flex center">
                <span className="text-center whitespace-pre-wrap flex flex-col items-center justify-center w-1 font-extralight text-[#f7f6f1]">
                  MUHAMMET ALPEREN EFİLOĞLU
                </span>
              </div>
              <div
                key={"hexagon holder"}
                className=" h-full w-full scale-75 invert mr-4"
              >
                <Hexagon x={0} y={0} key={`level`} text={18} textsize={48} />
              </div>
            </div>
            <div
              key={"right user"}
              className="w-1/2 flex flex-row justify-between"
            >
              <div
                key={"hexagon holder"}
                className=" h-full w-full scale-75 invert  ml-4"
              >
                <Hexagon x={0} y={0} key={`level`} text={18} textsize={48} />
              </div>
              <div className="w-1/2 flex center">
                <span className="text-center whitespace-pre-wrap flex flex-col items-center justify-center w-1 font-extralight text-[#f7f6f1] uppercase ">
                  ibrahim ergen
                </span>
              </div>
            </div>
          </div>
          <div
            key={"card button holder"}
            className="relative flex justify-center items-center p-6 w-full"
          >
            <SquareButton
              title="yeniden meydan oku"
              containerStyles="card-btn inverse-hover "
              handleClick={() => takeQueadadastion("fetch")}
            />
            <SquareButton
              title="yanlışları incele"
              containerStyles="card-btn inverse-hover "
              handleClick={() => takeQuesadadtion("fetch")}
            />
          </div>
        </div>
      </PopupVerText>
      <PopupHorText
        topx={1445}
        topy={300}
        iconsrc={"/logo_oyun.svg"}
        num={158}
        den={2000}
      >
        <div className="text-center">
          <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
            BU OYUNDA KAZANDIĞINIZ
            <br />
            <span className="font-bold ">158 PUANLA 4397 PUANA </span>
            <br />
            ULAŞTINIZ.
          </span>
        </div>
      </PopupHorText>
      <PopupHorText
        topx={1445}
        topy={600}
        iconsrc={"/logo_oyun.svg"}
        num={3}
        den={4}
      >
        <div className="text-center">
          <span className="text-[#f7f6f1] items-center text-base font-extralight whitespace-nowrap">
            <span className="font-bold ">TEMEL KAVRAMLAR </span>
            <br />
            KONUSUNDA BİLGİNİZİ <br />
            SERGİLEMİŞ OLDUNUZ.
          </span>
        </div>
      </PopupHorText>
    </div>
  );
};

export default YarısmaSonu;

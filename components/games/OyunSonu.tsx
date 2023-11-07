import React, { useEffect } from "react";
import SquareButton from "../common/SquareButton";
import PopupHorText from "../common/PopupHorText";
import PopupVerText from "../common/PopupVerText";
import Hexagon from "../common/Hexagon";

type Props = {};

const OyunSonu = (props: Props) => {
  return (
    <div>
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
            <span className="text-6xl font-black text-[#f7f6f1]">
              OYUN BİTTİ!
            </span>
          </div>
          <span className="text-base font-light text-[#f7f6f1] py-3">
            12:26
          </span>

          <div
            key={"users info"}
            className="w-full h-48 flex flex-col justify-between items-center my-8"
          >
            <div className="flex flex-row items-center w-full relative whitespace-nowrap py-4 px-4">
              <span className="text-base font-bold w-[30%] relative">
                EN YÜKSEK SKOR
              </span>
              <span className="text-base font-extralight w-[50%] relative overflow-visible">
                İbrahim Ergen
              </span>
              <span className="text-3xl font-bold  w-[20%] relative flex text-end justify-end">
                98
              </span>
            </div>

            <div className="flex flex-row items-center w-full relative whitespace-nowrap py-4  px-4">
              <span className="text-base font-bold w-[30%] relative">
                YÜKSEK SKORUN
              </span>
              <span className="text-base font-extralight w-[50%] relative overflow-visible">
                MUHAMMET ALPEREN EFİLOĞLU
              </span>
              <span className="text-3xl font-bold  w-[20%] relative flex text-end justify-end">
                15
              </span>
            </div>
            <div className="flex flex-row items-center w-full relative whitespace-nowrap py-4  px-4 border border-white border-opacity-30 rounded-md">
              <span className="text-base font-bold w-[30%] relative">
                ŞUANKİ SKORUN
              </span>
              <span className="text-base font-extralight w-[50%] relative overflow-visible">
              MUHAMMET ALPEREN EFİLOĞLU
              </span>
              <span className="text-3xl font-bold  w-[20%] relative flex text-end justify-end">
                13
              </span>
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

export default OyunSonu;

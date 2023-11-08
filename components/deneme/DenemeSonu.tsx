import React, { useEffect } from "react";
import SquareButton from "../common/SquareButton";
import PopupHorText from "../common/PopupHorText";
import PopupVerText from "../common/PopupVerText";
import Hexagon from "../common/Hexagon";

type Props = {};

const DenemeSonu = (props: Props) => {
  const items = [
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2 / 1" },
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2 / 1" },
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2 / 1" },
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2 / 1" },
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2 / 1" },
    // Add more items as needed
  ];

  return (
    <div className="absolute w-full h-full">
      <div className="relative h-full w-screen center z-10 flex items-center justify-center backdrop-blur-sm" />
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
        <div className="h-full w-full items-center flex flex-col -top-4 relative">
          <div className="flex justify-center items-center h-fit ">
            <span className="text-6xl font-black text-[#f7f6f1]">
              DENEME BİTTİ!
            </span>
          </div>
          <span className="text-base font-light text-[#f7f6f1] py-3">
            12:26
          </span>

          <div
            key={"subject info"}
            className="w-full h-48 flex flex-col justify-between"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex w-full h-fit px-2 py-2 justify-between items-end hover:border hover:border-[#f7f6f130] rounded"
              >
                <div className="relative flex items-end">
                  <span className="absolute top-0 left-0 font-bold text-sm">
                    +
                  </span>
                  <span className="relative font-extralight text-base text-left opacity-60 pl-4 pt-4">
                    {item.title}
                  </span>
                </div>
                <span className="font-bold text-2xl text-end">
                  {item.numbers}
                </span>
              </div>
            ))}
          </div>
          <div
            key={"card button holder"}
            className="absolute -bottom-6 flex justify-center items-center p-6 w-full space-x-2"
          >
            <SquareButton
              title="yeniden meydan oku"
              containerStyles="card-btn-white inverse-hover "
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

export default DenemeSonu;

import React, { useEffect, useState } from "react";
import SquareButton from "../common/SquareButton";
import PopupHorText from "../common/PopupHorText";
import PopupVerText from "../common/PopupVerText";
import Hexagon from "../common/Hexagon";

type Props = {};

const DenemeSonu = (props: Props) => {
  const items = [
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2" },
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2" },
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2" },
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2" },
    { title: "Yüzde Kar Zarar Problemleri", numbers: "7 / 2" },
    // Add more items as needed
  ];

  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
  };

  // State to manage card visibility
  const [cardVisibilities, setCardVisibilities] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    // Define timeouts for each card's appearance
    const cardTimeouts = [100, 200, 300, 400, 500];

    cardTimeouts.forEach((timeout, index) => {
      timeouts.push(
        setTimeout(() => {
          setCardVisibilities((prevVisibilities) => {
            const updatedVisibilities = [...prevVisibilities];
            updatedVisibilities[index] = true;
            return updatedVisibilities;
          });
        }, timeout)
      );
    });

    // Clean up timeouts when component unmounts
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div
      className="absolute w-full h-full"
      style={{
        opacity: isAnimating ? 0 : 1,
        transition: ".5s",
        pointerEvents: isAnimating ? "none" : "all",
      }}
    >
      <div className="relative h-full w-screen center z-10 flex items-center justify-center backdrop-blur-sm" />
      {cardVisibilities[1] && (
        <PopupHorText
          topx={65}
          topy={300}
          iconsrc={"/logo_oyun.svg"}
          num={3}
          den={4}
        >
          <div className="text-center">
            <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
              BU DENEMEDE TOPLAM <br />
              <span className="font-bold ">14 SORUNUN 13’ÜNÜ </span>
              <br />
              DOĞRU İŞARETLEDİNİZ.
            </span>
          </div>
        </PopupHorText>
      )}
      {cardVisibilities[2] && (
        <PopupHorText
          topx={65}
          topy={600}
          iconsrc={"/logo_oyun.svg"}
          num={178}
          den={200}
        >
          <div className="text-center">
            <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
              LEVELİ GEÇMEK İÇİN GEREKEN <br />
              <span className="font-bold ">200 SORUDAN 20 TANESİNİ </span>
              <br />
              TAMAMLAMIŞ OLDUNUZ.
            </span>
          </div>
        </PopupHorText>
      )}

      {cardVisibilities[0] && (
        <PopupVerText topx={540} topy={255} width={844} height={600}>
          <div className="h-full w-full items-center flex flex-col -top-4 relative">
            <div className="flex justify-center space-x-6 items-center h-fit py-6">
              <span className="text-2xl font-extralight text-[#f7f6f1]">
                13:26
              </span>
              <span className="text-6xl font-black text-[#f7f6f1]">
                DENEME BİTTİ!
              </span>
              <span className="text-2xl font-extralight text-[#f7f6f1]">
                16 / 20
              </span>
            </div>
            {/* */}
            <div
              key={"subject info"}
              className="w-full h-48 flex flex-col justify-between"
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full h-fit px-4 py-2 justify-between items-end rounded group relative"
                >
                  {" "}
                  <div className="card-frame-left-fixed group-hover:flex hidden -translate-x-7 scale-y-125" />
                  <div className="card-frame-right-fixed group-hover:flex hidden translate-x-7 scale-y-125" />
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
                title="yeniden deneme"
                containerStyles="card-btn-white inverse-hover "
                handleClick={() => {
                  handleButtonClick();
                }}
              />
              <SquareButton
                title="yanlışları incele"
                containerStyles="card-btn inverse-hover "
                handleClick={() => {
                  handleButtonClick();
                }}
              />
            </div>
          </div>
        </PopupVerText>
      )}
      {cardVisibilities[3] && (
        <PopupHorText
          topx={1445}
          topy={300}
          iconsrc={"/logo_oyun.svg"}
          num={158}
          den={2000}
        >
          <div className="text-center">
            <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
              BU DENEMEDE KAZANDIĞINIZ
              <br />
              <span className="font-bold ">158 PUANLA 4397 PUANA </span>
              <br />
              ULAŞTINIZ.
            </span>
          </div>
        </PopupHorText>
      )}
      {cardVisibilities[4] && (
        <PopupHorText
          topx={1445}
          topy={600}
          iconsrc={"/logo_oyun.svg"}
          num={3}
          den={4}
        >
          <div className="text-center">
            <span className="text-[#f7f6f1] items-center text-base font-extralight whitespace-nowrap">
              <span className="font-bold ">MATEMATİK </span>
              <br />
              DERSİNDE BİLGİNİZİ <br />
              SERGİLEMİŞ OLDUNUZ.
            </span>
          </div>
        </PopupHorText>
      )}
    </div>
  );
};

export default DenemeSonu;

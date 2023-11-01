import React, { useEffect, useState } from "react";
import SquareButton from "../common/SquareButton";
import PopupHorText from "../common/PopupHorText";
import PopupVerText from "../common/PopupVerText";
import Hexagon from "../common/Hexagon";
import MissionCard from "./MissionCard";
import Image from "next/image";

type Props = {};

const MissionWrapper = (props: Props) => {
  const [innerPageWidth, setInnerPageWidth] = useState(0);
  const [innerPageHeight, setInnerPageHeight] = useState(0);

  useEffect(() => {
    // Function to update the inner page width and height when the window is resized
    function updateInnerDimensions() {
      setInnerPageWidth(window.innerWidth);
      setInnerPageHeight(window.innerHeight);
    }

    // Initial update
    updateInnerDimensions();

    // Add an event listener to update dimensions when the window is resized
    window.addEventListener("resize", updateInnerDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateInnerDimensions);
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59,
        999
      );
      const timeleft = endOfDay - now;
      setTimeLeft(timeleft);

      const daysLeft = 7 - now.getDay();
      setDaysLeft(daysLeft);
    }, 1000); // Update every 1 second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <PopupHorText
        topx={(500 * innerPageWidth) / 1920}
        topy={830}
        width={634}
        buttonLeft={"kabul et"}
        buttonRight={"reddet"}
      >
        <div className="text-center">
          <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
            <span className="font-bold "> ALİ KAĞAN </span>
            <br />
            <span className="font-bold ">
              POLİNOMLAR <span className="font-extralight ">KONUSUNDAN </span>{" "}
            </span>
            <br />
            <span className="font-bold ">İSTİLA </span>
            DAVETİ GÖNDERDİ.
          </span>
        </div>
      </PopupHorText>
      <MissionCard
        topx={(500 * innerPageWidth) / 1920}
        topy={90}
        width={634}
        height={337}
      >
        <div className="h-full w-full items-center flex flex-col">
          <div
            key={"title and clock wrapper"}
            className="flex justify-between items-center w-[87%] h-[20%] mt-12"
          >
            <span className="text-2xl font-bold flex text-left">
              GÜNLÜK <br /> GÖREVLER
            </span>
            <span className="text-base font-extralight flex text-right leading-7">
              KALAN SÜRE <br /> {new Date(timeLeft).toTimeString().slice(0, 8)}
            </span>
          </div>
          <section
            key={"mission list wrapper"}
            className="w-full flex flex-col items-center py-10 space-y-8"
          >
            <div className="flex items-center justify-between w-[87%] h-11 flex-row inverse-hover">
              <div className="flex flex-col center space-y-3">
                <div className="flex w-full justify-between">
                  <span className="text-base text-[#f7f6f1] whitespace-nowrap  font-extralight">
                    <span className="font-bold">Polinomlar </span> konusundan{" "}
                    <span className="font-bold">100</span> soru çöz.
                  </span>
                  <span className="text-base text-[#f7f6f1] whitespace-nowrap">
                    {`${4} / ${5}`}
                  </span>
                </div>
                <div className="w-[424px] h-3 border border-solid border-[#f7f6f1] relative overflow-hidden">
                  <div
                    className="bg-[#f7f6f1] h-3"
                    style={{
                      width: `${(4 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <span className="font-bold flex text-2xl">+250p</span>
            </div>{" "}
            <div className="flex items-center justify-between w-[87%] h-11 flex-row inverse-hover">
              <div className="flex flex-col center space-y-3">
                <div className="flex w-full justify-between">
                  <span className="text-base text-[#f7f6f1] whitespace-nowrap font-extralight">
                    <span className="font-bold">Polinomlar </span> konusundan{" "}
                    <span className="font-bold">100</span> soru çöz.
                  </span>
                  <span className="text-base text-[#f7f6f1] whitespace-nowrap">
                    {`${4} / ${5}`}
                  </span>
                </div>
                <div className="w-[424px] h-3 border border-solid border-[#f7f6f1] relative overflow-hidden">
                  <div
                    className="bg-[#f7f6f1] h-3"
                    style={{
                      width: `${(4 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <span className="font-bold flex text-2xl">+250p</span>
            </div>
          </section>
        </div>
      </MissionCard>
      <MissionCard
        topx={(500 * innerPageWidth) / 1920}
        topy={460}
        width={634}
        height={337}
      >
        <div className="h-full w-full items-center flex flex-col">
          <div
            key={"title and clock wrapper"}
            className="flex justify-between items-center w-[87%] h-[20%] mt-12"
          >
            <span className="text-2xl font-bold flex text-left">
              HAFTALIK <br /> GÖREVLER
            </span>
            <span className="text-base font-extralight flex text-right leading-7">
              KALAN SÜRE <br /> {daysLeft}:
              {new Date(timeLeft).toTimeString().slice(0, 8)}
            </span>
          </div>
          <section
            key={"mission list wrapper"}
            className="w-full flex flex-col items-center py-10 space-y-8"
          >
            <div className="flex items-center justify-between w-[87%] h-11 flex-row inverse-hover">
              <div className="flex flex-col center space-y-3">
                <div className="flex w-full justify-between">
                  <span className="text-base text-[#f7f6f1] whitespace-nowrap  font-extralight">
                    <span className="font-bold">Polinomlar </span> konusundan{" "}
                    <span className="font-bold">100</span> soru çöz.
                  </span>
                  <span className="text-base text-[#f7f6f1] whitespace-nowrap">
                    {`${4} / ${5}`}
                  </span>
                </div>
                <div className="w-[424px] h-3 border border-solid border-[#f7f6f1] relative overflow-hidden">
                  <div
                    className="bg-[#f7f6f1] h-3"
                    style={{
                      width: `${(4 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <span className="font-bold flex text-2xl">+250p</span>
            </div>{" "}
            <div className="flex items-center justify-between w-[87%] h-11 flex-row inverse-hover">
              <div className="flex flex-col center space-y-3">
                <div className="flex w-full justify-between">
                  <span className="text-base text-[#f7f6f1] whitespace-nowrap font-extralight">
                    <span className="font-bold">Polinomlar </span> konusundan{" "}
                    <span className="font-bold">100</span> soru çöz.
                  </span>
                  <span className="text-base text-[#f7f6f1] whitespace-nowrap">
                    {`${4} / ${5}`}
                  </span>
                </div>
                <div className="w-[424px] h-3 border border-solid border-[#f7f6f1] relative overflow-hidden">
                  <div
                    className="bg-[#f7f6f1] h-3"
                    style={{
                      width: `${(4 / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <span className="font-bold flex text-2xl">+250p</span>
            </div>
          </section>
        </div>
      </MissionCard>
    </div>
  );
};

export default MissionWrapper;

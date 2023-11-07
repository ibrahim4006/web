"use client";

import React, { useState, useEffect } from "react";
import GenerateIskele from "@/components/common/Iskele";
import HoverXSlider from "@/components/common/HoverXSlider";
import PopupHorText from "@/components/common/PopupHorText";
import PopupVerText from "@/components/common/PopupVerText";
import SquareButton from "@/components/common/SquareButton";
import PageTag from "@/components/common/PageTag";

export default function page() {
  const [sliderhover, setSliderHover] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [action, setAction] = useState("");

  const [clickedMerkez, setClickedMerkez] = useState(null);

  const userlevel = 60;
  const solvedquestionperlevel = 23;
  const requiredquestionperlevel = 100;

  const randomNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
    "Katie",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Sophia",
    "Thomas",
    "Violet",
    "William",
    "Zoe",
  ];

  useEffect(() => {
    function handleMouseMove(event) {
      const mouseY = event.clientY + window.scrollY + 100;

      if (mouseY > 200 && mouseY < 1000) {
        setSliderHover(true);
      } else {
        setSliderHover(false);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function rndmSubjectSelector(option) {
    const regex = /\d{1,2}/; // Regular expression to match a two-digit number
    const match = option.match(regex);

    if (match) {
      const number = parseInt(match[0], 10);
      handleColumnClick(number);
    } else {
      handleColumnClick(9999);
      setClickedMerkez(option);
    }
  }

  const handleColumnClick = (index) => {
    setClicked(null);
    setTimeout(() => {
      setClicked(index);
    }, 100);
  };

  const numbersArray = Array.from({ length: 100 }, (_, i) => `---${i + 1}`);

  useEffect(() => {
    var slider = document.getElementById(`slider-0`);
    slider.scrollLeft = slider.scrollLeft + 964 * Math.floor(userlevel / 6) - 964/2;
    console.log(`slider-0 has been shifter to right`);
  }, []);

  return (
    <div className=" relative h-min">
      <PageTag tag={"LVL"} />
      {sliderhover && <HoverXSlider id={0} percentage={0.07} />}
      <div className=" relative w-full top-16">
        <GenerateIskele
          subjects={numbersArray}
          setActiveOption={rndmSubjectSelector}
          id={0}
          textSize={48}
          currentlevel={userlevel}
          merkez={randomNames}
        />
      </div>

      <div
        className="absolute top-1/2 z-30 left-1/2"
        style={{
          opacity: clicked ? "" : "0",
          pointerEvents: clicked ? "all" : "none",
          zIndex: 60,
        }}
      >
        <PopupHorText
          topx={-190}
          topy={0}
          iconsrc={"/logo_oyun.svg"}
          num={3}
          den={4}
          buttonLeft={clicked && clicked > userlevel ? "oyun" : "tamam"}
          buttonRight={"vazgeç"}
          buttonRightAction={() => handleColumnClick(null)}
          buttonLeftAction={() => {
            clicked && clicked > userlevel
              ? setAction("oyun")
              : handleColumnClick(null);
          }}
        >
          <div className="text-center">
            {clicked && clicked > userlevel ? (
              <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
                <span className="font-bold ">{clicked}. LEVELİ</span> GEÇMEK
                İÇİN
                <br />
                <span className="font-bold ">
                  {clicked && clicked > userlevel
                    ? `${(parseInt(clicked, 10) - (userlevel)) * requiredquestionperlevel - solvedquestionperlevel} `
                    : ""}
                  {/*userlevel is the current user lvl. 100 is the required question per level. solvedquestionperlevel is the # of questions left for the student to complete the level*/}
                </span>
                SORU DAHA <br /> ÇÖZMENİZ GEREKİYOR.
              </span>
            ) : (
              <span className="text-[#f7f6f1] items-center text-base font-bold  whitespace-nowrap">
                {clicked}. LEVELİ
                <br /> BAŞARIYLA <br />
                TAMAMLADINIZ.
              </span>
            )}
          </div>
        </PopupHorText>
      </div>

      <div
        className="absolute top-1/2 z-30 left-1/2"
        style={{
          opacity: clicked && clicked > 999 ? "" : "0",
          pointerEvents: clicked && clicked > 999 ? "all" : "none",
          zIndex: 60,
        }}
      >
        <PopupVerText
          topx={-300}
          topy={-150}
          width={600}
          height={400}
          //   buttonLeft={"oyun"}
          //   buttonRight={"vazgeç"}
          //   buttonRightAction={() => handleColumnClick(null)}
          //   buttonLeftAction={() => setAction("oyun")}
        >
          <div className="text-center">
            <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
              {clickedMerkez}
              <br /> THİS İS THE LEVEL CARD <br /> EİTHER EXPLAİN THE GAME OR{" "}
              <br />
              STATE THE COMPETİTİTON
            </span>

            <div
              key={"card button holder"}
              className="relative flex justify-center items-center p-6 w-full"
            >
              <SquareButton
                title="her ne ise"
                containerStyles="card-btn inverse-hover "
                handleClick={() => handleColumnClick(null)}
              />
              <SquareButton
                title="kapat"
                containerStyles="card-btn inverse-hover "
                handleClick={() => handleColumnClick(null)}
              />
            </div>
          </div>
        </PopupVerText>
        ;
      </div>
    </div>
  );
}

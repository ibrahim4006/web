"use client";
import HoverXSlider from "@/components/common/HoverXSlider";
import PageTag from "@/components/common/PageTag";
import SquareButton from "@/components/common/SquareButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function page() {
  const [sliderhover, setSliderHover] = useState(false);
  const [sliderhover2, setSliderHover2] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(1);
  const [questionIndicator, setQuestionIndicator] = useState(0);

  useEffect(() => {
    function handleMouseMove(event) {
      const mouseY = event.clientY + window.scrollY;

      setSliderIndex(Math.ceil((mouseY - 250) / 900));
      if (mouseY < 250) {
        setSliderHover(true);
        setSliderHover2(false);
      } else if (
        mouseY > 250 + (sliderIndex - 1) * 900 &&
        mouseY < 1150 + (sliderIndex - 1) * 900
      ) {
        setSliderHover2(true);
        setSliderHover(false);
        
        setTimeout(() => {
          var slider = document.getElementById(`slider-${sliderIndex}`);
        setQuestionIndicator(Math.ceil(slider.scrollLeft / 964));
        console.log(questionIndicator,"nigga");
        }, 200)
      } else {
        setSliderHover(false);
        setSliderHover2(false);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseMove);
    };
  }, [sliderIndex, questionIndicator]);

  const slide = (id, question) => {
    var slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft = 964 * question;
    setQuestionIndicator(question);
  };

  return (
    <div>
      {sliderhover && (
        <HoverXSlider id={sliderIndex} percentage={0.07} invert={false} />
      )}
      {sliderhover2 && (
        <HoverXSlider
          id={sliderIndex}
          percentage={0.16}
          invert={false}
          setQuestionIndicator={setQuestionIndicator}
        />
      )}
      <PageTag tag={"ARŞİV"} />
      <div
        key={"design line 1"}
        className={`absolute w-[1px] h-[500px] left-[100px] top-[100px] bg-[#0D0D0D30] flex justify-center items-end z-20`}
      >
        <div
          className={`absolute w-[6px] h-[6px] -bottom-[6px] rounded-full bg-[#0D0D0D30] z-20`}
        />
      </div>
      <div
        key={"design line 2"}
        className={`absolute w-[1px] h-[500px] left-[0px] top-[200px] bg-[#0D0D0D30] flex justify-center items-end z-20 -rotate-90`}
      >
        <div
          className={`absolute w-[6px] h-[6px] -bottom-[6px] rounded-full bg-[#0D0D0D30] z-20`}
        />
      </div>
      <div
        key={"lesson slider"}
        className=" flex items-center relative top-0 pt-32 bg-[#F7F6F1] z-10"
      >
        <div
          id={`slider-${0}`}
          className="w-full h-32 overflow-x-scroll scroll-smooth scrollbar-hide flex items-center relative arsiv-slider"
        >
          {["türkçe", "matematik", "fizik", "kimya", "biyoloji"].map(
            (subject, index) => (
              <div
                className="  relative  min-w-[964px] font-bold text-5xl uppercase flex  justify-end"
                key={index}
              >
                <span className=" relative profile-head pb-2 inverse-hover">
                  {subject}
                </span>

                <div
                  className={`absolute w-[5px] h-[5px] rounded-full right-[642px] -bottom-[2.5px] bg-[#0D0D0D]`}
                />
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full  relative flex justify-between flex-row">
        <div
          key={"left region"}
          className="flex h-[2000px] relative justify-start w-1/6"
        ></div>
        <div
          key={"region seperator"}
          className="-top-36 h-[2000px] relative w-0 border-r z-20"
        >
          {" "}
          <div className="w-[3px] h-[18px] relative z-20 rounded-lg rounded-bl-none rounded-br-2xl -top-7 right-[1px] bg-[#0D0D0D]" />
        </div>

        <div
          key={"right region"}
          className="flex h-[9000px] justify-start w-5/6 relative flex-col items-start"
        >
          {[...Array(2)].map((_, windex) => (
            <div
              key={`${windex}.week holder`}
              className="relative flex flex-col justify-center h-[900px] w-full"
            >
              <div
                key={" left side fast travel"}
                className="flex w-auto justify-between mt-3 items-start flex-col absolute top-2 left-3 z-10"
              >
                {[...Array(7)].map((_, qtindex) => (
                  <div
                    key={`${qtindex}.question travel`}
                    className="group inverse-hover w-full h-3 flex justify-start items-center relative"
                    onClick={() => slide(sliderIndex, qtindex)}
                  >
                    <div
                      className={`relative flex h-[3px]  rounded-full bg-[#0D0D0D] group-hover:w-8  duration-100 ${
                        questionIndicator == qtindex ? "w-8" : "w-[14px]"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div
                key={" question area"}
                id={`slider-${windex + 1}`}
                className="w-full h-[900px] overflow-x-scroll scroll-smooth scrollbar-hide flex relative "
              >
                {[...Array(7)].map((subject, qindex) => (
                  <div
                    className="  relative h-[900px] min-w-[964px] object-contain font-bold text-5xl uppercase flex flex-col items-start justify-center p-32"
                    key={`${qindex}.question`}
                  >
                    <span className="font-bold text-4xl">{qindex + 1}</span>
                    <Image
                      src="/example.png"
                      alt="lolol"
                      width={400}
                      height={270}
                      className="w-auto h-full inverse-hover "
                    />
                    <SquareButton
                      title="SORUNUN ÇÖZÜMÜ"
                      containerStyles="ingame-btn inverse-hover "
                      handleClick={() => takeQuestion("fetch")}
                    />
                  </div>
                ))}
              </div>
              <div
                key={"week indicator"}
                className={`relative w-[50%] h-[1px] rounded-full -left-[20%] bottom-[0px] bg-[#0D0D0D] flex items-center week-head`}
              >
                <div
                  className={`absolute w-[5px] h-[5px] rounded-full left-[39.6%]  bg-[#0D0D0D] `}
                />
                <div
                  className={`absolute w-[5px] h-[5px] rounded-full right-0  bg-[#0D0D0D] `}
                />
                <div className="absolute -top-7 -right-16 flex items-center flex-row">
                  <span className="font-bold text-base flex ">13. HAFTA</span>
                  <div className="flex justify-between space-x-2 ml-2 items-center flex-row pb-[2px]">
                    <div className="h-[14px] w-[2px] rounded-full bg-[#0D0D0D]" />
                    <div className="h-[14px] w-[2px] rounded-full bg-[#0D0D0D]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

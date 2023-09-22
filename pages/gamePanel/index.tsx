"use client";
import ChoiceCard from "@/components/common/ChoiceCard";
import Hexagon from "@/components/common/Hexagon";
import SquareButton from "@/components/common/SquareButton";
import {
  choiceType,
  gameTypes,
  lessons,
  orderType,
  matematikSubjects,
  fizikSubjects,
  kimyaSubjects,
  biyolojiSubjects,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import GenerateIskele from "@/components/common/Iskele";
import handleFullScreenClick from "@/utils/Fullscreen";
import HoverXSlider from "@/components/common/HoverXSlider";
import Card from "@/components/common/Card";
import Card2 from "@/components/common/Card2";

export default function page() {
  const [activeGame, setActiveGame] = useState<string>("");
  const [activeLesson, setActiveLesson] = useState<string>("");
  const [activeChoiceType, setActiveChoiceType] = useState<string>("");
  const [subjects, setSubjects] = useState<string[]>([""]);
  const [activeSubject, setActiveSubject] = useState<string>("");
  const [activeChoice, setActiveChoice] = useState<string>("");
  const [chosenSubjects, setChosenSubjects] = useState<string[]>([""]);

  // Create a ref for the element you want to scroll to
  const subjectRef = useRef<HTMLDivElement>(null);
  const choiceRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const lessonRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  const getSubjectData = (subject: string): string[] => {
    switch (subject) {
      case "matematik":
        return matematikSubjects;
      case "fizik":
        return fizikSubjects;
      case "kimya":
        return kimyaSubjects;
      case "biyoloji":
        return biyolojiSubjects;
      default:
        return [""];
    }
  };

  // Use useEffect to scroll to the element when activeSubject changes
  useEffect(() => {
    if (activeGame.length > 0 && gameRef.current) {
      window.scrollTo({
        top: 229,
        behavior: "smooth",
      });
    }
  }, [activeGame]);

  useEffect(() => {
    const newSubjects = getSubjectData(activeLesson);
    setSubjects(newSubjects);
    if (activeLesson.length > 0 && lessonRef.current) {
      window.scrollTo({
        top: 229 * 2,
        behavior: "smooth",
      });
    }
  }, [activeLesson]);

  useEffect(() => {
    if (activeChoiceType.length > 0 && choiceRef.current) {
      window.scrollTo({
        top: 1200,
        behavior: "smooth",
      });
    }
  }, [activeChoiceType]);

  useEffect(() => {
    if (activeSubject.length > 0 && subjectRef.current) {
      setChosenSubjects([activeSubject]);
      window.scrollTo({
        //top: 1900,
        behavior: "smooth",
      });
    }
  }, [activeSubject]);

  // const slideLeft = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 964;
  // };

  // const slideRight = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 964;
  // };

  const [sliderhover, setSliderHover] = useState(false);
  const [sliderhover2, setSliderHover2] = useState(false);

  useEffect(() => {
    function handleMouseMove(event) {
      const mouseY = event.clientY + window.scrollY;
      if (mouseY > 1300 && mouseY < 2100) {
        setSliderHover(true);
        setSliderHover2(false);
      } else if (mouseY > 2400 && mouseY < 3200) {
        setSliderHover2(true);
        setSliderHover(false);
      } else {
        setSliderHover(false);
        setSliderHover2(false);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className=" h-[3000px]">
      <Card/> <Card2/>
      {sliderhover && <HoverXSlider id={1} percentage={.07}/>}
      {sliderhover2 && <HoverXSlider id={2} percentage={.07}/>}
      <div
        className="panelcard m-auto my-24 mt-[470px] center w-[60%] sm:w-[50%] lg:w-[60%] h-[133px] "
        ref={gameRef}
      >
        <div className="frame-right -z-10 animate_content_opening"></div>
        <div className="frame-left -z-10 animate_content_opening"></div>
        <ChoiceCard
          options={gameTypes}
          direction="horizontal"
          setActiveOption={setActiveGame}
          activeOption={activeGame}
        />
      </div>
      {
        <div
          className={
            activeGame.length > 0
              ? "panelcard m-auto my-36 lg:my-24 center w-[60%] sm:w-[50%] lg:w-[44%] h-[133px]"
              : "  hidden"
          }
          ref={lessonRef}
          style={{ display: activeGame.length > 0 ? "" : "hidden" }}
        >
          <div className="frame-right -z-10 animate_content_opening"></div>
          <div className="frame-left -z-10 animate_content_opening"></div>
          <ChoiceCard
            options={lessons}
            direction="horizontal"
            setActiveOption={setActiveLesson}
            activeOption={activeLesson}
          />
        </div>
      }
      {
        <div
          className={
            activeLesson.length > 0
              ? "panelcard m-auto my-36 lg:my-24 center w-[60%] sm:w-[50%] lg:w-[22%]  h-[133px]"
              : "  hidden"
          }
          ref={choiceRef}
          style={{ display: activeLesson.length > 0 ? "" : "hidden" }}
        >
          <div className="frame-right -z-10 animate_content_opening"></div>
          <div className="frame-left -z-10 animate_content_opening"></div>
          <ChoiceCard
            options={choiceType}
            direction="horizontal"
            setActiveOption={setActiveChoiceType}
            activeOption={activeChoiceType}
          />
        </div>
      }
      <div
        className={activeChoiceType.length > 0 ? "" : "  hidden"}
        ref={subjectRef}
        id="sliderholder"
      >
        {/* <div className="relative ">
          <button
            className="side-scroll inverse-hover absolute left-0 w-[5%] h-[900px] text-start z-10 opacity-0 cursor-pointer "
            onClick={slideLeft}
          ></button>
          <button
            className="side-scroll inverse-hover absolute right-0 w-[5%] h-[900px] text-end z-10 opacity-0 cursor-pointer "
            onClick={slideRight}
          ></button>
        </div> */}
        <GenerateIskele
          subjects={subjects}
          setActiveOption={setActiveSubject}
          activeOption={activeSubject}
          id={1}
        />
      </div>
      <div
        className={activeChoiceType.length > 0 ? "" : "  hidden"}
        ref={subjectRef}
        id="sliderholder"
      >
        {/* <div className="relative ">
          <button
            className="side-scroll inverse-hover absolute left-0 w-[5%] h-[900px] text-start z-10 opacity-0 cursor-pointer "
            onClick={slideLeft}
          ></button>
          <button
            className="side-scroll inverse-hover absolute right-0 w-[5%] h-[900px] text-end z-10 opacity-0 cursor-pointer "
            onClick={slideRight}
          ></button>
        </div> */}
        <GenerateIskele
          subjects={subjects}
          setActiveOption={setActiveSubject}
          activeOption={activeSubject}
          id={2}
        />
      </div>
      {
        <div
          className={
            activeSubject.length > 0
              ? " my-12 flex flex-col center "
              : " hidden"
          }
          ref={subjectRef}
        >
          {chosenSubjects.map((subject, index) => (
            <SquareButton
              key={index}
              title={subject}
              containerStyles={`flex-grow square-btn inverse-hover text-base font-light active m-1`}
            />
          ))}
        </div>
      }

      {activeSubject.length > 0 && (
        <div
          className="panelcard m-auto mb-24 center w-[20%] h-[133px]"
          ref={finalRef}
        >
          <div className="frame-right -z-10 animate_content_opening"></div>
          <div className="frame-left -z-10 animate_content_opening"></div>
          <ChoiceCard
            options={orderType}
            direction="horizontal"
            setActiveOption={setActiveChoice}
            activeOption={activeChoice}
            queryData={[activeLesson, activeSubject]}
          />
        </div>
      )}
    </div>
  );
}

{
  /*activeChoiceType.length > 0 && (
        <div
          className="panelcard m-auto my-24 center h-[65vw] animate_content_closing"
          ref={subjectRef}
        >
          <div className="frame-top-panel -z-10"></div>
          <div className="frame-bottom-panel -z-10"></div>
          <ChoiceCard
            options={subjects}
            direction="vertical"
            setActiveOption={setActiveSubject}
            activeOption={activeSubject}
          />
        </div>
      )*/
}

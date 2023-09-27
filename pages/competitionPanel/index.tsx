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
import Card3 from "@/components/common/Card3";
import Card4 from "@/components/common/Card4";
import LevelupCard from "@/components/common/LevelupCard";

export default function page() {
  const [activeGame, setActiveGame] = useState<string>("");
  const [activeLesson, setActiveLesson] = useState<string>("");
  const [activeChoiceType, setActiveChoiceType] = useState<string>("");
  const [subjects, setSubjects] = useState<string[]>([""]);
  const [activeSubject, setActiveSubject] = useState<string>("");
  const [activeChoice, setActiveChoice] = useState<string>("");
  const [chosenSubjects, setChosenSubjects] = useState<string[]>([]);

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
        //top: 1200,
        behavior: "smooth",
      });
    }
  }, [activeChoiceType]);

  useEffect(() => {
    if (activeSubject.length > 0 && subjectRef.current) {
      window.scrollTo({
        //top: 1900,
        behavior: "smooth",
      });
    }
  }, [activeSubject]);

  useEffect(() => {
    if (activeGame.length > 0 && gameRef.current) {
      window.scrollTo({
        //top: 229,
        behavior: "smooth",
      });
    }
  }, [activeGame]);

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

  function rndmSubjectSelector(option) {
    if (option === "özel") {
      setActiveChoiceType(option);
      setChosenSubjects([]);
    } else if (option === "rastgele") {
      setActiveChoiceType(option);
      const newChosenSubjects = [];
      
      while (newChosenSubjects.length < 3) {
        const randomSubject =
          subjects[Math.floor(Math.random() * subjects.length)]?.split("-")[3];
        if (!newChosenSubjects.includes(randomSubject)) {
          newChosenSubjects.push(randomSubject);
        }
      }
      setChosenSubjects(newChosenSubjects);
    } else {
      setActiveSubject(option);
      if (!chosenSubjects.includes(option) && chosenSubjects.length < 3) {
        chosenSubjects.push(option);
      }
    }
  }

  return (
    <div className=" h-[3000px]">
      {/* <div className="relative top-52"><Card3/> <Card4/></div>
      <div className="relative top-[700px]"><Card/> <Card2/></div> */}
      {sliderhover && <HoverXSlider id={1} percentage={0.07} />}
      {sliderhover2 && <HoverXSlider id={2} percentage={0.07} />}
      {/* <div
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
      </div> */}

      {
        <div
          className="panelcard m-auto my-24 mt-[470px] center w-[60%] sm:w-[50%] lg:w-[44%] h-[133px]"
          ref={lessonRef}
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
            setActiveOption={rndmSubjectSelector}
            activeOption={activeChoiceType}
          />
        </div>
      }
      <div
        className={activeChoiceType == "rastgele" ? "" : "  hidden"}
        ref={subjectRef}
      ></div>
      <div
        className={activeChoiceType == "özel" ? "" : "  hidden"}
        ref={subjectRef}
      >
        <GenerateIskele
          subjects={subjects}
          setActiveOption={rndmSubjectSelector}
          activeOption={activeSubject}
          id={1}
        />
      </div>

      <div
        className={
          chosenSubjects.length > 0 ? " my-12 flex flex-col center " : " hidden"
        }
        ref={finalRef}
      >
        {chosenSubjects.map((subject, index) => (
          <SquareButton
            key={index}
            title={subject}
            containerStyles={`flex-grow square-btn inverse-hover text-base font-light active m-1`}
            handleClick={() => {
              const newSubjects = [...chosenSubjects]; // Create a copy of the original array
              newSubjects.splice(index, 1);
              setChosenSubjects(newSubjects);
            }}
          />
        ))}
      </div>

      <div
        className={
          chosenSubjects.length > 0
            ? "flex justify-center items-center my-2"
            : "  hidden"
        }
        ref={gameRef}
      >
        <GenerateIskele
          subjects={gameTypes}
          setActiveOption={setActiveGame}
          activeOption={activeGame}
          id={1}
        />
      </div>

      <div
        className={
          activeGame.length > 0
            ? "panelcard m-auto mb-24 center w-[20%] h-[133px]"
            : " hidden"
        }
        ref={finalRef}
      >
        <div className="frame-right -z-10 animate_content_opening"></div>
        <div className="frame-left -z-10 animate_content_opening"></div>
        <ChoiceCard
          options={orderType}
          direction="horizontal"
          setActiveOption={setActiveChoice}
          activeOption={activeChoice}
          queryData={[activeLesson, chosenSubjects]}
        />
      </div>
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

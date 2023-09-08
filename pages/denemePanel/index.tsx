"use client";
import ChoiceCard from "@/components/common/ChoiceCard";
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
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function page() {
  const [activeGame, setActiveGame] = useState<string>("");
  const [activeChoiceType, setActiveChoiceType] = useState<string>("");
  const [activeLesson, setActiveLesson] = useState<string>("");
  const [activeSubject, setActiveSubject] = useState<string>("");
  const [activeChoice, setActiveChoice] = useState<string>("");
  const [subjects, setSubjects] = useState<string[]>([""]);

  // Create a ref for the element you want to scroll to
  const subjectRef = useRef<HTMLDivElement>(null);
  const choiceRef = useRef<HTMLDivElement>(null);

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
    if (activeChoiceType.length > 0 && subjectRef.current) {
      subjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeChoiceType]);

  useEffect(() => {
    const newSubjects = getSubjectData(activeLesson);
    setSubjects(newSubjects);
  }, [activeLesson]);

  useEffect(() => {
    if (activeSubject.length > 0 && choiceRef.current) {
      choiceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSubject]);


  return (
    <>
      <div className="w-1/6 flex justify-start items-center mt-4 font-light">
        <div className="center w-[8%] mr-2">
          <hr className="w-16 border-t-2 border-black" />
          <div className="square-btn-line"></div>
        </div>
        <p className="font-light text-xl">Game Panel</p>
      </div>
      <div className="panelcard m-auto mt-10 center w-[45%] h-[72px] animate_content_closing_hor">
        <div className="frame-right -z-10"></div>
        <div className="frame-left -z-10"></div>
        <ChoiceCard
          options={gameTypes}
          direction="horizontal"
          setActiveOption={setActiveGame}
          activeOption={activeGame}
        />
      </div>
      {activeGame.length > 0 && (
        <div className="panelcard m-auto mt-16 center w-[35%] h-[72px] animate_content_closing_hor">
          <div className="frame-right -z-10"></div>
          <div className="frame-left -z-10"></div>
          <ChoiceCard
            options={lessons}
            direction="horizontal"
            setActiveOption={setActiveLesson}
            activeOption={activeLesson}
          />
        </div>
      )}
      {activeLesson.length > 0 && (
        <div className="panelcard m-auto mt-16 center w-[18%] h-[72px] animate_content_closing_hor ">
          <div className="frame-right -z-10"></div>
          <div className="frame-left -z-10"></div>
          <ChoiceCard
            options={choiceType}
            direction="horizontal"
            setActiveOption={setActiveChoiceType}
            activeOption={activeChoiceType}
          />
        </div>
      )}
      {activeChoiceType.length > 0 && (
        <div
          className="panelcard m-auto mt-16 center h-[65vw] animate_content_closing"
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
      )}

      {activeSubject.length > 0 && (
        <div
          className="panelcard m-auto mt-20 center w-[20%] h-[72px] animate_content_closing_hor"
          ref={choiceRef}
        >
          <div className="frame-right -z-10"></div>
          <div className="frame-left -z-10"></div>
          <ChoiceCard
            options={orderType}
            direction="horizontal"
            setActiveOption={setActiveChoice}
            activeOption={activeChoice}
            queryData={[activeLesson, activeSubject]}
          />
        </div>
      )}
    </>
  );
}

"use client";
import ChoiceCard from "@/components/common/ChoiceCard";
import {
  choiceType,
  classes,
  comType,
  competitionTypes,
  gameTypes,
  lessons,
  orderType,
  matematik,
  fizik,
  kimya,
  biyoloji,
} from "@/constants";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";


type QuestionTypeObject = {
  [key: string]: {
    [key: string]: string[];
  };
};

export default function page() {
  const [activeCompetition, setActiveCompetition] = useState<string>("");
  const [acticeChoiceType, setActiveChoiceType] = useState<string>("");
  const [activeLesson, setActiveLesson] = useState<string>("");
  const [activeClass, setActiveClass] = useState<string>("");
  const [activeSubject, setActiveSubject] = useState<string>("");
  const [activeChoice, setActiveChoice] = useState<string>("");
  const [subjects, setSubjects] = useState<string[]>([]);


  // Create a ref for the element you want to scroll to
  const subjectRef = useRef<HTMLDivElement>(null);
  const classRef = useRef<HTMLDivElement>(null);
  const choiceRef = useRef<HTMLDivElement>(null);

  const getSubjectData = (subject: string): QuestionTypeObject => {
    switch (subject) {
      case "matematik":
        return matematik;
      case "fizik":
        return fizik;
      case "kimya":
        return kimya;
      case "biyoloji":
        return biyoloji;
      default:
        return {};
    }
  };

  // Use useEffect to scroll to the element when activeSubject changes
  useEffect(() => {
    if (activeClass.length > 0 && subjectRef.current) {
      subjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (activeLesson.length > 0) {
      setSubjects(Object.keys(getSubjectData(activeLesson)[activeClass]));
    }
  }, [activeClass]);
  useEffect(() => {
    if (activeLesson.length > 0 && classRef.current) {
      classRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (activeClass.length > 0) {
      setSubjects(Object.keys(getSubjectData(activeLesson)[activeClass]));
    }
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
          <hr className="w-16 border-t-2 border-black"/>
          <div className="square-btn-line"></div>
        </div>
        <p className="font-light text-xl">Competition Panel</p>
      </div>
      <div className="panelcard m-auto mt-20 center w-[45%] h-[72px] animate_content_closing_hor">
        <div className="frame-right -z-10"></div>
        <div className="frame-left -z-10"></div>
        <ChoiceCard
          options={competitionTypes}
          direction="horizontal"
          setActiveOption={setActiveCompetition}
          activeOption={activeCompetition}
        />
      </div>
      {activeCompetition.length > 0 && (
        <div className="panelcard m-auto mt-20 center w-[20%] h-[72px] animate_content_closing_hor">
          <div className="frame-right -z-10"></div>
          <div className="frame-left -z-10"></div>
          <ChoiceCard
            options={choiceType}
            direction="horizontal"
            setActiveOption={setActiveChoiceType}
            activeOption={acticeChoiceType}
          />
        </div>
      )}
      {acticeChoiceType.length > 0 && (
        <div className="panelcard m-auto mt-20 center w-[35%] h-[72px] animate_content_closing_hor">
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
        <div
          className="panelcard m-auto mt-20 center w-[20%] h-[72px] animate_content_closing_hor "
          ref={classRef}
        >
          <div className="frame-right -z-10"></div>
          <div className="frame-left -z-10"></div>
          <ChoiceCard
            options={classes}
            direction="horizontal"
            setActiveOption={setActiveClass}
            activeOption={activeClass}
          />
        </div>
      )}
      {activeClass.length > 0 && (
        <div
          className="panelcard m-auto mt-20 center h-[40vw] animate_content_closing"
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
          />
        </div>
      )}
    </>
  );
}

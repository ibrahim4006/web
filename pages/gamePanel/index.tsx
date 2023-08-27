"use client";
import ChoiceCard from "@/components/common/ChoiceCard";
import {
  choiceType,
  classes,
  comType,
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
  const [activeGame, setActiveGame] = useState<string>("");
  const [activeChoiceType, setActiveChoiceType] = useState<string>("");
  const [activeLesson, setActiveLesson] = useState<string>("");
  const [activeClass, setActiveClass] = useState<string>("");
  const [activeSubject, setActiveSubject] = useState<string>("");
  const [activeChoice, setActiveChoice] = useState<string>("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [isAnimatinglesson, setIsAnimatingLesson] = useState(false);
  const [isAnimatingclass, setIsAnimatingClass] = useState(false);
  const [isAnimatingsubject, setIsAnimatingSubject] = useState(false);

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

  // Function to start the animation
  const startAnimation = (title: string) => {
    let setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
    let setActiveValue: React.Dispatch<React.SetStateAction<string>>;
    let randomIndexGenerator: () => number;
  
    if (title === "lesson") {
      setIsAnimating = setIsAnimatingLesson;
      setActiveValue = setActiveLesson;
      randomIndexGenerator = () => Math.floor(Math.random() * lessons.length);
    } else if (title === "class") {
      setIsAnimating = setIsAnimatingClass;
      setActiveValue = setActiveClass;
      randomIndexGenerator = () => Math.floor(Math.random() * classes.length);
    } else if (title === "subject") {
      setIsAnimating = setIsAnimatingSubject;
      setActiveValue = setActiveSubject;
      randomIndexGenerator = () => Math.floor(Math.random() * Object.keys(getSubjectData(activeLesson)[activeClass]).length);
    } else {
      return; // Invalid title, exit the function
    }
  
    setIsAnimating(false);
    const animationTime = Math.floor(Math.random() * 2000) + 4000;
  
    // Start the animation interval
    const animationInterval = setInterval(() => {
      const randomIndex = randomIndexGenerator();
      setActiveValue(title === "subject" ? Object.keys(getSubjectData(activeLesson)[activeClass])[randomIndex] : title === "class" ? classes[randomIndex] : lessons[randomIndex]);
    }, 100); // Update the active value every 100ms
  
    // Stop the animation after animationTime has passed
    setTimeout(() => {
      clearInterval(animationInterval);
      setIsAnimating(true);
    }, animationTime);
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
    if (activeLesson.length > 0 && classRef.current && isAnimatingclass) {
      classRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (activeClass.length > 0) {
      setSubjects(Object.keys(getSubjectData(activeLesson)[activeClass]));
    }
  }, [activeLesson]);

  useEffect(() => {
    if (activeSubject.length > 0 && choiceRef.current && isAnimatingsubject) {
      choiceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSubject]);

  useEffect(() => {
    if (activeChoiceType === "Rastgele") {
      startAnimation("lesson")
    }
    setActiveClass("")
    setActiveSubject("")
    setActiveLesson("")
  }, [activeChoiceType]);

  useEffect(() => {
    if (activeChoiceType === "Rastgele") {
      startAnimation("class")
    }
  }, [activeLesson]);
  
  useEffect(() => {
    if (activeChoiceType === "Rastgele" && isAnimatingclass) {
      startAnimation("subject")
    }
  }, [activeClass]);

  return (
    <>
      <div className="w-1/6 flex justify-start items-center mt-4 font-light">
        <div className="center w-[8%] mr-2">
          <hr className="w-16 border-t-2 border-black" />
          <div className="square-btn-line"></div>
        </div>
        <p className="font-light text-xl">Game Panel</p>
      </div>
      <div className="panelcard m-auto mt-20 center w-[45%] h-[72px] animate_content_closing_hor">
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
        <div className="panelcard m-auto mt-20 center w-[20%] h-[72px] animate_content_closing_hor">
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
      {activeLesson.length > 0 && isAnimatinglesson && (
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
      {activeClass.length > 0 && isAnimatingclass &&  (
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
      {activeSubject.length > 0 && isAnimatingsubject && (
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

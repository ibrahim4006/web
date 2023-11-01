
import React, {useState} from "react";
import {
  lessons,
  difficulty,
  matematik,
  fizik,
  kimya,
  biyoloji,
  classes,
} from "@/constants";
import { QuestionTypeProps } from "@/types";
import Image from "next/image";
import SquareButton from "../common/SquareButton";

type QuestionTypeObject = {
  [key: string]: {
    [key: string]: string[];
  };
};

const QuestionType = ({
  setisAddQuestionPageShow,
  activeLesson,
  activeChapter,
  activeClass,
  activeSubjects,
  activedifficulty,
  setActiveChapter,
  setActiveClass,
  setActiveLesson,
  setActiveSubjects,
  setDifficulty
}: QuestionTypeProps) => {
  const [count, setCount] = useState<number[]>(Array(5).fill(1));
  const [order, setOrder] = useState<number>(1)
  const changeActiveClass = (className: string) => {
    setActiveClass(className);
    setCount(prevCount => {
      const updatedCount = [...prevCount]; // Create a copy of the count array
      updatedCount[0] = 2; // Update the second element with the new value
      return updatedCount; // Set the updated array as the new state
    });
    setActiveChapter(Object.keys(getSubjectData(activeLesson)[className])[0]);
    setOrder(2)
  };

  const changeActiveLesson = (lessonName: string) => {
    setActiveLesson(lessonName);
    setCount(prevCount => {
      const updatedCount = [...prevCount]; // Create a copy of the count array
      updatedCount[1] = 2; // Update the second element with the new value
      return updatedCount; // Set the updated array as the new state
    });
    setActiveChapter(Object.keys(getSubjectData(lessonName)[activeClass])[0]);
    setOrder(3)
  };

  const changeActiveChapter = (chapterName: string) => {
    setActiveChapter(chapterName);
    setCount(prevCount => {
      const updatedCount = [...prevCount]; // Create a copy of the count array
      updatedCount[2] = 2; // Update the second element with the new value
      return updatedCount; // Set the updated array as the new state
    });
    setOrder(4)
  };

  const changeActiveSubjects = (subjectName: string) => {
    setActiveSubjects(subjectName);
    setCount(prevCount => {
      const updatedCount = [...prevCount]; // Create a copy of the count array
      updatedCount[3] = 2; // Update the second element with the new value
      return updatedCount; // Set the updated array as the new state
    });
    setOrder(5)
  };

  const changeDifficulty = (diff: string) => {
    setDifficulty(diff);
    setCount(prevCount => {
      const updatedCount = [...prevCount]; // Create a copy of the count array
      updatedCount[4] = 2; // Update the second element with the new value
      return updatedCount; // Set the updated array as the new state
    });
  };

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

  const activeSubjectData = getSubjectData(activeLesson);

  return (
    <div className="w-2/3 ml-auto mr-auto border mt-[5%] mb-[5%] flex-col justify-start">
      <div className="w-full h-24 border-b pl-10 font-bold text-2xl flex items-center uppercase">
        Yeni Soru
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        {classes.map((className, ind) => (
          <SquareButton
            key={ind}
            title={`${className}.Sınıf`}
            containerStyles={
              activeClass === className && count[0] === 2 ? "square-btn-s active" : order === 1 ? "square-btn-s" : "square-btn-s opacity-[.15]"
            }
            handleClick={() => changeActiveClass(className)}
          />
        ))}
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        {lessons.map((lessonName, ind) => (
          <SquareButton
            key={ind}
            title={lessonName}
            containerStyles={
              activeLesson === lessonName && count[1] === 2
                ? "square-btn-s active capitalize"
                : order === 2 ? "square-btn-s capitalize" :"square-btn-s capitalize opacity-[.15]"
            }
            handleClick={() => changeActiveLesson(lessonName)}
          />
        ))}
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        {activeSubjectData &&
          Object.keys(activeSubjectData[activeClass]).map((chapterName, ind) => (
            <SquareButton
              key={ind}
              title={chapterName}
              containerStyles={
                activeChapter === chapterName && count[2] === 2 && order !== 1
                  ? "square-btn-m active capitalize"
                  : order === 3 ? "square-btn-m capitalize" : "square-btn-m capitalize opacity-[.15]"
              }
              handleClick={() => changeActiveChapter(chapterName)}
            />
          ))}
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        {activeSubjectData &&
          activeChapter.length > 0 &&
          Object.entries(activeSubjectData[activeClass][activeChapter]).map(([index, subjects], ind) => (
            <SquareButton
              key={ind}
              title={subjects}
              containerStyles={
                activeSubjects === subjects && count[3] === 2
                  ? "square-btn-m active capitalize"
                  : order === 4 ? "square-btn-m capitalize" : "square-btn-m capitalize opacity-[.15]"
              }
              handleClick={() => changeActiveSubjects(subjects)}
            />
          ))}
      </div>
      <div className="w-full h-20 border-b flex items-center pl-10 space-x-5">
        {difficulty.map((diff, ind) => (
          <SquareButton key={ind} title={diff} containerStyles={
            activedifficulty === diff && count[4] === 2
              ? "square-btn-m active capitalize"
              : order === 5 ? "square-btn-m capitalize" : "square-btn-m capitalize opacity-[.15]"
          } handleClick={() => changeDifficulty(diff)} />
        ))}
      </div>
      <div className="w-full h-24 flex justify-end items-center pr-5">
        <Image
          src="/denemeboomerang.svg"
          alt="Boomerang Ok"
          className="-rotate-90 cursor-pointer ml-5"
          width={45}
          height={45}
          onClick={() => setisAddQuestionPageShow(true)}
        />
      </div>
    </div>
  );
};

export default QuestionType;

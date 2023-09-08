import React, { useState } from "react";
import ChoiceBoxes from "./ChoiceBoxes";
import AnswerBoxes from "./AnswerBoxes";
import RectangleDrawer from "./RectangleDrawer";
import { choices } from "@/constants";
import { SetQuestionChoicesProps } from "@/types";

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

const SetQuestionChoices = ({ preview, correctAnswer,setCorrectAnswer,points,setPoints }: SetQuestionChoicesProps) => {
  const [isEvenActive, setisEvenActive] = useState<boolean[]>(
    Array(5).fill(false)
  );
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [isOddActive, setisOddActive] = useState<boolean[]>(
    Array(5).fill(false)
  );
  const oddNumbers = Array.from({ length: 5 }, (_, index) => index * 2 + 1);
  const evenNumbers = Array.from({ length: 5 }, (_, index) => index * 2);

  const changeCorrectAnswer = (answer: string) => {
    setCorrectAnswer(answer);
  };

  const deletePoints = () => {
    setPoints([])
    setRectangles([])
  }

  const handleChoiceEven = (index: number) => {
    setisEvenActive((isprevEvenActive) => {
      const updatedEvenActive = [...isprevEvenActive];
      updatedEvenActive[index] = !updatedEvenActive[index];
      return updatedEvenActive;
    });
  };
  const handleChoiceOdd = (index: number) => {
    setisOddActive((isprevOddActive) => {
      const updatedOddActive = [...isprevOddActive];
      updatedOddActive[index] = !updatedOddActive[index];
      return updatedOddActive;
    });
  };
  return (
    <div className="flex justify-between items-center h-auto p-10 border-b">
      {<RectangleDrawer
        points={points}
        setPoints={setPoints}
        preview={preview}
        rectangles={rectangles}
        setRectangles={setRectangles}
      />}
      <div className="flex justify-center relative">
        <div className=" flex-col justify-start space-y-5">
          {evenNumbers.map((even, index) => (
            <ChoiceBoxes
              key={index}
              points={points[even]}
              direction="left"
              handleClick={() => handleChoiceEven(index)}
              isActive={isEvenActive[index]}
            />
          ))}
        </div>
        <div className=" flex-col justify-start space-y-5">
          {oddNumbers.map((odd, index) => (
            <ChoiceBoxes
              key={index}
              points={points[odd]}
              direction="right"
              handleClick={() => handleChoiceOdd(index)}
              isActive={isOddActive[index]}
            />
          ))}
        </div>
        <div className="absolute -bottom-16 left-[40%] circle-outer flex justify-center items-center cursor-pointer" onClick={()=>deletePoints()}>X</div>
      </div>
      <div className=" flex-col justify-start space-y-5">
        {choices.map((choice, index) => (
          <AnswerBoxes
            choice={choice}
            key={index}
            containerStyles={
              correctAnswer === choice
                ? "circle-outer relative cursor-pointer active scale-125"
                : "circle-outer relative cursor-pointer hover:scale-110"
            }
            handleClick={() => changeCorrectAnswer(choice)}
            isOpen={correctAnswer === choice}
          />
        ))}
      </div>
    </div>
  );
};

export default SetQuestionChoices;

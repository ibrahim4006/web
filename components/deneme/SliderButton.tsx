import React, { useEffect, useState } from "react";

type Props = {};

const SliderButton = ({
  text,
  action,
  variable,
  showButtons,
  setShowButtons,
  direction,
  canvasShow,
  setCanvasShow,
  flaggedQuestions,
  setFlaggedQuestions,
  qnumber,
}) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!canvasShow) {
      setClicked(false);
    }
  }, [canvasShow]);

  if (direction == "left") {
    return (
      <div
        key={"slider button"}
        className={
          showButtons
            ? clicked
              ? "border-[1px] bg-[#0D0D0D] w-[150px] h-[60px] rounded-full relative flex items-center left-8 opacity-100 duration-200"
              : "hover:border-[1px] bg-[#F7F6F1] w-[150px] h-[60px] rounded-full relative flex items-center left-2 hover:left-4 opacity-100 duration-200"
            : "hover:border-[1px] w-[150px] h-[60px] rounded-full relative flex items-center -left-2 opacity-0 duration-200"
        }
        onClick={() => {
          setClicked(!clicked);
          action(!variable);
          setCanvasShow ? setCanvasShow(!canvasShow) : null;
          setTimeout(() => {
            setShowButtons ? setShowButtons(false) : null;
          }, 300);
          if (flaggedQuestions && !flaggedQuestions.includes(qnumber)) {
            setFlaggedQuestions((prev) => [...prev, qnumber]);
          }
          if (flaggedQuestions && flaggedQuestions.includes(qnumber)) {
            const newQuestions = [...flaggedQuestions]; // Create a copy of the original array
            newQuestions.splice(newQuestions.indexOf(qnumber), 1);
            setFlaggedQuestions(newQuestions); // Update the state with the modified array
          }
        }}
        //style={{ marginLeft: text == "kalem" ? "50px" : "-15px" }}
      >
        <div
          className={
            clicked
              ? "border-[1px] h-10 w-10 bg-[#F7F6F1] rounded-full flex center absolute left-24 opacity-100 transition-left duration-200 z-10"
              : "border-[1px] h-10 w-10 rounded-full flex center absolute left-3 opacity-100 transition-left duration-200 z-10"
          }
        >
          <div
            className={
              clicked
                ? " h-8 w-8 bg-[#0D0D0D] rounded-full duration-200"
                : " h-6 w-6 bg-[#0D0D0D] rounded-full duration-200"
            }
          />
        </div>
        <span
          className={
            clicked
              ? "font-bold text-base text-[#F7F6F1] relative left-6 -z-1 transition-left duration-200"
              : "font-bold text-base text-[#0D0D0D] relative left-16 -z-1 transition-left duration-200"
          }
        >
          {text}
        </span>
      </div>
    );
  } else if (direction == "right") {
    return (
      <div
        key={"slider button"}
        className={
          showButtons
            ? clicked
              ? "border-[1px] bg-[#0D0D0D] w-[150px] h-[60px] rounded-full relative flex items-center -right-2 opacity-100 duration-200"
              : "hover:border-[1px] bg-[#F7F6F1] w-[150px] h-[60px] rounded-full relative flex items-center -right-10 hover:-right-8 opacity-100 duration-200"
            : "hover:border-[1px] w-[150px] h-[60px] rounded-full relative flex items-center -right-12 opacity-0 duration-200"
        }
        onClick={() => {
          setClicked(!clicked);
          action(!variable);
          setCanvasShow ? setCanvasShow(!canvasShow) : null;
          setTimeout(() => {
            setShowButtons ? setShowButtons(false) : null;
          }, 300);
          if (flaggedQuestions && !flaggedQuestions.includes(qnumber)) {
            setFlaggedQuestions((prev) => [...prev, qnumber]);
          }
          if (flaggedQuestions && flaggedQuestions.includes(qnumber)) {
            const newQuestions = [...flaggedQuestions]; // Create a copy of the original array
            newQuestions.splice(newQuestions.indexOf(qnumber), 1);
            setFlaggedQuestions(newQuestions); // Update the state with the modified array
          }
        }}
       // style={{ right: text === "kalem" ? "10px" : "-55px" }}
      >
        <div
          className={
            clicked
              ? "border-[1px] h-10 w-10 bg-[#F7F6F1] rounded-full flex center absolute left-3 opacity-100 transition-left duration-200 z-10"
              : "border-[1px] h-10 w-10 rounded-full flex center absolute left-24 opacity-100 transition-left duration-200 z-10"
          }
        >
          <div
            className={
              clicked
                ? " h-8 w-8 bg-[#0D0D0D] rounded-full duration-200"
                : " h-6 w-6 bg-[#0D0D0D] rounded-full duration-200"
            }
          />
        </div>
        <span
          className={
            clicked
              ? "font-bold text-base text-[#F7F6F1] relative left-16 -z-1 transition-left duration-200"
              : "font-bold text-base text-[#0D0D0D] relative left-6 -z-1 transition-left duration-200"
          }
        >
          {text}
        </span>
      </div>
    );
  }
};

export default SliderButton;

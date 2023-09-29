import React, { useState } from "react";
import ChoiceBox from "../common/ChoiceBox";

type Props = {};

const RenderDivs = ({
  qindex,
  dir,
  leftwidths,
  rightwidths,
  leftheights,
  rightheights,
  setClickedIndexes,
  clickedIndexes
}) => {
  const points = [
    { x: 0.76, y: 84.33 },
    { x: 21.03, y: 89.99 },
    { x: 34.42, y: 84.18 },
    { x: 54.68, y: 89.84 },
    { x: 68.64, y: 84.18 },
    { x: 86.04, y: 90.13 },
    { x: 13.96, y: 91.29 },
    { x: 35.95, y: 96.81 },
    { x: 55.83, y: 91.15 },
    { x: 82.6, y: 96.81 },
  ];

  const [clickedDiv, setClickedDiv] = useState<number | null>(null);
  const [hoveredDiv, setHoveredDiv] = useState(null);
  

  const handleMouseEnter = (i, qindex) => {
    setHoveredDiv({ index: i, qindex });
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const handleClick = (index: number, qindex: number) => {
    if (clickedDiv === index) {
      setClickedDiv(null);
      removeClickedIndex(qindex);
    } else {
      setClickedDiv(index);
      setHoveredDiv(null);
      addClickedIndex(index, qindex);
    }
  };

  const addClickedIndex = (index: number, qindex: number) => {
    setClickedIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[qindex] = index;
      return newIndexes;
    });
  };

  const removeClickedIndex = (qindex: number) => {
    setClickedIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[qindex] = null; // You can also use null if you prefer
      return newIndexes;
    });
  };

  if (dir == "left") {
  }
  const ww =
    dir == "left"
      ? leftwidths[(qindex - 1) / 2]
      : rightwidths[(qindex - 2) / 2];
  const hh =
    dir == "left"
      ? leftheights[(qindex - 1) / 2]
      : rightheights[(qindex - 2) / 2];

  //console.log(ww, hh);

  const divs = [];
  const letters = "ABCDE";
  for (let i = 0; i < (points.length - 1) / 2; i++) {
    const isHovered =
      hoveredDiv && hoveredDiv.index === i && hoveredDiv.qindex === qindex;
    const isClicked = clickedIndexes[qindex] === i;

    divs.push(
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${(points[2 * i].x / 100) * ww - 10}px`,
          top: `${(points[2 * i].y / 100) * hh - 10}px`,
          width: `${
            ((points[2 * i + 1].x - points[2 * i].x) / 100) * ww + 20
          }px`,
          height: `${
            ((points[2 * i + 1].y - points[2 * i].y) / 100) * hh + 20
          }px`,
          transition: "border 0.3s ease-in-out",
          pointerEvents: "all",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseEnter={() => handleMouseEnter(i, qindex)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(i, qindex)}
        className=" inverse-hover"
      >
        {(isClicked || isHovered) && <ChoiceBox answer={"#0D0D0D"} />}
        {/* {isClicked && (
            <span style={{ padding: "4px 8px" }}>{letters[i / 2]}</span>
          )} */}
      </div>
    );
  }
  return divs;
};

export default RenderDivs;

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ChoiceDrawer = (agaImage,width,height,handleImageLoadLeft) => {
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
    { x: 82.6, y: 96.81 }
  ];

  const [hoveredDiv, setHoveredDiv] = useState(null);
  const [clickedDiv, setClickedDiv] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0
  });
  const [clickedIndexes, setClickedIndexes] = useState([]);


  const handleMouseEnter = (index) => {
    if (clickedDiv === null) {
      setHoveredDiv(index);
    }
  };

  const handleMouseLeave = () => {
    if (clickedDiv === null) {
      setHoveredDiv(null);
    }
  };

  const handleClick = (index) => {
    if (clickedDiv === index) {
      setClickedDiv(null);
      removeClickedIndex(index);
    } else {
      setClickedDiv(index);
      setHoveredDiv(null);
      addClickedIndex(index);
    }
  };

  const addClickedIndex = (index) => {
    setClickedIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  const removeClickedIndex = (index) => {
    setClickedIndexes((prevIndexes) =>
      prevIndexes.filter((clickedIndex) => clickedIndex !== index)
    );
  };

  const renderDivs = () => {
    const divs = [];
    const letters = "ABCDE";
    for (let i = 0; i < points.length - 1; i += 2) {
      const isHovered = hoveredDiv === i;
      const isClicked = clickedDiv === i;
      const divStyle = {
        position: "absolute",
        left: `${(points[i].x / 100) * width}px`,
        top: `${(points[i].y / 100) * height}px`,
        width: `${
          ((points[i + 1].x - points[i].x) / 100) * width
        }px`,
        height: `${
          ((points[i + 1].y - points[i].y) / 100) * height
        }px`,
        border: isClicked || isHovered ? "1px solid black" : "none",
        transition: "border 0.3s ease-in-out",
        pointerEvents: "all",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: isClicked ? "rgba(0, 0, 0, 0.5)" : "transparent",
        color: isClicked ? "#fff" : "transparent",
        cursor: "pointer"
      };

      divs.push(
        <div
          key={i}
          style={divStyle}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        >
          {isClicked && (
            <span style={{ padding: "4px 8px" }}>{letters[i / 2]}</span>
          )}
        </div>
      );
    }
    return divs;
  };

  return (
    <div style={{ position: "relative" }}>
      
        
          <Image
          src={agaImage}
          alt="lolol"
          width={400}
          height={270}
          className="w-full h-auto max-h-[1200px] inverse-hover relative"
          onLoad={handleImageLoadLeft}
        />
     
        {width !== 0 && renderDivs()}

    </div>
  );
};

export default ChoiceDrawer;

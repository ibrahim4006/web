// export default ImageHover;
import React, { useState, useEffect } from "react";
import { ImageHoverProps } from "@/types";

interface Point {
  x: number;
  y: number;
}

const ImageHover: React.FC<ImageHoverProps> = ({ imagelink, coordinates, setStudentAnswer}) => {
  const points: Point[] = coordinates;

  const [hoveredDiv, setHoveredDiv] = useState<number | null>(null);
  const [clickedDiv, setClickedDiv] = useState<number | null>(null);
  const [letters, setLetters] = useState<string>("ABCDE");
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const image = document.createElement("img");
    image.src = imagelink;
    image.onload = () => {
      const maxWidth = 400;
      const aspectRatio = image.width / image.height;
      const calculatedWidth = image.width > maxWidth ? maxWidth : image.width;
      const calculatedHeight = calculatedWidth / aspectRatio;
      setImageDimensions({ width: calculatedWidth, height: calculatedHeight });
    };
  }, []);

  const handleMouseEnter = (index: number) => {
      setHoveredDiv(index);
  };

  const handleMouseLeave = () => {
      setHoveredDiv(null);
  };

  const handleClick = (index: number) => {
    if (clickedDiv === index) {
      setClickedDiv(null);
      removeClickedIndex(index);
      setStudentAnswer("")
    } else {
      setClickedDiv(index);
      setStudentAnswer(letters[index / 2])
      setHoveredDiv(null);
      addClickedIndex(index);
    }
  };

  const addClickedIndex = (index: number) => {
    setClickedIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  const removeClickedIndex = (index: number) => {
    setClickedIndexes((prevIndexes) =>
      prevIndexes.filter((clickedIndex) => clickedIndex !== index)
    );
  };

  const renderDivs = () => {
    const divs: JSX.Element[] = [];
    for (let i = 0; i < points.length - 1; i += 2) {
      const isHovered = hoveredDiv === i;
      const isClicked = clickedDiv === i;
      const divStyle: React.CSSProperties = {
        position: "absolute",
        left: `${(points[i].x / 100) * imageDimensions.width}px`,
        top: `${(points[i].y / 100) * imageDimensions.height}px`,
        width: `${
          ((points[i + 1].x - points[i].x) / 100) * imageDimensions.width
        }px`,
        height: `${
          ((points[i + 1].y - points[i].y) / 100) * imageDimensions.height
        }px`,
        border: isClicked || isHovered ? "2px solid red" : "none",
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
      <div
        style={{
          position: "relative",
          width: imageDimensions.width,
          maxWidth: "400px",
          height: "auto"
        }}
      >
        {imageDimensions.width !== 0 && (
          <img
            src={imagelink}
            alt="Aga"
            width={imageDimensions.width}
            height={imageDimensions.height}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        )}
        {imageDimensions.width !== 0 && renderDivs()}
      </div>
    </div>
  );
};

export default ImageHover;


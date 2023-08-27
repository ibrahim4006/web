import { RectangleDrawerProps } from "@/types";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

interface Point {
  x: number;
  y: number;
}
interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}


export default function RectangleDrawer({
  setPoints,
  points,
  preview,
  rectangles,
  setRectangles
}: RectangleDrawerProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (points.length >= 2 && points.length % 2 === 0) {
      drawRectangle();
    }
  }, [points]);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const imageWidth = imageRef.current?.width ?? 0;
    const imageHeight = imageRef.current?.height ?? 0;
    const xPercentage = (offsetX / imageWidth) * 100;
    const yPercentage = (offsetY / imageHeight) * 100;
    const newPoint: Point = { x: xPercentage, y: yPercentage };
    setPoints([...points, newPoint]);
  };

  const drawRectangle = () => {
    const lastIndex = points.length - 1;
    const point1 = points[lastIndex - 1];
    const point2 = points[lastIndex];
    const rectangle: Rectangle = {
      x: Math.min(point1.x, point2.x),
      y: Math.min(point1.y, point2.y),
      width: Math.abs(point2.x - point1.x),
      height: Math.abs(point2.y - point1.y),
    };
  
    setRectangles([...rectangles, rectangle]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
          textAlign: "center",
          margin: "auto",
        }}
      >
        {preview && (
          <Image
            src={URL.createObjectURL(preview)}
            alt="Example question"
            className="object-cover"
            width={350}
            height={250}
            {...(points.length < 10 && { onClick: handleClick })}
            ref={imageRef}
          />
        )}
        {points.map((point, index) => {
          const isLastPoint = index === points.length - 1;
          const isOddPoint = index % 2 === 0;
          const isRedDotVisible = isLastPoint && isOddPoint;

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: `${point.x}%`,
                top: `${point.y}%`,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                backgroundColor: isRedDotVisible ? "red" : "transparent",
              }}
            />
          );
        })}
        {rectangles.map((rectangle, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${rectangle.x}%`,
              top: `${rectangle.y}%`,
              width: `${rectangle.width}%`,
              height: `${rectangle.height}%`,
              border: "1px solid black",
              boxSizing: "border-box",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

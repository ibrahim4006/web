"use client";
import { useRef, useEffect, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 300, y: 300 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [elements, setElements] = useState([]);
  const [niggas, setNiggas] = useState([]);
  const [pakis, setPakis] = useState([]);
  const [yetis, setYetis] = useState([]);
  const [sides, setSides] = useState([]);
  const [canvas, setCanvas] = useState([]);
  const [speeds, setSpeeds] = useState<number>(0.2);
  const [speed, setSpeed] = useState<number>(0.05);

  const poss = { x: -12, y: -12 };

  const cursorRefsmall = useRef(null);

  const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    poss.x += (mouse.x - poss.x) * speeds;
    poss.y += (mouse.y - poss.y) * speeds;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      cursorRefsmall.current.style.transform = `translate3d(${poss.x}px, ${poss.y}px, 0)`;
    }
  };

  const updateCoordinates = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    //console.log(window)
    //console.log(e)

    //const cursorStyle = window.getComputedStyle(e.target).cursor;
    //setIsPointer(cursorStyle === "pointer");
  };

  const handleMouseOver = () => {
    setIsPointer(true);
  };

  // Function to handle hover-out event
  const handleMouseOut = () => {
    setIsPointer(false);
  };
  // Function to handle hover-in event
  const canvasMouseIn = () => {
    setSpeeds(1); // between 0 and 1
    setSpeed(1); // between 0 and 1
  };
  // Function to handle hover-out event
  const canvasMouseOut = () => {
    setSpeeds(0.2); // between 0 and 1
    setSpeed(0.05); // between 0 and 1
  };

  useEffect(() => {
    setNiggas(document.getElementsByClassName("inverse-hover"));

    const elements = [...niggas];

    window.addEventListener("mousemove", updateCoordinates);

    setYetis(document.getElementsByClassName("canvas"));

    const canvas = [...yetis];

    for (let i = 0; i < canvas.length; i++) {
      canvas[i].addEventListener("mouseover", canvasMouseIn);
      canvas[i].addEventListener("mouseout", canvasMouseOut);
    }

    for (const element of elements) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    }

    const loop = () => {
      updatePosition();
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", updateCoordinates);
      for (const element of elements) {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      }
      for (let i = 0; i < canvas.length; i++) {
        canvas[i].removeEventListener("mouseenter", canvasMouseIn);
        canvas[i].removeEventListener("mouseout", canvasMouseOut);
      }
    };
  }, [elements, niggas, yetis, speeds]);

  return (
    <>
      <div id="cursor" ref={cursorRef}>
        <div
          id="big-cursor"
          className="cursor--inner"
          style={{
            width: isPointer ? "15px" : "30px",
            height: isPointer ? "15px" : "30px",
            transition: "width .3s, height .3s",
          }}
        />
      </div>
      <div id="cursor--small" ref={cursorRefsmall}>
        <div
          id="small-cursor"
          className="cursor--inner--small"
          style={{
            width: isPointer ? "40px" : "10px",
            height: isPointer ? "40px" : "10px",
            transition: "width .5s, height .5s",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;

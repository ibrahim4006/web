import Image from "next/image";
import React, { useState, useEffect } from "react";

type Props = {};

const HoverXSlider = ({id, percentage}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(false);
  const [threshold, setThreshold] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [niggas, setNiggas] = useState([]);
  const [elements, setElements] = useState([]);
  




  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY + window.scrollY });

      setScreenWidth(window.innerWidth);
      setThreshold(screenWidth * percentage);


      setIsVisible(
        mousePosition.x < threshold || mousePosition.x > screenWidth - threshold
      );
      if (mousePosition.x < threshold) {
        setDirection(false);
      }
      if (mousePosition.x > screenWidth - threshold) {
        setDirection(true);
      }
    };

    

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition,screenWidth,threshold]);
  
  const slide = () => {
        if (mousePosition.x < threshold) {
            slideLeft()
          }
          if (mousePosition.x > screenWidth - threshold) {
            slideRight()
          }
    }

  const slideLeft = () => {
    var slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft = slider.scrollLeft - 964;
    console.log(`slider-${id} has been shifter to left`)
  };

  const slideRight = () => {
    var slider = document.getElementById(`slider-${id}`);
    slider.scrollLeft = slider.scrollLeft + 964;
    console.log(`slider-${id} has been shifter to right`)
  };

  return (
    <>
      {isVisible && (
        <div
          key={"chat toggle button"}
          className="inverse-hover absolute flex justify-center items-center toggle-holder z-[999]"
          style={{
            top: `${mousePosition.y - 8}px`, //
            left: `${mousePosition.x - 29}px`, //
          }}
        >
          <Image
            src="/bumerang_parça/bumerangtek.svg"
            alt="chat toggle button "
            width={20}
            height={20}
            className={
              direction
                ? "-rotate-90 translate-x-3 transition-transform duration-500 toggle"
                : "rotate-90  translate-x-6 transition-transform duration-500 toggle2"
            }
            //64% previously
            onClick={slide}
          />
          <Image
            src="/bumerang_parça/bumerangtek.svg"
            alt="chat toggle button "
            width={30}
            height={30}
            className={
              direction
                ? "-rotate-90  transition-transform duration-500 scale-150 "
                : "rotate-90  -translate-x-3 transition-transform duration-500 scale-150 "
            }
            //64% previously
            onClick={slide}
          />
        </div>
      )}
    </>
  );
};

export default HoverXSlider;

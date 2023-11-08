"use client";
import CardOuter from "@/components/common/CardOuter";
import MainCard from "@/components/common/MainCard";
import SquareButton from "@/components/common/SquareButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Page: React.FC = () => {
  // State to manage card visibility
  const [cardVisibilities, setCardVisibilities] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    // Define timeouts for each card's appearance
    const cardTimeouts = [500, 650, 800, 950, 1100, 1250, 1250];

    cardTimeouts.forEach((timeout, index) => {
      timeouts.push(
        setTimeout(() => {
          setCardVisibilities((prevVisibilities) => {
            const updatedVisibilities = [...prevVisibilities];
            updatedVisibilities[index] = true;
            return updatedVisibilities;
          });
        }, timeout)
      );
    });

    // Clean up timeouts when component unmounts
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="relative h-[970px] w-full">
      {cardVisibilities.map(
        (isVisible, index) =>
          isVisible && (
            <div
              key={index}
              className={`absolute ${getPositionForCard(index)} z-${
                3 + index
              } `}
            >
              {renderCard(index)}
            </div>
          )
      )}
      <div className="relative h-[150%] w-screen center z-10 flex items-center justify-center backdrop-blur-md"/>
    </div>
  );
};

// Helper function to calculate card position based on index
function getPositionForCard(index: number): string {
  const positions = [
    "top-[3%] left-[25%]",
    "top-[50%] left-[20%]",
    "top-[30%] left-[50%]",
    "top-[7%] left-[45%]",
    "top-[30%] left-[15%]",
    "top-[45%] left-[40%]",
    "top-[0%] left-[0%]",

    // "top-[5%] left-[5%]",
    // "top-[10%] left-[60%]",
    // "top-[40%] left-[20%]",
    // "top-[70%] left-[10%]",
    // "top-[60%] left-[70%]",
    // "top-[30%] left-[50%]",
    // "top-[0%] left-[0%]",
  ];
  return positions[index];
}

// Helper function to render specific card based on index
function renderCard(index: number): JSX.Element {
  if (index === 6) {
    return (
      <div className="relative h-screen w-screen center z-20 flex">
        <div className=" panelcard w-[435px] h-[600px] flex flex-col items-center bg-[#f7f6f1] text-white text-opacity-80  animate_content_closing">
          <div className="w-full h-full absolute invert z-10">
            <div className="card-frame-top"></div>
            <div className="card-frame-bottom"></div>
            <CardOuter />
          </div>
          <Image
            src="/logo-siyah.png"
            alt="Bommerang Logo"
            width={285}
            height={100}
            className=" my-20 h-[65px] min-w-[285px] center inverse-hover floating-horizontal"
          />

          <div className="relative h-14 w-[80%] flex items-center my-2 group overflow-visible">
            <div className="w-full h-full absolute invert z-10 overflow-visible">
              <div className="card-frame-left-fixed group-hover group-hover:scale-y-125 duration-100"></div>
              <div className="card-frame-right-fixed group-hover:scale-y-125 duration-100"></div>
            </div>
            <form className="z-20 w-full h-14 flex center">
              <input
                type="email"
                className="w-[88%] h-12 bg-transparent border-transparent focus:border-y focus:border-opacity-30 focus:border-[#0d0d0d] outline-0 text-[#0d0d0d] px-4 group-hover:px-6 duration-100"
                placeholder="e-mail"
              />
            </form>
          </div>
          <div className="relative h-14 w-[80%] flex items-center my-2 group overflow-visible">
            <div className="w-full h-full absolute invert z-10 overflow-visible">
              <div className="card-frame-left-fixed group-hover group-hover:scale-y-125 duration-100"></div>
              <div className="card-frame-right-fixed group-hover:scale-y-125 duration-100"></div>
            </div>
            <form className="z-20 w-full h-14 flex center">
              <input
                type="password"
                className="w-[88%] h-12 bg-transparent border-transparent focus:border-y focus:border-opacity-30 focus:border-[#0d0d0d] outline-0 text-[#0d0d0d] px-4 group-hover:px-6 duration-100"
                placeholder="şifre"
              />
            </form>
          </div>
          <div
            key={"card button holder"}
            className="flex justify-between items-center mt-16 group w-[72%] z-50"
          >
            <div className="flex justify-center items-center space-x-2">
              <SquareButton
                title={"?"}
                containerStyles="card-btn-white-login unuttum relative inverse-hover"
                //handleClick={buttonRightAction}
              />
              <SquareButton
                title={"+"}
                containerStyles="card-btn-white-login uye-ol relative inverse-hover"
                //handleClick={buttonRightAction}
              />
            </div>
            <SquareButton
              title={"giriş"}
              containerStyles="card-btn inverse-hover whitespace-nowrap border border-[#0d0d0d]"
              //handleClick={buttonLeftAction}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <MainCard />;
  }
}

export default Page;

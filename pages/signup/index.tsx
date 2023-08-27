"use client"
import MainCard from "@/components/common/MainCard";
import React, { useState, useEffect } from "react";

const Page: React.FC = () => {
  // State to manage card visibility
  const [cardVisibilities, setCardVisibilities] = useState([
    false, false, false, false, false, false, false
  ]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    // Define timeouts for each card's appearance
    const cardTimeouts = [
      500, 1000, 1500, 2000, 2500, 3000, 3500
    ];

    cardTimeouts.forEach((timeout, index) => {
      timeouts.push(setTimeout(() => {
        setCardVisibilities((prevVisibilities) => {
          const updatedVisibilities = [...prevVisibilities];
          updatedVisibilities[index] = true;
          return updatedVisibilities;
        });
      }, timeout));
    });

    // Clean up timeouts when component unmounts
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="relative">
      {cardVisibilities.map((isVisible, index) => (
        isVisible && (
          <div
            key={index}
            className={`absolute ${getPositionForCard(index)} z-${3 + index}`}
          >
            {renderCard(index)}
          </div>
        )
      ))}
    </div>
  );
};

// Helper function to calculate card position based on index
function getPositionForCard(index: number): string {
  const positions = [
    "top-24 left-[25%]",
    "top-14 left-[40%]",
    "top-40 left-[20%]",
    "top-1 left-[15%]",
    "top-20 left-[5%]",
    "top-28 left-[45%]",
    "top-60 left-[40%]"
  ];
  return positions[index];
}

// Helper function to render specific card based on index
function renderCard(index: number): JSX.Element {
  if (index === 6) {
    return (
      <div className="border bg-[#f7f6f1] px-2">
        <div className="panelcard w-72 h-24 flex flex-col justify-center items-center">
          <div className="frame-right"></div>
          <div className="frame-left"></div>
          <h1>Öğrenci #1234</h1>
          <h1>Boomeranga hoş geldin</h1>
        </div>
      </div>
    );
  } else {
    return <MainCard />;
  }
}

export default Page;

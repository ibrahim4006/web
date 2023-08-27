import { ChoiceCardProps } from "@/types";
import React, {useEffect} from "react";
import SquareButton from "./SquareButton";

export default function ChoiceCard({
  options,
  direction,
  setActiveOption,
  activeOption,
}: ChoiceCardProps) {
  const changeActiveOption = (option: string) => {
    setActiveOption(option);
  };
  // Use useEffect to navigate when activeOption changes to "Başlat"
  useEffect(() => {
    if (activeOption === "Başlat") {
      // Navigate to the "/snake" page
      window.location.href = "/snake";
    }
    if (activeOption === "Geri Dön") {
      // Navigate to the "/snake" page
      window.location.href = "/";
    }
  }, [activeOption]);
  return (
    <div
      className={
        direction === "horizontal"
          ? "center space-x-10 w-full"
          : "flex flex-col justify-center items-center space-y-5"
      }
    >
      {options.map((option) => (
        <SquareButton
          key={option}
          title={option}
          containerStyles={
            activeOption === option
              ? `square-btn text-sm font-light active`
              : `square-btn text-sm font-light`
          }
          handleClick={() => changeActiveOption(option)}
        />
      ))}
    </div>
  );
}

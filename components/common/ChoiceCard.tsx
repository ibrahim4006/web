import { ChoiceCardProps } from "@/types";
import React, {useEffect} from "react";
import SquareButton from "./SquareButton";
import { useRouter } from "next/router";


export default function ChoiceCard({
  options,
  direction,
  setActiveOption,
  activeOption,
  queryData
}: ChoiceCardProps) {
  const router = useRouter(); 
  const changeActiveOption = (option: string) => {
    setActiveOption(option);
  };

  useEffect(() => {
    if (activeOption === "Başlat" && queryData) {
      router.push({
        pathname: `/snake`,
        query: { activeLesson: queryData[0], activeChapter: queryData[1] }
      });
    }
    if (activeOption === "Geri Dön") {
      router.push("/");
    }
  }, [activeOption]);
  

  return (
    <div
      className={
        direction === "horizontal"
          ? "center space-x-10"
          : "flex flex-col justify-center items-center space-y-1"
      }
    >
      {options.map((option) => (
        <SquareButton
          key={option}
          title={direction === "vertical" ? option.split("-")[2] : option }
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

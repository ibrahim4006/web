import { ChoiceCardProps } from "@/types";
import React, {useEffect} from "react";
import SquareButton from "./SquareButton";
import { useRouter } from "next/router";
import handleFullScreenClick from "@/utils/Fullscreen";


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
      handleFullScreenClick()
    }
    if (activeOption === "Geri Dön") {
      router.push("/");
    }
  }, [activeOption, queryData, router]);
  

  return (
    <div
      className={
        direction === "horizontal"
          ? "center flex flex-col whitespace-nowrap lg:flex-row lg:space-x-1 xl:space-x-6 2xl:space-x-12"
          : "flex flex-col justify-center items-center space-y-1"
      }
    >
      {options.map((option) => (
        <SquareButton
          key={option}
          title={direction === "vertical" ? option.split("-")[2] : option }
          containerStyles={
            activeOption === option
              ? `square-btn inverse-hover text-base font-light active`
              : `square-btn inverse-hover text-base font-light `
          }
          handleClick={() => changeActiveOption(option)}
        />
      ))}
    </div>
  );
}

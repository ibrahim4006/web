import PageTag from "@/components/common/PageTag";
import { TopNameTag } from "@/components/common/TopNameTag";
import React, { useRef } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Canvas from "@/components/common/Canvas";
import Denemedrop from "@/components/profile/denemedrop";
import SoruAyrac from "@/components/deneme/SoruAyrac";
import CanvasButtons from "@/components/deneme/CanvasButtons";
import ChoiceDrawer from "@/components/common/ChoiceDrawer";
import ChoiceBox from "@/components/common/ChoiceBox";
import RenderDivs from "@/components/deneme/RenderDivs";
import BottomQButton from "@/components/deneme/BottomQButton";

type Props = {};

const page = (props: Props) => {
  const [questionexist, setQuestionExist] = useState(false);
  const { canvasRef, onMouseDown, clear, setColor, undo } = Canvas();
  const [canvasShow, setCanvasShow] = useState(false);

  const [openButtons, setOpenButtons] = useState<number>(0);

  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);

  const [rightheights, setRightHeights] = useState<number[]>([]);
  const [rightwidths, setRightWidths] = useState<number[]>([]);
  const [leftheights, setLeftHeights] = useState<number[]>([]);
  const [leftwidths, setLeftWidths] = useState<number[]>([]);

  const [clickedIndexes, setClickedIndexes] = useState<number[]>([0]);
  const [mappedArray, setMappedArray] = useState<string[]>([]);

  useEffect(() => {
    const alphabetArray = ["A", "B", "C", "D", "E"];
    const newMappedArray = clickedIndexes.map((index) => alphabetArray[index]);
    setMappedArray(newMappedArray);
  }, [clickedIndexes]);

  console.log(mappedArray);

  const imageurls = [
    "/soru/soru_1.svg",
    "/soru/soru_2.svg",
    "/soru/soru_3.svg",
    "/soru/soru_4.svg",
    "/soru/soru_5.svg",
    "/soru/soru_6.svg",
    "/soru/soru_7.svg",
    "/soru/soru_8.svg",
    "/soru/soru_9.svg",
    "/soru/soru_10.svg",
  ];

  const handleImageLoadRight = (event: React.MouseEvent<HTMLImageElement>) => {
    const imageHeight = event.currentTarget.height ?? 0;
    const imageWidth = event.currentTarget.width ?? 0;
    setRightHeights((heights) => [...heights, imageHeight]); // Add the new height to the array
    setRightWidths((widths) => [...widths, imageWidth]); // Add the new height to the array
  };

  const handleImageLoadLeft = (event: React.MouseEvent<HTMLImageElement>) => {
    const imageHeight = event.currentTarget.height ?? 0;
    const imageWidth = event.currentTarget.width ?? 0;
    setLeftHeights((heights) => [...heights, imageHeight]); // Add the new height to the array
    setLeftWidths((widths) => [...widths, imageWidth]); // Add the new height to the array
  };

  //console.log(leftheights, "leftheights");
  //console.log(rightheights, "rightheights");

  const [topPositionsLeft, setTopPositionsLeft] = useState([]);
  const [topPositionsRight, setTopPositionsRight] = useState([]);

  useEffect(() => {
    const indicatorLeftElements = document.querySelectorAll(".indicator_left");
    const topPositionsLeftArray = [];

    indicatorLeftElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      topPositionsLeftArray.push(rect.top);
    });

    setTopPositionsLeft(topPositionsLeftArray);
    //console.log(topPositionsLeftArray, "lefttop");

    const indicatorRightElements =
      document.querySelectorAll(".indicator_right");
    const topPositionsRightArray = [];

    indicatorRightElements.forEach((element) => {
      const rect2 = element.getBoundingClientRect();
      topPositionsRightArray.push(rect2.top);
    });

    setTopPositionsRight(topPositionsRightArray);
    //console.log(topPositionsRightArray, "righttop");
  }, []);

  const [windowY, setwindowY] = useState<number>();

  useEffect(() => {
    function handleMouseMove(event) {
      setwindowY(window.scrollY);
    }

    document.addEventListener("scroll", handleMouseMove);

    return () => {
      document.removeEventListener("scroll", handleMouseMove);
    };
  }, [windowY]);

  useEffect(() => {
    function handleMouseMove(event) {
      const mouseY = event.clientY + window.scrollY;
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (number) => {
    const element = document.getElementById(`section-${number}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      const topPosition = rect.top;
      window.scrollTo({
        top: window.scrollY + topPosition - 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <PageTag tag="DENEME / BRANŞ" />
      <TopNameTag nametag="DENEME" game={true} />
      <div className={`w-full flex flex-col relative`}>
        <div
          key={"soru / süre değerleri"}
          className="flex w-[600px] 2xl:w-[800px] h-[200px] justify-between flex-row py-12 ml-[8%] lg:ml-[12%] 2xl:ml-[20%] left-0"
        >
          <Denemedrop
            input={1}
            alignment="left"
            text="işaretlenen soru"
            value="   32"
            key={"işaretlenen soru"}
          />
          <Denemedrop
            input={1}
            alignment="left"
            text="toplam soru"
            value="  40"
            key={"toplam soru"}
          />
          <Denemedrop
            input={1}
            alignment="left"
            text="geçen dakika"
            value="  62"
            key={"geçen süre"}
          />
        </div>
        <CanvasButtons
          canvasShow={canvasShow}
          setCanvasShow={setCanvasShow}
          clear={clear}
          setColor={setColor}
          undo={undo}
        />
        <div className="w-full h-14 flex relative top-0 border-b-[1px] border-b-[#00D0D0D] items-end">
          <span className="profile-head left-[20%] relative text-2xl pb-2 font-bold inverse-hover text-[#0D0D0D]">
            MATEMATİK
          </span>
        </div>
        <div className="w-full flex flex-row relative h-[15000px] justify-between top-0">
          <canvas
            ref={canvasRef}
            onMouseDown={onMouseDown}
            width={1920}
            height={15000}
            className={
              canvasShow
                ? " canvas absolute top-0 z-40"
                : "canvas pointer-events-none absolute top-0 -z-40"
            }
          />
          <div className="w-1/2 h-full flex flex-col relative left-0 items-center top-0 pt-16">
            {[...Array(5)].map((subject, qindex) => (
              <div
                className="  relative h-[1500px] w-full flex flex-col items-start justify-start pl-12 pr-24 xl:pl-24 xl:pr-36 2xl:pl-36 2xl:pr-48 pt-48"
                key={`${qindex}.question`}
              >
                <span
                  id={`section-${2 * qindex + 1}`}
                  className="font-bold text-4xl  mb-16 text-[#0D0D0D] indicator_left"
                >
                  {2 * qindex + 1}
                </span>
                <div className="relative w-full">
                  <Image
                    src={imageurls[qindex]}
                    alt="lolol"
                    width={400}
                    height={270}
                    className="w-full h-auto max-h-[1200px] pointer-events-none relative"
                    onLoad={handleImageLoadLeft}
                  />
                  <RenderDivs
                    qindex={2 * qindex + 1}
                    dir="left"
                    leftwidths={leftwidths}
                    rightwidths={rightwidths}
                    leftheights={leftheights}
                    rightheights={rightheights}
                    setClickedIndexes={setClickedIndexes}
                    clickedIndexes={clickedIndexes}
                  />
                </div>
                {/* <ChoiceDrawer
                  agaImage={imageurls[qindex]}
                  width={leftwidths[qindex]}
                  height={leftheights[qindex]}
                  handleImageLoadLeft={handleImageLoadLeft}
                /> */}
                {/* <SquareButton
                  title="SORUNUN ÇÖZÜMÜ"
                  containerStyles="ingame-btn inverse-hover "
                  handleClick={() => takeQuestion("fetch")}
                /> */}
              </div>
            ))}
          </div>
          <div
            key={"orta ayraç"}
            className=" absolute left-0 right-0 mx-auto flex w-[1px] bg-[#0D0D0D] h-full z-10 justify-center"
          >
            <div className="arrow arrow-down absolute top-0 flex flex-col items-center" />
            <div className="arrow arrow-up absolute bottom-0 flex flex-col items-center" />
            {leftheights &&
              topPositionsLeft &&
              [...Array(leftheights.length)].map((subject, ind_left_index) => (
                <SoruAyrac
                  key={`${2 * ind_left_index + 1}.soru`}
                  index={1}
                  qnumber={2 * ind_left_index + 1}
                  pos={
                    windowY > 600
                      ? windowY -
                        625 +
                        flaggedQuestions.indexOf(2 * ind_left_index + 1) * 50
                      : topPositionsLeft[ind_left_index] +
                        leftheights[ind_left_index] / 2 -
                        600
                  }
                  fixed={
                    topPositionsLeft[ind_left_index] +
                    leftheights[ind_left_index] / 2 -
                    600
                  }
                  canvasShow={canvasShow}
                  setCanvasShow={setCanvasShow}
                  flaggedQuestions={flaggedQuestions}
                  setFlaggedQuestions={setFlaggedQuestions}
                  scrollToSection={scrollToSection}
                  openButtons={openButtons}
                  setOpenButtons={setOpenButtons}
                />
              ))}
            {rightheights &&
              topPositionsRight &&
              [...Array(rightheights.length)].map(
                (subject, ind_right_index) => (
                  <SoruAyrac
                    key={`${2 * ind_right_index + 2}.soru`}
                    index={2}
                    qnumber={2 * ind_right_index + 2}
                    pos={
                      windowY > 600
                        ? windowY -
                          625 +
                          flaggedQuestions.indexOf(2 * ind_right_index + 2) * 50
                        : topPositionsRight[ind_right_index] +
                          rightheights[ind_right_index] / 2 -
                          600
                    }
                    fixed={
                      topPositionsRight[ind_right_index] +
                      rightheights[ind_right_index] / 2 -
                      600
                    }
                    canvasShow={canvasShow}
                    setCanvasShow={setCanvasShow}
                    flaggedQuestions={flaggedQuestions}
                    setFlaggedQuestions={setFlaggedQuestions}
                    scrollToSection={scrollToSection}
                    openButtons={openButtons}
                    setOpenButtons={setOpenButtons}
                  />
                )
              )}
          </div>
          <div className="w-1/2 flex flex-col  relative right-0 items-center top-0 ">
            {[...Array(5)].map((subject, qindex) => (
              <div
                className="  relative h-[1500px] w-full flex flex-col items-start justify-end pl-12 pr-24 xl:pl-24 xl:pr-36 2xl:pl-36 pb-48"
                key={`${qindex}.question`}
              >
                <span
                  id={`section-${2 * qindex + 2}`}
                  className="font-bold text-4xl mb-16 text-[#0D0D0D] indicator_right"
                >
                  {2 * qindex + 2}
                </span>
                <div className="relative w-full">
                  <Image
                    src={imageurls[9 - qindex]}
                    alt="lolol"
                    width={400}
                    height={270}
                    className="w-full h-auto  max-h-[1200px]  pointer-events-none relative"
                    onLoad={handleImageLoadRight}
                  />
                  <RenderDivs
                    qindex={2 * qindex + 2}
                    dir="right"
                    leftwidths={leftwidths}
                    rightwidths={rightwidths}
                    leftheights={leftheights}
                    rightheights={rightheights}
                    setClickedIndexes={setClickedIndexes}
                    clickedIndexes={clickedIndexes}
                  />
                </div>
                {/* <SquareButton
                  title="SORUNUN ÇÖZÜMÜ"
                  containerStyles="ingame-btn inverse-hover "
                  handleClick={() => takeQuestion("fetch")}
                /> */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[90%] h-80 right-0 left-0 mx-auto items- center">
          <div className="flex flex-row w-full justify-between pb-6 z-1">
            {[...Array(10)].map((subject, frindex) => (
              <BottomQButton
                key={frindex}
                text={mappedArray[frindex + 1] ? mappedArray[frindex + 1] : ""}
                onClick={() => scrollToSection(frindex + 1)}
              />
            ))}
          </div>
          <div className="absolute w-[95%] h-28 rounded-md border-[1px] -z-10 border-[#0D0D0D] opacity-30"></div>
          <div className="flex flex-row w-full justify-between pt-6 z-1">
            {[...Array(10)].map((subject, srindex) => (
              <BottomQButton
                key={srindex}
                text={
                  mappedArray[11 + srindex] ? mappedArray[11 + srindex] : ""
                }
                onClick={() => scrollToSection(11 + srindex)}
              />
            ))}
          </div>
        </div>
        <div className="bottom-0 right-0 left-0 mx-auto mt-0 w-[500px] h-72 inverse-hover relative flex center font-bold text-3xl text-[#0D0D0D]">
          <div className="border-[1px] border-b-0 h-1/2 w-full absolute bottom-0 right-0 left-0 mx-auto rounded-md rounded-b-none" />
          <BottomQButton text={"TESTİ BİTİR"} height={120} width={300} />
          <div className="arrow arrow-up absolute bottom-0 -left-[3.5px] flex flex-col items-center" />
          <div className="arrow arrow-up absolute bottom-0 -right-[3.5px] flex flex-col items-center" />
        </div>
      </div>
    </div>
  );
};

export default page;

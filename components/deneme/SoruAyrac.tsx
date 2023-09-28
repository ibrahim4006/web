import React, { useEffect, useState } from "react";
import SliderButton from "./SliderButton";

type Props = {};

const SoruAyrac = ({
  qnumber,
  index,
  pos,
  canvasShow,
  setCanvasShow,
  fixed,
  flaggedQuestions,
  setFlaggedQuestions,
  scrollToSection,
  openButtons,
  setOpenButtons,
}) => {
  const [direction, setDirection] = useState("right");
  const [showButtons, setShowButtons] = useState(false);
  const [kalem, setKalem] = useState(false);
  const [kaydet, setKaydet] = useState(false);
  const [isaretle, setIsaretle] = useState(false);

  useEffect(() => {
    setDirection(index % 2 == 0 ? "right" : "left");
  }, [index]);

  useEffect(() => {
    qnumber === openButtons ? setShowButtons(true) : setShowButtons(false);
  }, [openButtons, qnumber]);

  return (
    <div
      className="h-fit absolute transition-top duration-1000 scale-50 md:scale-75 xl:scale-100"
      style={{ top: isaretle ? `${pos}px` : `${fixed}px` }}
    >
      {direction == "left" && (
        <div
          className={
            isaretle
              ? "w-fit h-fit flex relative disabled:group flex-row items-center "
              : "w-fit h-fit flex relative group flex-row items-center "
          }
          onClick={() => {
            setOpenButtons(qnumber);
            setShowButtons(!showButtons);
            console.log(qnumber, direction);
            isaretle ? scrollToSection(qnumber) : null;
          }}
        >
          <div
            className={
              isaretle
                ? "w-[83px] hidden absolute right-full bottom-1/2 items-center duration-200"
                : showButtons
                ? " w-[83px] flex absolute right-full bottom-1/2 items-center duration-200 "
                : " w-[53px] group-hover:w-[83px] flex absolute right-full bottom-1/2 items-center duration-200 "
            }
          >
            <div className="h-[6px] w-[13px] rounded-full bg-[#0D0D0D] absolute left-0 duration-200" />
            <div
              className={
                showButtons
                  ? "h-[1px] w-[70px] bg-[#0D0D0D] absolute right-0 duration-200 "
                  : "h-[1px] w-[40px] group-hover:w-[70px] bg-[#0D0D0D] absolute right-0 duration-200"
              }
            />
          </div>
          <div className="border-[1px] h-10 w-10 rounded-full flex center relative inverse-hover">
            <div className=" h-6 w-6 bg-[#0D0D0D] rounded-full" />
          </div>
          <div
            key={"time left min"}
            className={
              isaretle
                ? "opacity-100 -top-4  w-fit absolute right-12 hidden flex-row space-x-1 items-end transition-top duration-200"
                : showButtons
                ? " opacity-100 -top-4  w-fit absolute right-12 flex flex-row space-x-1 items-end transition-top duration-200"
                : " group-hover:opacity-100 group-hover:-top-4 opacity-0 top-2 w-fit absolute right-12 flex flex-row space-x-1 items-end transition-top duration-200"
            }
          >
            <span className="font-bold text-2xl relative left-0">9</span>
            <span className="font-light text-base relative right-0">dk</span>
          </div>
          <div
            key={"time left sec"}
            className={
              isaretle
                ? "opacity-100 -bottom-5  w-fit absolute right-12 hidden flex-row space-x-1 items-start transition-bottom duration-200"
                : showButtons
                ? "opacity-100 -bottom-5  w-fit absolute right-12 flex flex-row space-x-1 items-start transition-bottom duration-200"
                : " group-hover:opacity-100 group-hover:-bottom-5 opacity-0 bottom-2 w-fit absolute right-12 flex flex-row space-x-1 items-start transition-bottom duration-200"
            }
          >
            <span className="font-bold text-2xl relative left-0">52</span>
            <span className="font-light text-base relative right-0">sn</span>
          </div>
          <div
            key={"extra buttons"}
            className={
              showButtons
                ? "absolute h-[200px] w-[200px] left-16 flex flex-col justify-between opacity-100 duration-200"
                : "absolute h-[200px] w-[200px] left-16  flex-col justify-between opacity-0 duration-200 -z-10 pointer-events-none"
            }
          >
            <SliderButton
              text={"kaydet"}
              action={setKaydet}
              variable={kaydet}
              showButtons={showButtons}
              setShowButtons={setShowButtons}
              direction={direction}
            />
            <SliderButton
              text={"kalem"}
              action={setKalem}
              variable={kalem}
              showButtons={showButtons}
              setShowButtons={setShowButtons}
              direction={direction}
              canvasShow={canvasShow}
              setCanvasShow={setCanvasShow}
            />

            <SliderButton
              text={"işaretle"}
              action={setIsaretle}
              variable={isaretle}
              showButtons={showButtons}
              setShowButtons={setShowButtons}
              direction={direction}
              flaggedQuestions={flaggedQuestions}
              setFlaggedQuestions={setFlaggedQuestions}
              qnumber={qnumber}
            />
          </div>
        </div>
      )}
      {direction == "right" && (
        <div
          className={
            isaretle
              ? "w-fit h-fit flex relative disabled:group flex-row items-center "
              : "w-fit h-fit flex relative group flex-row items-center "
          }
          onClick={() => {
            setOpenButtons(qnumber);
            setShowButtons(!showButtons);
            console.log(qnumber, direction);
            isaretle ? scrollToSection(qnumber) : null;
          }}
        >
          <div
            className={
              isaretle
                ? " w-[83px] hidden absolute left-full bottom-1/2 items-center duration-200 "
                : showButtons
                ? " w-[83px] flex absolute left-full bottom-1/2 items-center duration-200 "
                : " w-[53px] group-hover:w-[83px] flex absolute left-full bottom-1/2 items-center duration-200 "
            }
          >
            <div className="h-[6px] w-[13px] rounded-full bg-[#0D0D0D] absolute right-0 duration-200" />
            <div
              className={
                showButtons
                  ? "h-[1px] w-[70px] bg-[#0D0D0D] absolute left-0 duration-200"
                  : "h-[1px] w-[40px] group-hover:w-[70px] bg-[#0D0D0D] absolute left-0 duration-200"
              }
            />
          </div>
          <div className="border-[1px] h-10 w-10 rounded-full flex center relative inverse-hover">
            <div className=" h-6 w-6 bg-[#0D0D0D] rounded-full" />
          </div>
          <div
            key={"time left min"}
            className={
              isaretle
                ? " opacity-100 -top-4  w-fit absolute left-12 hidden flex-row space-x-1 items-end transition-top duration-200"
                : showButtons
                ? " opacity-100 -top-4  w-fit absolute left-12 flex flex-row space-x-1 items-end transition-top duration-200"
                : " group-hover:opacity-100 group-hover:-top-4 opacity-0 top-2 w-fit absolute left-12 flex flex-row space-x-1 items-end transition-top duration-200"
            }
          >
            <span className="font-bold text-2xl relative left-0">9</span>
            <span className="font-light text-base relative right-0">dk</span>
          </div>
          <div
            key={"time left sec"}
            className={
              isaretle
                ? "opacity-100 -bottom-5  w-fit absolute left-12 hidden flex-row space-x-1 items-start transition-bottom duration-200"
                : showButtons
                ? "opacity-100 -bottom-5  w-fit absolute left-12 flex flex-row space-x-1 items-start transition-bottom duration-200"
                : " group-hover:opacity-100 group-hover:-bottom-5 opacity-0 bottom-2 w-fit absolute left-12 flex flex-row space-x-1 items-start transition-bottom duration-200"
            }
          >
            <span className="font-bold text-2xl relative left-0">52</span>
            <span className="font-light text-base relative right-0">sn</span>
          </div>
          <div
            key={"extra buttons"}
            className={
              showButtons
                ? "absolute h-[200px] w-[200px] right-16 flex flex-col justify-between opacity-100 duration-200"
                : "absolute h-[200px] w-[200px] right-16 flex flex-col justify-between opacity-0 duration-200 -z-10 pointer-events-none"
            }
          >
            <SliderButton
              text={"kaydet"}
              action={setKaydet}
              variable={kaydet}
              showButtons={showButtons}
              setShowButtons={setShowButtons}
              direction={direction}
            />
            <SliderButton
              text={"kalem"}
              action={setKalem}
              variable={kalem}
              showButtons={showButtons}
              setShowButtons={setShowButtons}
              direction={direction}
              canvasShow={canvasShow}
              setCanvasShow={setCanvasShow}
            />

            <SliderButton
              text={"işaretle"}
              action={setIsaretle}
              variable={isaretle}
              showButtons={showButtons}
              setShowButtons={setShowButtons}
              direction={direction}
              flaggedQuestions={flaggedQuestions}
              setFlaggedQuestions={setFlaggedQuestions}
              qnumber={qnumber}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SoruAyrac;

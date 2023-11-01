import React, { useState, useEffect } from "react";
import PopupHorText from "../common/PopupHorText";
import { useSubjectDispatch } from "@/context/SubjectContext";
import { useRouter } from "next/router";

const Topicbar = () => {
  const data = [
    76, 22, 56, 11, 89, 67, 53, 31, 94, 35, 27, 86, 41, 66, 78, 16, 58, 33, 20,
    99, 73, 76, 22, 56, 11, 89, 67, 53, 31,
  ];

  const dataRed = [
    16, 12, 16, 11, 29, 17, 23, 31, 44, 25, 27, 26, 41, 66, 78, 16, 58, 33, 20,
    49, 33, 26, 22, 46, 11, 19, 67, 53, 31,
  ];

  const names = [
    "MANTIK",
    "KÜMELER",
    "DENKLEMLER VE EŞİTSİZLİKLER",
    "ÜÇGENLER",
    "VERİ",
    "SAYMA VE OLASILIK",
    "FONKSİYONLAR",
    "POLİNOMLAR",
    "İKİNCİ DERECEDEN DENKLEMLER",
    "DÖRTGENLER VE ÇOKGENLER",
    "UZAY GEOMETRİ",
    "SAYILAR VE CEBİR",
    "TRİGONOMETRİ",
    "ANALİTİK GEOMETRİ",
    "FONKSİYONLARDA UYGULAMALAR",
    "DENKLEM VE EŞİTSİZLİK SİSTEMLERİ",
    "ÇEMBER VE DAİRE",
    "UZAY GEOMETRİ",
    "OLASILIK",
    "ÜSTEL VE GEOMETRİK FONKSİYONLAR",
    "DİZİLER",
    "TÜREV",
    "İNTEGRAL",
    "FONKSİYONLARDA UYGULAMALAR",
    "DENKLEM VE EŞİTSİZLİK SİSTEMLERİ",
    "ÇEMBER VE DAİRE",
    "UZAY GEOMETRİ",
    "OLASILIK",
    "ÜSTEL VE GEOMETRİK FONKSİYONLAR",
    "DİZİLER",
    "TÜREV",
    "İNTEGRAL",
  ];

  // Split data and names arrays into two halves
  const halfLength = data.length / 2;
  const firstHalfData = data.slice(0, halfLength);
  const secondHalfData = data.slice(halfLength);
  const firstHalfNames = names.slice(0, halfLength);
  const secondHalfNames = names.slice(halfLength);

  // Sort the first half of data in increasing order
  firstHalfData.sort((a, b) => a - b);

  // Sort the second half of data in decreasing order
  secondHalfData.sort((a, b) => b - a);

  // Sort the names array based on the sorting order of the first half of data
  const sortedNames = firstHalfNames.concat(secondHalfNames).sort((a, b) => {
    const indexA = names.indexOf(a);
    const indexB = names.indexOf(b);
    return firstHalfData[indexA] - firstHalfData[indexB];
  });

  // Push the sorted values and names back into their respective arrays
  const sortedData = firstHalfData.concat(secondHalfData);
  data.length = 0;
  data.push(...sortedData);
  names.length = 0;
  names.push(...sortedNames);

  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [clickedColumn, setClickedColumn] = useState(null);

  const handleColumnHover = (index) => {
    setHoveredColumn(index);
  };

  const handleColumnClick = (index) => {
    setClickedColumn(null);
    setTimeout(() => {
      setClickedColumn(index);
    }, 100);
  };

  useEffect(() => {
    const handleWindowClick = (event) => {
      const clickedObject = event.target;
      if (clickedObject.id !== "PopupHorText" && clickedObject.id !== "box") {
        setClickedColumn(null);
      }
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [clickedColumn]);

  const [selectedLesson, setSelectedLesson] = useState("matematik");
  const [selectedSubject, setSelectedSubject] = useState("matematik");
  const [action, setAction] = useState("");
  const router = useRouter();
  const dispatch = useSubjectDispatch();

  useEffect(() => {
    if (action == "oyun") {
      dispatch({ type: "CHANGELESSON", payload: selectedLesson });
      dispatch({
        type: "CHANGESUBJECT",
        payload: selectedSubject,
      });
      router.push({
        pathname: `/gamePanel`,
      });
    }
  }, [selectedSubject, selectedLesson, dispatch, action, router]);

  return (
    <div className="relative flex center w-full h-full">
      <div
        className="absolute top-0 z-30"
        style={{
          opacity: clickedColumn ? "" : "0",
          pointerEvents: clickedColumn ? "all" : "none",
        }}
      >
        <PopupHorText
          topx={-190}
          topy={0}
          iconsrc={"/logo_oyun.svg"}
          num={3}
          den={4}
          buttonLeft={"oyun"}
          buttonRight={"vazgeç"}
          buttonRightAction={() => handleColumnClick(null)}
          buttonLeftAction={() => setAction("oyun")}
        >
          <div className="text-center">
            <span className="text-[#f7f6f1] items-center text-base font-extralight  whitespace-nowrap">
              <span className="font-bold ">{names[clickedColumn]}</span>
              <br />
              KONUSUNA ÇALIŞMAK İSTER MİSİNİZ?
            </span>
          </div>
        </PopupHorText>
      </div>
      <div className="flex space-x-3 items-end h-[600px]  absolute mx-auto">
        {}
        {data.map((value, index) => {
          const boxCount = Math.floor(value / 10);
          const isHovered = index === hoveredColumn;
          const opacity = isHovered ? 1 : 0.15;

          return (
            <div
              key={`${index} adad`}
              className="flex flex-col items-end relative transition-opacity duration-300"
              style={{
                opacity: opacity,
              }}
              onMouseEnter={() => handleColumnHover(index)}
              onMouseLeave={() => handleColumnHover(null)}
              onMouseDown={() => {
                handleColumnClick(index);
                setSelectedSubject(names[index]);
                setSelectedLesson("matematik");
              }}
            >
              {[...Array(boxCount)].map((_, boxIndex) => (
                <>
                  {boxIndex === 0 && (
                    <div
                      id={"box"}
                      key={`${index}-${boxIndex} top`}
                      className="w-10 bg-[#0d0d0d] mb-3 rounded-lg "
                      style={{
                        height: `${(value % 10) * 4}px`,
                      }}
                    />
                  )}
                  <div
                    id={"box"}
                    key={`${index}-${boxIndex} second`}
                    className="w-10 h-10 bg-[#0d0d0d] mb-3 rounded-lg "
                  />
                </>
              ))}
              {isHovered && (
                <div
                  className="absolute flex flex-col p-1 min-w-[140px] w-auto space-y-2"
                  style={{
                    top: value < 35 ? `${-(35 - value) * 5}px` : "0px",
                    left: index < data.length / 2 ? "60px" : null,
                    right: index >= data.length / 2 ? "60px" : null,
                  }}
                  key={names[index]}
                >
                  <span
                    className="text-3xl flex whitespace-nowrap"
                    style={{
                      justifyContent: index < data.length / 2 ? "start" : "end",
                    }}
                  >
                    {names[index]}
                  </span>
                  <span
                    className="text-6xl flex font-bold"
                    style={{
                      justifyContent: index > data.length / 2 ? "start" : "end",
                    }}
                  >
                    {`%${data[index]}`}
                  </span>
                  <span
                    className="text-6xl flex font-bold text-[rgb(225,0,0)]"
                    style={{
                      justifyContent: index > data.length / 2 ? "start" : "end",
                    }}
                  >
                    {`%${dataRed[index]}`}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>{" "}
      <div className="flex space-x-3 items-end h-[600px] absolute mx-auto pointer-events-none">
        {}
        {dataRed.map((value, index) => {
          const boxCount = Math.floor(value / 10);
          const isHovered = index === hoveredColumn;
          const opacity = isHovered ? 1 : 0.15;

          return (
            <div
              key={`${index} adad`}
              className="flex flex-col items-end relative transition-opacity duration-300"
              style={{
                opacity: opacity,
              }}
              onMouseEnter={() => handleColumnHover(index)}
              onMouseLeave={() => handleColumnHover(null)}
              onMouseDown={() => {
                handleColumnClick(index);
                setSelectedSubject(names[index]);
                setSelectedLesson("matematik");
              }}
            >
              {[...Array(boxCount)].map((_, boxIndex) => (
                <>
                  {boxIndex === 0 && (
                    <div
                      id={"box"}
                      key={`${index}-${boxIndex} top`}
                      className="w-10 bg-[rgb(225,0,0)] mb-3 rounded-lg "
                      style={{
                        height: `${(value % 10) * 4}px`,
                      }}
                    />
                  )}
                  <div
                    id={"box"}
                    key={`${index}-${boxIndex} second`}
                    className="w-10 h-10 bg-[rgb(225,0,0)] mb-3 rounded-lg "
                  />
                </>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topicbar;

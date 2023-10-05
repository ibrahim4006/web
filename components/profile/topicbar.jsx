import React, { useState, useEffect } from "react";
import PopupHorText from "../common/PopupHorText";
import { useSubjectDispatch } from "@/context/SubjectContext";
import { useRouter } from "next/router";

const Topicbar = () => {
  const data = [
    76, 22, 56, 11, 89, 67, 53, 31, 4, 94, 35, 27, 86, 41, 66, 78, 16, 58, 33,
    20, 5, 99, 73,
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        minWidth: `${data.length * 60}px`,
        maxWidth: `${data.length * 80}px`,
        height: "750px",
      }}
    >
      {
        <div
          style={{
            position: "absolute",
            top: "0",
            opacity: clickedColumn ? "" : "0",
            zIndex: 30,
          }}
        >
          <PopupHorText
            topx={500}
            topy={400}
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
      }
      {data.map((value, index) => {
        const boxCount = Math.floor(value / 10);
        const isHovered = index === hoveredColumn;
        const opacity = isHovered ? 1 : 0.15;

        return (
          <div
            key={`${index} adad`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              opacity: opacity,
              position: "relative",
              transition: "opacity .3s",
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
                    style={{
                      width: "50px",
                      height: `${(value % 10) * 5}px`,
                      backgroundColor: "black",
                      marginBottom: "10px",
                      borderRadius: "9px",
                    }}
                  />
                )}
                <div
                  id={"box"}
                  key={`${index}-${boxIndex} second`}
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "black",
                    marginBottom: "10px",
                    borderRadius: "9px",
                  }}
                />
              </>
            ))}
            {isHovered && (
              <div
                style={{
                  position: "absolute",
                  top: value < 25 ? `${-(25 - value) * 6}px` : "0px",
                  left: index < data.length / 2 ? "60px" : null,
                  right: index >= data.length / 2 ? "60px" : null,
                  backgroundColor: "transparent",
                  color: "black",
                  padding: "5px",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Montserrat",
                  width: "auto",
                  minWidth: "150px",
                }}
                key={names[index]}
              >
                <span
                  style={{
                    fontSize: "32px",
                    display: "flex",
                    whiteSpace: "nowrap",
                    justifyContent: index < data.length / 2 ? "start" : "end",
                  }}
                >
                  {names[index]}
                </span>
                <span
                  style={{
                    fontSize: "64px",
                    display: "flex",
                    justifyContent: index > data.length / 2 ? "start" : "end",
                    fontWeight: "700",
                  }}
                >
                  {`%${data[index]}`}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Topicbar;

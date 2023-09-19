import React, { useState } from "react";

const Topicbar = () => {
  const data = [45, 72, 68, 12, 75, 20, 69, 84, 36, 50, 95,45, 72, 68, 12, 75, 20, 69, 84, 36, 50, 95, 15];
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
    "İNTEGRAL"
  ];

  //const maxData = Math.max(...data);

  const [hoveredColumn, setHoveredColumn] = useState(null);

  const handleColumnHover = (index) => {
    setHoveredColumn(index);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        minWidth: `${data.length*60}px`,
        maxWidth: `${data.length*80}px`,
        height: "750px",
      }}
    >
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
              transition: "opacity .3s"
            }}
            onMouseEnter={() => handleColumnHover(index)}
            onMouseLeave={() => handleColumnHover(null)}
          >
            {[...Array(boxCount)].map((_, boxIndex) => (
              <>
                {boxIndex === 0 && (
                  <div
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
                  top: value < 25 ? `${-(25-value)*6}px` : "0px",
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
                    whiteSpace:"nowrap",
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
                    fontWeight: "700"
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

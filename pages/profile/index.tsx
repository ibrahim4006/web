"use client";
import SquareButton from "@/components/common/SquareButton";
import {
  choiceType,
  gameTypes,
  lessons,
  orderType,
  matematikSubjects,
  fizikSubjects,
  kimyaSubjects,
  biyolojiSubjects,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import handleFullScreenClick from "@/utils/Fullscreen";
import BarChart from "@/components/profile/BarChart";
import LineChart from "@/components/profile/lineChart";
import RadarChart from "@/components/profile/RadarChart";
import ScatterChart from "@/components/profile/ScatterChart";
import { UserData } from "@/components/profile/Data";
import ImageComponent from "@/components/profile/map";
import Harita from "@/components/profile/harita";
import Topicbar from "@/components/profile/topicbar";
import Denemedrop from "@/components/profile/denemedrop";
import Baslik from "@/components/profile/baslik";

import ReactCurvedText from "react-curved-text";
import PageTag from "@/components/common/PageTag";
import ChoiceCard from "@/components/common/ChoiceCard";
import { TopNameTag } from "@/components/common/TopNameTag";
import Completion from "@/components/common/Completion";

function App() {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [radarData, setRadarData] = useState({
    labels: [
      "Türkçe",
      ["Sosyal", "Bilimler"],
      "Matematik",
      "Fen",
      "Matematik",
      "Fen",
    ],
    datasets: [
      {
        label: "title",
        data: UserData.map((data) => data.userGain),
        borderColor: "black",
        backgroundColor: "rgba(77,0,77,0.35)",
        borderWidth: 1.5,
        pointBorderColor: "black",
        pointBackgroundColor: "black",
        responsive: true,
        pointRadius: 0,
        tension: 0.2,
      },
      {
        label: "title2",
        data: UserData.map((data) => data.userLost),
        borderColor: "black",
        backgroundColor: "rgba(77,0,77,0.35)",
        borderWidth: 1.5,
        pointBorderColor: "black",
        pointBackgroundColor: "black",
        responsive: true,
        pointRadius: 0,
        tension: 0.2,
      },
    ],
  });

  const [scatterData, setScatterData] = useState({
    labels: [
      "Türkçe",
      ["Sosyal", "Bilimler"],
      "Matematik",
      "Fen",
      "Matematik",
      "Fen",
    ],
    datasets: [
      {
        label: "Scatter Dataset",
        data: [
          {
            x: 3,
            y: 6,
          },
          {
            x: 2,
            y: 10,
          },
          {
            x: 5,
            y: 20,
          },
          {
            x: 4,
            y: 10,
          },
          {
            x: 10,
            y: 15,
          },
          {
            x: 7,
            y: 12,
          },
        ],
        backgroundColor: "rgba(247,246,241,0.15)",
        pointRadius: 20,
        borderColor: "rgba(255,255,255)",
      },
    ],
  });

  const [lineData, setLineData] = useState({
    labels: ["2016-12-24", "2016-12-25", "2016-12-26", "2016-12-27"],
    datasets: [
      {
        data: [
          { x: "2016-12-24", y: 20 },
          { x: "2016-12-25", y: 13 },
          { x: "2016-12-26", y: 15 },
          { x: "2016-12-27", y: 17 },
        ],
        fill: true,
        backgroundColor: "rgb(217,217,217)",
        borderColor: "black",
        pointBackgroundColor: "black",
        pointRadius: "6",
        responsive: true,
      },
    ],
  });

  const [barData, setbarData] = useState({
    labels: ["2016-12-24", "2016-12-25", "2016-12-26", "2016-12-27"],
    datasets: [
      {
        label: "Fully Rounded",
        data: [
          { x: "2016-12-24", y: 20 },
          { x: "2016-12-25", y: 13 },
          { x: "2016-12-26", y: 15 },
          { x: "2016-12-27", y: 17 },
          { x: "2016-12-28", y: 20 },
          { x: "2016-12-29", y: 13 },
          { x: "2016-12-30", y: 15 },
          { x: "2016-12-31", y: 17 },
        ],
        borderColor: "black",
        backgroundColor: (color) => {
          const colors = color.index === 7 ? "black" : "rgba(247,246,241,0.1)";
          return colors;
        },
        borderWidth: 0.7,
        borderRadius: 100,
        borderSkipped: false,
        barThickness: 8,
      },
    ],
  });

  const [dataindex, setDataindex] = useState("matematik");
  return (
    <div className="App overflow-x-hidden">
      <PageTag tag="PROFİL" />
      <TopNameTag nametag="PROFİL" game={false} />

      {/* <div className="absolute top-0 my-32 flex mx-auto right-0 left-0 center w-[60%] sm:w-[50%] lg:w-[60%] ">
        {[
          "İSTATİSTİKLER",
          "GELİŞİM ANALİZİ",
          "TAMAMLAMA ANALİZİ",
          "MİNİ DENEME ANALİZİ",
        ].map((subject, index) => (
          <SquareButton
            key={index}
            title={subject}
            containerStyles={`square-btn inverse-hover text-base font-light px-8 m-3`}
            handleClick={() => scrollToSection(`section${index + 1}`)}
          />
        ))}
      </div> */}
      <Completion />

      {/* <div
        className="profile-top-section"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "50px",
          alignItems: "center",
        }}
      >
        <BarChart
          chartData={barData}
          width={350}
          text1={"puan"}
          text2={"geçmişi"}
        />
        <div style={{ marginBottom: "50px", marginInline: "185px" }}>
          <div style={{ display: "flex", position: "relative" }}>
            <Image
              src="/profile_hexagon.svg"
              alt="lolol"
              width={270}
              height={270}
              style={{ margin: "20px" }}
            />
            <span
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "128px",
                fontFamily: "Montserrat",
                fontWeight: "700",
                color: "rgb(247, 246, 241)",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            >
              17
            </span>
          </div>
          <div
            style={{
              width: "300px",
              height: "13px",
              border: "1px solid",
              overflow: "hidden",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "70%",
                backgroundColor: "rgb(13,13,13)",
                height: "20px",
              }}
            ></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/logo_deneme.png"
                alt="logo_deneme"
                width={20}
                height={20}
              />
              <span
                style={{
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                  marginLeft: "10px",
                }}
              >
                25 /30
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/logo_yarisma.svg"
                alt="lolol"
                width={30}
                height={30}
              />
              <span
                style={{
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                  marginLeft: "10px",
                }}
              >
                25 /30
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src="/logo_oyun.svg" alt="lolol" width={20} height={20} />
              <span
                style={{
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: "300",
                  marginLeft: "10px",
                }}
              >
                25 /30
              </span>
            </div>
          </div>
        </div>

        <BarChart
          chartData={barData}
          width={350}
          text1={"çalışma"}
          text2={"geçmişi"}
        />
      </div> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "1150px",
          paddingTop: "150px",
          paddingBottom: "200px",
          position: "relative",
        }}
        id="section1"
        ref={sectionRefs.section1}
      >
        <Baslik text="İSTATİSTİKLER" yPos="80px" textColor="rgb(13,13,13)" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "50px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "absolute",
            height: "850px",
            width: "1350px",
          }}
        >
          <Denemedrop
            input={1}
            alignment="left"
            border={null}
            text="toplam soru"
            value=" 4298"
          />
          <Denemedrop
            input={1}
            alignment="right"
            border={null}
            text="sıralama"
            value=" 7126"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "50px",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "absolute",
            height: "850px",
            width: "1350px",
          }}
        >
          <Denemedrop
            input={-1}
            alignment="left"
            border={null}
            text="toplam kupa"
            value="   14"
          />
          <Denemedrop
            input={-1}
            alignment="right"
            border={null}
            text="puan"
            value="82371"
          />
        </div>
        <div
          style={{
            position: "absolute",
          }}
        >
          <ReactCurvedText
            width={530}
            height={530}
            cx={265}
            cy={265}
            rx={265}
            ry={265}
            startOffset={70}
            reversed={true}
            text="matematik fizik kimya biyoloji türkçe sosyal"
            textProps={{
              style: {
                fontSize: 24,
                fontFamily: "Montserrat",
                fontWeight: 400,
                wordSpacing: "195px",
              },
            }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ style: { overflow: "visible" } }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RadarChart chartData={radarData} width={530} />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(13,13,13)",
          display: "flex",
          paddingTop: "190px",
          height: "1100px",
          flexDirection: "column",
          position: "relative",
        }}
        id="section2"
        ref={sectionRefs.section2}
      >
        <Baslik
          text="HAFTALIK GELİŞİM ANALİZİ"
          yPos="80px"
          textColor="rgb(247,246,241)"
        />
        <LineChart
          chartData={lineData}
          setDataindex={setDataindex}
          dataindex={dataindex}
          index={7}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            flexDirection: "row",
            paddingTop: "60px",
            color: "white",
          }}
        >
          <Denemedrop
            input={-1}
            alignment="right"
            border={"1px solid"}
            text="matematik"
            value="82% "
            setDataindex={setDataindex}
            key={"matematik"}
          />
          <Denemedrop
            input={-1}
            alignment="right"
            border={"1px solid"}
            text="fizik"
            value="82% "
            setDataindex={setDataindex}
            key={"fizik"}
          />
          <Denemedrop
            input={-1}
            alignment="right"
            border={"1px solid"}
            text="kimya"
            value="82% "
            setDataindex={setDataindex}
            key={"kimya"}
          />
        </div>
      </div>
      <div
        className="relative px-48 h-[1100px] pt-[200px] flex justify-center"
        id="section3"
        ref={sectionRefs.section3}
      >
        <Baslik
          text="DOĞRU CEVAPLAMA ANALİZİ"
          yPos="90px"
          textColor="rgb(13,13,13)"
        />
        <div className="absolute mx-auto top-[130px] center w-[60%] sm:w-[50%] lg:w-[60%] ">
          {["türkçe", "matematik", "fizik", "kimya", "biyoloji"].map(
            (subject, index) => (
              <SquareButton
                key={index}
                title={subject}
                containerStyles={`square-btn inverse-hover uppercase text-base font-light px-8 m-3`}
                handleClick={() => console.log("locked")}
              />
            )
          )}
        </div>

        <Topicbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "rgb(13,13,13)",
          position: "relative",
          height: "1100px",
          zIndex: -1,
          paddingLeft: "190px",
          paddingRight: "190px",
          paddingTop: "180px",
        }}
        id="section4"
        ref={sectionRefs.section4}
      >
        <Baslik
          text="MİNİ DENEME ANALİZİ"
          yPos="90px"
          textColor="rgb(247,246,241)"
        />
        <ScatterChart chartData={scatterData} />
      </div>
    </div>
  );
}

export default App;

/*(<ImageComponent width={500}></ImageComponent>)*/

/*
       events: ["mouseout", "click", "touchstart", "touchmove", "touchend"]
*/

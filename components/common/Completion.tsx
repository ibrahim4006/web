import React from "react";
import Image from "next/image";
import HexagonEmpty from "./HexagonEmpty";
import Hexagon from "./Hexagon";

function generateHexagons(subjects) {
  const hexagons = [];
  const x = [252.5, 0, -252.5, -252.5, 0, 252.5];
  const y = [145, 291, 145, -145, -291, -145];
  const lvl = [1, 2, 3, 1, 4, 2];
  for (let index = 0; index < 6; index++) {
    for (let inside = 0; inside < 4; inside++) {
      if (lvl[index] < 4 - inside) {
        hexagons.push(
          <div
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translate(${
                x[index] * 1.5
              }px, ${y[index] * 1.5}px) scale(${1 - inside * 0.2})`,
              opacity: 0.3,
            }}
          >
            <HexagonEmpty
              iskele={0}
              index={index}
              x={0}
              y={0}
              key={`${index + 1}.altıgen`}
            />
          </div>
        );
      } else if (lvl[index] == 4 - inside) {
        hexagons.push(
          <div
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translate(${
                x[index] * 1.5
              }px, ${y[index] * 1.5}px) scale(${1 - (4 - lvl[index]) * 0.2})`,
            }}
          >
            <Hexagon
              iskele={0}
              index={index}
              x={0}
              y={0}
              key={`${index + 1}.altıgen`}
              text={subjects[index]}
            />
          </div>
        );
      }
    }
  }

  const d = [60, 120, 240, 300];
  for (let index = 0; index < 4; index++) {
    hexagons.push(
      <Image
        src="/pattern_1.svg"
        alt="pattern_1"
        width={311.2}
        height={299.12}
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${d[index]}deg) translate(260px)`,
          position: "absolute",
          zIndex: -1,
        }}
      />
    );
  }

  const outerlines_x = [627, 627, -627, -627];
  const outerlines_y = [-211, 211, -211, 211];
  const outerlines_d = [120, -120, 60, -60];

  for (let index = 0; index < 4; index++) {
    hexagons.push(
      <Image
        src="/pattern_1.svg"
        alt="pattern_1"
        width={311.2}
        height={299.12}
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${outerlines_x[index]}px, ${outerlines_y[index]}px) rotate(${outerlines_d[index]}deg)`,
          position: "absolute",
          zIndex: -1,
        }}
      />
    );
  }

  const outershades_x = [-1200, -1200, 1200, 1200];
  const outershades_y = [-350, 350, -350, 350];
  const outershades_d = [120, -120, 60, -60];

  for (let index = 0; index < 4; index++) {
    hexagons.push(
      <Image
        src="/pattern_1.svg"
        alt="pattern_1"
        width={311.2}
        height={299.12}
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${outershades_x[index]}px, ${outershades_y[index]}px) rotate(${outershades_d[index]}deg) scale(2)`,
          position: "absolute",
          opacity: 0.1,
          zIndex: -1,
        }}
      />
    );
  }

  <Image
    src="/profile_hexagon.svg"
    alt="lolol"
    width={270}
    height={270}
    style={{ margin: "20px" }}
  />;

  hexagons.push(
    <Hexagon
      iskele={0}
      index={-1}
      x={0}
      y={0}
      key={`merkez altıgen`}
      text={"18"}
      textsize={36}
    />
  );

  return hexagons;
}

export default function Completion() {
  return (
    <div className="relative flex justify-center items-center iskele_animation scale-90">
      <div
        className="inline-block relative h-[1150px] w-[1920px]"
        key={0}
      >
        {generateHexagons([
          "MATEMATİK",
          "FİZİK",
          "TÜRKCE",
          "KİMYA",
          "BİYOLOJİ",
          "SOSYAL",
        ])}
      </div>
      <div className="absolute w-[1650px] h-[850px]  flex justify-between flex-row items-center -z-[1] ">
        <div
          key={"left side"}
          className="flex flex-col w-fit h-[730px] justify-between"
        >
          <div className="flex center flex-col inverse-hover">
            <div className="flex center flex-row">
              <Image
                src="/logo_deneme.png"
                alt="logo_deneme"
                width={20}
                height={20}
                className="scale-125"
              />
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
              >
                0 / 30
              </span>
            </div>
            <div
              style={{
                height: "210px",
                width: "11px",
                border: "1px solid",
                overflow: "hidden",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  height: "70%",
                  backgroundColor: "rgb(13,13,13)",
                  width: "13px",
                }}
              ></div>
            </div>
          </div>
          <div className="flex center flex-col inverse-hover">
            <div
              style={{
                height: "210px",
                width: "11px",
                border: "1px solid",
                overflow: "hidden",
                marginBottom: "20px",
                marginTop: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  height: "70%",
                  backgroundColor: "rgb(13,13,13)",
                  width: "13px",
                  bottom: "0%",
                  position: "absolute",
                }}
              ></div>
            </div>
            <div className="flex center flex-row">
              <Image
                src="/logo_zincir.svg"
                alt="logo_zincir"
                width={30}
                height={30}
                className="scale-125"
              />
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
              >
                0 / 30
              </span>
            </div>
          </div>
        </div>
        <div
          key={"right side"}
          className="flex flex-col w-fit h-[730px] justify-between "
        >
          <div className="flex center flex-col inverse-hover">
            <div className="flex center flex-row">
              <Image
                src="/logo_yarisma.svg"
                alt="logo_yarisma"
                width={20}
                height={20}
                className="scale-150"
              />
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
              >
                0 / 30
              </span>
            </div>
            <div
              style={{
                height: "210px",
                width: "11px",
                border: "1px solid",
                overflow: "hidden",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  height: "70%",
                  backgroundColor: "rgb(13,13,13)",
                  width: "13px",
                }}
              ></div>
            </div>
          </div>
          <div className="flex center flex-col inverse-hover">
            <div
              style={{
                height: "210px",
                width: "11px",
                border: "1px solid",
                overflow: "hidden",
                marginBottom: "20px",
                marginTop: "20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  height: "70%",
                  backgroundColor: "rgb(13,13,13)",
                  width: "13px",
                  bottom: "0%",
                  position: "absolute",
                }}
              ></div>
            </div>
            <div className="flex center flex-row">
              <Image
                src="/logo_oyun.svg"
                alt="logo_oyun"
                width={20}
                height={20}
                className="scale-125"
              />
              <span
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
              >
                0 / 30
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<Completion />;

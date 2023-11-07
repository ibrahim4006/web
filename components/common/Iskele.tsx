import React from "react";
import Image from "next/image";
import Hexagon from "@/components/common/Hexagon";
import HexagonEmpty from "./HexagonEmpty";

function generateHexagons(
  iskele,
  subjects,
  setActiveOption,
  activeOption,
  chosenSubjects,
  textSize,
  currentlevel,
  merkez?
) {
  const changeActiveOption = (option: string) => {
    setActiveOption(option);
  };

  const hexagons = [];
  const x = [252.5, 0, -252.5, -252.5, 0, 252.5];
  const y = [145, 291, 145, -145, -291, -145];
  for (let index = 0; index < 6; index++) {
    if (
      chosenSubjects?.includes(
        iskele > 0
          ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
          : subjects[index]?.split("-")[3]
      )
    ) {
      hexagons.push(
        <HexagonEmpty
          iskele={iskele}
          index={index}
          x={x[index]}
          y={y[index]}
          key={`${iskele}.iskele ${index + 1}.altıgen`}
          text={
            iskele > 0
              ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
              : subjects[index]?.split("-")[3]
          }
          handleClick={() =>
            changeActiveOption(
              iskele > 0
                ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
                : subjects[index]?.split("-")[3]
            )
          }
          tick={"tick"}
          textsize={textSize}
        />
      );
    } else if (currentlevel) {
      currentlevel > (iskele - 1) * 6 + index
        ? hexagons.push(
            <Hexagon
              iskele={iskele}
              index={index}
              x={x[index]}
              y={y[index]}
              key={`${iskele}.iskele ${index + 1}.altıgen`}
              text={
                iskele > 0
                  ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
                  : subjects[index]?.split("-")[3]
              }
              handleClick={() => {
                changeActiveOption(
                  iskele > 0
                    ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
                    : subjects[index]?.split("-")[3]
                );
              }}
              tick={""}
              textsize={textSize}
            />
          )
        : hexagons.push(
            <HexagonEmpty
              iskele={iskele}
              index={index}
              x={x[index]}
              y={y[index]}
              key={`${iskele}.iskele ${index + 1}.altıgen`}
              text={
                iskele > 0
                  ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
                  : subjects[index]?.split("-")[3]
              }
              handleClick={() =>
                changeActiveOption(
                  iskele > 0
                    ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
                    : subjects[index]?.split("-")[3]
                )
              }
              tick={""}
              textsize={textSize}
            />
          );
    } else {
      hexagons.push(
        <Hexagon
          iskele={iskele}
          index={index}
          x={x[index]}
          y={y[index]}
          key={`${iskele}.iskele ${index + 1}.altıgen`}
          text={
            iskele > 0
              ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
              : subjects[index]?.split("-")[3]
          }
          handleClick={() =>
            changeActiveOption(
              iskele > 0
                ? subjects[(iskele - 1) * 6 + index]?.split("-")[3]
                : subjects[index]?.split("-")[3]
            )
          }
          tick={""}
          textsize={textSize}
        />
      );
    }
  }
  hexagons.push(
    <Image
      src="/arka_altıgen.svg"
      width={510}
      height={510}
      key={`${iskele}.iskele arka altıgen`}
      alt={`arka altıgen`}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        zIndex: -1,
      }}
    />
  );

  if (currentlevel) {
    iskele <= Math.floor(currentlevel / 6)
      ? hexagons.push(
          <HexagonEmpty
            iskele={iskele}
            index={-1}
            x={0}
            y={0}
            key={`${iskele}.iskele merkez oyun altıgen`}
            text={merkez}
            handleClick={() => changeActiveOption(merkez)}
          />
        )
      : hexagons.push(
          <Hexagon
            iskele={iskele}
            index={-1}
            x={0}
            y={0}
            key={`${iskele}.iskele merkez oyun altıgen`}
            text={merkez}
            handleClick={() => changeActiveOption(merkez)}
          />
        );
  } else {
    hexagons.push(
      <HexagonEmpty
        iskele={iskele}
        index={-1}
        x={0}
        y={0}
        key={`${iskele}.iskele merkez altıgen`}
        text={iskele > 0 ? `${iskele}.iskele` : "OYUNLAR"}
      />
    );
  }

  return hexagons;
}

export default function GenerateIskele({
  subjects,
  setActiveOption,
  activeOption,
  id,
  chosenSubjects,
  textSize,
  currentlevel,
  merkez,
}) {
  // Accept subjects as a prop
  const iskeles = [];

  const i_limit = Math.ceil(subjects.length / 6);

  if (i_limit > 1) {
    for (let i = 0; i < i_limit; i++) {
      const iskele = (
        <div
          className="inline-block relative h-[900px] w-[900px] mx-[30px]"
          key={i + 1}
        >
          {generateHexagons(
            i + 1,
            subjects,
            setActiveOption,
            activeOption,
            chosenSubjects,
            textSize,
            currentlevel,
            merkez ? merkez[i] : undefined
          )}
        </div>
      );
      iskeles.push(iskele);
    }
  } else {
    const iskele = (
      <div
        className="inline-block relative h-[900px] w-[900px] mx-[30px]"
        key={0}
      >
        {generateHexagons(
          0,
          subjects,
          setActiveOption,
          activeOption,
          chosenSubjects,
          textSize,
          currentlevel
        )}
      </div>
    );
    iskeles.push(iskele);
  }

  return (
    <div className="relative flex items-center iskele_animation">
      <div
        id={`slider-${id}`}
        className="relative w-full -z-1 h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
      >
        {iskeles}
        {Array.from(
          { length: subjects.length > 6 ? Math.floor(subjects.length / 6) : 0 },
          (_, index) => (
            <div
              key={index}
              className="absolute w-[455px] top-1/2 flex items-center"
              style={{
                left: `${index * 960 + 733}px`,
              }}
            >
              <div className="arrow arrow-left absolute right-0  opacity-30"></div>
              <div className="w-full h-[1px] bg-black opacity-30"></div>
              <div className="arrow arrow-right absolute left-0  opacity-30"></div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

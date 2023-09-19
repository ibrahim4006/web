import React, { useState } from "react";
import backgroundSvg from "./map/background.svg";
import marmara from "./map/marmara_1.svg";
import ege from "./map/ege_1.svg";
import karadeniz from "./map/karadeniz_1.svg";
import akdeniz from "./map/akdeniz_1.svg";
import ic_anadolu from "./map/ic_anadolu_1.svg";
import guneydogu from "./map/guneydogu_1.svg";
import dogu_anadolu from "./map/dogu_anadolu_1.svg";

const Harita = (width) => {
  const [hoveredSvg, setHoveredSvg] = useState(null);

  const imagePositions = {
    marmara: { top: 16.8, left: 15.1, width: 355 },
    ege: { top: 37, left: 16.3, width: 365 },
    karadeniz: { top: -9.5, left: 30.6, width: 840 },
    akdeniz: { top: 34, left: 24, width: 645 },
    ic_anadolu: { top: 23, left: 30.5, width: 570 },
    guneydogu: { top: 42.5, left: 56, width: 400 },
    dogu_anadolu: { top: 14.9, left: 53.4, width: 600 },
  };

  const svgFiles = {
    marmara,
    ege,
    karadeniz,
    akdeniz,
    ic_anadolu,
    guneydogu,
    dogu_anadolu,
  };

  const handleMouseEnter = (svgName) => {
    setHoveredSvg(svgName);
  };

  const handleMouseLeave = () => {
    setHoveredSvg(null);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "1000px",
        background: "black",
      }}
    >
      <img
        src={backgroundSvg}
        alt="Background"
        style={{
          position: "absolute",
          width: "70%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {Object.entries(imagePositions).map(([name, position]) => (
        <svg
          key={name}
          style={{
            position: "absolute",
            top: `${position.top}%`,
            left: `${position.left}%`,
            transition: "transform 0.3s",
            transform: hoveredSvg === name ? "translateY(-20px)" : "none",
            transition: "transform 0.3s ease-in-out",
          }}
          width={position.width}
          height={position.height}
          stroke="white"
          viewBox="0 0 100 100"
          opacity={hoveredSvg === name ? 1 : 1}
        >
          <image
            xlinkHref={svgFiles[name]}
            width="100"
            height="100"
            onMouseEnter={() => handleMouseEnter(name)}
            onMouseLeave={() => handleMouseLeave}
          />
        </svg>
      ))}
    </div>
  );
};

export default Harita;

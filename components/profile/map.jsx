import React, { useRef, useState } from "react";
import backgroundSvg from "./map/background.svg";
import marmara from "./map/marmara_1.svg";
import ege from "./map/ege_1.svg";
import karadeniz from "./map/karadeniz_1.svg";
import akdeniz from "./map/akdeniz_1.svg";
import ic_anadolu from "./map/ic_anadolu_1.svg";
import guneydogu from "./map/guneydogu_1.svg";
import dogu_anadolu from "./map/dogu_anadolu_1.svg";

const ImageComponent = (width) => {
  const [hoveredSvg, setHoveredSvg] = useState(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const imagePositions = {
    marmara: { top: 34.2, left: 24.5, width: 355 },
    ege: { top: 55.2, left: 25.8, width: 366 },
    karadeniz: { top: 32.7, left: 52.7, width: 840 },
    akdeniz: { top: 66.5, left: 41, width: 648 },
    ic_anadolu: { top: 51.5, left: 45.5, width: 570 },
    guneydogu: { top: 62.8, left: 66.5, width: 400 },
    dogu_anadolu: { top: 44.8, left: 69.1, width: 605 },
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
        width: windowSize.current[0] / 1,
        height: "1000px",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{
        width: windowSize.current[0] / 1,
        height: "1000px",
        background: "black",
        
      }}>
        <img
          src={backgroundSvg}
          alt="Background"
          style={{
            position: "absolute",
            width: 1340,
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
              transform: "translate(-50%, -50%)",
            }}
            width={position.width}
            height={position.height}
            stroke="white"
            viewBox="0 0 100 100"
            opacity={hoveredSvg === name ? 1 : 0}
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
    </div>
  );
};

export default ImageComponent;

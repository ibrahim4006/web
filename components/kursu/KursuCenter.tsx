import React from "react";

type Props = {};

const KursuCenter = ({ number }) => {
  const corners = [
    {
      line: "-scale-x-100",
    },
    {
      line: "",
    },
    {
      line: " -scale-x-100 -scale-y-100",
    },
    {
      line: "-scale-y-100",
    },
  ];

  return (
    <div
      className={`kursu-center-lines w-[306.09px]  ${corners[number].line}`}
    >
      <svg viewBox="0 0 307 143" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.3"
          d="M286.522 15.2355L194.81 86.3019C191.464 88.8947 187.072 90.3046 182.339 90.3046L0.5 90.3047"
          stroke="#f7f6f1"
        />
        <rect
          className="marker-center"
          width="20"
          height="5.5"
          y="-2.75"
          rx="2.5"
          fill="#f7f6f160"
        />
      </svg>
    </div>
  );
};

export default KursuCenter;

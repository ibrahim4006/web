import { PanoCardProps } from "@/types";
import React from "react";

import LinearProgress from '@mui/material/LinearProgress';
import PanoTask from "./PanoTask";

const PanoCard = ({ title }: PanoCardProps) => {
  return (
    <div className="w-full h-1/4 text-[#FFFFFF] pt-1 flex-col">
      <div className="flex justify-between items-center text-lg">
        <div className="flex justify-start space-x-3 items-center w-[20%] border">
          <hr className="w-[8%] border-t-2 border-white" />
          <h1>{title}</h1>
        </div>
        <div className="border border-white mr-[7%] w-[60%]">
          <LinearProgress
            className="w-full bg-[#0D0D0D] text-[#D9D9D9]"
            variant="determinate"
            value={40}
            color="inherit"
          />
        </div>
      </div>
      <div className="block mt-2">
        <PanoTask />
        <PanoTask />
        <PanoTask />
        <PanoTask />
      </div>
    </div>
  );
};

export default PanoCard;

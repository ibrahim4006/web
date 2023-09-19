import handleFullScreenClick from "@/utils/Fullscreen";
import Link from "next/link";
import React from "react";

export default function EntranceCardCompetition() {
  return (
    <Link href="/competitionPanel">
      <div className="inverse-hover entrancecard animate_content_closing frame-top:sm:w-[50px] m-8 lg:m-0 sm:h-[200px] lg:h-[540px]" onClick={() => handleFullScreenClick()}>
        <div className="background sm:h-[200px] lg:h-[540px]"></div>
        <div className="frame-top"></div>
        <div className="frame-bottom"></div>
        <h1 className=" text-3xl lg:text-6xl mr-4 font-bold lg:-rotate-90 mb-8 lg:mb-36 lg:-mr-[80px]">
          YARIŞMA
        </h1>
      </div> 
    </Link>
  );
}

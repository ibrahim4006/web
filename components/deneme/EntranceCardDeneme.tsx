import handleFullScreenClick from "@/utils/Fullscreen";
import Link from "next/link";
import React from "react";

export default function EntranceCardDeneme() {
  return (
    <Link href="/denemePanel">
      <div className="inverse-hover entrancecard animate_content_closing m-8 lg:m-0 sm:h-[200px] lg:h-[540px]" onClick={() => handleFullScreenClick()}>
        <div className="background sm:h-[200px] lg:h-[540px]"></div>
        <div className="frame-top"></div>
        <div className="frame-bottom"></div>
        <h1 className=" text-3xl lg:text-6xl lg:text-6xl font-bold mr-4 lg:-rotate-90 mb-8 lg:mb-36 lg:-mr-[75px]">
          DENEME
        </h1>
      </div>
    </Link>
  );
}

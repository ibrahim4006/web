import Link from "next/link";
import React from "react";

export default function EntranceCardDeneme() {
  return (
    <Link href="/denemePanel">
      <div className="entrancecard animate_content_closing">
        <div className="background"></div>
        <div className="frame-top"></div>
        <div className="frame-bottom"></div>
        <h1 className="-mb-36 mr-16 -rotate-90 text-2xl font-light">MİNİ</h1>
        <h1 className="text-6xl font-bold -rotate-90 mb-36 -mr-24">DENEME</h1>
      </div>
    </Link>
  );
}

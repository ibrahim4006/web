import Link from "next/link";
import React from "react";

export default function EntranceCardGames() {
  return (
    <Link href="/gamePanel">
      <div className="entrancecard animate_content_closing">
        <div className="background"></div>
        <div className="frame-top"></div>
        <div className="frame-bottom"></div>
        <h1 className="text-6xl font-bold -rotate-90 mb-24 -mr-10">OYUN</h1>
      </div>
    </Link>
  );
}

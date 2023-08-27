import Link from "next/link";
import React from "react";

export default function EntranceCardCompetition() {
  return (
    <Link href="/competitionPanel">
      <div className="entrancecard animate_content_closing">
        <div className="background"></div>
        <div className="frame-top"></div>
        <div className="frame-bottom"></div>
        <h1 className="text-6xl font-bold -rotate-90 mb-36 -mr-20">YARIŞMA</h1>
      </div>
    </Link>
  );
}

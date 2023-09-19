import React from "react";

export const TopNameTag = ({ nametag, game }) => {
  return (
    <div
      className={`h-[360px] border-b-[1px] rgb(13,13,13) text-[#0D0D0D] flex justify-end items-end relative ${
        game ? "game-head" : "profile-head"
      }`}
    >
      <span className=" mr-[345px] font-bold text-5xl mb-2 inverse-hover">
        {nametag}
      </span>
    </div>
  );
};

import Image from "next/image";
import React from "react";

type Props = {};

const KursuToggleButton = ({ handlePrevPage, handleNextPage }) => {
  return (
    <div className="inverse-hover left-0 right-0 -bottom-14 mx-auto absolute z-50 flex justify-between items-center w-full invert">
      <div
        key={"left toggle button"}
        className="inverse-hover left-0 relative z-50 flex justify-center items-center group toggle-holder h-12"
        onClick={handlePrevPage}
      >
        <Image
          src="/bumerang_parça/bumerangtek.svg"
          alt="chat toggle button "
          width={20}
          height={20}
          className={
            "-rotate-90 translate-x-3 transition-transform duration-500  toggle"
          }
          //64% previously
          onClick={handlePrevPage}
        />
        <Image
          src="/bumerang_parça/bumerangtek.svg"
          alt="chat toggle button "
          width={30}
          height={30}
          className={
            "-rotate-90  transition-transform duration-500 group-hover:scale-150 "
          }
          //64% previously
          onClick={handlePrevPage}
        />
      </div>
      <div
        key={"right toggle button"}
        className="inverse-hover right-0 relative z-50 flex justify-center items-center group toggle-holder h-12"
        onClick={handleNextPage}
      >
        <Image
          src="/bumerang_parça/bumerangtek.svg"
          alt="chat toggle button "
          width={20}
          height={20}
          className={
            "rotate-90  translate-x-6 transition-transform duration-500 toggle2"
          }
          //64% previously
          onClick={handleNextPage}
        />
        <Image
          src="/bumerang_parça/bumerangtek.svg"
          alt="chat toggle button "
          width={30}
          height={30}
          className={
            "rotate-90  -translate-x-3 transition-transform duration-500 group-hover:scale-150"
          }
          //64% previously
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};

export default KursuToggleButton;

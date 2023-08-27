"use client"

import Image from "next/image";

import SquareButton from "./SquareButton";
import {useState} from 'react'
import PanoCard from "./PanoCard";
import Link from "next/link";


const Navbar = () => {
  const [showPano, setShowPano] = useState(false);

  const handleClickPano = () => {
    if (!showPano) {
      setShowPano(true);
    } else {
      setShowPano(false);
    }
  };
  return (
    <header className="w-full relative z-10 border-b-2 border-black">
      <nav className="max-w-full flex justify-between items-center">
        <Link href="/" className="flex justify-start items-center" >
          <Image
            src="/headerlogo.svg"
            alt="Bommerang Logo"
            priority={true}
            width={200}
            height={50}
            className="object-contain border-r-2 border-r-black"
          />
          <Image
            src="/triangle.svg"
            alt="Triangle"
            width={10}
            height={10}
            className="absolute -bottom-[1px] left-[194px]"
          />
        </Link>
        <div className="center space-x-6 font-medium text-sm mr-6">
          <SquareButton title="Mesajlar" containerStyles={`square-btn`} />
          <SquareButton title="Arşiv" containerStyles={`square-btn`} />
          <SquareButton title="Kürsü" containerStyles={`square-btn`} />
          <SquareButton title="Takvim" containerStyles={`square-btn`}/>
          <Image
            src="/headerpolygon.svg"
            alt="Polygon logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <Image
            src="/headermenu.svg"
            alt="Polygon logo"
            width={25}
            height={25}
            className="object-contain cursor-pointer ml-8"
            onClick={handleClickPano} 
          />
          {showPano && (
            <div className="absolute right-0 top-12 w-[30%] h-[42.9vw] bg-[#0D0D0D] pt-3 flex-col justify-start space-y-14">
              <PanoCard title="TYT" />
              <PanoCard title="AYT" />
              <PanoCard title="Yarışma" />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
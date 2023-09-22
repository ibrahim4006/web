"use client";
import Link from "next/link";
import Image from "next/image";

import SquareButton from "./SquareButton";
import { useEffect, useState } from "react";
import handleFullScreenClick from "@/utils/Fullscreen";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobile, setMobile] = useState(false);
  // Track the cursor position
  const trackCursorPosition = (event) => {
    const cursorY = event.clientY;
    if (window.scrollY > 50) {
      setShowNavbar(cursorY <= 50);
    }
    // Show the navbar when the cursor is within the top 50 pixels
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", trackCursorPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", trackCursorPosition);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if(window.innerWidth > 768){
        if (window.scrollY < 50) {
        setShowNavbar(window.scrollY < 50);
      }
      }else {if (window.scrollY < 20) {
        setShowNavbar(window.scrollY < 20);
      }}
      
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        showNavbar
          ? "w-[54%] md:w-[80%] lg:w-[68%] 2xl:w-[54%] m-auto relative z-50 border-b-[1px] border-black/30 frame-header visible bg-[#F7F6F1] "
          : "w-[54%] md:w-[80%] lg:w-[68%] 2xl:w-[54%] m-auto relative z-50 border-b-[1px] border-black/30 frame-header navbar bg-[#F7F6F1] "
      }
      onClick={() => {
        if (window.innerWidth < 768) {
          setMobile(!mobile);
        }
      }}
    >
      <nav className="max-w-full flex flex-col md:flex-row md:justify-between items-center cursor-none">
        <Link href="/" className="flex justify-center cursor-none">
          <Image
            src="/headerlogo.svg"
            alt="Bommerang Logo"
            width={240}
            height={100}
            className=" px-6 pb-1.5 h-[65px] min-w-[240px]  border-r-black center  inverse-hover  "
            onClick={() => handleFullScreenClick()}
          />
        </Link>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div
            className={
              mobile
                ? "hidden"
                : "flex flex-col md:flex-row justify-center items-center font-medium text-sm "
            }
          >
            <Link href="/mesajlar" className="cursor-none">
              <SquareButton
                title="mesajlar"
                containerStyles={`header-btn inverse-hover`}
                handleClick={() => handleFullScreenClick()}
              />
            </Link>
            <Link href="/arşiv" className="cursor-none">
              <SquareButton
                title="arşiv"
                containerStyles={`header-btn inverse-hover`}
                handleClick={() => handleFullScreenClick()}
              />
            </Link>
            <Link href="/kürsü" className="cursor-none">
              <SquareButton
                title="kürsü"
                containerStyles={`header-btn inverse-hover`}
                handleClick={() => handleFullScreenClick()}
              />
            </Link>
            <Link href="/takvim" className="cursor-none">
              <SquareButton
                title="takvim"
                containerStyles={`header-btn inverse-hover`}
                handleClick={() => handleFullScreenClick()}
              />
            </Link>
          </div>
          <Link href="/profile" className="cursor-none">
            <Image
              src="/headerpolygon.svg"
              alt="Polygon logo"
              width={30}
              height={30}
              className="object-contain inverse-hover m-2 mb-4 md:mr-4 md:mb-2"
              onClick={() => handleFullScreenClick()}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
/*{showPano && (
            <div className="absolute right-0 top-12 w-[30%] h-[47vw] bg-[#0D0D0D] pt-5 flex-col justify-start space-y-14">
              <PanoCard title="TYT" />
              <PanoCard title="AYT" />
              <PanoCard title="Yarışma" />
            </div>
          )}*/

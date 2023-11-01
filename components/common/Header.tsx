"use client";
import Link from "next/link";
import Image from "next/image";

import SquareButton from "./SquareButton";
import { useEffect, useState } from "react";
import handleFullScreenClick from "@/utils/Fullscreen";
import MissionWrapper from "./MissionWrapper";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [mission, setMission] = useState(false);

  // Track the cursor position
  const trackCursorPosition = (event) => {
    const cursorY = event.clientY;
    if (window.scrollY > 50) {
      setShowNavbar(cursorY <= 50);
      setTimeout(() => {
        if (cursorY > 50) {
          setDropDown(false);
          setMission(false);
        }
      }, 200);
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
      if (window.innerWidth > 768) {
        if (window.scrollY < 50) {
          setShowNavbar(window.scrollY < 50);

          setTimeout(() => {
            if (window.scrollY > 50) {
              setDropDown(false);
              setMission(false);
            }
          }, 200);
        }
      } else {
        if (window.scrollY < 20) {
          setShowNavbar(window.scrollY > 20);
          setTimeout(() => {
            if (window.scrollY < 50) {
              setDropDown(false);
              setMission(false);
            }
          }, 200);
        }
      }
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
          ? "w-[54%] md:w-[80%] lg:w-[68%] 2xl:w-[54%] m-auto relative z-50 frame-header visible bg-[#F7F6F1] cursor-none"
          : "w-[54%] md:w-[80%] lg:w-[68%] 2xl:w-[54%] m-auto relative z-50 frame-header navbar bg-[#F7F6F1] cursor-none"
      }
      onClick={() => {
        if (window.innerWidth < 768) {
          setMobile(!mobile);
        }
      }}
    >
      {mission && <MissionWrapper />}
      <nav className="max-w-full flex flex-col md:flex-row md:justify-between items-center cursor-none z-50">
        <Link href="/" className="flex justify-center cursor-none">
          <Image
            src="/headerlogo.svg"
            alt="Bommerang Logo"
            width={240}
            height={100}
            className=" px-6 pb-1.5 h-[65px] min-w-[240px]  border-r-black center  inverse-hover  "
            handleClick={() => {
              handleFullScreenClick();
              setDropDown(false);
              setMission(false);
            }}
          />
        </Link>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div
            className={
              mobile
                ? "hidden"
                : "flex flex-col md:flex-row justify-center items-center font-medium text-sm cursor-none"
            }
          >
            <div className="cursor-none">
              <SquareButton
                title="görev"
                containerStyles={`header-btn inverse-hover`}
                handleClick={() => {
                  handleFullScreenClick();
                  setMission(!mission);
                }}
              />
            </div>
            <Link href="/kürsü" className="cursor-none">
              <SquareButton
                title="kürsü"
                containerStyles={`header-btn inverse-hover`}
                handleClick={() => {
                  handleFullScreenClick();
                  setDropDown(false);
                  setMission(false);
                }}
              />
            </Link>
            <Link href="/arsiv" className="cursor-none">
              <SquareButton
                title="arşiv"
                containerStyles={`header-btn inverse-hover`}
                handleClick={() => {
                  handleFullScreenClick();
                  setDropDown(false);
                  setMission(false);
                }}
              />
            </Link>

            <div
              key={"hidden buttons"}
              style={{
                display: dropDown ? "" : "none",
                opacity: 0.6,
              }}
            >
              <Link href="/profile" className="cursor-none">
                <SquareButton
                  title="profil"
                  containerStyles={`header-btn inverse-hover`}
                  handleClick={() => {
                    handleFullScreenClick();
                    setDropDown(false);
                    setMission(false);
                  }}
                />
              </Link>
              <Link href="/kürsü" className="cursor-none">
                <SquareButton
                  title="level"
                  containerStyles={`header-btn inverse-hover`}
                  handleClick={() => {
                    handleFullScreenClick();
                    setDropDown(false);
                    setMission(false);
                  }}
                />
              </Link>
              <Link href="/takvim" className="cursor-none">
                <SquareButton
                  title="takvim"
                  containerStyles={`header-btn inverse-hover`}
                  handleClick={() => {
                    handleFullScreenClick();
                    setDropDown(false);
                    setMission(false);
                  }}
                />
              </Link>
            </div>
          </div>
          <div
            className="cursor-none"
            onClick={() => {
              handleFullScreenClick();
              setDropDown(!dropDown);
              setMission(false);
            }}
          >
            <Image
              src="/headerpolygon.svg"
              alt="Polygon logo"
              width={30}
              height={30}
              className="object-contain inverse-hover m-2 mb-4 md:mr-4 md:mb-2 cursor-none"
            />
          </div>
        </div>
        {/* <div
        key={"dropdown"}
        className="flex flex-col center absolute -right-2 space-y-3 py-3 duration-300 frame-header w-20 z-0 "
        style={{
          bottom: dropDown ? "-125px" : "0px",
          opacity: dropDown ? 1 : 0,
          backgroundColor: dropDown ? "red" : "",
        }}
      >
        <Link
          href="/profile"
          className="cursor-none duration-75"
          style={{
            opacity: dropDown ? 1 : 0,
            display: dropDown ? "" : "none",
          }}
        >
          <SquareButton
            title="profil"
            containerStyles={`inverse-hover`}
            handleClick={() => {
              handleFullScreenClick();
              setDropDown(!dropDown);
            }}
          />
        </Link>
        <Link
          href="/takvim"
          className="cursor-none duration-75"
          style={{
            opacity: dropDown ? 1 : 0,
            display: dropDown ? "" : "none",
          }}
        >
          <SquareButton
            title="takvim"
            containerStyles={`inverse-hover`}
            handleClick={() => {
              handleFullScreenClick();
              setDropDown(!dropDown);
            }}
          />
        </Link>
        <Link
          href="/takvim"
          className="cursor-none duration-75"
          style={{
            opacity: dropDown ? 1 : 0,
            display: dropDown ? "" : "none",
          }}
        >
          <SquareButton
            title="çıkış yap"
            containerStyles={`inverse-hover`}
            handleClick={() => {
              handleFullScreenClick();
              setDropDown(!dropDown);
            }}
          />
        </Link>
      </div> */}
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

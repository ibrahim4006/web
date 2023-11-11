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

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  useEffect(() => {
    const trackCursorPosition = (event: MouseEvent) => {
      const cursorY = event.clientY;
      if (!mission) {
        if (window.scrollY > 50) {
          setShowNavbar(cursorY <= 50);
          setTimeout(() => {
            if (cursorY > 50) {
              setDropDown(false);
              setMission(false);
            }
          }, 200);
        }
      }
      // Show the navbar when the cursor is within the top 50 pixels
    };
    window.addEventListener("mousemove", trackCursorPosition);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", trackCursorPosition);
    };
  }, [mission]);

  useEffect(() => {
    const handleScroll = () => {
      if (!mission) {
        if (window.innerWidth > 768) {
          if (window.scrollY < 50) {
            setShowNavbar(true);

            setTimeout(() => {
              if (window.scrollY > 50) {
                setDropDown(false);
                setMission(false);
              }
            }, 200);
          }
        } else {
          if (window.scrollY < 20) {
            setShowNavbar(false);
            setTimeout(() => {
              if (window.scrollY < 50) {
                setDropDown(false);
                setMission(false);
              }
            }, 200);
          }
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mission]);

  return (
    <>
      {mission && (
        <div
          className="absolute h-[4000px] w-[4000px] -translate-x-1/2 center flex z-[90] items-center justify-center backdrop-blur-md border"
          onClick={() => setMission(false)}
        />
      )}
      <header
        className={
          showNavbar
            ? "w-[54%] md:w-[80%] lg:w-[68%] 2xl:w-[54%] m-auto relative z-[99] frame-header visible bg-[#F7F6F1] cursor-none"
            : "w-[54%] md:w-[80%] lg:w-[68%] 2xl:w-[54%] m-auto relative z-[99] frame-header navbar bg-[#F7F6F1] cursor-none"
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
              onClick={() => {
                //handleFullScreenClick();
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
                    //handleFullScreenClick();
                    setMission(!mission);
                  }}
                />
              </div>
              <Link href="/kursu" className="cursor-none">
                <SquareButton
                  title="kürsü"
                  containerStyles={`header-btn inverse-hover`}
                  handleClick={() => {
                    //handleFullScreenClick();
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
                    //handleFullScreenClick();
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
                      //handleFullScreenClick();
                      setDropDown(false);
                      setMission(false);
                    }}
                  />
                </Link>
                <Link href="/level" className="cursor-none">
                  <SquareButton
                    title="level"
                    containerStyles={`header-btn inverse-hover`}
                    handleClick={() => {
                      //handleFullScreenClick();
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
                      //handleFullScreenClick();
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
                className="object-contain inverse-hover m-2 mb-4 md:mr-4 md:mb-2 cursor-none active:scale-110 duration-100 active:rotate-[30deg]"
              />
            </div>
          </div>
        </nav>
      </header>
    </>
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

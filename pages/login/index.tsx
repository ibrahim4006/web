"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


type Inputs = {
  email: string;
  password: string | undefined;
};
export default function page() {
  const router = useRouter();
  const [open_animation, setOpenAnimation] = useState(false);


  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Add any desired animation logic here
    setOpenAnimation(!open_animation)

    // Redirect to the desired page after the animation or transition
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <div
      className={
        open_animation
          ? "center animate_content_opening"
          : "center animate_content_closing"
      }
    >
      <div className="logincard fade">
        <div className="logbackground"></div>
        <div className="logframe">
          <div className="logframe-top"></div>
          <div className="logframe-bottom"></div>
        </div>
        <div className="logtop-part">
          <div className="flex justify-center items-center">
            <Image
              src="/boomeranglogin.svg"
              alt="Bommerang Logo"
              priority={true}
              width={250}
              height={80}
              className="mt-12"
            />
            {/* <div className="word-container">
              <div className="word-left">
                <div className="bu">BU</div>
                <div className="ra">RA</div>
              </div>
              <div className="word-right">
                <div className="me">ME</div>
                <div className="NG">NG</div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="logbottom-part">
          <form >
            <input
              type="email"
              className="flex justify-start items-center border-b w-[90%] h-10 bg-transparent focus:border-b-4 focus:border focus:border-[#f7f6f1] text-[#f7f6f1] outline-0"
              placeholder="email"
            />
            <input
              type="password"
              className="flex justify-start items-center border-b w-[90%] h-10 bg-transparent focus:border-b-4 focus:border focus:border-[#f7f6f1] outline-0 text-[#f7f6f1]"
              placeholder="şifre"
            />
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="underline text-[#f7f6f1] font-extralight text-xs ml-5"
              >
                Şifre mi Unuttum?
              </a>
              <Link href="/">
                <button
                  type="submit"
                  className="flex justify-center items-center border border-b-4 border-[#f7f6f1] text-[#f7f6f1] w-28 h-10"
                  onClick={handleButtonClick}
                >
                  Giriş
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>

    // </div>
  );
}
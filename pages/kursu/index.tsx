import PageTag from "@/components/common/PageTag";
import { TopNameTag } from "@/components/common/TopNameTag";
import KursuCenter from "@/components/kursu/KursuCenter";
import KursuCorner from "@/components/kursu/KursuCorner";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const kursu = (props: Props) => {
  const items = [
    {
      sira: "1",
      puan: "721",
      isim: "MUHAMMET ALPEREN EFİLOĞLU",
      okul: "VEHBİ DİNÇERLER FEN LİSESİ",
    },
    {
      sira: "2",
      puan: "721",
      isim: "MUHAMMET ALPEREN EFİLOĞLU",
      okul: "VEHBİ DİNÇERLER FEN LİSESİ",
    },
    {
      sira: "3",
      puan: "721",
      isim: "MUHAMMET ALPEREN EFİLOĞLU",
      okul: "VEHBİ DİNÇERLER FEN LİSESİ",
    },
    {
      sira: "4",
      puan: "72155",
      isim: "MUHAMMET ALPEREN EFİLOĞLU",
      okul: "VEHBİ DİNÇERLER FEN LİSESİ",
    },
    {
      sira: "5",
      puan: "721",
      isim: "MUHAMMET ALPEREN EFİLOĞLU",
      okul: "VEHBİ DİNÇERLER FEN LİSESİ",
    },
    {
      sira: "6",
      puan: "721",
      isim: "MUHAMMET ALPEREN EFİLOĞLU",
      okul: "VEHBİ DİNÇERLER FEN LİSESİ",
    },
    {
      sira: "187",
      puan: "7210",
      isim: "MUHAMMET ALPEREN EFİLOĞLU",
      okul: "VEHBİ DİNÇERLER FEN LİSESİ",
    },
  ];

  const [topBoxClicked, setTopBoxClicked] = useState(false);
  const [bottomBoxClicked, setBottomBoxClicked] = useState(false);
  const [clickedNumber, setClickedNumber] = useState(false);

  const handlebottomboxclick = () => {
    setBottomBoxClicked(!bottomBoxClicked);
    setTopBoxClicked(false);
  };

  const handletopboxclick = () => {
    setTopBoxClicked(!topBoxClicked);
    setBottomBoxClicked(false);
  };

  return (
    <>
      <PageTag tag="KÜRSÜ" />
      <TopNameTag nametag="KÜRSÜ" game={false} />
      <div className="kursu-outer-lines h-[2000px] flex w-full relative justify-center">
        <div className=" flex w-full h-[1062px] justify-between relative">
          <section className="kursu-left-container left-8 flex flex-col justify-between items-start relative  ">
            <KursuCorner
              number={0}
              clickedNumber={clickedNumber}
              setClickedNumber={setClickedNumber}
            />
            <div className="w-1 h-10 bg-[#0d0d0d60] rounded-l left-12 relative" />
            <KursuCorner
              number={1}
              clickedNumber={clickedNumber}
              setClickedNumber={setClickedNumber}
            />
          </section>
          <div
            key={"center section lines"}
            className="h-full flex flex-col items-center justify-between w-full relative"
          >
            <div
              key={"ders"}
              className="flex flex-row justify-between items-end top-24 relative"
            >
              <KursuCenter number={0} />
              <div
                className={`kursu-center-box inverse-hover  center-box-top w-[267px] absolute left-1/2 bottom-16 -translate-x-1/2 justify-center flex group ${
                  topBoxClicked ? "box-clicked" : ""
                }`}
                onClick={handletopboxclick}
              >
                <div className="flex flex-col justify-center items-center text-center absolute bottom-0 mb-5 ">
                  <span className="font-bold text-base text-[#0D0D0D] opacity-60">
                    DERS
                  </span>
                  <div className="h-1 w-20 bg-[#0d0d0d60] rounded-b mb-3 mt-1  relative group-hover:w-24 duration-300" />
                  <span className="font-bold text-3xl text-[#0D0D0D]">
                    MATEMATİK
                  </span>
                </div>
                <svg
                  viewBox="0 0 267 113"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M266.5 56.5V93C266.5 103.77 257.77 112.5 247 112.5H20C9.23044 112.5 0.5 103.77 0.5 93V56.5V53.3681C0.5 46.6935 3.91386 40.4826 9.54889 36.9053L62.1111 3.53719C65.2359 1.55343 68.8608 0.5 72.5622 0.5H100.125H133.5H194.438C198.139 0.5 201.764 1.55343 204.889 3.53719L257.451 36.9053C263.086 40.4826 266.5 46.6935 266.5 53.3681V56.5Z"
                    stroke="#0D0D0D"
                  />
                </svg>
              </div>
              <div
                key={"top-popup"}
                className={`absolute z-[99] w-[267px] top-28 left-0 right-0 mx-auto ${
                  topBoxClicked ? "flex" : "hidden"
                } justify-center `}
              >
                <svg
                  viewBox="0 0 267 362"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-scale-100"
                >
                  <path
                    d="M267 342C267 353.046 258.046 362 247 362L20.0001 362C8.95437 362 6.1839e-05 353.046 6.28307e-05 342L7.72847e-05 181L8.54095e-05 90.5L8.85198e-05 55.8543C8.91152e-05 49.2221 3.28791 43.0212 8.77764 39.2997L61.6677 3.44533C64.9797 1.20015 68.8889 -1.68654e-05 72.8902 -1.65247e-05L133.5 -1.1365e-05L194.11 -6.20519e-06C198.111 -5.86456e-06 202.02 1.20015 205.332 3.44534L258.222 39.2997C263.712 43.0212 267 49.2221 267 55.8543L267 90.5L267 181L267 342Z"
                    fill="#F7F6F1"
                  />
                  <path
                    d="M247 361.5L20.0001 361.5C9.23053 361.5 0.500062 352.77 0.500063 342L0.500077 181L0.500085 90.5L0.500089 55.8543C0.500089 49.3879 3.70572 43.342 9.0582 39.7135L61.9483 3.8592C65.1774 1.67015 68.989 0.499983 72.8902 0.499983L133.5 0.499989L194.11 0.499994C198.011 0.499994 201.823 1.67016 205.052 3.85922L257.942 39.7135C263.294 43.342 266.5 49.3879 266.5 55.8543L266.5 90.5L266.5 181L266.5 342C266.5 352.77 257.77 361.5 247 361.5Z"
                    stroke="black"
                    stroke-opacity="0.6"
                  />
                </svg>
              </div>
              <div className="w-10 h-1 bg-[#0d0d0d60] rounded-b bottom-12 relative mx-10" />
              <KursuCenter number={1} />
            </div>
            <div
              key={"sehir"}
              className="flex flex-row justify-between items-start bottom-24 relative"
            >
              <KursuCenter number={2} />
              <div
                className={`kursu-center-box inverse-hover center-box-bottom w-[267px] absolute left-1/2 top-16 -translate-x-1/2 -scale-y-100 justify-center flex group ${
                  bottomBoxClicked ? "box-clicked" : ""
                }`}
                onClick={handlebottomboxclick}
              >
                <div className="flex flex-col justify-center items-center text-center absolute bottom-0 mb-5 -scale-y-100">
                  <span className="font-bold text-3xl text-[#0D0D0D]">
                    GAZİANTEP
                  </span>
                  <div className="h-1 w-20 bg-[#0d0d0d60] rounded-t mt-3 mb-1  relative group-hover:w-24 duration-300" />
                  <span className="font-bold text-base text-[#0D0D0D] opacity-60">
                    ŞEHİR
                  </span>
                </div>
                <svg
                  viewBox="0 0 267 113"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.6"
                    d="M266.5 56.5V93C266.5 103.77 257.77 112.5 247 112.5H20C9.23044 112.5 0.5 103.77 0.5 93V56.5V53.3681C0.5 46.6935 3.91386 40.4826 9.54889 36.9053L62.1111 3.53719C65.2359 1.55343 68.8608 0.5 72.5622 0.5H100.125H133.5H194.438C198.139 0.5 201.764 1.55343 204.889 3.53719L257.451 36.9053C263.086 40.4826 266.5 46.6935 266.5 53.3681V56.5Z"
                    stroke="#0D0D0D"
                  />
                </svg>
              </div>
              <div
                key={"bottom-popup"}
                className={`absolute z-[99] w-[267px] bottom-28 left-0 right-0 mx-auto ${
                  bottomBoxClicked ? "flex" : "hidden"
                } justify-center`}
              >
                <svg
                  viewBox="0 0 267 362"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M267 342C267 353.046 258.046 362 247 362L20.0001 362C8.95437 362 6.1839e-05 353.046 6.28307e-05 342L7.72847e-05 181L8.54095e-05 90.5L8.85198e-05 55.8543C8.91152e-05 49.2221 3.28791 43.0212 8.77764 39.2997L61.6677 3.44533C64.9797 1.20015 68.8889 -1.68654e-05 72.8902 -1.65247e-05L133.5 -1.1365e-05L194.11 -6.20519e-06C198.111 -5.86456e-06 202.02 1.20015 205.332 3.44534L258.222 39.2997C263.712 43.0212 267 49.2221 267 55.8543L267 90.5L267 181L267 342Z"
                    fill="#F7F6F1"
                  />
                  <path
                    d="M247 361.5L20.0001 361.5C9.23053 361.5 0.500062 352.77 0.500063 342L0.500077 181L0.500085 90.5L0.500089 55.8543C0.500089 49.3879 3.70572 43.342 9.0582 39.7135L61.9483 3.8592C65.1774 1.67015 68.989 0.499983 72.8902 0.499983L133.5 0.499989L194.11 0.499994C198.011 0.499994 201.823 1.67016 205.052 3.85922L257.942 39.7135C263.294 43.342 266.5 49.3879 266.5 55.8543L266.5 90.5L266.5 181L266.5 342C266.5 352.77 257.77 361.5 247 361.5Z"
                    stroke="black"
                    stroke-opacity="0.6"
                  />
                </svg>
              </div>
              <div className="w-10 h-1 bg-[#0d0d0d60] rounded-t top-12 relative mx-10 lg:flex hidden" />
              <KursuCenter number={3} />
            </div>
          </div>
          <section className="kursu-right-container right-8 flex flex-col justify-between items-end relative  ">
            <KursuCorner
              number={2}
              clickedNumber={clickedNumber}
              setClickedNumber={setClickedNumber}
            />

            <div className="w-1 h-10 bg-[#0d0d0d60] rounded-r right-12 relative" />
            <KursuCorner
              number={3}
              clickedNumber={clickedNumber}
              setClickedNumber={setClickedNumber}
            />
          </section>
        </div>
        <div className="absolute z-50 w-[85%] h-[500px] flex flex-col items-center justify-between top-[270px] kursu-ranking-box">
          <div className="relative flex flex-row w-full h-9 font-bold text-base border-b border-[#0d0d0d60] kursu-circle">
            <span className="absolute left-[2%]">SIRA</span>
            <span className="absolute left-[17%]">PUAN</span>
            <span className="absolute left-[35%]">İSİM</span>
            <span className="absolute left-[70%]">OKUL</span>
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-row w-full h-16 font-light text-base border-b border-[#0d0d0d60] items-center hover:font-bold hover:border-b-0 kursu-underline"
              style={{ fontWeight: index == items.length - 1 ? 700 : "" }}
            >
              <div className="kursu-circle absolute w-full h-0 bottom-0 right-0" />
              <span className="absolute left-[2%] inverse-hover">
                {item.sira}
              </span>
              <span className="absolute left-[17%] inverse-hover">
                {item.puan}
              </span>
              <span className="absolute left-[35%] inverse-hover">
                {item.isim}
              </span>
              <span className="absolute left-[70%] inverse-hover">
                {item.okul}
              </span>
            </div>
          ))}
          {/* <Image
              src="/bumerang_parça/bumerangtek.svg"
              alt="lolol"
              width={270}
              height={270}
              className="left-1/2 -translate-x-full "
            /> */}
        </div>
      </div>
    </>
  );
};

export default kursu;

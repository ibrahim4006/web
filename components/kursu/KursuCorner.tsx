import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

const KursuCorner = ({ number, clickedNumber, setClickedNumber }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clickedNumber != number && setClicked(false);
  }, [clickedNumber, number]);

  const clickHandler = (number, position) => {
    console.log(number, position); // replace with the button actions
  };

  const corners = [
    {
      line: "",
      box: " top-20 left-12",
      popup: "top-36 left-12",
      translate1: "-translate-x-4 -translate-y-4",
      translate2: "-translate-x-8 -translate-y-8",
      hover: "translate-x-8",
      iconRotate: "",
    },
    {
      line: " -scale-y-100",
      box: " bottom-20 left-12 -scale-y-100",
      popup: "bottom-36 left-12 -scale-y-100",
      translate1: "-translate-x-4 translate-y-4",
      translate2: "-translate-x-8 translate-y-8",
      hover: "translate-x-8",
      iconRotate: "",
    },
    {
      line: " -scale-x-100 ",
      box: " top-20 right-12  -scale-x-100",
      popup: "top-36 right-12  -scale-x-100",
      translate1: "translate-x-4 -translate-y-4",
      translate2: "translate-x-8 -translate-y-8",
    },
    {
      line: "-scale-x-100 -scale-y-100",
      box: "bottom-20 right-12 -scale-x-100 -scale-y-100",
      popup: "bottom-36 right-12 -scale-x-100 -scale-y-100",
      translate1: "translate-x-4 translate-y-4",
      translate2: "translate-x-8 translate-y-8",
    },
  ];

  const icons = [
    {
      inside: "/logo_deneme.png",
      center: "/logo_deneme.png",
      outer: "/logo_deneme.png",
    },
    {
      inside: "/logo_deneme.png",
      center: "/logo_deneme.png",
      outer: "/logo_deneme.png",
    },
    {
      inside: "/logo_deneme.png",
      center: "/logo_deneme.png",
      outer: "/logo_deneme.png",
    },
    {
      inside: "/logo_deneme.png",
      center: "/logo_deneme.png",
      outer: "/logo_deneme.png",
    },
  ];
  return (
    <section key={number} className="relative">
      <div
        className={`right-lines w-[546.34px] opacit ${corners[number].line}`}
      >
        <svg
          viewBox="0 0 504 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M443.528 78.3069L319.749 78.3074C315.066 78.3074 310.465 80.0687 306.782 83.2704L251.698 131.165C248.016 134.367 243.414 136.128 238.732 136.128L120.534 136.129C115.868 136.129 111.282 137.877 107.606 141.058L53.9675 187.467C49.2386 191.559 46.4761 197.615 46.4761 203.892L46.4761 443.123"
            stroke="#f7f6f1"
          />
          <rect
            className="marker"
            width="20"
            height="5.5"
            y="-2.75"
            rx="2.5"
            fill="#f7f6f160"
          />
        </svg>
      </div>
      <div
        className={
          number < 2
            ? `kursu-outer-box-${number} hover:left-32 group transition-left duration-300 inverse-hover w-[258.5px] absolute ${corners[number].box}`
            : `kursu-outer-box-${number} hover:right-32 group transition-right duration-300 inverse-hover w-[258.5px] absolute ${corners[number].box}`
        }
        onClick={() => {
          setClicked(!clicked);
          clickHandler(number, "inside");
        }}
      >
        <svg
          viewBox="0 0 240 47"
          fill="#f7f6f1"
          xmlns="http://www.w3.org/2000/svg"
          className=" hover:fill-[#f7f6f160] fill-[#f7f6f110] transition-colors duration-300"
        >
          <path
            d="M234.859 0.5H5C2.51472 0.5 0.5 2.51472 0.5 5V42C0.5 44.4853 2.51472 46.5 5 46.5H130.5H191.167C192.232 46.5 193.263 46.1223 194.075 45.4341L237.767 8.43406C240.965 5.72554 239.05 0.5 234.859 0.5Z"
            stroke=" #f7f6f160"
          />
        </svg>
        <Image
          src={icons[number].inside}
          alt="logo_deneme"
          width={30}
          height={30}
          className={`absolute right-14 top-2 invert group-hover:opacity-100 opacity-0  ${corners[number].line}`}
        />
      </div>
      <div
        className={
          number < 2
            ? `kursu-outer-box-${number} hover:left-32 group transition-left duration-300 inverse-hover w-[258.5px] absolute ${corners[number].box} ${corners[number].translate1}`
            : `kursu-outer-box-${number} hover:right-32 group transition-right duration-300 inverse-hover w-[258.5px] absolute ${corners[number].box} ${corners[number].translate1}`
        }
        onClick={() => {
          setClicked(!clicked);
          clickHandler(number, "center");
        }}
      >
        <svg
          viewBox="0 0 240 47"
          fill="#f7f6f1"
          xmlns="http://www.w3.org/2000/svg"
          className=" hover:fill-[#f7f6f160] fill-[#f7f6f110] transition-colors duration-300"
        >
          <path
            d="M234.859 0.5H5C2.51472 0.5 0.5 2.51472 0.5 5V42C0.5 44.4853 2.51472 46.5 5 46.5H130.5H191.167C192.232 46.5 193.263 46.1223 194.075 45.4341L237.767 8.43406C240.965 5.72554 239.05 0.5 234.859 0.5Z"
            stroke=" #f7f6f160"
          />
        </svg>
        <Image
          src={icons[number].center}
          alt="logo_deneme"
          width={30}
          height={30}
          className={`absolute right-14 top-2 invert group-hover:opacity-100 opacity-0  ${corners[number].line}`}
        />
      </div>
      <div
        className={
          number < 2
            ? `kursu-outer-box-${number} hover:left-32 group transition-left duration-300 inverse-hover w-[258.5px] absolute ${corners[number].box} ${corners[number].translate2}`
            : `kursu-outer-box-${number} hover:right-32 group transition-right duration-300 inverse-hover w-[258.5px] absolute ${corners[number].box} ${corners[number].translate2}`
        }
        onClick={() => {
          setClicked(!clicked);
          clickHandler(number, "outer");
        }}
      >
        <svg
          viewBox="0 0 240 47"
          fill="#f7f6f1"
          xmlns="http://www.w3.org/2000/svg"
          className=" hover:fill-[#f7f6f160] fill-[#f7f6f110] transition-colors duration-300"
        >
          <path
            d="M234.859 0.5H5C2.51472 0.5 0.5 2.51472 0.5 5V42C0.5 44.4853 2.51472 46.5 5 46.5H130.5H191.167C192.232 46.5 193.263 46.1223 194.075 45.4341L237.767 8.43406C240.965 5.72554 239.05 0.5 234.859 0.5Z"
            stroke=" #f7f6f160"
          />
        </svg>
        <Image
          src={icons[number].outer}
          alt="logo_deneme"
          width={30}
          height={30}
          className={`absolute right-14 top-2 invert group-hover:opacity-100 opacity-0  ${corners[number].line}`}
        />
      </div>
      {/* <div
        key={"top-popup"}
        className={`absolute z-[99] w-[217px] ${corners[number].popup} ${
          clicked ? "flex" : "hidden"
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
            stroke=" #f7f6f160"
            stroke-opacity="0.6"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default KursuCorner;

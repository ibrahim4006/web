import React from "react";

const Denemedrop = ({ input, alignment, border, text, value, setDataindex }) => {
  const getOrder = () => {
    if (input === -1) {
      return [3, 2, 1]; // Number, Text, Image
    } else {
      return [1, 2, 3]; // Default order: Image, Text, Number
    }
  };

  const [first, second, third] = getOrder();

  const value_length = value ? value.length : 2

  const onhover = () => {
    console.log("nigga")
  }

  const changeActiveOption = (option) => {
    setDataindex(option);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: value_length > 2 ? `${value_length*50}px` : "150px",
        border: border,
        padding: "1rem 1.2rem",
        borderRadius: ".5rem",

      }}
      className="group hover:bg-[#F7F6F1]"
      onMouseEnter={() => changeActiveOption(text)}
      
    >
      <span
        style={{
          alignSelf: alignment === "right" ? "flex-end" : "flex-start",
          order: first,
          //marginBottom: input === 1 ? "20px" : "0",
          //marginTop: input === -1 ? "20px" : "0",
          width: "20px",
          height: "20px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: "Montserrat",
        }}
        className=" group-hover:text-black"
      >
        +
      </span>

      <span
        style={{
          alignSelf: alignment === "right" ? "flex-start" : "flex-end",
          order: second,
          fontSize: "16px",
          textAlign: alignment === "right" ? "left" : "right",
          fontFamily: "Montserrat",
          fontWeight: "300",
          whiteSpace:"nowrap",
        }}
        className=" group-hover:text-black"
      >
        {text}
      </span>

      <span
        style={{
          alignSelf: alignment === "right" ? "flex-start" : "flex-end",
          order: third,
          fontSize: "64px",
          fontFamily: "Montserrat",
          fontWeight: "700",
        }}
        className=" group-hover:text-black"
      >
        {value}
      </span>
    </div>
  );
};

export default Denemedrop;

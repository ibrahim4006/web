import React from "react";

const Baslik = ({ text, yPos , textColor}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "0px",
        top: yPos,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "1px",
            width: "50px",
            backgroundColor: textColor,
          }}
        />
        <div
          style={{
            height: "4px",
            width: "10px",
            
            backgroundColor: textColor,
            borderRadius: "5px",
          }}
        />
      </div>
      <span
        style={{
          fontSize: "24px",
          fontFamily: "Montserrat",
          fontWeight: "700",
          marginLeft:"15px",
          color: textColor,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Baslik;

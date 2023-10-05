import React, { useEffect, useState, useRef } from "react";

export default function DaktiloArena({}) {
  const [sourceText, setSourceText] = useState(
    "hebele hübele hebele hübele hebele hübele hebele hübele"
  );
  const [typedText, setTypedText] = useState("");
  const [divWidth, setDivWidth] = useState();

  const handleKeyPress = (event) => {
    const keyPressed = event.key;
    const nextCharacter = sourceText.charAt(typedText.length);

    if (keyPressed === nextCharacter) {
      setTypedText(typedText + keyPressed);
    }
  };
  const textareaRef = useRef(null);

  const handleOuterDivClick = () => {
    textareaRef?.current.focus();
  };

  useEffect(() => {
    const div = document.getElementById("movableDiv");

    const handleKeyPress = (event) => {
      setDivWidth(div?.clientWidth);
      if (typedText.charAt(typedText.length - 1) === " ") {
        setDivWidth((prevWidth) => prevWidth + 16);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [divWidth, typedText]);

  return (
    <div
      className=" absolute flex justify-center items-center h-full w-full text-[#f7f6f1]"
      onClick={handleOuterDivClick}
    >
      <div className="flex justify-start items-center flex-wrap w-[4px] h-28 absolute left-1/2">
        <div className="mt-8 absolute arrow arrow-up invert" />
        <div
          className="absolute text-3xl font-bold mb-4 opacity-30 whitespace-nowrap"
          style={{ transform: `translateX(-${divWidth}px)` }}
        >
          {sourceText}
        </div>
        <div
          id="movableDiv"
          className="absolute text-3xl font-bold mb-4  whitespace-nowrap"
          style={{ transform: `translateX(-${divWidth}px)` }}
        >
          {typedText}
        </div>
        <textarea
          ref={textareaRef}
          className="absolute w-full p-2 rounded-lg bg-[#0D0D0D] focus:outline-none  opacity-0"
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}

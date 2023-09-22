import Image from "next/image";
import React from "react";
import RakipChatbox from "./RakipChatbox";
import MyChatbox from "./MyChatBox";

type Props = {};

const ChatArea = (props: Props) => {
  return (
    <div
      key={"entire chat region"}
      className=" h-full w-full absolute bottom-0 right-0 flex flex-col xl:mr-14 mx-auto z-30 px-4 md:px-0  " 
    >
      <div
        key={"rakip"}
        className="h-[70px]  relative top-0 frame-chat-top border-b flex flex-row items-center justify-between bg-[#F7F6F1]"
      >
        <div className="flex flex-row items-center">
          <div className="h-[44px] w-[34px] bg-gray-300 ml-3 left-0 " />
          <div className="flex flex-col relative ml-6">
            <span className="font-light">MUHAMMET ALPEREN EFİLOĞLU</span>
            <span className="font-bold">ÜNVAN</span>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-row items-center mr-6">
            <span className="font-bold  text-end mt-[2px] ">10348</span>
            <Image
              src="/rank.svg"
              alt="Polygon logo"
              width={20}
              height={20}
              className="object-contain inverse-hover ml-2 mb-1 relative"
              onClick={() => showProfile()}
            />
          </div>
          <Image
            src="/headerpolygon.svg"
            alt="Polygon logo"
            width={30}
            height={30}
            className="object-contain inverse-hover mr-3 right-0 relative"
            onClick={() => showProfile()}
          />
        </div>
      </div>
      <div
        key={"chat message section"}
        className="h-[798px] w-full relative top-0 flex flex-col "
      >
        <div
          key={"messages"}
          className=" h-[728px] w-full relative top-0 overflow-y-auto"
        >
          <RakipChatbox /> <MyChatbox />
          <MyChatbox />
        </div>
        <div
          key={"message enter"}
          className=" bg-[#F7F6F1] h-[70px] w-full relative bottom-0 flex flex-row justify-between items-center py-4 border-t"
        >
          <div key={"text area holder"} className="w-[93%] h-[55px] overflow-y-auto inverse-hover flex items-center justify-center text-center">
            <textarea
              placeholder="Mesaj gönder..."
              className="bg-[#F7F6F1] w-full h-full max-w-full resize-none focus:outline-none px-2 flex text-start items-center inverse-hover"
              rows="1" // Set an initial number of rows (adjust as needed)
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />
          </div>
          <div key={"send button holder"} className="w-[7%] absolute right-0 bottom-6 flex justify-center items-center">
            <Image
              src="/denemeboomerang.svg"
              alt="Polygon logo"
              width={30}
              height={30}
              className="object-contain inverse-hover h-[10%] -rotate-90"
              onClick={() => showProfile()}
            />
          </div>
        </div>
      </div>

      <div
        key={"kullanıcı"}
        className="h-[70px] relative bottom-0 frame-chat-bottom border-t flex flex-row items-center justify-between bg-[#F7F6F1]"
      >
        <div className="flex flex-row items-center">
          <div className="h-[44px] w-[34px] bg-gray-300 ml-3 left-0 " />
          <div className="flex flex-col relative ml-6 ">
            <span className="font-light">MUHAMMET ALPEREN EFİLOĞLU</span>
            <span className="font-bold">ÜNVAN</span>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-row items-center mr-6">
            <span className="font-bold  text-end mt-[2px] ">1348</span>
            <Image
              src="/rank.svg"
              alt="Polygon logo"
              width={20}
              height={20}
              className="object-contain inverse-hover ml-2 mb-1 relative"
              onClick={() => showProfile()}
            />
          </div>
          <Image
            src="/headerpolygon.svg"
            alt="Polygon logo"
            width={30}
            height={30}
            className="object-contain inverse-hover mr-3 right-0 relative"
            onClick={() => showProfile()}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;

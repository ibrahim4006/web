import React from "react";

type Props = {};

const MyChatbox = (props: Props) => {
  return (
    <div className=" relative max-w-full whitespace-normal flex justify-start my-2 ml-8 items-center">
      <div className="py-2 px-3 border-[1px] rounded-lg flex justify-center bg-[#0D0D0D]">
        <p className="font-light text-lg text-[#F7F6F1] p-2">
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
          metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
          numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
          1500'l
        </p>
      </div><div className="center w-[26px]">
        <div className="w-4 h-[1px] bg-[#0D0D0D]" /><div className="w-[10px] rounded-[8px] h-1 bg-[#0D0D0D]" />
        
      </div>
    </div>
  );
};

export default MyChatbox;

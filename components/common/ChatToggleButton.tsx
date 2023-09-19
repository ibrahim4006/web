import Image from 'next/image'
import React from 'react'

type Props = {}

const ChatToggleButton = ({setChatShow,chatShow}) => {
  return (
    <div
            key={"chat toggle button"}
            className="inverse-hover right-0 top-[47%] mr-4 absolute z-10 object-contain transition-transform duration-500"
            onClick={() => setChatShow(!chatShow)}
          >
            <Image
              src="/denemeboomerang.svg"
              alt="chat toggle button "
              width={30}
              height={30}
              className={chatShow ? "-rotate-90 z-10" : "rotate-90 z-10"}
              //64% previously
              onClick={() => setChatShow(!chatShow)}
            />
          </div>
  )
}

export default ChatToggleButton
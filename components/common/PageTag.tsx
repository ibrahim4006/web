import React from 'react'

const PageTag = ({tag}) => {
  return (
    <div className=" absolute top-[60px] w-[250px] flex justify-start items-center mt-4 font-light">
        <div className="center w-[27px]">
          <hr className="w-16 border-t-[1px] border-black" />
          <div className="w-10 rounded-[8px] h-1 bg-[#0D0D0D]"/>
        </div>
        <p className="font-light text-lg ml-3">{tag}</p>
      </div>
  )
}

export default PageTag
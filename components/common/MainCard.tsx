import Image from 'next/image'
import React from 'react'

function MainCard() {
  return (
    <div className='center relative'>
      <Image
              src="/maincard.svg"
              alt="Main Card"
              priority={true}
              width={650}
              height={180}
              className="mt-12"
            />
        <div className='absolute top-[42%] left-[33%] flex flex-col justify-center items-center space-y-10 z-2 text-[#F7F6F1]'>
            <h1 >Görevi kabul ediyor musun?</h1>
            <div className='center space-x-16'>
                <h1 className='hover:text-[#0D0D0D] hover:bg-[#F7F6F1] px-5 hover:px-5 py-2 hover:py-2'>Evet</h1>
                <h1 className='hover:text-[#0D0D0D] hover:bg-[#F7F6F1] px-5 hover:px-5 py-2 hover:py-2'>Hayır</h1>
            </div>
        </div>
    </div>
  )
}

export default MainCard

import Image from 'next/image'
import React from 'react'

type Props = {}

const CardOuterMinimal = (props: Props) => {
  return (
    <div><Image
    src="/card/bottom-left.svg"
    alt="bottom left"
    width={47}
    height={72}
    className={"absolute -bottom-3 -left-3"}
  />
  <Image
    src="/card/top-right.svg"
    alt="top left"
    width={77}
    height={72}
    className={"absolute -top-4 -left-2 -rotate-90"}
  />
  <Image
    src="/card/bottom-left.svg"
    alt="bottom right"
    width={47}
    height={72}
    className={"absolute -bottom-6 -right-0 -rotate-90"}
  />
  <Image
    src="/card/top-right.svg"
    alt="top right"
    width={77}
    height={72}
    className={"absolute -top-3 -right-3"}
  /></div>
  )
}

export default CardOuterMinimal
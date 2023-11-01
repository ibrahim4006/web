import Image from 'next/image'
import React from 'react'

type Props = {}

const CardOuter = (props: Props) => {
  return (
    <div><Image
    src="/card/bottom-left.svg"
    alt="bottom left"
    width={47}
    height={72}
    className={"absolute -bottom-3 -left-3"}
  />
  <Image
    src="/card/top-left.svg"
    alt="top left"
    width={77}
    height={72}
    className={"absolute -top-11 -left-8"}
  />
  <Image
    src="/card/bottom-right.svg"
    alt="bottom right"
    width={77}
    height={77}
    className={"absolute -bottom-11 -right-8"}
  />
  <Image
    src="/card/top-right.svg"
    alt="top right"
    width={65}
    height={72.33}
    className={"absolute -top-3 -right-3"}
  /></div>
  )
}

export default CardOuter
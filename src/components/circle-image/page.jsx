import Image from 'next/image'
import React from 'react'

export default function CircleImage({item, imgUrl,alt}) {
  return (
    <div className={` position-fixed z-1 ${item}`}>
      <Image src={imgUrl} alt={alt} unoptimized/>
    </div>
  )
}

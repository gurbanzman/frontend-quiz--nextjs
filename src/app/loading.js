import React from 'react'
import Image from 'next/image'
import loading from '../../public/images/Iphone-spinner-2.gif'

export default function Loading() {
  return (
    <div className='loading--content'>
      <Image src={loading} unoptimized width={200} height={200}/>
    </div>
  )
}

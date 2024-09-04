import Image from 'next/image'
import React from 'react'

export const LargeImage = () => {
  return (
    <Image 
    className='w-[75vw] h-auto'
    src={'/asset/video.jpg'} alt={''} width={500} height={500}/>
  )
}

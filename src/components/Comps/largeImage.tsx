import Image from 'next/image'
import React from 'react'

export const LargeImage = ({img}:{img:string}) => {
  return (
    <Image 
    className='w-auto h-[90vh]'
    src={img} alt={'Image'} width={1080} height={1080}/>
  )
}

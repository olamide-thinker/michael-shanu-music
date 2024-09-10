import Image from 'next/image'
import React from 'react'

export const LargeImage = ({img}:{img:string}) => {
  return (
    <Image 
    className='sm:w-auto w-full sm:h-[90vh] h-auto'
    src={img} alt={'Image'} width={1080} height={1080}/>
  )
}

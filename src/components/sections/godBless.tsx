import Image from 'next/image'
import React from 'react'

const GodBless = () => {
  return (
    <div className='h-[260px] w-screen border-t-2 border-b-2 border-white flex items-end '>
        <div className='flex items-center -mb-0.5'>

         <Image width={800} height={800} src={'/asset/img-cross-mountain.svg'} alt={''}
         className='max-w-[500px]'
         />
       <h2 className='text-[45px]'> God Bless You As You Listen</h2>
        </div>
        </div>
  )
}

export default GodBless
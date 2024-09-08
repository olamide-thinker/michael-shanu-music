import Image from 'next/image'
import React from 'react'

const GodBless = () => {
  return (
    <div className='sm:h-[360px] flex bg-slate-400/10 sm:w-full  border-white items-end '>
        <div className='flex items-center mb-0.5  flex-col sm:flex-row p-4 opacity-60'>

         <Image width={800} height={800} src={'/asset/img-cross-mountain.svg'} alt={''}
         className='max-w-[800px] w-full '
         />
       <h2 className='sm:text-[45px] text-4xl p-4'> God Bless You As You Listen</h2>
        </div>
        </div>
  )
}

export default GodBless
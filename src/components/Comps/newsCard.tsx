import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'

const NewsCard = ({image, heading, details, url}:{image:string, heading:string, details:string, url: string}) => {
  return (

    <div className='relative max-w-[335px] h-full group rounded-[30px] overflow-hidden'>
        <div className='p-4 w-full  bg-gradient-to-b from-black/0 h-full flex flex-col justify-end to-black z-30 text-white absolute bottom-0'>
            <h3 className='text-2xl font-bold '>{heading}</h3>
            <p className='text-sm'>{details}</p>
        <div className='flex mt-4 w-full items-center gap-2'>
            <Button className='bg-white/30 hover:bg-white/30 hover:border border-white rounded-full text-white gap-2' >Find article <Icon icon="lucide:external-link" /></Button>
            
            
            {/* marquee */}
            <div className='overflow-hidden whitespace-nowrap'>
                <div className='marquee inline-block group-hover:animate-marquee  w-fit'>
                     <p className='text-sm truncate font-light'>{url}</p>
                </div>
            </div>

        </div>
        </div>
        <Image className='w-full h-full object-cover group-hover:scale-105 duration-1000' src={image} alt={''} height={500} width={500}/>
    </div>

  )
}

export default NewsCard
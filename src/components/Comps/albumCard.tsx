import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Icon } from '@iconify/react/dist/iconify.js'
import AlbumCoverImg from './album_coverImg'

const AlbumCard = ({tracks, album_name, album_brief, album_coverImg}:{tracks:string[], album_name:string, album_brief:string, album_coverImg:string}) => {
  return (
    
<CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
<div  className=' p-2 bg-white sm:min-w-[600px] min-w-[350px] rounded-[50px] m-1'>
    <div className=' hover:bg-black/5  flex flex-col text-black  sm:flex-row gap-2 smp-2 bg-white relative rounded-[40px]'>
        {/* left side */}
        <div className='sm:w-[60%] h-[60%] p-1 rounded-3xl '> 
            <div className='w-full relative'>
                <div className='absolute -bottom-1 left-2'>

            <Icon icon="fluent:play-circle-48-regular" className='h-20 w-20 bg-white rounded-full hover:shadow-sm cursor-pointer hover:border'/>
                </div>
            <AlbumCoverImg img_path={album_coverImg}/> 
            </div>
        <div className='p-2'>

        <h2 className='text-3xl font-bold'> {album_name} </h2>
        <p className='text-sm line-clamp-5'> {album_brief} </p>
        </div>
        </div>

        {/* right side */}
        <div className='sm:w-[40%] space-y-1.5  flex flex-col justify-between'>
            <div className='space-y-2'>

            <h3>Tracks</h3>
            {
                tracks.map((track, i)=>(
                    <div key={i} className='block w-full p-3 rounded-xl  bg-black/5 hover:shadow-sm hover:bg-white'>
                        {i+1}: {track}
                    </div>
                ))
            }
            </div>
        {/* floating */}
        <div className=''>
            <p>Listen on</p>
            <div className='grid grid-cols-4 w- hover:scale-110 cursor-pointer transition-all ease-in rounded-2xl bg-white pl-4 p-2 shadow-md items-center '>
                {/* music site icons */}
                <Icon icon="simple-icons:itunes" className='w-8 h-8' />
                <Icon icon="hugeicons:youtube" className='w-8 h-8' />
                <Icon icon="hugeicons:spotify" className='w-8 h-8' />
                <Icon icon="simple-icons:audiomack" className='w-8 h-8' />
                <Icon icon="simple-icons:tidal" className='w-8 h-8' />
                <Icon icon="arcticons:deezer" className='w-8 h-8' />
                <Icon icon="simple-icons:amazonmusic" className='w-8 h-8' />
                <Icon icon="arcticons:boomplay" className='w-8 h-8' />
            </div>
        </div>
        </div>

    </div>
</div>
          </CarouselItem>
  )
}

export default AlbumCard
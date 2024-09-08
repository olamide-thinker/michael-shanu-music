'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import AlbumCoverImg from '../Comps/album_coverImg'
import AlbumCard from '../Comps/albumCard'
import { AudioPlayerProvider } from '../Comps/audioControl'

const albums = [
  {
  tracks:["oro","Emmanueli","New Beginning","Ijo Ope","Amazing Feeling"],
  album_name: "The Journey",
  album_brief:"This is one unique body of work I have been working on for as long as I can remember; I can only thank God for the engineering of this project.Thank you as you join me on this epic musical journey 😊 and don’t forget to share! ❤️",
  album_coverImg: "/asset/album_cover/theJourney_coverImage.png",
},{
  tracks:["Find You", "Fire", "Oba Nla", "Ola"],
  album_name: "Great God",
  album_brief:"Introducing the GREAT GOD EP.One out of many music projects I’ve been working on with my #amazingteam. A body of work born from a place of worship with with Holy Spirit. It’s sure to do great things in your life as you give God a chance.",
  album_coverImg: "/asset/album_cover/GreatGod_coverImage.png",
},
]



const MusicProjects = () => {
  return (
    <div className=' w-full h-screen overflow-hidden sm:py-16 sm:px-0 p-4  space-y-4 bg-[url("/asset/img-bg-project.jpg")] object-cover bg-cover'>
         <h2 className='font-bold px-8'>
        Music Projects
         </h2>

        {/* Music Card */}
         <div className='flex  gap-2'>

         <Carousel
      opts={{
        align: "center",
      }}
      className="w-full"
    >
      <CarouselContent className='rounded-3xl space-x-2 px-3'>


        <AudioPlayerProvider>
      {albums.map((album,i)=>(

        <AlbumCard key={i} 
          tracks={album.tracks} 
          album_name={album.album_name} 
          album_brief={album.album_brief} 
          album_coverImg={album.album_coverImg}/>
        ))}
          </AudioPlayerProvider>
    
      </CarouselContent>
      <CarouselPrevious className='absolute left-2 text-black bg-white shadow z-50 top-1/2 translate-y-1/2' />
      <CarouselNext className='absolute right-2  text-black bg-white shadow z-50 top-1/2 translate-y-1/2' />
    </Carousel>


  

     
         </div>
    </div>
  )
}

export default MusicProjects
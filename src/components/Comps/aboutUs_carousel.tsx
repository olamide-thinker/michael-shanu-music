"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from '../ui/card'
import ReactPlayer from 'react-player/lazy'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import NewsCard from './newsCard'


const newsData = [
  {
    image:"/asset/aboutme/aboutMe_punch.jpg",
    heading:"Released a new EP. title The Journey.", 
    details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, incidunt!", 
    url: "www.punchnewspaper.com/articles"
  },
  {
    image:"/asset/bg.jpg",
    heading:"View my photo gallery on pinterest ", 
    details:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, incidunt!", 
    url: "www.punchnewspaper.com/articles"
  },
]


export const AboutUs_carousel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className=" h-full m-0 p-0"
    >

<CarouselPrevious className='absolute -left-3  text-black bg-white shadow z-50 top-1/2 translate-y-1/2' />
<CarouselNext className='absolute -right-3  text-black bg-white shadow z-50 top-1/2 translate-y-1/2' />
      <CarouselContent className='rounded-[30px] w-full'>
      <CarouselItem  className="md:basis-1/2 lg:basis-1/4 max-w-screen rounded-[30px]  items-center overflow-hidden m bg-black mr-3">
            <div className="sm:w-[650px] md:w-[650px] h-full overflow-hidden rounded-3xl">
            <ReactPlayer
            playing 
            controls={false}
            light={<Image width={900} height={900} src={'/asset/video.jpg'} alt={''} className=' rounded-2xl overflow-hidden h-full object-cover '/>}
            width={"100%"}
            height={"100%"}
            url='https://youtu.be/pqoZRWL79Bo' 
            />
            </div>
          </CarouselItem>

          {newsData.map((news, i)=>(
          <CarouselItem key={i}  className="md:basis-1/2 lg:basis-1/4 max-w-[350px] mr-3  cursor-pointer select-none p-0">
            <NewsCard 
            image={news.image}
            heading={news.heading} 
            details={news.details} 
            url={news.url}/>
          </CarouselItem>
          ))
          }

{/* 
          <CarouselItem  className="md:basis-1/2 lg:basis-1/4 max-w-[100px]  ">
          hello
            <Image width={800} height={800} src={'/asset/about2.png'} alt={'maxw-[100px]'}/>
          </CarouselItem> */}
     
      </CarouselContent>
      
    </Carousel>
  )
}

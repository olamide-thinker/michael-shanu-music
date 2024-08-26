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
      className="w-full h-full"
    >
      <CarouselContent className='rounded-3xl '>
      <CarouselItem  className="md:basis-1/2 lg:basis-1/4 min-w-fit p-0 rounded-3xl overflow-hidden  bg-black">
            <div className="w-[610px] overflow-hidden ">
            <ReactPlayer
            playing 
            controls={false}
            light={<Image width={900} height={900} src={'/asset/video.jpg'} alt={''} className=' '/>}
            width={"100%"}
            height={"100%"}
            url='https://www.youtube.com/watch?v=Cc70VsAS-S8' 
            />
            </div>
          </CarouselItem>

          {newsData.map((news, i)=>(
          <CarouselItem key={i}  className="md:basis-1/2 lg:basis-1/4 max-w-[350px]">
            <NewsCard 
            image={news.image}
            heading={news.heading} 
            details={news.details} 
            url={news.url}/>
          </CarouselItem>
          ))
          }


          <CarouselItem  className="md:basis-1/2 lg:basis-1/4  max-w-[350px] ">
            <Image width={800} height={800} src={'/asset/about2.png'} alt={''}/>
          </CarouselItem>
     
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

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


import { db } from "./../../firebaseConnection/firebase"; // Firebase config file
import { doc, getDoc } from "firebase/firestore";
// import AudioPlayer from "./AudioPlayer";

// Track Interface
export interface Track {
  id: number;
  name: string;
  url: string;
}

// Album Interface
export interface Album {
  album_name: string;
  album_brief: string;
  album_coverImg: string;
  tracks: Track[];
} 



// const albums : Album[] = [
  const albums: Album[] = [
    {
      album_name: "The Journey",
      album_brief:
        "This is one unique body of work I have been working on for as long as I can remember; I can only thank God for the engineering of this project.Thank you as you join me on this epic musical journey 😊 and don’t forget to share! ❤️",
      album_coverImg: "/asset/album_cover/theJourney_coverImage.png",
      tracks: [
        {
          name: "oro",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fthe%20journey%2FOro.mp3?alt=media&token=6e3adbcf-c565-4494-a837-73570ee1e199",
          id: 1,
        },
        {
          name: "Emmanueli",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fthe%20journey%2FEmmanueli.mp3?alt=media&token=a06025be-4a39-4a91-b610-ea3eaa1dcca5",
          id: 2,
        },
        {
          name: "New Beginning",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fthe%20journey%2FNew%20Beginning.mp3?alt=media&token=7fcd479c-cb0b-408e-b024-05211ce757f2",
          id: 3,
        },
        {
          name: "Ijo Ope",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fthe%20journey%2FIjo%20Ope.mp3?alt=media&token=3230e700-e697-4685-97b7-5fe59df58e89",
          id: 4,
        },
        {
          name: "Amazing Feeling",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fthe%20journey%2FAmazing%20Feeling.mp3?alt=media&token=4c354a52-96e4-4035-b438-8f2ea99a3709",
          id: 5,
        },
      ],
    },
    {
      album_name: "Great God",
      album_brief:
        "Introducing the GREAT GOD EP. One out of many music projects I’ve been working on with my #amazingteam. A body of work born from a place of worship with the Holy Spirit. It’s sure to do great things in your life as you give God a chance.",
      album_coverImg: "/asset/album_cover/GreatGod_coverImage.png",
      tracks: [
        {
          name: "Find You",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fgreat%20god%2FFind%20You.mp3?alt=media&token=f3057eb0-2e52-49a6-93d3-fee2da2a1dce",
          id: 1,
        },
        {
          name: "Fire",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fgreat%20god%2FFire.mp3?alt=media&token=abc47a6c-5df9-48e8-b1e1-8bc071772809",
          id: 2,
        },
        {
          name: "Oba Nla",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fgreat%20god%2FOba%20Nla.mp3?alt=media&token=2eacd7ef-a948-486e-8880-b4adaf0bb938",
          id: 3,
        },
        {
          name: "Ola",
          url: "https://firebasestorage.googleapis.com/v0/b/michael-shanu-music.appspot.com/o/Michael%20Shanu%20Music%2Fgreat%20god%2FOla.mp3?alt=media&token=1a434fbe-b830-4b93-9b19-4c8bc5b62f0d",
          id: 4,
        },
      ],
    },
  ];



const MusicProjects = () => {
  const [album, setAlbum] = React.useState<any>(null);

  // React.useEffect(() => {
  //   const fetchAlbum = async () => {
  //     const albumDoc = doc(db, "albums", albumId);
  //     const albumData = await getDoc(albumDoc);

  //     if (albumData.exists()) {
  //       setAlbum(albumData.data());
  //     } else {
  //       console.log("Album not found");
  //     }
  //   };

  //   fetchAlbum();
  // }, [albumId]);

  // if (!album) return <div>Loading...</div>;


  return (
    <div className=' w-full sm:h-screen overflow-hidden sm:py-16 sm:px-0 p-4  space-y-4 bg-[url("/asset/img-bg-project.jpg")] object-cover bg-cover'>
         <h2 className='font-bold px-8 font-Rokkitt text-4xl'>
        Music Projects
         </h2>

        {/* Music Card */}
         <div className='flex  gap-2 '>

         <Carousel
      opts={{
        align: "center",
      }}
      className="w-full h-fit"
    >
      <CarouselContent className='rounded-3xl space-x-2 px-3 '>


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
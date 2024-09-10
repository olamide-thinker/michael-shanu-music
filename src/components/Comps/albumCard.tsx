"use client";
import React from "react";
import {
  CarouselItem,
} from "@/components/ui/carousel";
import { Icon } from "@iconify/react";
import AlbumCoverImg from "./album_coverImg";
import AudioPlayer from "./audioPlayer";
import { Button } from "../ui/button";
import { FaPause, FaPlay } from "react-icons/fa6";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Track } from "../sections/musicProjects";

const AlbumCard = ({ tracks, album_name, album_brief, album_coverImg }: { tracks: Track[], album_name: string, album_brief: string, album_coverImg: string }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [songIndex, setSongIndex] = React.useState<number>(0);


let newTracks :{name:string, id:number}[] =[]
for(let track of tracks){
 newTracks.push({name:track.name , id: tracks.indexOf(track)})
}
const [duration, setDuration] = React.useState<number>(0);
  const [currentTime, setCurrentTime] = React.useState<number>(0);

const handleTimeUpdate = (currentTime: number, duration: number) => {
  setCurrentTime(currentTime);
  setDuration(duration);
};


const formatTime = (time: number) => {
  return (time / duration) * 100;
};

  const playTrack = (index: number) => {
    setSongIndex(index);
    // console.log('first', songIndex)
    setIsPlaying(true);
     };
  const pauseTrack = (index: number) => {
    setSongIndex(index);
    // console.log('first', songIndex)
    setIsPlaying(false);
     };


    

  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-fit ">
      <div className="p-2 bg-white sm:max-w-[600px] max-w-fit rounded-[50px] m-1">
        <div className="hover:bg-black/5 flex flex-col text-black sm:flex-row gap-2 sm:p-2 bg-white relative rounded-[40px]">
          {/* Left side */}
          <div className="sm:w-[60%] h-[60%] p-1 rounded-3xl">
            <div className="w-full relative">
              <div className="absolute -bottom-1 left-2"
              onClick={()=>{
                setSongIndex(0)
                setIsPlaying(true)}}
              >
                  {isPlaying ? (
                                  <Icon icon="icon-park-outline:pause-one" className="h-20 w-20 bg-white rounded-full hover:shadow-sm cursor-pointer hover:border" />
                          ) : (
                            <Icon icon="fluent:play-circle-48-regular" className="h-20 w-20 bg-white rounded-full hover:shadow-sm cursor-pointer hover:border" />
                          )}

               
              </div>
              <AlbumCoverImg img_path={album_coverImg} />
            </div>
            <div className="p-2">
              <h2 className="text-3xl font-bold"> {album_name} </h2>
              <p className="text-sm line-clamp-5"> {album_brief} </p>
            </div>
          </div>

          {/* Right side */}
          <div className="sm:w-[40%] space-y-1.5 ">
            <div className="space-y-2">
              <AudioPlayer
                    currentSong={{ src: tracks }}
                    songIndex={songIndex}
                    album_name={album_name}
                    playing ={isPlaying}
                    setIsPlaying={setIsPlaying}
                    setSongIndex={setSongIndex}
                    onTimeUpdate={handleTimeUpdate} // Pass the time update handler
                          />

              <h3>Tracks</h3>
              <ScrollArea className="h-[250px] flex flex-col gap-4">
<ScrollBar className=" w-0"/>
              {newTracks.map((track) => {
                  return (
                    <div 
                    // style={{background:`${isPlaying && songIndex === track.id ? "white":""}`}}
                    key={track.id} className={`overflow-hidden bg-[${isPlaying && songIndex === track.id ? "white":""}] relative rounded-xl my-2 bg-black/5 hover:shadow-sm  hover:bg-white`}>

                    <div className="flex realtive mt-1 w-full p-3 justify-between items-center" >
                      <p>{track?.name}</p>
                      <div className="flex items-center gap-3 justify-self-center ">
                      {isPlaying && songIndex === track.id ? (    <Button
                          variant={'ghost'}
                          className="rounded-full border border-border/10"
                    
                          onClick={() => pauseTrack(track.id)}
                          aria-label={isPlaying && songIndex === track.id ? "Pause" : "Play"}
                          size="icon"
                        >
                                <FaPause size={18} />
                  
                        </Button>
                    ) : (
                      <Button
                          variant={'ghost'}
                          className="rounded-full border border-border/10"
                          onClick={() => playTrack(track.id)}
                          aria-label={isPlaying && songIndex === track.id ? "Pause" : "Play"}
                          size="icon"
                        >
                                <FaPlay size={18} />
                        </Button>
                          )}
                      </div>
                    </div>
                      {isPlaying && songIndex === track.id && <div style={{width:`${formatTime(currentTime).toFixed(2)}%`}}
                        className={' mix-blend-exclusion bg-sky-400 absolute top-0 h-full ease-in transition-all duration-100 z-20 opacity-50'}>
                        </div>}
                    </div>
                  );
                })
              }
              </ScrollArea>
            
             </div>
            {/* Floating */}
            <div
            onClick={()=>{if('https://ffm.to/michaelshanuthejourneyep'.includes(album_name.toLocaleLowerCase().replace(/\s+/g, "")))window.open("https://ffm.to/michaelshanuthejourneyep", "_blank")}}
            >
              <p>Listen on</p>
              <div className="grid grid-cols-4 hover:scale-110  sm:w-full w-[250px] cursor-pointer transition-all ease-in rounded-2xl sm:mx-1 mx-4 bg-white pl-4 p-2  shadow-md items-center">
                <Icon icon="simple-icons:itunes" className="w-8 h-8" />
                <Icon icon="hugeicons:youtube" className="w-8 h-8" />
                <Icon icon="hugeicons:spotify" className="w-8 h-8" />
                <Icon icon="simple-icons:audiomack" className="w-8 h-8" />
                <Icon icon="simple-icons:tidal" className="w-8 h-8" />
                <Icon icon="arcticons:deezer" className="w-8 h-8" />
                <Icon icon="simple-icons:amazonmusic" className="w-8 h-8" />
                <Icon icon="arcticons:boomplay" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export default AlbumCard;

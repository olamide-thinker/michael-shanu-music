"use client";
import React from "react";

interface AudioPlayerProps {
  currentSong?: { src: string[] };
  songIndex: number;
  album_name: string;
  playing: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>; // Accepts number or null
  setSongIndex: React.Dispatch<React.SetStateAction<number>>;
  onTimeUpdate: (currentTime: number, duration: number) => void;
}

export default function AudioPlayer({
  currentSong,
  album_name,
  songIndex,
  playing,
  setIsPlaying,
  setSongIndex,
  onTimeUpdate,
}: AudioPlayerProps) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      onTimeUpdate(audioRef.current.currentTime, audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      onTimeUpdate(audioRef.current.currentTime, audioRef.current.duration);
    }
  };

  React.useEffect(()=>{
    if(!playing && songIndex >= 0 && currentSong?.src[songIndex]){
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.pause();
        // audioRef.current.currentTime = 0
      }
    }else{
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.play(); 
      }
    }
  },[currentSong?.src, playing, songIndex])

  console.log('==============>>>>>',playing)

  // React.useEffect(() => {
  //   if (audioRef.current && songIndex >= 0 && currentSong?.src[songIndex]) {
  //     audioRef.current.load();
  //     audioRef.current.play();
  //   }
  // }, [songIndex, album_name, currentSong?.src]);

  const handleSongEnd = () => {
    if (currentSong?.src && songIndex < currentSong.src.length - 1) {
      setSongIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsPlaying(false); // Stop playing when the last song ends
    }
  };

  return (
    <audio
      ref={audioRef}
      onEnded={handleSongEnd}
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleTimeUpdate}
      onPlaying={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(true)}
    >
      <source
        type="audio/mpeg"
        src={`/audiofiles/${album_name.toLowerCase().split(" ").join("_")}/${currentSong?.src[songIndex].toLowerCase().split(" ").join("_")}.mp3`}
      />
      Your browser does not support the audio element.
    </audio>
  );
}

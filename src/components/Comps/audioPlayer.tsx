"use client";
import * as React from "react";

interface AudioPlayerProps {
  currentSong?: { src: string[] };
  songIndex: number;
  album_name: string;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setSongIndex: React.Dispatch<React.SetStateAction<number>>;
  onTimeUpdate: (currentTime: number, duration: number) => void; // Add this prop
}

export default function AudioPlayer(props: AudioPlayerProps) {
  const { currentSong, album_name, songIndex, setIsPlaying, setSongIndex, onTimeUpdate } = props;

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Update the duration when metadata is loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      onTimeUpdate(audioRef.current.currentTime, audioRef.current.duration);
    }
  };

  // Update current time as the song plays
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      onTimeUpdate(audioRef.current.currentTime, audioRef.current.duration);
    }
  };

  React.useEffect(() => {
    if (audioRef.current && songIndex && album_name) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [songIndex, album_name, currentSong?.src]);

  const handleSongEnd = () => {
    if (currentSong?.src && songIndex < currentSong.src.length - 1) {
      setSongIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsPlaying(false); // Stop playing if it's the last song
    }
  };

  return (
    <audio
      ref={audioRef}
      onEnded={handleSongEnd}
      onLoadedMetadata={handleLoadedMetadata} 
      onTimeUpdate={handleTimeUpdate} 
      onPlaying={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    >
      <source
        type="audio/mpeg"
        src={`/audiofiles/${album_name.toLowerCase().split(" ").join("_")}/${currentSong?.src[songIndex]}.mp3`}
      />
      Your browser does not support the audio element.
    </audio>
  );
}

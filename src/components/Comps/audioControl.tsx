"use client";
import * as React from "react";

interface AudioPlayerContextProps {
  currentPlayingId: number | null;
  setCurrentPlayingId: React.Dispatch<React.SetStateAction<number | null>>;
}

const AudioPlayerContext = React.createContext<AudioPlayerContextProps | undefined>(undefined);

export const AudioPlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPlayingId, setCurrentPlayingId] = React.useState<number | null>(null);

  return (
    <AudioPlayerContext.Provider value={{ currentPlayingId, setCurrentPlayingId }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = React.useContext(AudioPlayerContext);
  if (!context) {
    throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
  }
  return context;
};

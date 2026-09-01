"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title: string;
  category?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  category = "Brand Film",
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setIsPlaying(true);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-lg transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-black border border-[#4D4D4D] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cinema Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#4D4D4D] bg-[#000000]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 bg-white animate-pulse" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B0B0B0] block">
                ARCC CINEMA SUITE // {category}
              </span>
              <h3 className="text-sm sm:text-base font-heading font-bold text-white uppercase truncate max-w-md">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#7D7D7D] hover:text-white border border-transparent hover:border-[#7D7D7D] transition-colors"
            aria-label="Close cinema viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          {videoUrl ? (
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              playsInline
              loop
              className="w-full h-full object-cover"
              onClick={togglePlay}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#111111] text-[#7D7D7D]">
              <Play className="w-16 h-16 mb-4 opacity-40 text-white" />
              <p className="text-xs font-mono uppercase tracking-widest text-[#B0B0B0]">
                [PREVIEW STREAM // 4K PRORES MASTER]
              </p>
            </div>
          )}

          {/* On-Screen Big Play Overlay when paused */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-20 h-20 bg-white/90 text-black flex items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110"
            >
              <Play className="w-8 h-8 ml-1 fill-black" />
            </button>
          )}

          {/* Cinema Overlay Controls */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 text-white hover:text-[#B0B0B0] transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 text-white hover:text-[#B0B0B0] transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <span className="text-[11px] font-mono text-[#B0B0B0] hidden sm:inline">
                4K UHD // 24.000 FPS // DOLBY ATMOS
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase px-2 py-1 border border-[#7D7D7D] text-[#B0B0B0]">
                ARCC REEL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

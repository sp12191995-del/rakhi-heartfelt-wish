import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play background music (note: most browsers require user interaction first)
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay prevented by browser');
        }
      }
    };

    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 festival-card rounded-full p-3 flex items-center gap-2">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        {/* Note: In a real app, you'd include actual audio files */}
        <source src="/raksha-bandhan-music.mp3" type="audio/mpeg" />
      </audio>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={togglePlay}
        className="rounded-full w-10 h-10 p-0 hover:bg-rakhi-orange/20"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 text-rakhi-red" />
        ) : (
          <Play className="h-4 w-4 text-rakhi-red" />
        )}
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMute}
        className="rounded-full w-10 h-10 p-0 hover:bg-rakhi-orange/20"
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4 text-rakhi-red" />
        ) : (
          <Volume2 className="h-4 w-4 text-rakhi-red" />
        )}
      </Button>
      
      <span className="text-sm text-rakhi-red font-medium">♪ Festival Music</span>
    </div>
  );
};
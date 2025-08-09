import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Maximize2 } from 'lucide-react';

export const VideoPlayer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-40 festival-card transition-all duration-300 ${
        isExpanded
          ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64'
          : 'bottom-6 right-6 w-48 h-32'
      } rounded-xl overflow-hidden shadow-lg`}
    >
      <div className="relative w-full h-full">
        {/* Video Container */}
        <div className="w-full h-full bg-gradient-to-br from-rakhi-orange/20 to-rakhi-red/20 flex items-center justify-center">
          {/* Placeholder for video - in a real app, you'd use actual video */}
          <div className="text-center">
            <div className="text-4xl mb-2 animate-gentle-bounce">🎥</div>
            <p className="text-rakhi-red font-medium text-sm">
              Rakhi Moment
            </p>
            <p className="text-rakhi-red/70 text-xs">
              Beautiful memories ❤️
            </p>
          </div>
        </div>
        
        {/* Controls */}
        <div className="absolute top-2 right-2 flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-6 h-6 p-0 bg-white/80 hover:bg-white rounded-full"
          >
            <Maximize2 className="h-3 w-3 text-rakhi-red" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="w-6 h-6 p-0 bg-white/80 hover:bg-white rounded-full"
          >
            <X className="h-3 w-3 text-rakhi-red" />
          </Button>
        </div>
        
        {/* Video title */}
        <div className="absolute bottom-2 left-2 text-xs text-rakhi-red/80 bg-white/80 px-2 py-1 rounded">
          Sacred Bond 💝
        </div>
      </div>
    </div>
  );
};
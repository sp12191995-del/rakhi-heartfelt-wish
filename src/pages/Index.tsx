import { RakhiBandhanGreeting } from '@/components/RakhiBandhanGreeting';
import { FloatingElements } from '@/components/FloatingElements';
import { MusicPlayer } from '@/components/MusicPlayer';
import { VideoPlayer } from '@/components/VideoPlayer';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <FloatingElements />
      
      {/* Main greeting content */}
      <RakhiBandhanGreeting />
      
      {/* Music player */}
      <MusicPlayer />
      
      {/* Video player */}
      <VideoPlayer />
      
      {/* Background decorative gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rakhi-orange/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rakhi-red/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rakhi-gold/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Index;

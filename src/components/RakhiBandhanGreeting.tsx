import { Card } from '@/components/ui/card';
import rakhiBandhanImage from '@/assets/raksha-bandhan-celebration.jpg';

export const RakhiBandhanGreeting = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        {/* Main Greeting Card */}
        <Card className="festival-card p-8 md:p-12 text-center space-y-8 animate-gentle-bounce">
          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-3xl animate-sparkle">🪔</span>
            <span className="text-4xl animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</span>
            <span className="text-3xl animate-sparkle" style={{ animationDelay: '1s' }}>🌸</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-dancing font-bold rakhi-heading leading-tight">
            Happy Raksha Bandhan,
            <br />
            My Lovely Sister ❤️
          </h1>

          {/* Celebration Image */}
          <div className="relative mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={rakhiBandhanImage}
                alt="Brother tying rakhi to sister in a beautiful Raksha Bandhan celebration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rakhi-orange/20 to-transparent"></div>
            </div>
            
            {/* Floating decorative elements around image */}
            <span className="absolute -top-4 -left-4 text-3xl animate-float">🌺</span>
            <span className="absolute -top-4 -right-4 text-3xl animate-float" style={{ animationDelay: '1s' }}>🌸</span>
            <span className="absolute -bottom-4 -left-4 text-3xl animate-float" style={{ animationDelay: '2s' }}>🏵️</span>
            <span className="absolute -bottom-4 -right-4 text-3xl animate-float" style={{ animationDelay: '3s' }}>✨</span>
          </div>

          {/* Heartfelt Message */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-rakhi-red font-medium leading-relaxed">
              "You are my sister, my friend, my forever blessing.
              <br />
              I promise to protect you always."
            </p>
            
            {/* Additional decorative message */}
            <div className="flex justify-center items-center gap-2 text-rakhi-orange">
              <span className="text-2xl">🤲</span>
              <p className="text-lg font-inter font-medium">
                May our bond grow stronger with each passing day
              </p>
              <span className="text-2xl">🤲</span>
            </div>
          </div>

          {/* Bottom decorative elements */}
          <div className="flex justify-center items-center gap-4 pt-6">
            <span className="text-2xl animate-sparkle">🙏</span>
            <span className="text-3xl animate-glow">🕉️</span>
            <span className="text-2xl animate-sparkle" style={{ animationDelay: '1s' }}>🙏</span>
          </div>
        </Card>

        {/* Additional blessing message */}
        <Card className="festival-card p-6 text-center">
          <p className="text-lg text-rakhi-red/80 font-inter italic">
            "On this sacred day of Raksha Bandhan, I celebrate the precious gift of having you as my sister. 
            Your love, laughter, and endless support make life beautiful. Happy Rakhi! 🎊"
          </p>
        </Card>
      </div>
    </div>
  );
};
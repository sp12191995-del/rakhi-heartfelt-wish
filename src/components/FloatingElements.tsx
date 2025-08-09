import { useEffect, useState } from 'react';

interface FloatingElementProps {
  emoji: string;
  duration: number;
  delay: number;
  size: string;
}

const FloatingElement = ({ emoji, duration, delay, size }: FloatingElementProps) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    };

    const interval = setInterval(updatePosition, duration);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      className="fixed pointer-events-none z-10 floating-flower"
      style={{
        left: position.x,
        top: position.y,
        fontSize: size,
        animationDelay: `${delay}s`,
      }}
    >
      {emoji}
    </div>
  );
};

export const FloatingElements = () => {
  const flowers = ['🌸', '🌺', '🌻', '🏵️', '🌼'];
  const sparkles = ['✨', '💫', '⭐', '🌟'];

  return (
    <>
      {/* Floating Flowers */}
      {Array.from({ length: 12 }, (_, i) => (
        <FloatingElement
          key={`flower-${i}`}
          emoji={flowers[i % flowers.length]}
          duration={8000 + Math.random() * 4000}
          delay={i * 0.5}
          size="2rem"
        />
      ))}
      
      {/* Sparkling Elements */}
      {Array.from({ length: 8 }, (_, i) => (
        <FloatingElement
          key={`sparkle-${i}`}
          emoji={sparkles[i % sparkles.length]}
          duration={4000 + Math.random() * 2000}
          delay={i * 0.3}
          size="1.5rem"
        />
      ))}
    </>
  );
};
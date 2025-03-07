
import { Bike } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface BikeAnimationProps {
  delay?: number;
  size?: number;
  color?: string;
}

const BikeAnimation = ({ 
  delay = 0, 
  size = 24, 
  color = "#f68b1f" 
}: BikeAnimationProps) => {
  const [animate, setAnimate] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Adjust position based on mobile or desktop
  const positionClass = isMobile 
    ? "absolute -left-10 top-1/2 transform -translate-y-1/2" 
    : "absolute -left-10 top-1/3";

  return (
    <div 
      className={`${positionClass} ${animate ? "animate-bike-ride" : "opacity-0"} z-10`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <Bike 
        size={size} 
        color={color} 
        className="animate-float drop-shadow-lg" 
      />
    </div>
  );
};

export default BikeAnimation;

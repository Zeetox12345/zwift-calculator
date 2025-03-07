
import { Bike } from "lucide-react";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`absolute -left-10 top-1/3 ${animate ? "animate-bike-ride" : ""}`} style={{ animationDelay: `${delay}ms` }}>
      <Bike size={size} color={color} className="animate-float" />
    </div>
  );
};

export default BikeAnimation;

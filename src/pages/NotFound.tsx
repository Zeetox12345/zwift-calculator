
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Bike, Home } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zwift-orange/5 to-transparent px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-radial from-zwift-orange/20 to-transparent rounded-full blur-xl"></div>
          <Bike size={80} className="mx-auto text-zwift-orange animate-float" />
        </div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! Looks like you've gone off course. This route doesn't exist.
        </p>
        <AnimatedButton
          to="/"
          variant="primary"
          size="lg"
          icon={<Home size={20} />}
          className="mx-auto"
        >
          Back to Home
        </AnimatedButton>
      </div>
    </div>
  );
};

export default NotFound;

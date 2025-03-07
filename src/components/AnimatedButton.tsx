
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const AnimatedButton = ({
  to,
  variant = "primary",
  size = "md",
  icon,
  children,
  className,
  external = false,
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all rounded-full hover-scale focus:outline-none focus:ring-2 focus:ring-zwift-orange focus:ring-offset-2";
  
  const variants = {
    primary: "bg-zwift-orange text-white hover:bg-zwift-orange/90 shadow-neon-orange",
    secondary: "bg-zwift-blue text-white hover:bg-zwift-blue/90 shadow-neon-blue",
    outline: "bg-transparent border border-zwift-orange text-zwift-orange hover:bg-zwift-orange/10",
    ghost: "bg-transparent text-foreground hover:bg-muted",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-1.5 space-x-1.5",
    md: "text-base px-5 py-2 space-x-2",
    lg: "text-lg px-6 py-2.5 space-x-3",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  // If it's a link
  if (to) {
    if (external) {
      return (
        <a
          href={to}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && <span className="inline-block">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    
    return (
      <Link to={to} className={classes}>
        {icon && <span className="inline-block">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  // Regular button
  return (
    <button className={classes} {...props}>
      {icon && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default AnimatedButton;

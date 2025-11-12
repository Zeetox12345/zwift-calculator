import { Link } from "react-router-dom";

const Author = () => {
  return (
    <div className="flex items-center gap-3 py-4 border-b border-border/50">
      <Link to="/author" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img
          src="/CLD_billede_4.jpg"
          alt="Christian Lassen Dam"
          className="w-12 h-12 rounded-full object-cover border-2 border-zwift-orange/20"
        />
        <span className="text-sm font-medium text-muted-foreground">
          Written by <span className="text-foreground">Christian L. Dam</span>
        </span>
      </Link>
    </div>
  );
};

export default Author;


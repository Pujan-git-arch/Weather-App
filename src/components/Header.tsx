import { useTheme } from "@/context/themeprovider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-backdrop-filter:bg-background-60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 overflow-hidden">
        
        {/* Logo */}
        <Link to="/">
          <img
            src={isDark ? "/logo2.png" : "/logo.png"}
            alt="Mausam Logo"
            className="block h-auto w-32 -ml-px object-contain"
          />
        </Link>

        {/* Theme toggle */}
        <div
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
        >
          {isDark? <Sun className ="h-6 w-6 text-yellow-500 rotate-0 transition-all"/>:<Moon className="h-6 w-6 text-gray-800 rotate-0 transition-all"/>}
        </div>



      </div>
    </header>
  );
};

export default Header;

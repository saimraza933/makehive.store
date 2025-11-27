import { Link, useLocation } from "react-router-dom";
import { Sparkles, ShoppingBag, BookOpen, Video, Store, Info, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Sparkles },
    { path: "/shop", label: "Shop", icon: ShoppingBag },
    { path: "/tutorials", label: "Tutorials", icon: BookOpen },
    { path: "/videos", label: "Videos", icon: Video },
    { path: "/sell", label: "Sell on Make Hive", icon: Store },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-md">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M12 3L18 8V14L12 19L6 14V8L12 3Z" fill="#FFF5CC" stroke="white" strokeWidth="1"/>
                <ellipse cx="12" cy="11" rx="3" ry="4" fill="#FFD700"/>
                <path d="M9 10Q12 8 15 10" stroke="#333" strokeWidth="1" fill="none"/>
                <circle cx="10" cy="9.5" r="0.8" fill="#333"/>
                <circle cx="14" cy="9.5" r="0.8" fill="#333"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-none">
                Make Hive
              </span>
              <span className="text-[10px] text-muted-foreground italic">Buzz Into Creativity</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                    size="sm"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
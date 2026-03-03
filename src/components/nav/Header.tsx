import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

function isSafari() {
  // Detect Safari (excluding Chrome/Edge)
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export default function Header() {
  const [safari, setSafari] = useState(false);

  useEffect(() => {
    setSafari(isSafari());
  }, []);


  const navItems = [
    { label: "Home", href: "/" },
    { label: "Poetry", href: "/poetry" },
    { label: "Fragments", href: "/fragments" },
    { label: "The Archive", href: "/archive" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const location = useLocation();


  

  return (
    <header className="w-full bg-background border-b border-border hidden md:block">
      <div className="container mx-auto px-6 py-6 flex justify-center items-center">
        <nav className="flex gap-12 md:gap-14 items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="relative px-2 py-1 text-lg font-semibold text-foreground transition-colors group"
              >
                <Link
                  to={item.href}
                  className="relative inline-block font-inter"
                 style={
                    safari
                      ? {
                          WebkitFontSmoothing: "antialiased",
                          MozOsxFontSmoothing: "grayscale",
                        }
                      : {}
                  }
                >
                  {item.label}
                  {/* Underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-0.5 w-full h-[2px] bg-accent rounded-full
                      transition-opacity duration-200
                      ${isActive ? "opacity-90" : "opacity-0"}
                      ${isActive ? "group-hover:opacity-0" : ""}
                    `}
                  />
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
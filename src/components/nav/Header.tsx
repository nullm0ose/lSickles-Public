import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

function isSafari() {
  // Detect Safari (excluding Chrome/Edge)
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export default function Header() {
  const [safari, setSafari] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSafari(isSafari());
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Poetry", href: "/poetry" },
    { label: "Fragments", href: "/fragments" },
    { label: "Archive", href: "/archive" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden w-full bg-background border-b border-border">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo or Site Name */}
          <Link to="/" className="text-xl font-semibold font-serif text-foreground">
            Lauren Sickles
          </Link>

          {/* Hamburger */}
          <button
            className="flex flex-col justify-between w-6 h-5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block h-0.5 bg-foreground transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="flex flex-col gap-4 px-6 pb-4 bg-background">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
  text-lg
  font-base
  leading-tight
  tracking-tight
  py-2
  transition-colors
  text-foreground/80

  ${
    location.pathname === item.href
      ? "text-foreground underline"
      : "text-foreground/80 hover:text-foreground"
  }
`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Header */}
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
                  className="
                          relative px-2 py-1
                          text-[1.05rem]
                          font-semibold
                          leading-tight
                          tracking-tight
                          text-foreground/80
                          hover:text-foreground
                          transition-colors
                          group
                        "
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
    </>
  );
}
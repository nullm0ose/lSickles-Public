import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Poetry", href: "/poetry" },
    { label: "Fiction", href: "/fiction" },
    { label: "Essays", href: "/essays" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const location = useLocation();

  return (
    <header className="w-full bg-background border-b border-border hidden md:block">
      <div className="container mx-auto px-6 py-6 flex justify-center items-center">

        {/* Navigation */}
        <nav className="flex gap-12 md:gap-14 items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="relative text-foreground hover:text-primary transition-colors px-2 py-1 text-lg font-bold"
              >
                <a
                  href={item.href}
                  className="relative inline-block"
                >
                  {item.label}

                  {/* Hand-drawn curved underline */}
                  {isActive && (
                    <span
                      className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-accent opacity-90 rounded-full"
                      style={{
                        transform: "scaleX(1) rotate(0.5deg)", // subtle arch
                      }}
                    />
                  )}
                </a>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
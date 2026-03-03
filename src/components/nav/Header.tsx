import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Poetry", href: "/poetry" },
    { label: "Fiction", href: "/fragments" },
    { label: "Essays", href: "/essays" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const location = useLocation();

  console.log("=== Header Debug ===");
  console.log("location.pathname:", location.pathname);

  return (
    <header className="w-full bg-background border-b border-border hidden md:block">
      <div className="container mx-auto px-6 py-6 flex justify-center items-center">
        <nav className="flex gap-12 md:gap-14 items-center">
          {navItems.map((item) => {
            const targetPath = item.href;
            const isActive = location.pathname === targetPath; // ✅ Compare pathname

            console.log(`Checking nav item "${item.label}": isActive =`, isActive);

            return (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="relative text-foreground hover:text-primary transition-colors px-2 py-1 text-lg font-semibold"
              >
                <Link to={item.href} className="relative inline-block">
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-accent opacity-90 rounded-full"
                      style={{ transform: "scaleX(1) rotate(0.5deg)" }}
                    />
                  )}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
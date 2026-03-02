import { FaTwitter, FaInstagram, FaMedium, FaPenFancy } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com/yourhandle", icon: <FaTwitter /> },
    { label: "Instagram", href: "https://instagram.com/yourhandle", icon: <FaInstagram /> },
    { label: "Medium", href: "https://medium.com/@yourhandle", icon: <FaMedium /> },
    { label: "Substack", href: "https://yourhandle.substack.com", icon: <FaPenFancy /> },
  ];

  return (
    <footer className="w-full bg-sidebar-accent/15 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_32px,rgba(0,0,0,0.05)_33px)] overflow-x-hidden">
      <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center space-y-3">

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-foreground/60 text-xs text-center">
          &copy; {new Date().getFullYear()} Lauren Sickles. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
import {  FaPenFancy } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";


export default function Footer() {
  const socialLinks = [
    { label: "Support my work", href: "https://donate.stripe.com/00w28sc9ofOT1ca7P8gIo00", icon: <FaHandshake /> },
    { label: "Follow & Subscribe", href: "https://laurennsickles.substack.com", icon: <FaPenFancy /> },
  ];

  return (
    <footer className="w-full bg-sidebar-accent/15 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_32px,rgba(0,0,0,0.05)_33px)] overflow-x-hidden">
      <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center space-y-3">

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-9">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-spectral ">{item.label}</span>
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
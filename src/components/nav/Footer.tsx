import {  FaPenFancy } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";


export default function Footer() {
  const socialLinks = [
    { label: "Support my work", href: "https://www.paypal.com/donate/?business=7BCYKC3SRNTTW&no_recurring=0&item_name=These+pages+are+free+to+read.+If+you%E2%80%99d+like+to+support+this+archive+and+future+work%2C+I%E2%80%99m+grateful.+One-time+or+ongoing.&currency_code=USD", icon: <FaHandshake /> },
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
              <span className="text-lg">{item.icon}</span>
              <span className="">{item.label}</span>
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
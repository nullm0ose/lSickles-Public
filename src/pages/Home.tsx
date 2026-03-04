import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  const ref = useRef<HTMLSpanElement>(null);
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    const span = ref.current;
    if (!span) return;

    const typingDuration = 1000; // 1s
    const timeout = setTimeout(() => {
      setTyped(true);
    }, typingDuration);

    return () => clearTimeout(timeout);
  }, []);

  

  return (
    <main className="space-y-20">

{/* Hero Section */}
<section
  className="
    w-full sm:max-w-7xl mx-auto max-w-6xl xl:max-w-7xl
    text-center
    space-y-7
    rounded-xl
    p-6 sm:p-10 md:p-14 lg:p-16
    bg-card
    bg-[repeating-linear-gradient(to_bottom,transparent,transparent_32px,rgba(0,0,0,0.11)_33px)]
    opacity-0 translate-y-4 animate-fade-in-up

    flex flex-col justify-center
    min-h-[70vh] sm:min-h-auto
  "
  style={{ animationDelay: '0.1s', animationFillMode: 'forwards', animationDuration: '0.6s' }}
>
  {/* Name */}
  <h1 className="text-[2.5rem] sm:text-4xl md:text-6xl font-instrument leading-tight">
    Lauren Sickles
  </h1>

  {/* Subtitle */}
  <p className="uppercase tracking-widest text-foreground/60 font-medium text-sm md:text-base">
    Writer · Poet · Storyteller
  </p>

  {/* Description */}
  <p className="text-lg md:text-xl text-foreground max-w-[90%] sm:max-w-3xl mx-auto">
    My poetry, essays, and reflective writing are gathered here, in one place
  </p>

  {/* CTA Button */}
  <Button
    asChild
    variant="default"
    className="
      mt-6
      bg-primary hover:bg-primary/90
      transition-colors
      px-10 py-6.5
      text-lg font-base
      rounded-md
      shadow-md
      mx-auto
    "
  >
    <Link to="/poetry">
      <span
        ref={ref}
        className={`typewriter inline-block font-medium ${typed ? 'typed' : ''} text-white/85`}
        style={{ fontFamily: 'inherit' }}
      >
        Explore My Work
      </span>
    </Link>
  </Button>
</section>

      {/* Featured Sections */}
   <section className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
  {[
    {
      title: "Poetry",
      description:
        " These poems start with something concrete. A room, a field, a younger self and stay there. Structured and intentional, each stands alone yet belongs to a larger arc.",
      href: "poetry", // <-- no leading slash
    },
    {
      title: "Essays",
      description:
        "Long form work rooted in lived experience. Workplaces, systems, family histories. These pieces trace life through institutions, relationships, and personal change.",
      href: "archive", // <-- no leading slash
    },
    {
      title: "Fragments",
      description:
        "Short works without forcing resolution. Some arrive whole, some as shards. Brief scenes, observations, lines that never stretched further. ",
      href: "fragments", // <-- use the actual route
    },
  ].map((item, idx) => (
    <Link
      key={item.title}
      to={item.href}
      className={`
        group flex flex-col p-6 border border-border rounded-md hover:shadow-md transition-shadow bg-card/40
        opacity-0 translate-y-4 animate-fade-in-up
        text-center md:text-center 
      `}
      style={{
        animationDelay: `${0.2 + idx * 0.15}s`,
        animationFillMode: "forwards",
        animationDuration: "0.6s",
      }}
    >
      <h2 className="text-2xl font-instrument leading-tight mb-2 group-hover:text-primary transition-colors ">
        {item.title}
      </h2>
      <p className="text-foreground text-base">{item.description}</p>
      <span className="mt-4 text-primary font-medium group-hover:underline transition-all">
        View {item.title.toLowerCase()}
      </span>
    </Link>
  ))}
</section>

{/* About Section */}
<section
  className="
    w-full mx-auto max-w-5xl lg:max-w-6xl
    text-center
    space-y-6
    p-6 sm:p-8 md:p-10 lg:p-12
    bg-sidebar-accent/30
    rounded-xl
    opacity-0 translate-y-4 animate-fade-in-up
  "
  style={{ animationDelay: '0.7s', animationFillMode: 'forwards', animationDuration: '0.6s' }}
>
  <h2 className="text-3xl md:text-4xl font-instrument  leading-tight">
A Body of Work
  </h2>
  <p className="text-foreground text-base md:text-base leading-relaxed">
The pieces speak to one another. They build over time. They record a life in motion. They examine labor, memory, authority, growth, and the tension between care and resistance.

This is ongoing work, shaped by where I have been and where I am willing to go.
  </p>
  <p className="text-foreground/70 text-sm md:text-base italic">
    This site gathers my writing in one place
  </p>

  <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
    {["Poetry", "Archived Work", "Fragments"].map((type, idx) => (
      <div
        key={type}
        className="opacity-0 translate-y-2 animate-fade-in-up"
        style={{
          animationDelay: `${0.8 + idx * 0.1}s`,
          animationFillMode: 'forwards',
          animationDuration: '0.5s'
        }}
      >
        <h3 className="font-instrument  text-lg md:text-xl">{type}</h3>
        <p className="text-foreground text-sm md:text-base max-w-xs mx-auto">
          {type === "Poetry" && "Words tracing emotion & observation. Reduced to image and impact."}
          {type === "Archived Work" && "Long form personal reflections rooted in lived experience."}
          {type === "Fragments" && "Short works that hold a moment without forcing resolution."}
        </p>
      </div>
    ))}
  </div>
</section>

{/* Latest Posts Section */}
<section
  className="
    w-full mx-auto max-w-xl xl:max-w-7xl
    space-y-8
    p-1
  "
>
  <div
    className="mb-10 opacity-0 translate-y-4 animate-fade-in-up text-center sm:text-left"
    style={{ animationDelay: '1.2s', animationFillMode: 'forwards', animationDuration: '0.6s' }}
  >
    <h2 className="text-3xl font-serif  mt-5 relative inline-block">
      Latest Posts
      <span className="hand-underline" />
    </h2>
    <p className="text-foreground text-base mx-auto sm:mx-0 max-w-3xl">
      A curated selection of recent poetry, essays, and reflections.
    </p>
  </div>

  <div className="space-y-6">
    {[
      {
        title: "The Cherry Tree",
        excerpt: "A metaphor for depression and return. The world keeps moving. The tree blooms anyway. Recovery comes slowly, almost unnoticed, but it comes.",
        href: "/poetry/the-cherry-tree",
      },
      {
        title: "The Orchard",
        excerpt: "A child facing the end of summer. Freedom narrows as the season shifts. The orchard stands steady while light fades. It is about letting go of wild days and stepping into change.",
        href: "/archive/the-orchard",
      },
      {
        title: "Hope",
        excerpt: "A reflection that bridges hope and realism, past and future. Through a childhood memory of watching for shooting stars, it shows how belief survives even as we grow older. The light fades, but the instinct to hope remains.",
        href: "/fragments/hope",
      },
    ].map((post, idx) => (
      <div
        key={post.href}
        className="relative border-b border-border bg-card/50 rounded-md p-4 flex flex-col sm:flex-row items-center justify-between opacity-0 translate-y-2 animate-fade-in-up"
        style={{ animationDelay: `${1.3 + idx * 0.1}s`, animationFillMode: 'forwards', animationDuration: '0.5s' }}
      >
        <div className="flex-1 pr-0 sm:pr-24 text-center sm:text-left">
          <h3 className="text-lg font-sans font-medium  ">{post.title}</h3>
          <p className="text-foreground text-base mt-1 max-w-4xl">{post.excerpt}</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2">
          <Button asChild variant="ghost" className="text-foreground hover:text-primary transition-colors px-4 py-1 text-sm">
            <Link to={post.href}>Read More</Link>
          </Button>
        </div>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
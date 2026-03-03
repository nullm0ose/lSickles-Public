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
          w-full mx-auto max-w-6xl xl:max-w-7xl
          text-center
          space-y-7
          rounded-xl
          p-6 sm:p-10 md:p-14 lg:p-16
          bg-card
          bg-[repeating-linear-gradient(to_bottom,transparent,transparent_32px,rgba(0,0,0,0.11)_33px)]
          opacity-0 translate-y-4 animate-fade-in-up
        "
        style={{ animationDelay: '0.1s', animationFillMode: 'forwards', animationDuration: '0.6s' }}
      >
        <h1 className="text-5xl md:text-6xl font-instrument leading-tight">
          Lauren Sickles
        </h1>

        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-foreground/60 font-medium">
          Writer · Poet · Storyteller
        </p>

        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          A home for my poetry, essays, and reflective writing.
        </p>

        <Button
          asChild
          variant="default"
          className="mt-6 bg-primary hover:bg-primary/90 transition-colors px-10 py-6.5 text-lg font-base rounded-md shadow-md"
        >
          <Link to="/poetry">
            <span
              ref={ref}
              className={`typewriter inline-block font-medium ${typed ? "typed" : ""} text-white/85`}
              style={{ fontFamily: "inherit" }}
            >
              Explore My Work
            </span>
          </Link>
        </Button>
      </section>

      {/* Featured Sections */}
   <section className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
  {[
    {
      title: "Poetry",
      description:
        "Work centered on emotion, symbolism, and reflection, often rooted in memory and personal narrative.",
      href: "poetry", // <-- no leading slash
    },
    {
      title: "Essays",
      description:
        "Thoughtful explorations of lived experience, identity, and the complexities of everyday life.",
      href: "archive", // <-- no leading slash
    },
    {
      title: "Fragments",
      description:
        "Narrative experiments that examine imagination, voice, and the spaces between memory and story.",
      href: "fragments", // <-- use the actual route
    },
  ].map((item, idx) => (
    <Link
      key={item.title}
      to={item.href}
      className={`
        group flex flex-col p-6 border border-border rounded-md hover:shadow-md transition-shadow bg-card/40
        opacity-0 translate-y-4 animate-fade-in-up
        text-center md:text-left
      `}
      style={{
        animationDelay: `${0.2 + idx * 0.15}s`,
        animationFillMode: "forwards",
        animationDuration: "0.6s",
      }}
    >
      <h2 className="text-2xl font-instrument leading-tight mb-2 group-hover:text-primary transition-colors">
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
    A Quiet, Intentional Space
  </h2>
  <p className="text-foreground text-base md:text-lg leading-relaxed">
    This digital linen journal gathers poetry, essays, and reflections into a single, unhurried place. 
    Here, the voice is central, ideas endure, and the work is presented as a serious, cohesive body of writing.
  </p>
  <p className="text-foreground/70 text-sm md:text-base italic">
    “A home for thoughts that deserve to linger.”
  </p>

  <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
    {["Poetry", "Essays", "Fiction"].map((type, idx) => (
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
          {type === "Poetry" && "Curated works exploring imagination, grief, and reflection."}
          {type === "Essays" && "Personal reflections that are thoughtful, human, and unhurried."}
          {type === "Fiction" && "Occasional short stories and narrative experiments."}
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
        title: "A Quiet Afternoon",
        excerpt: "Reflections on stillness, memory, and the small details that shape our days.",
        href: "/posts/quiet-afternoon",
      },
      {
        title: "Midwinter Musings",
        excerpt: "An essay on grief, hope, and the rhythms of seasonal change.",
        href: "/posts/midwinter-musings",
      },
      {
        title: "Fragments of Fiction",
        excerpt: "A short narrative experiment exploring the edges of imagination.",
        href: "/posts/fragments-of-fiction",
      },
    ].map((post, idx) => (
      <div
        key={post.href}
        className="relative border-b border-border bg-card/50 rounded-md p-4 flex flex-col sm:flex-row items-center justify-between opacity-0 translate-y-2 animate-fade-in-up"
        style={{ animationDelay: `${1.3 + idx * 0.1}s`, animationFillMode: 'forwards', animationDuration: '0.5s' }}
      >
        <div className="flex-1 pr-0 sm:pr-24 text-center sm:text-left">
          <h3 className="text-lg font-sans font-medium  ">{post.title}</h3>
          <p className="text-foreground text-base mt-1">{post.excerpt}</p>
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
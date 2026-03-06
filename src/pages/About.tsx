import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profile from "@/assets/profile.jpg";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profile;

    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
<main className="mx-auto space-y-13 md:space-y-18 w-full">
      {/* Top Section: Intro + Image */}

  


<section
  className="
    w-full sm:max-w-7xl mx-auto max-w-6xl xl:max-w-7xl
    text-center
    space-y-7
    rounded-xl
    p-6 sm:p-10 md:p-14 lg:p-16
    
    opacity-0 translate-y-4 animate-fade-in-up
flex flex-col md:flex-row items-center gap-10
    justify-center
    sm:min-h-auto 
  "
  style={{ animationDelay: '0.1s', animationFillMode: 'forwards', animationDuration: '0.6s' }}
>
          {/* Image */}
        
      {!loaded ? (
        <div
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl z-10 block bg-border/40 animate-pulse"
        />
      
) : (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div
        className="absolute inset-0 rounded-xl z-0 shadow-lg bg-card"
        style={{
          transform: "rotate(-6deg)",
          backfaceVisibility: "hidden",
                          backgroundColor: "rgba(179,166,153,0.15)",

          zIndex: 0,
        }}
      />
        <img
          src={profile}
          className="relative w-full h-full object-cover rounded-xl z-10 block"
        />
    </div>
      )}

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif leading-snug tracking-tight text-foreground">
              Lauren Sickles
            </h1>

            <h3 className="mt-4 text-lg md:text-lg leading-relaxed tracking-normal text-foreground max-w-prose font-sans">
              I am a writer focused on poetry, essays, and reflective prose. My work
              explores memory, identity, imagination, and the moments that shape who we become.
              This site serves as a curated archive, a deliberate and enduring home for my
              work.
            </h3>

            <p className="text-base sm:text-base leading-relaxed text-muted-foreground max-w-prose">
              This site is a carefully chosen home for my work, a place to keep it alive and accessible.
            </p>
          </div>
      </section>

      {/* Writing Philosophy */}
      <section className="relative max-w-4xl mx-auto px-6 py-12 sm:py-16 space-y-6 text-center rounded-xl">
        <div
          className="relative will-change-transform opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.15s", animationDuration: "0.35s", animationFillMode: "forwards" }}
        >
          <h2 className="text-2xl sm:text-3xl font-serif leading-snug tracking-tight text-foreground">
            <span className="inline-block">
              What I Seek in Writing
              <span className="block w-full h-1 bg-primary/30 rounded-full mt-2 mx-auto" />
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-foreground max-w-prose mx-auto">
            I believe writing should be intentional, grounded, and human. In a world that moves quickly, I am
            drawn to work that lingers, language that invites reflection rather than reaction.
          </p>

          <p className="mt-2 text-base sm:text-lg leading-relaxed text-foreground max-w-prose mx-auto">
            My approach favors clarity over noise, emotional honesty over spectacle, and cohesion over
            constant output. Each piece is meant to stand on its own, yet contribute to a larger body of work.
          </p>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="relative max-w-6xl mx-auto px-6 py-12 sm:py-16 space-y-8 text-center  rounded-xl">
        <div
          className="relative will-change-transform opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationDuration: "0.35s", animationFillMode: "forwards" }}
        >
          <h2 className="text-2xl md:text-4xl font-serif leading-snug tracking-tight text-foreground relative inline-block">
            My Creative Focus
            <span className="hand-underline" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {["Poetry", "Essays", "Fragments"].map((type, idx) => (
              <div
                key={type}
                className="space-y-2 p-4 rounded-xl hover:backdrop-blur-sm transition-all opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${0.35 + idx * 0.1}s`,
                  animationDuration: "0.35s",
                  animationFillMode: "forwards",
                }}
              >
                <h3 className="text-xl font-serif leading-snug tracking-tight text-foreground">{type}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-prose mx-auto">
                  {type === "Poetry" &&
                    "Work centered on emotion, symbolism, and reflection, often rooted in memory and personal narrative."}
                  {type === "Essays" &&
                    "Thoughtful explorations of lived experience, identity, and the quiet complexities of everyday life."}
                  {type === "Fragments" &&
                    "Narrative experiments that examine imagination, voice, and the spaces between memory and story."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative max-w-3xl mx-auto px-6 py-12 sm:py-10 space-y-6 text-center rounded-xl">
        <div
          className="relative will-change-transform opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.45s", animationDuration: "0.35s", animationFillMode: "forwards" }}
        >
          <h2 className="text-2xl sm:text-3xl font-serif leading-snug tracking-tight text-foreground">
            Let’s Connect
          </h2>

          <p className="mt-2 text-base sm:text-lg leading-relaxed text-foreground max-w-prose mx-auto">
            If you are interested in collaboration, publication, or simply thoughtful conversation, I welcome you to reach out.
          </p>

          <Button
            asChild
            className="px-10 py-6 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-300 mt-10"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profile from "@/assets/profile.jpg"; // Assuming you have a profile image in your assets folder

export default function About() {
  return (
    <main className=" mx-auto px-6 py-16 space-y-20">

      {/* Top Section: Intro + Image */}
      <section
        className="max-w-5xl mx-auto bg-card/40 rounded-xl p-10 md:p-14 opacity-0 animate-fade-in-up"
        style={{ animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
<div className="relative w-48 h-48 md:w-64 md:h-64">
  {/* Diagonal background */}
  <div
    style={{
      position: "absolute",
      top: "8px",       // slight vertical offset
      left: "8px",      // slight horizontal offset
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(179, 166, 153, 0.3)", // subtle color for depth
      transform: "rotate(-10deg)",                // diagonal
      borderRadius: "1rem",                       // slightly rounded
      zIndex: 0,                                  // behind image
    }}
  />

  {/* Image */}
  <img
    src={profile}
    alt="Lauren Sickles"
    className="relative w-full h-full object-cover rounded-xl z-10"
  />
</div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold">
              Lauren Sickles
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
I am a writer focused on poetry, essays, and reflective prose. My work
explores memory, identity, imagination, and the moments that shape who we become.
This site serves as a curated archive, a deliberate and enduring home for my
work.
            </p>
            <p className="text-foreground/70 text-base">
              This site is a carefully chosen home for my work, a place to keep it alive and accessible.
            </p>
          </div>

        </div>
      </section>

      {/* Writing Philosophy */}
      <section
        className="max-w-3xl mx-auto text-center space-y-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.15s", animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
        <h2 className="text-3xl font-serif font-semibold">
          Writing Philosophy
        </h2>
        <p className="text-foreground text-base leading-relaxed">
I believe writing should be intentional, grounded, and human. In a world that moves quickly, I am
drawn to work that lingers, language that invites reflection rather than reaction.

        </p>
        <p className="text-foreground text-base leading-relaxed">
My approach favors clarity over noise, emotional honesty over spectacle, and cohesion over
constant output. Each piece is meant to stand on its own, yet contribute to a larger body of work.
        </p>
      </section>

      {/* Areas of Focus */}
      <section
        className="max-w-5xl mx-auto bg-card/40 rounded-xl p-8 md:p-12 text-center space-y-8 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.3s", animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
<h2 className="text-3xl font-serif font-semibold relative inline-block">
  Areas of Focus
  <span
    style={{
      position: "absolute",
      left: 0,
      bottom: "-0.15rem", // slightly closer to text
      width: "100%",
      height: "0.2rem", // thinner line
      backgroundColor: "#b3a699", // slightly darker accent
      borderRadius: "9999px / 50%", // subtle arch
      opacity: 0.9,
      transform: "scaleX(1) rotate(0.5deg)",
    }}
  />
</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-serif font-semibold text-xl">Poetry</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Work centered on emotion, symbolism, and
reflection, often rooted in memory and
personal narrative.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-semibold text-xl">Essays</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Thoughtful explorations of lived experience, identity,
              and the quiet complexities of everyday life.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-semibold text-xl">Fragments</h3>
            <p className="text-foreground text-sm leading-relaxed">
              Narrative experiments that examine imagination,
              voice, and the spaces between memory and story.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="text-center space-y-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.45s", animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
        <h2 className="text-2xl font-serif font-semibold">
          Let’s Connect
        </h2>
        <p className="text-foreground text-base max-w-2xl mx-auto">
          If you are interested in collaboration, publication, or simply
          thoughtful conversation, I welcome you to reach out.
        </p>

        <Button
          asChild
              className="px-10 py-6 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-300 mt-10"
        >
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </section>

    </main>
  );
}
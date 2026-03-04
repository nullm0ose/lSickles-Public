import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { poetryPosts } from "./content/PoetryContent";

export default function Poetry() {
  const sortedPoems = [...poetryPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPoem = sortedPoems[0];
  const recentPoems = sortedPoems.filter(p => p.slug !== featuredPoem.slug);

  const renderImage = (image?: string, altText?: string) =>
    image ? (
      <img
        src={image}
        alt={altText || "Post Image"}
        className="relative w-full h-full object-cover rounded-md z-10"
      />
    ) : (
      <div className="relative w-full h-full bg-muted rounded-md flex items-center justify-center text-xs text-foreground/50 z-10">
        Image
      </div>
    );

  return (
    <main className="px-6 py-16 space-y-20 w-full mx-auto max-w-6xl xl:max-w-7xl">

      {/* Page Header */}
      <section
        className="
        w-full mx-auto 
       text-center 
        md:text-left opacity-0 animate-fade-in-up"
        style={{ animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
<h1 className="text-5xl sm:text-6xl md:text-7xl font-instrument page-header text-center">
  Poetry
</h1>

<p className="mt-6 max-w-2xl mx-auto text-center 
               text-base sm:text-lg md:text-xl 
               text-foreground/70 leading-relaxed">
  These pieces move between past and present. Some poems are tender. 
  Some are unsparing.

  Here, imagination and realism stand side by side.
  Hope is allowed, but never blindly.
</p>
      </section>

      {/* Featured Poem */}
      <section
        className="grid md:grid-cols-2 gap-12 items-center bg-card/30 rounded-xl p-6 sm:p-10 md:p-12 shadow-sm opacity-0 animate-fade-in-up mx-auto"
        style={{
          animationDelay: "0.15s",
          animationDuration: "0.35s",
          animationFillMode: "forwards",
          maxWidth: "100%",
        }}
      >
        {/* Image */}
        <div className="relative h-80 w-full">
          <div
            style={{
              position: "absolute",
              top: "6px",
              left: "6px",
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(192, 138, 138, 0.30)",
              transform: "rotate(-6deg)",
              borderRadius: "1rem",
              zIndex: 0,
            }}
          />
          {renderImage(featuredPoem.image, featuredPoem.title)}
        </div>

        {/* Text */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sm text-foreground/60 uppercase tracking-[0.15em] font-medium">
            Featured Poem
          </p>
          <h2 className="text-4xl font-serif leading-tight">{featuredPoem.title}</h2>
          <p className="text-foreground leading-relaxed">{featuredPoem.excerpt}</p>
          <Link
            to={`/poetry/${featuredPoem.slug}`}
            className="inline-block text-primary font-medium hover:underline"
          >
            Read Poem →
          </Link>
        </div>
      </section>

      {/* Recent Poems */}
      <section className="space-y-10 w-full mt-30  mx-auto">
        {/* Section Header */}
        <div
          className="space-y-2 text-center md:text-left opacity-0 animate-fade-in-up"
          style={{
            animationDelay: "0.3s",
            animationDuration: "0.35s",
            animationFillMode: "forwards",
          }}
        >
          <h2 className="text-3xl font-serif mt-5 relative inline-block">
            Recent Poems
            <span className="hand-underline" />
          </h2>
          <p className="text-foreground/70 text-base max-w-3xl mx-auto md:mx-0">
            A curated selection of my latest reflections in poetry, exploring memory, stillness, and imagination.
          </p>
        </div>

        {/* Poem Cards */}
        {recentPoems.map((poem, index) => (
          <div
            key={`${poem.slug}-${index}`}
            className="relative flex flex-col md:flex-row items-center md:items-start bg-card/40 rounded-xl p-6 md:p-8 gap-6 border border-border hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${0.45 + index * 0.12}s`,
              animationDuration: "0.35s",
              animationFillMode: "forwards",
            }}
          >
            {/* Image */}
            <div className="relative w-full md:w-36 h-36 flex-shrink-0 mx-auto md:mx-0">
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(145deg, rgba(192,138,138,0.4), rgba(192,138,138,0.15))",
                  transform: "rotate(-6deg) scale(1.03)",
                  borderRadius: "0.75rem",
                  filter: "blur(4px)",
                  zIndex: 0,
                  boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "4px",
                  left: "4px",
                  width: "100%",
                  height: "100%",
                  background: "rgba(192,138,138,0.3)",
                  transform: "rotate(-3deg) scale(1.02)",
                  borderRadius: "0.75rem",
                  zIndex: 0,
                  boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                }}
              />
              {renderImage(poem.image, poem.title)}
            </div>

            {/* Text */}
            <div className="flex-1 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-xl font-sans font-medium text-foreground/85">{poem.title}</h3>
<p className="text-sm text-foreground/60 mt-1">
  {new Date(poem.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
</p>
              <p className="text-foreground text-base mt-3 leading-relaxed max-w-2xl mx-auto md:mx-0">
                {poem.excerpt}
              </p>
            </div>

            {/* Read Button */}
            <div className="mt-4 md:mt-0 md:absolute right-6 top-1/2 -translate-y-1/2">
              <Button
                asChild
                variant="ghost"
                className="text-foreground hover:text-primary transition-colors px-4 py-1 text-sm"
              >
                <Link to={`/poetry/${poem.slug}`}>Read</Link>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
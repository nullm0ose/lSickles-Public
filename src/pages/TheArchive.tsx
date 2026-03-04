import { Link } from "react-router-dom";
import { archivePosts } from "./content/ArchiveContent";

export default function TheArchive() {
  const sortedContent = [...archivePosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (!sortedContent.length) {
    return (
      <main className="w-full px-6 py-16 mx-auto text-center md:text-left">
        <h1 className="text-5xl font-instrument">The Archive</h1>
        <p className="mt-6 text-foreground/70 max-w-3xl mx-auto md:mx-0">
          No entries yet.
        </p>
      </main>
    );
  }

  const featuredContent = sortedContent[0];

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
    <main className="px-6 py-16 space-y-25 w-full mx-auto max-w-6xl xl:max-w-7xl">


      {/* Page Header */}
      <section
        className="space-y-4 text-center md:text-left opacity-0 animate-fade-in-up"
        style={{ animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
<h1 className="
  text-5xl sm:text-6xl md:text-6xl
  font-instrument
  leading-tight
  tracking-tight
  text-foreground
  text-center
  text-balance
">
  The Archive
</h1>

<p className="
  mt-6 max-w-2xl mx-auto
  text-base sm:text-lg md:text-xl
  leading-relaxed
  tracking-normal
  text-foreground/70
  text-center
  max-w-prose
">
  These essays return to early rooms and early rules.

  They expand on lived experience. They follow memory past nostalgia and into consequence.

  They look at power inside families. Authority inside institutions. Care inside systems that exhaust it.

  All are rooted in what was actually lived.
</p>
      </section>

      {/* Featured Content */}
      <section
        className="grid md:grid-cols-2 gap-12 items-center bg-card/30 rounded-xl p-6 sm:p-10 md:p-12 shadow-sm opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.15s", animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
        {/* Image */}
        <div className="relative h-80 w-full mx-auto md:mx-0">
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
          {renderImage(featuredContent.image, featuredContent.title)}
        </div>

        {/* Text */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sm text-foreground/60 uppercase tracking-[0.15em] font-medium">
            Featured Entry
          </p>
          <h2 className="text-4xl font-serif leading-tight">{featuredContent.title}</h2>
          <p className="text-foreground leading-relaxed">{featuredContent.excerpt}</p>
          <Link
            to={`/archive/${featuredContent.slug}`}
            className="inline-block text-primary font-medium hover:underline"
          >
            Read More →
          </Link>
        </div>
      </section>

      {/* Archive List */}
      <section className="space-y-10 mt-30">
        <div
          className="space-y-2 text-center md:text-left opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationDuration: "0.35s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl font-serif mt-5 relative inline-block">
            More to Explore
            <span className="hand-underline" />
          </h2>
          <p className="text-foreground/70 text-base max-w-3xl mx-auto md:mx-0">
            A curated selection of reflections exploring memory, stillness,
            and imagination.
          </p>
        </div>

        {sortedContent.map((post, index) => (
          <div
            key={`${post.slug}-${index}`}
            className={`
              flex flex-col md:flex-row items-center md:items-start gap-6
              p-6 md:p-8 bg-card/40 rounded-xl border border-border
              ${index !== sortedContent.length - 1 ? "border-b border-border/20" : ""}
              opacity-0 animate-fade-in-up
            `}
            style={{
              animationDelay: `${0.2 + index * 0.15}s`,
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
                    "linear-gradient(145deg, rgba(192,138,138,0.4), rgba(192,138,138,0.02))",
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
              {renderImage(post.image, post.title)}
            </div>

            {/* Text */}
            <div className="flex-1 mt-4 md:mt-0 text-center md:text-left">
<p className="text-sm text-foreground/60 mb-2">
  {new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
</p>
              <h2 className="text-xl font-sans font-medium mb-4 text-foreground/85">
                {post.title}
              </h2>
              <p className="text-foreground text-base leading-relaxed max-w-3xl mx-auto md:mx-0">
                {post.excerpt}
              </p>
              <Link
                to={`/archive/${post.slug}`}
                className="inline-block mt-4 text-primary font-medium hover:underline"
              >
                Continue Reading →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
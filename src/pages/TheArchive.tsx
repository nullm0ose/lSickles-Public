import { Link } from "react-router-dom";
import { archivePosts } from "./content/ArchiveContent";

export default function TheArchive() {
  // Sort archive posts by date descending (latest first)
  const sortedContent = [...archivePosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Guard against empty archive
  if (!sortedContent.length) {
    return (
      <main className="max-w-[1400px] px-6 py-16">
        <h1 className="text-5xl font-instrument">The Archive</h1>
        <p className="mt-6 text-foreground/70">No entries yet.</p>
      </main>
    );
  }

  const featuredContent = sortedContent[0];

  // Helper to render image with depth
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
    <main className="px-6 py-16 space-y-20">
      {/* Header */}
      <section
        className="space-y-4 opacity-0 animate-fade-in-up"
        style={{
          animationDelay: "0s",
          animationDuration: "0.5s",
          animationFillMode: "forwards",
        }}
      >
        <h1 className="text-5xl font-instrument page-header">
          The Archive
        </h1>
        <p className="text-foreground text-lg max-w-2xl">
          Long-form reflections on creativity, memory, identity, and the quiet
          architecture of lived experience.
        </p>
      </section>

      {/* Featured Content */}
      <section
      className="grid md:grid-cols-2 gap-12 items-center bg-card/30 rounded-xl p-8 md:p-12 shadow-sm opacity-0 animate-fade-in-up"
        style={{
          animationDelay: "0.15s",
          animationDuration: "0.35s",
          animationFillMode: "forwards",
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

          {renderImage(featuredContent.image, featuredContent.title)}
        </div>

        {/* Text */}
        <div className="space-y-4">
          <p className="text-sm text-foreground/60">Featured Entry</p>

          <h2 className="text-4xl font-serif">
            {featuredContent.title}
          </h2>

          <p className="text-foreground leading-relaxed">
            {featuredContent.excerpt}
          </p>

          <Link
            to={`/archive/${featuredContent.slug}`}
            className="inline-block text-primary font-medium hover:underline"
          >
            Read More →
          </Link>
        </div>
      </section>

      {/* Archive List */}
      <section className="space-y-10 mt-30 w-full">
        <div
          className="space-y-2 max-w-3xl opacity-0 animate-fade-in-up"
          style={{
            animationDelay: "0.3s",
            animationDuration: "0.35s",
            animationFillMode: "forwards",
          }}
        >
          <h2 className="text-3xl font-serif mt-5 relative inline-block">
            More to Explore
            <span className="hand-underline" />
          </h2>

          <p className="text-foreground/70 text-base">
            A curated selection of reflections exploring memory, stillness,
            and imagination.
          </p>
        </div>

        {sortedContent.map((post, index) => (
          <div
            key={`${post.slug}-${index}`}
            className={`
              flex flex-col md:flex-row items-start gap-6
              pl-0 md:pl-8 border-l-2 border-primary/40
              pb-6 bg-card/40 rounded-xl p-10 md:p-14 border border-border
              ${index !== sortedContent.length - 1 ? "border-b border-border/20" : ""}
              opacity-0 animate-fade-in-up
            `}
            style={{
              animationDelay: `${0.2 + index * 0.15}s`,
              animationDuration: "0.5s",
              animationFillMode: "forwards",
            }}
          >
            {/* Image */}
            <div className="relative w-full md:w-36 h-36 flex-shrink-0">
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
            <div className="flex-1">
              <p className="text-sm text-foreground/60 mb-2">
                {post.date}
              </p>

              <h2 className="text-xl font-sans font-medium mb-4 text-foreground/85">
                {post.title}
              </h2>

              <p className="text-foreground text-base leading-relaxed max-w-3xl">
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
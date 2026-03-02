import { Link } from "react-router-dom";
import { essayPosts } from "./content/EssaysContent";

export default function Essays() {
  // Sort essays by date descending (latest first)
  const sortedEssays = [...essayPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Helper to render image with depth
const renderImage = (image?: string, altText?: string) =>
  image ? (
    <img
      src={image} // already full URL from import.meta.glob
      alt={altText || "Post Image"}
      className="relative w-full h-full object-cover rounded-md z-10" // <-- relative added
    />
  ) : (
    <div className="relative w-full h-full bg-muted rounded-md flex items-center justify-center text-xs text-foreground/50 z-10">
      Image
    </div>
  );
  

  return (
    <main className="max-w-[1400px] px-6 py-16 space-y-16">

      {/* Header */}
      <section
        className="space-y-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0s", animationDuration: "0.5s", animationFillMode: "forwards" }}
      >
        <h1 className="text-5xl font-serif font-semibold page-header">
          Essays
        </h1>
        <p className="text-foreground text-lg max-w-2xl">
          Long-form reflections on creativity, memory, identity, and the quiet
          architecture of lived experience.
        </p>
      </section>

      {/* Essay List */}
      <section className="space-y-10 bg-card/40 rounded-xl p-10 md:p-14 border border-border w-full">
        {sortedEssays.map((essay, index) => (
          <div
            key={`${essay.slug}-${index}`}
            className={`
              flex flex-col md:flex-row items-start gap-6
              pl-0 md:pl-8 border-l-2 border-primary/40
              pb-6
              ${index !== sortedEssays.length - 1 ? "border-b border-border/20" : ""}
              opacity-0 animate-fade-in-up
            `}
            style={{
              animationDelay: `${0.2 + index * 0.15}s`,
              animationDuration: "0.5s",
              animationFillMode: "forwards",
            }}
          >
            {/* Image with depth */}
            <div className="relative w-full md:w-48 h-48 flex-shrink-0">
              {/* Depth Layer */}
<div className="relative w-full md:w-36 h-36 flex-shrink-0">
  {/* Backdrop Layer 1 – base shadow */}
  <div
    style={{
      position: "absolute",
      top: "10px",
      left: "10px",
      width: "100%",
      height: "100%",
      background: "linear-gradient(145deg, rgba(192,138,138,0.4), rgba(192,138,138,0.02))",
      transform: "rotate(-6deg) scale(1.03)",
      borderRadius: "0.75rem",
      filter: "blur(4px)",
      zIndex: 0,
      boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
    }}
  />

  {/* Backdrop Layer 2 – subtle color accent for depth */}
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

  {/* Image – sits on top */}
              {renderImage(essay.image, essay.title)}
</div>
            </div>  

            {/* Text Content */}
            <div className="flex-1">
              <p className="text-sm text-foreground/60 mb-2">{essay.date}</p>

              <h2 className="text-3xl font-serif font-semibold mb-4">
                {essay.title}
              </h2>

              <p className="text-foreground text-base leading-relaxed max-w-3xl">
                {essay.excerpt}
              </p>

              <Link
                to={`/essays/${essay.slug}`}
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
import { Link } from "react-router-dom";
import { fragmentsPosts } from "./content/FragmentsContent";

export default function Fragments() {
  // Sort fragments posts by date descending (latest first)
  const sortedStories = [...fragmentsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Pick the latest story as the featured story
  const featuredStory = sortedStories[0];

  // Remaining stories for the "recent" section
  const recentStories = sortedStories.slice(1);

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
    <main className="px-6 py-16 space-y-20">

      {/* Header */}
      <section
        className="space-y-4 max-w-3xl opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0s", animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
        <h1 className="text-5xl font-instrument page-header">
          Fragments
        </h1>
        <p className="text-foreground text-lg">
          Short stories and narrative experiments exploring character,
          atmosphere, and the blurred boundary between memory and invention.
        </p>
      </section>

      {/* Featured Story */}
      {featuredStory && (
        <section
          className="grid md:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in-up mt-40"
          style={{ animationDelay: "0.15s", animationDuration: "0.35s", animationFillMode: "forwards" }}
        >
          {/* Image with depth */}
          <div className="relative h-80">
            {/* Depth Layer */}
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

    {/* Image */}
            {renderImage(featuredStory.image, featuredStory.title)}
  </div>

          {/* Text */}
          <div className="space-y-4">
            <p className="text-sm text-foreground/60">Featured Story</p>

            <h2 className="text-4xl font-serif ">
              {featuredStory.title}
            </h2>

            <p className="text-foreground leading-relaxed">
              {featuredStory.excerpt}
            </p>

            <Link
              to={`/fragments/${featuredStory.slug}`}
              className="inline-block text-primary font-medium hover:underline"
            >
              Read Story →
            </Link>
          </div>
        </section>
      )}

      {/* Recent Stories Grid */}
      <section className="space-y-8 mt-40">
        <div
          className="space-y-2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.45s", animationDuration: "0.35s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl font-serif  mt-5 relative inline-block">
            Recent Stories
            <span className="hand-underline" />
          </h2>
          <p className="text-foreground/70 text-base max-w-2xl">
            A selection of recent fiction pieces that explore imagination, memory, and the quiet moments between words.
          </p>
        </div>

        {recentStories.map((story, index) => (
          <Link
            key={`${story.slug}-${index}`}
            to={`/fragments/${story.slug}`}
            className="group flex flex-col md:flex-row items-start gap-6 p-6 border border-border rounded-md hover:shadow-md transition-all bg-card/40 opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${0.6 + index * 0.12}s`,
              animationDuration: "0.35s",
              animationFillMode: "forwards",
            }}
          >
            {/* Image with depth */}
<div className="relative w-full md:w-36 h-36 flex-shrink-0">
  {/* Backdrop Layer 1 – base shadow */}
  <div
    style={{
      position: "absolute",
      top: "10px",
      left: "10px",
      width: "100%",
      height: "100%",
      background: "linear-gradient(145deg, rgba(192,138,138,0.4), rgba(192,138,138,0.15))",
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
              {renderImage(story.image, story.title)}
</div>

            {/* Text Content */}
            <div className="flex-1">
              <p className="text-sm text-foreground/60 mb-2">{story.date}</p>
              
              <h3 className="text-xl font-sans font-medium group-hover:text-primary transition-colors">
                {story.title}
              </h3>

              <p className="text-foreground text-base mt-2 flex-1">
                {story.excerpt}
              </p>

              <span className="mt-4 text-primary font-medium hover:underline inline-block">
                Read Story →
              </span>
            </div>
          </Link>
        ))}

      </section>
    </main>
  );
}
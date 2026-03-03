import { Link } from "react-router-dom";
import { fragmentsPosts } from "./content/FragmentsContent";

export default function Fragments() {
  const sortedStories = [...fragmentsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredStory = sortedStories[0];
  const recentStories = sortedStories.slice(1);

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

      {/* Page Header */}
      <section
        className="
        mx-auto text-center md:text-left opacity-0 animate-fade-in-up"
        style={{ animationDuration: "0.35s", animationFillMode: "forwards" }}
      >
        <h1 className="text-5xl font-instrument page-header">Fragments</h1>
        <p className="text-foreground text-lg max-w-3xl mx-auto md:mx-0">
          Short stories and narrative experiments exploring character, atmosphere,
          and the blurred boundary between memory and invention.
        </p>
      </section>

      {/* Featured Story */}
      {featuredStory && (
        <section
          className="grid md:grid-cols-2 gap-12 items-center bg-card/30 rounded-xl p-6 sm:p-10 md:p-12 shadow-sm opacity-0 animate-fade-in-up mx-auto"
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
            {renderImage(featuredStory.image, featuredStory.title)}
          </div>

          {/* Text */}
          <div className="space-y-4 text-center md:text-left">
            <p className="text-sm text-foreground/60 uppercase tracking-[0.15em] font-medium">
              Featured Story
            </p>
            <h2 className="text-4xl font-serif leading-tight">{featuredStory.title}</h2>
            <p className="text-foreground leading-relaxed">{featuredStory.excerpt}</p>
            <Link
              to={`/fragments/${featuredStory.slug}`}
              className="inline-block text-primary font-medium hover:underline"
            >
              Read Story →
            </Link>
          </div>
        </section>
      )}

      {/* Recent Stories */}
      <section className="space-y-8 mt-40  mx-auto">
        <div
          className="space-y-2 text-center md:text-left opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.45s", animationDuration: "0.35s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl font-serif mt-5 relative inline-block">
            Recent Stories
            <span className="hand-underline" />
          </h2>
          <p className="text-foreground/70 text-base max-w-3xl mx-auto md:mx-0">
            A selection of recent fiction pieces that explore imagination, memory,
            and the quiet moments between words.
          </p>
        </div>

        {recentStories.map((story, index) => (
          <Link
            key={`${story.slug}-${index}`}
            to={`/fragments/${story.slug}`}
            className="group flex flex-col md:flex-row items-center md:items-start gap-6 p-6 border border-border rounded-md hover:shadow-md transition-all bg-card/40 opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${0.6 + index * 0.12}s`,
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
                  background: "linear-gradient(145deg, rgba(192,138,138,0.4), rgba(192,138,138,0.15))",
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
              {renderImage(story.image, story.title)}
            </div>

            {/* Text */}
            <div className="flex-1 mt-4 md:mt-0 text-center md:text-left">
              <p className="text-sm text-foreground/60 mb-2">{story.date}</p>
              <h3 className="text-xl font-sans font-medium text-foreground/85 group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-foreground text-base mt-2 flex-1 max-w-2xl mx-auto md:mx-0">{story.excerpt}</p>
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
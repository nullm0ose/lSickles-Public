import { useParams, Link } from "react-router-dom";
import { poetryPosts } from "./content/PoetryContent";
import { archivePosts } from "./content/ArchiveContent";
import { fragmentsPosts } from "./content/FragmentsContent";

import type { PoetryPost } from "./content/PoetryContent";
import type { ArchivePost } from "./content/ArchiveContent";
import type { FragmentsPost } from "./content/FragmentsContent";

type Post = PoetryPost | ArchivePost | FragmentsPost;

export default function PostPage() {
  const { type, slug } = useParams<{ type: string; slug: string }>();

  let post: Post | undefined;

  if (type === "poetry") post = poetryPosts.find((p) => p.slug === slug);
  else if (type === "archive") post = archivePosts.find((p) => p.slug === slug);
  else if (type === "fragments") post = fragmentsPosts.find((p) => p.slug === slug);

  if (!post)
    return (
      <main className="px-6 py-20 text-center">
        <p className="text-foreground/70">Post not found.</p>
      </main>
    );

  const typeLabels: Record<string, string> = {
    poetry: "Poetry",
    archive: "The Archive",
    fragments: "Fragments",
  };

  const backLabel = type ? typeLabels[type] || "Posts" : "Posts";

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16 space-y-16">

      {/* Header */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-instrument page-header">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="max-w-2xl mx-auto
                        text-sm sm:text-base md:text-lg
                        text-foreground/70 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </section>

      {/* Content */}
<section
  className="bg-card/30 backdrop-blur-sm 
             border border-border/40
             rounded-2xl
             px-6 sm:px-10 md:px-14
             py-12 sm:py-14
             shadow-sm"
>
  <div
    className="space-y-6 sm:space-y-8
               text-base sm:text-lg
               leading-relaxed sm:leading-loose
               text-center sm:text-left"
  >
    {post.content.map((paragraph, i) => (
      <p key={i} className="mx-auto sm:mx-0 max-w-prose">
        {paragraph}
      </p>
    ))}
  </div>
</section>

      {/* Back Link */}
      <div className="pt-8 border-t border-border/50 text-center">
        <Link
          to={`/${type}`}
          className="text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          ← Back to {backLabel}
        </Link>
      </div>

    </main>
  );
}
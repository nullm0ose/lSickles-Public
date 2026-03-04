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
  <h1 className="
    text-4xl sm:text-4xl md:text-5xl
    font-instrument font-base
    leading-tight tracking-tight
    text-balance
  ">
    {post.title}
  </h1>

  {post.excerpt && (
    <p className="
      max-w-2xl mx-auto
      text-base sm:text-lg md:text-lg
      leading-relaxed
      text-foreground/60
      
    ">
      {post.excerpt}
    </p>
  )}
</section>

      {/* Content */}
<section
  className=" backdrop-blur-sm 
             border 
             bg-card/10 border-border/30
             rounded-md
             px-4 sm:px-10 md:px-14
             py-10 sm:py-14
             shadow-sm"
>
  <div
    className="space-y-6 sm:space-y-8
               text-base sm:text-lg
               leading-relaxed sm:leading-loose
               text-left sm:text-left"
  >
    {post.content.map((paragraph, i) => (
      <p key={i} className="mx-auto sm:mx-0 max-w-prose">
        {paragraph}
      </p>
    ))}
  </div>
</section>

      {/* Back Link */}
      <div className="pt-8 border-t border-border/80 text-center">
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
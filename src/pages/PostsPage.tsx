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
    <main className="max-w-5xl mx-auto px-7 py-12 sm:py-16 space-y-10 bg-white/60 backdrop-blur-lg rounded-xl">

{/* Header */}
<section
  className="
    prose
    max-w-none
    text-left
    prose-h1:mb-3
    prose-p:mt-0
    prose-h1:font-pro
    prose-h1:font-medium
    prose-h1:leading-normal
    prose-h1:tracking-tight
    prose-h1:text-foreground
    prose-p:font-pro
    prose-p:text-muted-foreground/85
    prose-p:leading-normal
  "
>
  <h1
    className="
      text-4xl sm:text-4xl md:text-5xl
      text-balance
    "
  >
    {post.title}
  </h1>

  {post.excerpt && (
    <p className="text-base sm:text-lg md:text-lg max-w-3xl">
      {post.excerpt}
    </p>
  )}
</section>

    <div className="mx-auto max-w-5xl h-px bg-border opacity-70" />


      {/* Content */}
<section
  className=" 
         
             py-5 sm:py-14 text-foreground max-w-4xl
        "
>
<div
  className="
    prose
    sm:prose-lg
    max-w-none
    space-y-6 sm:space-y-8
    text-left
    prose-p:font-spectral
    prose-p:text-foreground
    prose-p:leading-loose
  "
>
  {post.content.map((paragraph, i) => (
    <p key={i} className="mx-auto sm:mx-0  ">
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
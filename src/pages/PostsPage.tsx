import { useParams, Link } from "react-router-dom";
import { poetryPosts } from "./content/PoetryContent";
import { essayPosts } from "./content/EssaysContent";
import { fictionPosts } from "./content/FictionContent";

import type { PoetryPost } from "./content/PoetryContent";
import type { EssayPost } from "./content/EssaysContent";
import type { FictionPost } from "./content/FictionContent";

type Post = PoetryPost | EssayPost | FictionPost;

export default function PostPage() {
  const { type, slug } = useParams<{ type: string; slug: string }>();

  let post: Post | undefined;

  if (type === "poetry") post = poetryPosts.find((p) => p.slug === slug);
  else if (type === "essays") post = essayPosts.find((p) => p.slug === slug);
  else if (type === "fiction") post = fictionPosts.find((p) => p.slug === slug);

  if (!post) return <div className="p-10">Post not found.</div>;

  // Map type to a friendly name
  const typeLabels: Record<string, string> = {
    poetry: "Poetry",
    essays: "Essays",
    fiction: "Fiction",
  };

  const backLabel = type ? typeLabels[type] || "Posts" : "Posts";

  return (
    <main className="max-w-[900px] px-6 py-16 mx-auto space-y-12">
      <section>
        <h1 className="text-5xl font-serif font-semibold">{post.title}</h1>
        <p className="text-foreground/60 text-sm">{post.date}</p>
      </section>

      <section className="bg-card/40 rounded-xl p-10 border border-border">
        {post.content.map((paragraph, i) => (
          <p key={i} className="mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      <Link to={`/${type}`} className="inline-block text-primary hover:underline">
        ← Back to {backLabel}
      </Link>
    </main>
  );
}
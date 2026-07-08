import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  createdAt: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getRelatedPosts(category: string, currentSlug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?category=${category}`,
      { cache: "no-store" }
    );
    const posts: BlogPost[] = await res.json();
    return posts.filter((p) => p.slug !== currentSlug).slice(0, 2);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.category, post.slug);

  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="font-body text-xs text-lavender-dark uppercase tracking-wider block mb-4">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-indigo mb-4">
            {post.title}
          </h1>
          <p className="font-body text-sm text-indigo/60">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="font-body text-indigo/80 leading-relaxed space-y-6 whitespace-pre-line">
            {post.content}
          </div>

          <Link
            href="/blog"
            className="inline-block mt-12 font-body text-sm text-lavender-dark hover:text-indigo transition-colors underline underline-offset-4"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-beige py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-heading text-2xl text-indigo mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related._id}
                  href={`/blog/${related.slug}`}
                  className="bg-cream rounded-2xl p-6 block hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-heading text-lg text-indigo mb-2">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
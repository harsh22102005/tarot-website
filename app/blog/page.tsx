"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const categories = ["All", "Tarot", "Healing", "Spiritual Growth", "Full Moon", "Affirmations"];

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  createdAt: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const url =
          selectedCategory === "All"
            ? `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`
            : `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?category=${selectedCategory}`;
        const res = await fetch(url);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [selectedCategory]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-cream">
      {/* Page Header */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
            Insights & Wisdom
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-indigo">
            Blog
          </h1>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-beige/50 border border-beige rounded-lg px-5 py-3 font-body text-indigo mb-8 focus:outline-none focus:border-lavender-dark"
          />

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body transition-colors ${
                  selectedCategory === cat
                    ? "bg-indigo text-cream"
                    : "bg-beige/50 text-indigo hover:bg-beige"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          {loading ? (
            <p className="font-body text-indigo/60 text-center py-12">
              Loading articles...
            </p>
          ) : filteredPosts.length === 0 ? (
            <p className="font-body text-indigo/60 text-center py-12">
              No articles found matching your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="bg-beige rounded-2xl p-8 block hover:shadow-lg transition-shadow"
                >
                  <span className="font-body text-xs text-lavender-dark uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-xl text-indigo mt-3 mb-3">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-indigo/70 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="font-body text-xs text-indigo/50">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
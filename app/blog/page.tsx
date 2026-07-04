"use client";

import { useState } from "react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "understanding-tarot-card-meanings",
    title: "Understanding Tarot Card Meanings: A Beginner's Guide",
    category: "Tarot",
    excerpt: "Discover the fundamental meanings behind the Major and Minor Arcana cards and how to interpret them in your readings.",
    date: "June 15, 2026",
  },
  {
    slug: "5-healing-practices-for-inner-peace",
    title: "5 Healing Practices for Inner Peace",
    category: "Healing",
    excerpt: "Explore simple yet powerful healing practices you can incorporate into your daily routine for lasting calm.",
    date: "June 10, 2026",
  },
  {
    slug: "navigating-spiritual-growth",
    title: "Navigating Your Spiritual Growth Journey",
    category: "Spiritual Growth",
    excerpt: "Spiritual growth is not linear. Learn how to embrace each stage of your journey with patience and grace.",
    date: "June 2, 2026",
  },
  {
    slug: "full-moon-guidance-june",
    title: "Full Moon Guidance: Setting Intentions",
    category: "Full Moon",
    excerpt: "The full moon is a powerful time for reflection and release. Here's how to make the most of this lunar energy.",
    date: "May 28, 2026",
  },
  {
    slug: "daily-positive-affirmations",
    title: "The Power of Daily Positive Affirmations",
    category: "Affirmations",
    excerpt: "Learn how consistent affirmation practice can rewire your mindset and attract positive change into your life.",
    date: "May 20, 2026",
  },
];

const categories = ["All", "Tarot", "Healing", "Spiritual Growth", "Full Moon", "Affirmations"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          {filteredPosts.length === 0 ? (
            <p className="font-body text-indigo/60 text-center py-12">
              No articles found matching your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
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
                    {post.date}
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
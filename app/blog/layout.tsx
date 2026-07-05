import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Mystic Path - Tarot & Spiritual Insights",
  description: "Read articles on tarot card meanings, healing practices, spiritual growth, and daily affirmations.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mystic Path - Get in Touch",
  description: "Reach out to us for spiritual guidance and tarot reading inquiries. Contact via email, phone, or our online form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
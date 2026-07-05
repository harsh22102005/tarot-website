import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Mystic Path - Frequently Asked Questions",
  description: "Find answers to common questions about tarot reading sessions, booking process, cancellation policy, and payment methods.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
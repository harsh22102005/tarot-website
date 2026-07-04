import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-6">
            Tarot • Healing • Guidance
          </span>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-indigo leading-tight max-w-4xl">
            Find Clarity on Your Spiritual Journey
          </h1>

          <p className="font-body text-base md:text-lg text-indigo/70 mt-6 max-w-xl leading-relaxed">
            Personalized tarot readings and spiritual guidance to help you navigate
            life&apos;s questions with peace, confidence, and purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/services"
              className="bg-indigo text-cream px-8 py-3.5 rounded-full font-body text-sm hover:bg-lavender-dark transition-colors"
            >
              Book a Reading
            </Link>
            <Link
              href="/about"
              className="border border-indigo text-indigo px-8 py-3.5 rounded-full font-body text-sm hover:bg-indigo hover:text-cream transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from "next/link";

const featuredServices = [
  {
    icon: "🔮",
    title: "Tarot Reading",
    description: "Uncover insights about your past, present, and future through the ancient wisdom of tarot cards.",
  },
  {
    icon: "🕊️",
    title: "Spiritual Consultation",
    description: "One-on-one guidance to help you connect with your inner self and navigate life's path.",
  },
  {
    icon: "💫",
    title: "Energy Healing",
    description: "Restore balance and harmony within through gentle, intuitive energy healing practices.",
  },
];
const whyChooseUs = [
  {
    icon: "🌙",
    title: "10+ Years Experience",
    description: "A decade of guiding seekers through tarot and spiritual practice.",
  },
  {
    icon: "🔒",
    title: "100% Confidential",
    description: "Your sessions and personal journey remain completely private.",
  },
  {
    icon: "🌸",
    title: "Compassionate Approach",
    description: "Every reading is delivered with empathy, honesty, and care.",
  },
  {
    icon: "✨",
    title: "Personalized Guidance",
    description: "No generic answers — every session is tailored to you.",
  },
];
const affirmations = [
  "You are exactly where you need to be on your journey.",
  "Trust the timing of your life; the universe is guiding you.",
  "Your intuition is a powerful compass — listen to it.",
  "Peace begins with the choice to release what you cannot control.",
  "Every challenge you face is shaping your inner wisdom.",
];

const todaysAffirmation =
  affirmations[new Date().getDate() % affirmations.length];

const testimonials = [
  {
    name: "Priya S.",
    rating: 5,
    quote: "The reading gave me so much clarity during a confusing time in my life. I felt truly heard and understood.",
  },
  {
    name: "Rohan M.",
    rating: 5,
    quote: "Incredibly insightful and compassionate. I walked away feeling lighter and more confident about my path.",
  },
  {
    name: "Ananya K.",
    rating: 5,
    quote: "A calming, safe space to explore my questions. The guidance I received was spot on and deeply meaningful.",
  },
];

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
      {/* Featured Services Section */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
              Our Offerings
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-indigo">
              Featured Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="bg-cream rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-beige"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-xl text-indigo mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-indigo/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="font-body text-sm text-lavender-dark hover:text-indigo transition-colors underline underline-offset-4"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Me Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
              Why Choose Me
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-indigo">
              A Guided Path Built on Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-lavender/30 flex items-center justify-center mx-auto mb-5 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg text-indigo mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-indigo/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Daily Affirmation Section */}
      <section className="bg-indigo py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="font-body text-sm tracking-[0.3em] text-lavender uppercase mb-6 block">
            Today&apos;s Affirmation
          </span>
          <p className="font-heading text-2xl md:text-4xl text-cream leading-snug italic">
            &ldquo;{todaysAffirmation}&rdquo;
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-indigo">
              Words From Those I&apos;ve Guided
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-2xl p-8 border border-beige">
                <div className="text-gold mb-4">{"★".repeat(t.rating)}</div>
                <p className="font-body text-sm text-indigo/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-heading text-indigo">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl text-indigo mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-body text-base md:text-lg text-indigo/70 mb-10 leading-relaxed">
            Book a session today and take the first step toward clarity, healing,
            and peace of mind.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo text-cream px-10 py-4 rounded-full font-body text-sm hover:bg-lavender-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
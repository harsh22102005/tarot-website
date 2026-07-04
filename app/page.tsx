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
    </div>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Mystic Path - Spiritual Guidance & Tarot Reading",
  description: "Learn about my journey into tarot reading and spiritual guidance, my mission, vision, and the philosophy behind Mystic Path.",
};
export default function About() {
  return (
    <div className="bg-cream">
      {/* Page Header */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
            About Me
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-indigo">
            My Story
          </h1>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-base md:text-lg text-indigo/80 leading-relaxed mb-6">
            My journey into the world of tarot and spiritual guidance began over a decade
            ago, during a period of deep personal transformation. What started as a
            search for my own answers became a lifelong calling to help others find
            theirs.
          </p>
          <p className="font-body text-base md:text-lg text-indigo/80 leading-relaxed">
            Since then, I have had the privilege of guiding hundreds of seekers through
            moments of uncertainty, helping them reconnect with their inner wisdom and
            move forward with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-indigo mb-4">
              My Mission
            </h2>
            <p className="font-body text-indigo/70 leading-relaxed">
              To provide a safe, compassionate space where every person feels heard,
              understood, and empowered to make peace with their path.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-indigo mb-4">
              My Vision
            </h2>
            <p className="font-body text-indigo/70 leading-relaxed">
              A world where spiritual guidance is accessible to all — helping people
              live with greater awareness, peace, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
              The Journey
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-indigo">
              My Timeline
            </h2>
          </div>

          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6">
                <div className="font-heading text-xl text-lavender-dark w-20 shrink-0">
                  {item.year}
                </div>
                <div className="border-l-2 border-beige pl-6">
                  <h3 className="font-heading text-lg text-indigo mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-indigo/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const timeline = [
  {
    year: "2014",
    title: "The Beginning",
    description: "Discovered tarot during a personal spiritual awakening.",
  },
  {
    year: "2017",
    title: "First Clients",
    description: "Began offering readings to friends and family, then the wider community.",
  },
  {
    year: "2020",
    title: "Going Online",
    description: "Expanded services online to reach and guide seekers worldwide.",
  },
  {
    year: "2026",
    title: "Mystic Path Today",
    description: "Continuing to guide hundreds of individuals toward clarity and peace.",
  },
];
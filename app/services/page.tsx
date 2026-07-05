import Link from "next/link";

const pricing = [
  { duration: "15 Minutes", price: "₹500" },
  { duration: "30 Minutes", price: "₹1,500" },
  { duration: "1 Hour", price: "₹3,000" },
  { duration: "2 Hours", price: "₹6,000" },
];

async function getServices() {
  try {
    const res = await fetch("http://localhost:5000/api/services", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch services");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Services() {
  const services = await getServices();

  return (
    <div className="bg-cream">
      {/* Page Header */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
            Our Offerings
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-indigo">
            Services
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any) => (
              <div
                key={service._id}
                className="bg-beige rounded-2xl p-8 flex flex-col border border-beige"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-xl text-indigo mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-indigo/70 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="bg-indigo text-cream text-center px-6 py-3 rounded-full font-body text-sm hover:bg-lavender-dark transition-colors"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-indigo py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-[0.3em] text-lavender uppercase mb-4 block">
              Session Pricing
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-cream">
              Choose Your Session Length
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pricing.map((item) => (
              <div
                key={item.duration}
                className="bg-cream/10 border border-cream/20 rounded-2xl p-6 text-center"
              >
                <p className="font-body text-sm text-cream/70 mb-2">
                  {item.duration}
                </p>
                <p className="font-heading text-3xl text-cream">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
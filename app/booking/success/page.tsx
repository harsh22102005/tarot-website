import Link from "next/link";

export default function BookingSuccess() {
  return (
    <div className="bg-cream min-h-[80vh] flex items-center justify-center py-20">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="text-6xl mb-6">🌙</div>
        <h1 className="font-heading text-3xl md:text-4xl text-indigo mb-4">
          Booking Confirmed!
        </h1>
        <p className="font-body text-indigo/70 leading-relaxed mb-10">
          Thank you for booking your session with us. We&apos;ve received your
          request and will send you a confirmation email shortly with all the
          details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-indigo text-cream px-8 py-3.5 rounded-full font-body text-sm hover:bg-lavender-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="border border-indigo text-indigo px-8 py-3.5 rounded-full font-body text-sm hover:bg-indigo hover:text-cream transition-colors"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </div>
  );
}
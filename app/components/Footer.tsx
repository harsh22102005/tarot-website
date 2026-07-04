import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl mb-4">✦ Mystic Path</h3>
          <p className="text-sm text-cream/70 font-body leading-relaxed">
            Guiding you toward clarity, healing, and peace through the wisdom of tarot and spiritual practice.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm font-body text-cream/70">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Me</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm font-body text-cream/70">
            <li>Email: hello@mysticpath.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>WhatsApp: +91 98765 43210</li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="font-heading text-lg mb-4">Business Hours</h4>
          <ul className="space-y-2 text-sm font-body text-cream/70">
            <li>Mon - Fri: 10 AM - 7 PM</li>
            <li>Sat: 11 AM - 5 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/20 py-6 text-center text-xs text-cream/50 font-body">
        © {new Date().getFullYear()} Mystic Path. All rights reserved.
      </div>
    </footer>
  );
}
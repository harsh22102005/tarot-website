"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-cream">
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-indigo">
            Contact
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-2xl text-indigo mb-6">
              Send a Message
            </h2>

            {status === "success" && (
              <div className="bg-sage/20 border border-sage text-indigo rounded-lg px-4 py-3 mb-6 font-body text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg px-4 py-3 mb-6 font-body text-sm">
                Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm text-indigo/70 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-beige/50 border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
                />
              </div>

              <div>
                <label className="font-body text-sm text-indigo/70 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-beige/50 border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
                />
              </div>

              <div>
                <label className="font-body text-sm text-indigo/70 block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-beige/50 border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-indigo text-cream px-8 py-3.5 rounded-full font-body text-sm hover:bg-lavender-dark transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-indigo mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 font-body text-indigo/80 mb-10">
              <p>📧 hello@mysticpath.com</p>
              <p>📞 +91 98765 43210</p>
              <p>💬 WhatsApp: +91 98765 43210</p>
            </div>

            <h3 className="font-heading text-lg text-indigo mb-3">
              Business Hours
            </h3>
            <div className="space-y-1 font-body text-sm text-indigo/70 mb-10">
              <p>Mon - Fri: 10 AM - 7 PM</p>
              <p>Sat: 11 AM - 5 PM</p>
              <p>Sun: Closed</p>
            </div>

            <h3 className="font-heading text-lg text-indigo mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4 font-body text-sm text-indigo/70">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>YouTube</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
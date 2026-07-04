"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration will be added in a later phase
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon. (Backend not connected yet)");
  };

  return (
    <div className="bg-cream">
      {/* Page Header */}
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

      {/* Contact Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl text-indigo mb-6">
              Send a Message
            </h2>
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
                className="bg-indigo text-cream px-8 py-3.5 rounded-full font-body text-sm hover:bg-lavender-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
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
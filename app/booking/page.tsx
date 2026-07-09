"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

interface Service {
  _id: string;
  title: string;
  icon: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const durations = [
  { label: "15 Minutes", price: 500 },
  { label: "30 Minutes", price: 1500 },
  { label: "1 Hour", price: 3000 },
  { label: "2 Hours", price: 6000 },
];

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

export default function Booking() {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    service: "",
    duration: "",
    price: 0,
    timeSlot: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`);
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    }
    fetchServices();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDurationSelect = (label: string, price: number) => {
    setFormData({ ...formData, duration: label, price });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!selectedDate || !formData.timeSlot || !formData.duration) {
      setError("Please select a service, date, time, and duration.");
      return;
    }

    setLoading(true);

    try {
      const bookingRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedDate,
        }),
      });

      if (!bookingRes.ok) throw new Error("Failed to create booking");

      const booking = await bookingRes.json();

      const orderRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: formData.price,
          bookingId: booking._id,
        }),
      });

      const order = await orderRes.json();

      const options = {
        key: "rzp_test_TAY05NuABUdquk",
        amount: order.amount,
        currency: order.currency,
        name: "Mystic Path",
        description: `${formData.duration} - Tarot Session`,
        order_id: order.id,
        handler: async function (response: any) {
          const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payment/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingId: booking._id,
            }),
          });

          if (verifyRes.ok) {
            router.push("/booking/success");
          } else {
            setError("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: formData.customerName,
          email: formData.customerEmail,
          contact: formData.customerPhone,
        },
        theme: {
          color: "#2E2A4A",
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cream min-h-screen py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
            Book Your Session
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-indigo">
            Schedule Your Reading
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg px-4 py-3 mb-6 font-body text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-beige/30 p-8 rounded-2xl">
          <div>
            <label className="font-body text-sm text-indigo/70 block mb-2">
              Select Service
            </label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-cream border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
            >
              <option value="">-- Choose a service --</option>
              {services.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.icon} {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-body text-sm text-indigo/70 block mb-3">
              Select Duration
            </label>
            <div className="grid grid-cols-2 gap-3">
              {durations.map((d) => (
                <button
                  type="button"
                  key={d.label}
                  onClick={() => handleDurationSelect(d.label, d.price)}
                  className={`px-4 py-3 rounded-lg font-body text-sm border transition-colors ${
                    formData.duration === d.label
                      ? "bg-indigo text-cream border-indigo"
                      : "bg-cream text-indigo border-beige hover:border-lavender-dark"
                  }`}
                >
                  {d.label} — ₹{d.price}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-indigo/70 block mb-2">
              Select Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              minDate={new Date()}
              placeholderText="Choose a date"
              className="w-full bg-cream border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
            />
          </div>

          <div>
            <label className="font-body text-sm text-indigo/70 block mb-3">
              Select Time Slot
            </label>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setFormData({ ...formData, timeSlot: slot })}
                  className={`px-3 py-2 rounded-lg font-body text-sm border transition-colors ${
                    formData.timeSlot === slot
                      ? "bg-indigo text-cream border-indigo"
                      : "bg-cream text-indigo border-beige hover:border-lavender-dark"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-indigo/70 block mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="customerName"
              required
              value={formData.customerName}
              onChange={handleChange}
              className="w-full bg-cream border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
            />
          </div>

          <div>
            <label className="font-body text-sm text-indigo/70 block mb-2">
              Email
            </label>
            <input
              type="email"
              name="customerEmail"
              required
              value={formData.customerEmail}
              onChange={handleChange}
              className="w-full bg-cream border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
            />
          </div>

          <div>
            <label className="font-body text-sm text-indigo/70 block mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="customerPhone"
              required
              value={formData.customerPhone}
              onChange={handleChange}
              className="w-full bg-cream border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo text-cream px-8 py-3.5 rounded-full font-body text-sm hover:bg-lavender-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Processing..." : `Proceed to Payment${formData.price ? ` — ₹${formData.price}` : ""}`}
          </button>
        </form>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Booking {
  _id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: { title: string; icon: string } | null;
  duration: string;
  price: number;
  date: string;
  timeSlot: string;
  status: string;
  paymentStatus: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.role !== "admin") {
      router.push("/");
      return;
    }

    setAuthorized(true);
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`);
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchBookings();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="font-body text-indigo">Checking access...</p>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
            Admin Panel
          </span>
          <h1 className="font-heading text-3xl md:text-5xl text-indigo">
            Bookings Dashboard
          </h1>
        </div>

        {loading ? (
          <p className="font-body text-indigo/60">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="font-body text-indigo/60">No bookings yet.</p>
        ) : (
          <div className="overflow-x-auto bg-beige/30 rounded-2xl p-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-beige">
                  <th className="p-3 font-body text-sm text-indigo/70">Customer</th>
                  <th className="p-3 font-body text-sm text-indigo/70">Service</th>
                  <th className="p-3 font-body text-sm text-indigo/70">Date & Time</th>
                  <th className="p-3 font-body text-sm text-indigo/70">Price</th>
                  <th className="p-3 font-body text-sm text-indigo/70">Payment</th>
                  <th className="p-3 font-body text-sm text-indigo/70">Status</th>
                  <th className="p-3 font-body text-sm text-indigo/70">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id} className="border-b border-beige/50">
                    <td className="p-3 font-body text-sm text-indigo">
                      <div>{booking.customerName}</div>
                      <div className="text-indigo/50 text-xs">{booking.customerEmail}</div>
                    </td>
                    <td className="p-3 font-body text-sm text-indigo">
                      {booking.service ? `${booking.service.icon} ${booking.service.title}` : "N/A"}
                    </td>
                    <td className="p-3 font-body text-sm text-indigo">
                      <div>{new Date(booking.date).toLocaleDateString()}</div>
                      <div className="text-indigo/50 text-xs">{booking.timeSlot}</div>
                    </td>
                    <td className="p-3 font-body text-sm text-indigo">₹{booking.price}</td>
                    <td className="p-3 font-body text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          booking.paymentStatus === "paid"
                            ? "bg-sage/30 text-indigo"
                            : "bg-gold/30 text-indigo"
                        }`}
                      >
                        {booking.paymentStatus}
                      </span>
                    </td>
                    <td className="p-3 font-body text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === "confirmed"
                            ? "bg-sage/30 text-indigo"
                            : booking.status === "cancelled"
                            ? "bg-red-200 text-red-800"
                            : "bg-gold/30 text-indigo"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <select
                        value={booking.status}
                        onChange={(e) => updateStatus(booking._id, e.target.value)}
                        className="bg-cream border border-beige rounded-lg px-2 py-1 font-body text-xs text-indigo focus:outline-none"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
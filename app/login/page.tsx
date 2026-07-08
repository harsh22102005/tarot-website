"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cream min-h-[80vh] flex items-center justify-center py-20">
      <div className="max-w-md w-full mx-auto px-6">
        <div className="text-center mb-10">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
            Welcome Back
          </span>
          <h1 className="font-heading text-3xl md:text-4xl text-indigo">
            Log In
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg px-4 py-3 mb-6 font-body text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 bg-beige/30 p-8 rounded-2xl">
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
              className="w-full bg-cream border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
            />
          </div>

          <div>
            <label className="font-body text-sm text-indigo/70 block mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-cream border border-beige rounded-lg px-4 py-3 font-body text-indigo focus:outline-none focus:border-lavender-dark"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo text-cream px-8 py-3.5 rounded-full font-body text-sm hover:bg-lavender-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <p className="text-center font-body text-sm text-indigo/70 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-lavender-dark hover:text-indigo underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 800));
    if (password === "admin" || process.env.NODE_ENV === "development") {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("admin_session", "true");
      }
      router.push("/admin");
    } else {
      setError("Invalid credentials. For development use password: admin");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 mb-4">
            <Lock className="w-6 h-6 text-accent-light" />
          </div>
          <h1 className="text-2xl font-display font-bold">Admin Access</h1>
          <p className="text-sm text-foreground-muted mt-2">M Prem Portfolio CMS</p>
        </div>

        <form onSubmit={handleLogin} className="glass-card p-6 md:p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent outline-none" placeholder="admin@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-accent outline-none" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <p className="text-xs text-foreground-subtle text-center pt-2">
            Development mode: use any email + password <code className="text-accent-light">admin</code>
            <br />Production: connect Supabase Auth or your preferred provider.
          </p>
        </form>
      </div>
    </div>
  );
}

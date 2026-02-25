import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/Header";
import { Lock, LogIn } from "lucide-react";

/**
 * Admin Page — Login gate for the blog admin portal.
 * In a full-stack setup, this would validate against environment variables.
 * For now, it shows the login UI — backend auth will be added with Lovable Cloud.
 */
const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend authentication will be implemented with Lovable Cloud
    setError("Admin authentication requires backend setup. Enable Lovable Cloud to proceed.");
  };

  return (
    <>
      <Helmet>
        <title>Admin Login — Matawi Digital</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />
      <main className="section-padding bg-muted min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mat-card bg-background space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Lock size={24} className="text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Admin Portal</h1>
              <p className="text-sm text-muted-foreground">
                Sign in to manage blog posts
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded p-4">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {/* Login form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                  placeholder="admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary"
                  placeholder="••••••••"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <LogIn size={18} />
                Sign In
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;

import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-8xl font-display font-black tracking-tighter mb-4">404</h1>
      <p className="text-white/50 text-lg mb-8">Page not found</p>
      <Link href="/">
        <a className="px-8 py-3 border border-white/20 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Back to Home
        </a>
      </Link>
    </div>
  );
}

import { Link } from "wouter";
import { ArrowRight, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-20 bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="text-3xl font-display font-black tracking-tighter">LUXE.</div>
            <p className="text-white/40 font-light leading-relaxed">
              Redefining luxury travel since 2006. We create transformative journeys for those who seek the extraordinary.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Explore</h4>
            <ul className="space-y-4 text-sm tracking-widest uppercase">
              <li><Link href="/destinations"><a className="hover:text-white/60 transition-colors">Destinations</a></Link></li>
              <li><Link href="/stories"><a className="hover:text-white/60 transition-colors">Stories</a></Link></li>
              <li><Link href="/gallery"><a className="hover:text-white/60 transition-colors">Gallery</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white/60 transition-colors">About Us</a></Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Company</h4>
            <ul className="space-y-4 text-sm tracking-widest uppercase">
              <li><a href="#" className="hover:text-white/60 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Press Room</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-white/40">Newsletter</h4>
            <p className="text-sm text-white/40">Subscribe to receive curated travel inspiration directly to your inbox.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input type="email" placeholder="Your email" className="bg-transparent flex-1 text-sm focus:outline-none" />
              <button className="text-white/60 hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.5em] text-white/20">
            © 2026 LUXE TRAVEL CO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.5em] text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

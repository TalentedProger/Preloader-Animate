import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/stories", label: "Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

interface NavbarProps {
  onBookNow: () => void;
  transparent?: boolean;
}

export function Navbar({ onBookNow, transparent = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navClasses = transparent
    ? "relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-center"
    : "relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 border-b border-white/5";

  return (
    <>
      <nav className={navClasses}>
        {/* Logo */}
        {transparent ? (
          <div className="text-2xl font-display font-bold tracking-tight">LUXE.</div>
        ) : (
          <Link href="/">
            <a className="text-2xl font-display font-bold tracking-tight">LUXE.</a>
          </Link>
        )}

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={
                  location === link.href
                    ? "text-white"
                    : "hover:text-white transition-colors"
                }
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Right side: Book Now + Burger */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black transition-all hidden sm:inline-flex"
            onClick={onBookNow}
          >
            Book Now
          </Button>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button fixed in top-right */}
            <motion.button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <X size={28} />
            </motion.button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link href={link.href}>
                    <a
                      className={`text-3xl font-display font-bold uppercase tracking-widest ${
                        location === link.href
                          ? "text-white"
                          : "text-white/60 hover:text-white transition-colors"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-all text-lg px-8 py-3"
                  onClick={() => {
                    setMenuOpen(false);
                    onBookNow();
                  }}
                >
                  Book Now
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";

const vidya = [
  { to: "/jyotish", label: "Jyotish · Astrology" },
  { to: "/hastrekha", label: "Hastrekha · Palmistry" },
  { to: "/ank-jyotish", label: "Ank Jyotish · Numerology" },
  { to: "/ratna", label: "Ratna · Gemstones" },
  { to: "/nakshatra", label: "Nakshatra · 27 Mansions" },
  { to: "/dasha", label: "Dasha · Timing" },
] as const;

const nav = [
  { to: "/", label: "Home" },
  { to: "/rashifal", label: "Rashifal" },
  { to: "/seva", label: "Seva" },
  { to: "/margdarshan", label: "Guidance" },
  { to: "/lekh", label: "Lekh" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [vidyaOpen, setVidyaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="text-primary"
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>
          <span className="font-display text-xl tracking-tight">
            Shriji<span className="text-gradient-gold"> Palmistry</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setVidyaOpen(true)}
            onMouseLeave={() => setVidyaOpen(false)}
          >
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              aria-haspopup="menu"
              aria-expanded={vidyaOpen}
            >
              Vidya <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {vidyaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72"
                  role="menu"
                >
                  <div className="rounded-2xl border border-border bg-popover text-popover-foreground p-2 shadow-2xl">
                    {vidya.map((v) => (
                      <Link
                        key={v.to}
                        to={v.to}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition"
                        activeProps={{ className: "text-primary bg-primary/5" }}
                      >
                        {v.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
        >
          Book a reading
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label="menu"
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border/60 bg-background/95"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80 hover:text-primary"
                >
                  {n.label}
                </Link>
              ))}
              <p className="text-xs uppercase tracking-wider text-primary/70 mt-2">Vidya</p>
              {vidya.map((v) => (
                <Link
                  key={v.to}
                  to={v.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-foreground/70 hover:text-primary pl-2"
                >
                  {v.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                Book a reading
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

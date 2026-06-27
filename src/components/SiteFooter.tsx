import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display text-xl">Shriji Palmistry</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ancient Vedic jyotish, hastrekha, and ank vidya — translated for a modern life.
            Self-knowledge and guidance, rooted in tradition.
          </p>
          <p className="text-xs text-muted-foreground/80 mt-4">
            Readings by <span className="text-primary">Kanaiyalal Gandhi</span> · Engineer-turned-jyotishi · 15+ years of practice
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Vidya</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/jyotish" className="hover:text-primary">Jyotish</Link></li>
            <li><Link to="/hastrekha" className="hover:text-primary">Hastrekha</Link></li>
            <li><Link to="/ank-jyotish" className="hover:text-primary">Ank Jyotish</Link></li>
            <li><Link to="/ratna" className="hover:text-primary">Ratna</Link></li>
            <li><Link to="/nakshatra" className="hover:text-primary">Nakshatra</Link></li>
            <li><Link to="/dasha" className="hover:text-primary">Dasha & Gochar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Guidance</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/seva" className="hover:text-primary">Seva · Consultations</Link></li>
            <li><Link to="/rashifal" className="hover:text-primary">Rashifal · Weekly</Link></li>
            <li><Link to="/margdarshan" className="hover:text-primary">Life Guidance</Link></li>
            <li><Link to="/margdarshan/career" className="hover:text-primary">Career Guidance</Link></li>
            <li><Link to="/lekh" className="hover:text-primary">Lekh · Articles</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Book a Reading</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-primary">Information</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms</Link></li>
            <li><Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Shriji Palmistry. All rights reserved.</p>
          <p className="max-w-2xl">
            For educational and cultural purposes only. Not a substitute for medical, legal,
            or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

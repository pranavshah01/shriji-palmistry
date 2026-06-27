import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Disclaimer } from "@/components/Disclaimer";
import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a reading · Shriji Palmistry" },
      { name: "description", content: "Book a personal jyotish, hastrekha, or ank vidya reading with Shriji Palmistry. Private, confidential, and grounded in tradition." },
      { property: "og:title", content: "Book a reading · Shriji Palmistry" },
      { property: "og:description", content: "Reach out to begin your reading." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
      timeOfBirth: formData.get("timeOfBirth") as string,
      placeOfBirth: formData.get("placeOfBirth") as string,
      question: formData.get("question") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSent(true);
        toast.success("Request sent successfully!");
      } else {
        toast.error(result.error || "Failed to send request");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get in touch"
        title="Book a reading"
        sanskrit="संवादे ज्ञानम्"
        intro="Share a few details and we will respond within 48 hours with your personal reading. Every conversation is private and confidential."
      />

      <section className="mx-auto max-w-6xl px-5 lg:px-10 pb-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <Mail className="h-5 w-5 text-primary mb-3" />
              <p className="font-display text-lg">Email</p>
              <p className="text-sm text-muted-foreground">kanaiyalalgandhi301@gmail.com</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="glass rounded-2xl p-6">
              <Phone className="h-5 w-5 text-primary mb-3" />
              <p className="font-display text-lg">Phone (US)</p>
              <p className="text-sm text-muted-foreground">+1 (224) 617-4051</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <MessageCircle className="h-5 w-5 text-primary mb-3" />
              <p className="font-display text-lg">WhatsApp</p>
              <p className="text-sm text-muted-foreground">9am — 7pm PT, Mon–Sat</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 space-y-5"
          >
            {sent ? (
              <div className="py-16 text-center">
                <p className="text-5xl mb-4">🙏</p>
                <h3 className="font-display text-2xl text-primary mb-2">Thank you</h3>
                <p className="text-muted-foreground">
                  We will be in touch shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your name" name="name" placeholder="Full name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Date of birth" name="dateOfBirth" type="date" required />
                  <Field label="Time of birth" name="timeOfBirth" type="time" />
                </div>
                <Field label="Place of birth" name="placeOfBirth" placeholder="City, country" required />
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Your question
                  </label>
                  <textarea
                    name="question"
                    rows={4}
                    required
                    placeholder="What would you like to understand?"
                    className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send request"}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our disclaimer and terms.
                </p>
              </>
            )}
          </form>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 lg:px-10 pb-24">
        <Disclaimer short />
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  ...rest
}: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        {...rest}
        className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition"
      />
    </div>
  );
}

import { AlertTriangle } from "lucide-react";

export function Disclaimer({ short = false }: { short?: boolean }) {
  return (
    <div className="glass rounded-2xl p-6 md:p-8 my-12 flex gap-4 items-start">
      <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-1" />
      <div>
        <p className="font-display text-lg text-primary mb-2">Important Notice · Disclaimer</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {short
            ? "This content is provided for educational, cultural, and entertainment purposes only. It is not a substitute for professional medical, legal, financial, psychological, or psychiatric advice. For any major life decision, please consult a qualified, licensed professional. Results are not guaranteed."
            : "All information on Shriji Palmistry — jyotish, hastrekha, ank vidya, ratna recommendations, and guidance — is provided for educational, cultural, and entertainment purposes only. It is not scientifically validated and is not a substitute for professional medical, legal, financial, psychological, or psychiatric advice. Before making any significant life decision, please consult a qualified, licensed professional (physician, attorney, financial advisor, or licensed therapist). No specific outcomes or results are guaranteed. Shriji Palmistry assumes no liability for actions taken based on this content. Your own discernment remains the truest guide."}
        </p>
      </div>
    </div>
  );
}

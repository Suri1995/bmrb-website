import { ArrowRight } from "lucide-react";

export function InternationalCTACard() {
  return (
    <div className="relative bg-[oklch(0.35_0.15_258)] rounded-3xl p-7 overflow-hidden shadow-[0_8px_48px_oklch(0.35_0.15_258/0.3)]">
      <span className="pointer-events-none absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[oklch(0.98_0_0/0.05)]" />
      <span className="pointer-events-none absolute -left-4 -top-4 w-24 h-24 rounded-full bg-[oklch(0.98_0_0/0.04)]" />

      <h4 className="text-lg font-bold text-[oklch(0.98_0_0)] mb-2 relative">
        International Research
      </h4>
      <p className="text-[oklch(0.98_0_0/0.65)] text-sm font-light leading-relaxed mb-5 relative">
        We serve global clients and conduct multi-country research
        across 30+ countries in various languages.
      </p>
      <a
        href="#"
        className="relative inline-flex items-center gap-2 bg-[oklch(0.98_0_0)] text-[oklch(0.55_0.15_258)] text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[oklch(0.95_0.02_258)] transition-all duration-200"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
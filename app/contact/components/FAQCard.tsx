import { MessageSquare, Clock, Globe } from "lucide-react";

const faqs = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    q: "What information do you need?",
    a: "Share your research objectives, target audience, timeline, and budget. We'll deliver a fully customised proposal.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    q: "How long does research take?",
    a: "Simple studies take 2–4 weeks. Comprehensive research spans 2–3 months based on complexity.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    q: "Do you serve international clients?",
    a: "Yes — we conduct multi-country research across various languages and work with clients in 30+ countries.",
  },
];

export function FAQCard() {
  return (
    <div className="bg-[oklch(0.98_0_0)] border border-[oklch(0.88_0.04_258/0.5)] rounded-3xl p-7 shadow-[0_4px_32px_oklch(0.55_0.15_258/0.06)]">
      <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[oklch(0.55_0.15_258)] block mb-1">
        Quick Answers
      </span>
      <h3 className="text-xl font-bold text-[oklch(0.2_0.05_258)] mb-7">
        Frequently Asked
      </h3>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.q} className="flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-[oklch(0.55_0.15_258/0.1)] flex items-center justify-center flex-shrink-0 text-[oklch(0.55_0.15_258)] mt-0.5">
              {faq.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-[oklch(0.2_0.05_258)] mb-1.5">
                {faq.q}
              </p>
              <p className="text-xs text-[oklch(0.5_0.05_258)] leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
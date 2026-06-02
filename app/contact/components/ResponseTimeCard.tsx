import { CheckCircle } from "lucide-react";

const responseTimes = [
  { channel: "Email", time: "Within 24 hours" },
  { channel: "Phone", time: "Same business day" },
  { channel: "Proposals", time: "3–5 business days" },
  { channel: "Urgent enquiries", time: "Available on request" },
];

export function ResponseTimesCard() {
  return (
    <div className="bg-[oklch(0.55_0.15_258)] rounded-3xl p-7 shadow-[0_8px_48px_oklch(0.55_0.15_258/0.35)]">
      <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[oklch(0.98_0_0/0.6)] block mb-1">
        Turnaround Times
      </span>
      <h3 className="text-lg font-bold text-[oklch(0.98_0_0)] mb-6">
        Our Response Times
      </h3>

      <div className="space-y-1">
        {responseTimes.map((item) => (
          <div
            key={item.channel}
            className="flex items-center justify-between gap-4 py-3 border-b border-[oklch(0.98_0_0/0.08)] last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-md bg-[oklch(0.98_0_0/0.15)] flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-[oklch(0.98_0_0/0.8)]" />
              </div>
              <span className="text-sm font-medium text-[oklch(0.98_0_0/0.9)]">
                {item.channel}
              </span>
            </div>
            <span className="text-xs text-[oklch(0.98_0_0/0.5)] font-light text-right">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
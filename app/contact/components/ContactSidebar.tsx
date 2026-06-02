import { FAQCard } from "./FAQCard";
import { ResponseTimesCard } from "./ResponseTimeCard";
import { InternationalCTACard } from "./InternationalCTACard";

export function ContactSidebar() {
  return (
    <div className="flex flex-col gap-6">
      <FAQCard />
      <ResponseTimesCard />
      <InternationalCTACard />
    </div>
  );
}
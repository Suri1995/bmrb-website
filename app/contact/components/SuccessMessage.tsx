import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function SuccessMessage() {
  const router = useRouter();

  return (
    <div className="min-h-[520px] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="relative flex justify-center">
          <Image
            src="/success.gif"
            alt="Success"
            width={120}
            height={120}
            priority
            className="object-contain"
          />
        </div>
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold text-[oklch(0.2_0.05_258)] mb-5">
        Successfully Submitted
      </h2>

      <p className="max-w-xl text-[oklch(0.5_0.05_258)] text-lg leading-8 font-light">
        Thank you for contacting us. Our team has successfully
        received your enquiry and will respond within{" "}
        <span className="font-semibold text-[oklch(0.55_0.15_258)]">
          24 hours on business days
        </span>
        .
      </p>

      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-3 text-sm font-medium text-green-700">
        <CheckCircle className="w-4 h-4" />
        Your message has been delivered successfully
      </div>

      <button
        onClick={() => router.push("/")}
        className="mt-6 inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-2xl
        bg-[oklch(0.55_0.15_258)]
        hover:bg-[oklch(0.48_0.15_258)]
        text-white text-sm font-semibold
        shadow-[0_4px_24px_oklch(0.55_0.15_258/0.35)]
        hover:shadow-[0_8px_32px_oklch(0.55_0.15_258/0.45)]
        transition-all duration-300"
      >
        Back to Home Page
      </button>
    </div>
  );
}
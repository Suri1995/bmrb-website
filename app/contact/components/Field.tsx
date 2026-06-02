interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export function Field({ label, required, error, children }: FieldProps) {
  return (
    <div>
      <label className="block text-[10px] font-semibold tracking-widest uppercase text-[oklch(0.55_0.15_258/0.5)] mb-2">
        {label}
        {required && <span className="text-[oklch(0.55_0.15_258)] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}

export function inputCls(hasError: boolean) {
  return [
    "w-full px-5 py-3.5 rounded-2xl border text-[oklch(0.2_0.05_258)] text-sm",
    "bg-[oklch(0.97_0.01_258)] placeholder:text-[oklch(0.7_0.03_258)]",
    "placeholder:font-light outline-none transition-all duration-200",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
      : "border-[oklch(0.88_0.04_258)] focus:border-[oklch(0.55_0.15_258)] focus:ring-2 focus:ring-[oklch(0.55_0.15_258/0.12)] focus:bg-[oklch(0.98_0_0)]",
  ].join(" ");
}
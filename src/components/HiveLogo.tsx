import { Zap } from "lucide-react";

export function HiveLogo({ variant = "light", className = "" }: { variant?: "light" | "dark"; className?: string }) {
  const isLight = variant === "light";
  return (
    <div className={`inline-flex items-end gap-1.5 ${className}`} aria-label="hive Energy">
      <div className="flex flex-col items-start leading-none">
        <span
          className="text-[10px] font-bold tracking-wide"
          style={{ color: isLight ? "hsl(252 98% 68%)" : "hsl(45 87% 62%)" }}
        >
          hive
        </span>
        <span
          className="text-2xl sm:text-[28px] font-black leading-[0.9]"
          style={{ color: isLight ? "hsl(252 98% 68%)" : "white", letterSpacing: "-0.04em" }}
        >
          Energy
        </span>
      </div>
      <Zap
        size={22}
        fill="hsl(45 87% 62%)"
        stroke="hsl(45 87% 62%)"
        className="mb-1"
      />
    </div>
  );
}

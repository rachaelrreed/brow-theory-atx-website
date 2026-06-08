import CrosshairMark from "@/components/ui/CrosshairMark";
import { SITE } from "@/lib/constants";

interface BrandLogoProps {
  /** Default = charcoal on light bg; light = white/gold on hero */
  variant?: "default" | "light";
  /** header = compact nav lockup; footer = full wordmark */
  size?: "header" | "footer";
  className?: string;
}

export default function BrandLogo({
  variant = "default",
  size = "header",
  className = "",
}: BrandLogoProps) {
  const isLight = variant === "light";
  const isFooter = size === "footer";

  const primaryClass = isLight ? "text-white" : "text-ink";
  const accentClass = isLight ? "text-gold" : "text-umber";
  const markClass = isLight ? "text-gold" : "text-gold";

  if (isFooter) {
    return (
      <div className={`flex flex-col items-start gap-3 ${className}`}>
        <CrosshairMark className={`h-10 w-10 ${markClass}`} />
        <div className="flex flex-col gap-1.5">
          <p
            className={`font-display text-2xl tracking-[0.04em] ${primaryClass}`}
          >
            BROW THEORY{" "}
            <span className={`font-accent text-base tracking-[0.2em] ${accentClass}`}>
              ATX
            </span>
          </p>
          <p
            className={`font-accent text-[0.65rem] uppercase tracking-[0.22em] ${accentClass}`}
          >
            Austin, Texas
          </p>
          <p
            className={`font-accent text-[0.6rem] uppercase tracking-[0.16em] ${primaryClass}`}
          >
            Permanent Cosmetics Specialist
          </p>
        </div>
        <span className="sr-only">{SITE.name}</span>
      </div>
    );
  }

  return (
    <div
      className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
    >
      <CrosshairMark
        className={`h-6 w-6 shrink-0 sm:h-8 sm:w-8 ${markClass}`}
      />
      <div className="min-w-0 leading-none">
        <p
          className={`font-display whitespace-nowrap text-[0.95rem] tracking-[0.035em] sm:text-lg md:text-xl ${primaryClass}`}
        >
          BROW THEORY{" "}
          <span
            className={`font-accent text-[0.72em] tracking-[0.18em] sm:text-[0.78em] ${accentClass}`}
          >
            ATX
          </span>
        </p>
        <p
          className={`font-accent mt-1 hidden text-[0.55rem] uppercase tracking-[0.2em] sm:block sm:text-[0.6rem] ${accentClass}`}
        >
          Austin, Texas
        </p>
      </div>
      <span className="sr-only">{SITE.name}</span>
    </div>
  );
}

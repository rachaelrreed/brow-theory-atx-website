interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  note?: string;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  title,
  subtitle,
  note,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] text-ink mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base text-ink/85 md:text-lg md:text-umber">{subtitle}</p>
      )}
      {note && (
        <p className="font-body mt-2 text-sm leading-relaxed text-ink/80 md:text-sm md:text-umber">{note}</p>
      )}
    </div>
  );
}

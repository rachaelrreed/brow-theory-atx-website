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
        <p className="font-body text-umber text-lg">{subtitle}</p>
      )}
      {note && (
        <p className="font-body text-umber text-sm mt-2">{note}</p>
      )}
    </div>
  );
}

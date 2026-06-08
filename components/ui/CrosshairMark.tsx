interface CrosshairMarkProps {
  className?: string;
}

/** Brand crosshair / brow-mapping mark from the Brow Theory ATX style guide */
export default function CrosshairMark({ className = "h-8 w-8" }: CrosshairMarkProps) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 10c10-8 26-8 36 10"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      <path
        d="M24 6v24"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      <path
        d="M16 22h16"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      <circle cx="24" cy="10" r="1.15" fill="currentColor" />
      <circle cx="24" cy="22" r="1.15" fill="currentColor" />
    </svg>
  );
}

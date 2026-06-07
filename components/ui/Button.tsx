import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark";

interface ButtonProps extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  variant?: ButtonVariant;
  href: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-ink font-medium uppercase tracking-[0.08em] px-10 py-4 hover:opacity-90 transition-opacity",
  secondary:
    "bg-ink text-bone font-medium uppercase tracking-[0.08em] px-10 py-3.5 hover:opacity-90 transition-opacity",
  outline:
    "border border-ink bg-transparent text-ink font-medium uppercase tracking-[0.08em] px-8 py-3.5 hover:bg-ink hover:text-bone transition-colors",
  dark:
    "bg-gold text-ink font-medium uppercase tracking-[0.1em] px-12 py-[1.125rem] hover:opacity-90 transition-opacity",
};

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${variantClasses[variant]} inline-block font-body text-sm ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal || href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

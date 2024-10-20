import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  className?: string;
}

const defaultTheme = "p-5 text-lg";

const ButtonLink = ({
  href = "/",
  children,
  variant,
  className,
}: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <Button variant={variant} className={`${defaultTheme} ${className}`}>
        {children}
      </Button>
    </Link>
  );
};
export default ButtonLink;

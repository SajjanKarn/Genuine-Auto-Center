import Link from "next/link";
import { ReactNode } from "react";

const PrimaryButton = ({
  href = "/",
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) => {
  return (
    <Link
      href={href}
      className={`${
        variant === "solid"
          ? "bg-fuchsia-800 text-white hover:bg-fuchsia-700"
          : "border border-fuchsia-800 text-fuchsia-800 hover:bg-fuchsia-800 hover:text-white"
      } px-8 py-3 text-sm font-semibold rounded-lg transition`}
    >
      {children}
    </Link>
  );
};
export default PrimaryButton;

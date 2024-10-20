import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const afacad = Afacad({
  display: "swap",
  style: "normal",
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "Genuine Auto Center",
  description:
    "Genuine Auto Center is a full-service auto repair shop. We offer a wide range of services, including oil changes, brake repair, and engine diagnostics.",
  keywords: "auto repair, oil change, brake repair, engine diagnostics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.className} ${afacad.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

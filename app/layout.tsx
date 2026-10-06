import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome Itz Fizz | Scroll Experience",
  description:
    "A premium scroll-driven hero animation built with Next.js and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
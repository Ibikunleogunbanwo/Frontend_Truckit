import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Truckit · Foundation",
  description: "Truckit shared components and responsive layout foundation.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}

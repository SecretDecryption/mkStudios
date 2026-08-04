import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MK Studio | Medical Aesthetics in Cambridge",
  description:
    "Personalized laser hair removal, facials, permanent makeup, brows and lashes with certified medical aesthetician Masoda in Cambridge, Ontario.",
  openGraph: {
    title: "MK Studio | Your glow, entirely your own.",
    description:
      "Personalized laser, skin, permanent makeup, brow and lash treatments in Cambridge, Ontario.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary",
    title: "MK Studio | Your glow, entirely your own.",
    description:
      "Personalized medical aesthetics and beauty treatments in Cambridge, Ontario.",
  },
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

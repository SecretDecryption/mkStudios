import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "mk-studios-six.vercel.app";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "MK Studio | Medical Aesthetics in Cambridge",
    description:
      "Personalized laser hair removal, facials, permanent makeup, brows and lashes with certified medical aesthetician Masoda in Cambridge, Ontario.",
    icons: {
      icon: "/mk-studio/logo.png",
      apple: "/mk-studio/logo.png",
    },
    openGraph: {
      title: "MK Studio | Your glow, entirely your own.",
      description:
        "Personalized laser, skin, permanent makeup, brow and lash treatments in Cambridge, Ontario.",
      type: "website",
      locale: "en_CA",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1740,
          height: 909,
          alt: "MK Studio — Your glow, entirely your own.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "MK Studio | Your glow, entirely your own.",
      description:
        "Personalized medical aesthetics and beauty treatments in Cambridge, Ontario.",
      images: [`${origin}/og.png`],
    },
  };
}

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

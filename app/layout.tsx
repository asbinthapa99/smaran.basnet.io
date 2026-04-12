import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smaran.basnet.io"),
  title: "Smaran Basnet | Digital Product Builder",
  description:
    "A digital product builder specializing in AI-powered systems, EV platforms, and CRM automation.",
  openGraph: {
    type: "website",
    url: "https://smaran.basnet.io/",
    title: "Smaran Basnet | Digital Product Builder",
    description:
      "A digital product builder specializing in AI-powered systems, EV platforms, and CRM automation.",
    images: [{ url: "/images/image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smaran Basnet | Digital Product Builder",
    description:
      "A digital product builder specializing in AI-powered systems, EV platforms, and CRM automation.",
    images: ["/images/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className="bg-[#0B0B0B] text-white antialiased"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}

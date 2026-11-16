import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Nightshift, Free Next.js Template";
const description = "Risograph-poster landing for an AI engineer that works the night shift.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e8ecec",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

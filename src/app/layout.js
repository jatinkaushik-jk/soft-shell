import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoftSell - Turn Unused Software Licenses into Cash",
  description: "SoftSell helps businesses monetize unused software licenses with a simple, secure process and competitive valuations.",
  keywords: [
    "Soft shell",
    "marketing",
    "software licenses",
    "license"
  ],
  authors: [{ name: "Jatin Kaushik" }],
  creator: "Jatin Kaushik",
  metadataBase: new URL("https://soft-shell-omega.vercel.app"),
  openGraph: {
    title: "SoftSell - Turn Unused Software Licenses into Cash",
    description:
      "SoftSell helps businesses monetize unused software licenses with a simple, secure process and competitive valuations.",
    url: "https://soft-shell-omega.vercel.app",
    siteName: "Soft shell",
    images: [
      {
        url: "https://soft-shell-omega.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Soft shell logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell - Turn Unused Software Licenses into Cash",
    description: "SoftSell helps businesses monetize unused software licenses with a simple, secure process and competitive valuations.",
    images: ["https://soft-shell-omega.vercel.app/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppHeader } from "./components/appHeader";
import { Allerta } from "next/font/google";

const allerta = Allerta({
  weight: ["400"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticketmaster",

  themeColor: "#e8173a",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicon-196.png"
        />

        <link rel="apple-touch-icon" href="/apple-icon-180.png" />

        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      </head>
      <body
        className={`${allerta.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white">
          <AppHeader></AppHeader>
          <main className="pt-[56px]">{children}</main>
        </div>
      </body>
    </html>
  );
}

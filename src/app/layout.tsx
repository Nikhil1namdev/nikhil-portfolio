import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhilnamdev.vercel.app"),
  title: "Nikhil Namdev — Frontend Engineer & Full Stack Developer",
  description:
    "Portfolio of Nikhil Namdev, a React and Full Stack Developer specializing in production Next.js interfaces, SaaS dashboards, and scalable web applications.",
  keywords: [
    "Nikhil Namdev",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "MERN Stack",
    "Web Developer Indore",
    "UI/UX Engineer"
  ],
  authors: [{ name: "Nikhil Namdev" }],
  creator: "Nikhil Namdev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhilnamdev.vercel.app",
    title: "Nikhil Namdev — Frontend Engineer & Full Stack Developer",
    description:
      "Crafting high-performance React and Next.js digital products with obsessive attention to interface quality and scalable architecture.",
    siteName: "Nikhil Namdev Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Namdev — Frontend Engineer & Full Stack Developer",
    description:
      "Crafting high-performance React and Next.js digital products with obsessive attention to interface quality and scalable architecture."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased font-sans selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhil Namdev | Full Stack Developer",
  description:
    "Portfolio of Nikhil Namdev, a Full Stack Developer and Frontend Engineer specializing in React, Next.js, Node.js, MongoDB, and modern web applications."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

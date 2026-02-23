import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesSite = repoName.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS === "true" && !isUserOrOrgPagesSite && repoName
    ? `/${repoName}`
    : "";
const faviconPath = `${basePath}/favicon.ico?`;

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Semantic Matter | Intelligent Data Ecosystems",
  description:
    "Semantic infrastructure and knowledge graphs for complex data interoperability.",
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
    apple: faviconPath
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href={faviconPath} />
      </head>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} bg-ink text-slate-100 antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

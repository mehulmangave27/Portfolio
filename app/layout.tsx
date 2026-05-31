import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Mehul Mangave | Cloud & AI Engineer",
  description:
    "Mehul Mangave is a Cloud & AI Engineer with production experience at State Street and Syngenta, specializing in AWS infrastructure, Terraform, and LLM/RAG pipelines. Actively seeking full-time roles.",
  openGraph: {
    title: "Mehul Mangave | Cloud & AI Engineer",
    description:
      "Cloud & AI Engineer with production experience at State Street and Syngenta. AWS, Terraform, LLM/RAG pipelines. Actively seeking full-time roles.",
    siteName: "Mehul Mangave Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mehul Mangave | Cloud & AI Engineer",
    description:
      "Cloud & AI Engineer. AWS, Terraform, LLM/RAG pipelines. Seeking full-time roles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

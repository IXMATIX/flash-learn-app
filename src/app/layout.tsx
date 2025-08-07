import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import ClientProviders from "@/app/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flashcards App",
  description: "A web application for creating and studying flashcards",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#f6f7fb] text-gray-800">
        <Header />
        <main className="flex-1">
          <ClientProviders />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

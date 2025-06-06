import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import TitleBar from "@/components/shared/TitleBar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "WorkHub",
  description: "Your one-stop job search platform"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased dark`}
      >
        <TitleBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

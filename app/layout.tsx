// app/layout.tsx
"use client";

import { Inter, Roboto_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import { metadata } from "./metadata"; // นำเข้า metadata จากไฟล์ที่แยกออกมา

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

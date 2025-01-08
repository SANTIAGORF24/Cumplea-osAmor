"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>FELIZ CUMPELAÑOS AMOR</title>
        <meta
          name="description"
          content="Cumpleaños de mi amor, te amo mucho"
        />
      </head>
      <body
        className={`scroll-smooth bg-gradient-to-b from-blue-100 to-pink-100 ${inter.className}`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}

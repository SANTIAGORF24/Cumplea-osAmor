"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MINUTOS PARA DEDICAR</title>
        <meta
          name="description"
          content="Sitio web de Sibartech, una empresa especializada en desarrollo web profesional. Ofrecemos soluciones innovadoras y personalizadas para tus necesidades en línea."
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

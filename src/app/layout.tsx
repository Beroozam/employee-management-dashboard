import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {StoreProvider} from "@/store/storeProvider";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import DialogProvider from "@/components/global/dialogProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employees Dashboard",
  description: "Employees management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
        <html lang="en">
          <head>
            <title>Employees Dashboard</title>
            <ThemeModeScript />
          </head>
          <body className={`${inter.className} !p-0`}>
            <DialogProvider />
            {children}
          </body>
        </html>
    </StoreProvider>
  );
}

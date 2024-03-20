"use client";

import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import { primary_font } from "@/app/ui/fonts";
import Footer from "@/components/Footer";

import clsx from 'clsx';
import { useAtom } from "jotai";

import { themeAtom } from '@/app/stores/atoms';
import "./globals.css";

/*export const metadata: Metadata = {
  title: "Text with Next",
  description: "The story you continue is in your hands. Whatever you'll do, you can text - with Next!",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme] = useAtom(themeAtom);

  const themeClasses = clsx({
    'dark-orange-blue': theme === 'dark',
    'dark': theme === 'dark',
    'light-orange-blue': theme === 'light',
    'light': theme === 'light',
  });
  return (
    <html lang="en" className={themeClasses}>
      <body className={primary_font.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

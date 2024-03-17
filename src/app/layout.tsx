import type { Metadata } from "next";
import "./globals.css";
import { primary_font } from "@/app/ui/fonts";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "Text with Next",
  description: "The story you continue is in your hands. Whatever you'll do, you can text - with Next!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark-orange-blue dark">
      <body className={primary_font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

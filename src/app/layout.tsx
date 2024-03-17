import type { Metadata } from "next";
import "./globals.css";
import { primary_font } from "@/app/ui/fonts";

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
    <html lang="en">
      <body className={primary_font.className}>{children}</body>
    </html>
  );
}

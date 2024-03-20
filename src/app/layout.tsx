import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import { primary_font } from "@/app/ui/fonts";
import Footer from "@/components/Footer";

import "./globals.css";

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
      <body className={`${primary_font.className} antialiased`}>
        <Providers attribute="class" defaultTheme="dark">
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

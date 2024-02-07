import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const arimo = Arimo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Covid-19",
  description: "Covid-19 App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      </head>
      <body className={arimo.className}>
        <div className="flex h-screen overflow-hidden">
          <nav className="fixed w-full h-[10vh] z-35 m-[2vh]">
            <Navbar />
          </nav>
          <div className="flex flex-1 flex-col pt-[12vh]">
            <main className="flex-1 overflow-y-auto border-l">
              {children}
            </main>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}

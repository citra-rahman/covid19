import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"] });

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
      <body className={roboto.className}>
        <div className="flex h-screen overflow-hidden">
          <nav className="fixed w-full h-16 z-30 px-[2vw] py[2vw] bg-[#f4f7f7]">
            <Navbar />
          </nav>
          <div className="flex flex-1 flex-col pt-16">
            <main className="flex-1 overflow-y-auto border-l bg-[#f4f7f7]">
              {children}
            </main>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}

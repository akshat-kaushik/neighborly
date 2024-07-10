import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../components/navbar"
import Navbar from "../components/navbar";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neighborly",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

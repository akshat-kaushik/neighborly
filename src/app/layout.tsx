import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../components/navbar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProtectedRoute from "../context/ProtectedRoute";
import RecoilContextProvider from "@/store/recoilContextProvider";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoodDeeD",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProtectedRoute>
        <body className={mont.className}>
          <RecoilContextProvider>
            <Navbar />
            {children}
            <Footer />
          </RecoilContextProvider>
        </body>
      </ProtectedRoute>
    </html>
  );
}

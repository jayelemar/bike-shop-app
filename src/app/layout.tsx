import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartProvider from "@/components/cart/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
});

export const metadata: Metadata = {
  title: "Bike Me",
  description: "Bike Shop for Professionals and Commuters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <CartProvider>
          <Header/>
            {children}
            <Toaster />
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}

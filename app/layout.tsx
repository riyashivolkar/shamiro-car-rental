import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamiro Rent A Car | Premium Self Drive Cars in Goa",

  description:
    "Experience luxury self-drive car rentals in Goa. Premium fleet, competitive pricing, and exceptional service for your perfect Goa vacation.",

  generator: "v0.app",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased text-foreground">
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

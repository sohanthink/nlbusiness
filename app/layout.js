import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/common/Footer";
import Navbar2 from "@/components/Home/Navbar2";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Business Venture Canada - Expert Immigration Business Plans & Visa Services",
  description:
    "Professional business plans for Canadian, US, and global immigration programs. Expert guidance for AINP, E-2, EB-5, and other visa applications. Transform your immigration dreams into reality with our proven strategies.",
  keywords:
    "immigration business plans, Canada immigration, US visa business plans, AINP, E-2 visa, EB-5 visa, business immigration, visa applications, immigration consultants",
  authors: [{ name: "Business Venture Canada" }],
  creator: "Business Venture Canada",
  publisher: "Business Venture Canada",
  robots: "index, follow",
  openGraph: {
    title: "Business Venture Canada - Expert Immigration Business Plans",
    description:
      "Professional business plans for Canadian, US, and global immigration programs. Expert guidance for visa applications and immigration success.",
    url: "https://businessventurecanada.com",
    siteName: "Business Venture Canada",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Business Venture Canada - Immigration Business Plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Venture Canada - Expert Immigration Business Plans",
    description:
      "Professional business plans for Canadian, US, and global immigration programs.",
    images: ["/logo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7651a6",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {/* <Navbar2 /> */}
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

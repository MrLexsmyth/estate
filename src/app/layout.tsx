import type { Metadata } from "next";
import Script from 'next/script';
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./globals.css";


const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright",
  description: "Find your next home with Bright",
  metadataBase: new URL("http://localhost:3000"), // Change to actual domain in prod
  openGraph: {
    title: "Bright",
    description: "Find your next home with Bright",
    url: "http://localhost:3000",
    siteName: "Bright",
    images: [
      {
        url: "/metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Bright - Find your next home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Bright",
    description: "Find your next home with Bright",
    images: ["/metadata.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.className}>
      <head>
            <Script src="https://cdn.lordicon.com/lordicon.js" strategy="beforeInteractive" />
      </head>
      <body>    
  <Navbar />
  <main style={{ paddingTop: '66px' }}>
    {children}
  </main>
  <Footer />
</body>
    </html>
  );
}




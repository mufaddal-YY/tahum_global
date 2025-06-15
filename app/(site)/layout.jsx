import TopBar from "@/components/Nav/TopBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import Header from "@/components/Nav/Header";
import Footer from "@/components/Nav/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <TopBar/>
        <Header />
        <main className="mt-26">
          {children}
          <Toaster closeButton position="top-right" richColors />
        </main>
        <Footer />
        {/* <Suspense>
          <ProgressBars />
        </Suspense> */}
      </body>
    </html>
  );
}

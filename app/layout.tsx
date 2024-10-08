import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import siteConfig from "@/config/site";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-16 scroll-smooth">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable)}>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > <NavBar/>
            {children}
            <Footer/>
            </ThemeProvider>
           </body>
    </html>
  );
}

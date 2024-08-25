import Script from 'next/script';
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { cn } from '@/lib/utils';
import "./globals.css";

// Font configurations
const inter = Inter({ subsets: ["latin"] });
const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Aadarsh Nagrath",
  description: "Portfolio",
};

// Root Layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script 
          type="module"
          src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </head>
      <body 
        className={cn(
          'antialiased',
          inter.className,
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

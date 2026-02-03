import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { cn } from '@/lib/utils';
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Font configurations
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Metadata configuration
export const metadata: Metadata = {
  title: "Aadarsh Nagrath - Developer & Engineer",
  description: "Software developer specializing in full-stack development. Building modern web applications with React, Next.js, and more.",
  keywords: ["developer", "software engineer", "full-stack", "react", "nextjs"],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
};

// Root Layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          'antialiased min-h-screen',
          inter.variable,
          jetbrainsMono.variable,
          'font-sans'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

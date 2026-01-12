import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { ScrollNav } from "@/components/ui/scroll-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina Studio | Premium Software House",
  description: "Next-generation software solutions with elite UI/UX design and immersive 3D experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-neon-green/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <ScrollNav />
          <footer className="py-12 text-center text-foreground/40 border-t border-glass-border">
            <div className="container mx-auto px-6">
              <p>© 2026 Lumina Studio. Built with passion for excellence.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | Prakhar Yadav`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Prakhar Yadav",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React Developer",
    "Next.js",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "CS Student",
    "India",
    "Galgotia College",
    "Spring AI",
    "REST API",
    "TypeScript",
  ],
  authors: [{ name: "Prakhar Yadav", url: SITE_CONFIG.url }],
  creator: "Prakhar Yadav",
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.title,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Prakhar Yadav — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: "@prakharyadav",
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
      >
        {/* Sticky top navbar */}
        <Navbar />

        {/* Main content */}
        <main className="relative">{children}</main>

        {/* Footer */}
        <Footer />

        {/* shadcn toast notifications */}
        <Toaster />
      </ThemeProvider>
      </body>
      </html>
  );
}
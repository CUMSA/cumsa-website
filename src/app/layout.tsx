import "@/styles/globals.css";

import { type Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "CUMSA - Cambridge University Singapore and Malaysia Society",
  description: "Official website of the Cambridge University Singapore and Malaysia Society (CUMSA)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = localFont({
  src: [
    {
      path: "../fonts/GeistVF.woff",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../fonts/GeistMonoVF.woff",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

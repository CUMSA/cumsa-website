import "@/styles/globals.css";

import { type Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "CUMSA - Cambridge University Singapore and Malaysia Society",
  description:
    "Official website of the Cambridge University Singapore and Malaysia Society (CUMSA)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = localFont({
  src: [
    {
      path: "../fonts/NeueMontreal-Regular.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal-RegularItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/NeueMontreal-MediumItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
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

import "@/styles/globals.css";

import { type Metadata } from "next";
// import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "CUMSA - Cambridge University Singapore and Malaysia Society",
  description: "Official website of the Cambridge University Singapore and Malaysia Society (CUMSA)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// const geistSans = localFont({
//   src: '../fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: '../fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {/* Blurred background */}
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden blur-[90px]" aria-hidden="true">
            <span className="mesh-drift absolute -left-[12vw] -top-[18vw] h-[57vw] w-[57vw] rounded-full bg-blue-300 dark:bg-blue-900" />
            <span className="mesh-drift absolute -right-[12vw] -top-[18vw] h-[57vw] w-[57vw] rounded-full bg-rose-300 dark:bg-rose-950" />
            <span className="mesh-drift absolute left-[25vw] top-[40vh] h-[50vw] w-[50vw] rounded-full bg-purple-300 dark:bg-purple-950" />
          </div>

          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

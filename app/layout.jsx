import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "sonner"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Modern Ecommerce",
  description: "A modern ecommerce store built with Next.js and Framer Motion",
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <CartProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>)
  );
}


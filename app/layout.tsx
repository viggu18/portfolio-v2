import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/provider/theme-provider";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-white dark:bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-theme-mode"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

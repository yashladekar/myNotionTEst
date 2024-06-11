import type { Metadata } from "next";
import { Inter } from "next/font/google";
import siteConfig from "@/config/siteConfig"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

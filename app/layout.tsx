import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "My portfolio",
  description:
    "Tolipov Karimberdi portfolio, Dadondev, dadondev, Dadondev portfolio, dadondev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " h-full"}>{children}</body>
    </html>
  );
}

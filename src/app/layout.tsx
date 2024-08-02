import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharukhi",
  description:
    "Hi, I’m an indie developer based in Bangladesh, currently focused on...",
  openGraph: {
    title: "Sharukhi",
    description:
      "Hi, I’m an indie developer based in Bangladesh, currently focused on...",
    url: "https://sharukhi.xyz",
    siteName: "sharukhi.xyz",
    images: [
      {
        url: "/open-graph.png",
        alt: "Open graph",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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

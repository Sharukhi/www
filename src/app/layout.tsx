import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400"],
});

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
        url: "https://sharukhi.xyz/open-graph.png",
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
      <body className={crimsonText.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

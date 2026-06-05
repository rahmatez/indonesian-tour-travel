import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} | Private Tours Across Indonesia`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "Indonesia tours",
    "Java tours",
    "Bali tours",
    "Komodo tours",
    "private tour Indonesia",
    "Yogyakarta tour operator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

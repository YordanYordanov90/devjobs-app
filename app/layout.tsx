import type { Metadata } from "next";
import { shadesOfPurple } from "@clerk/themes";

import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
      }}
    >
      <html lang="en">
        <body className={popins.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

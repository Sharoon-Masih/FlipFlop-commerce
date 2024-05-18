import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Providers from "@/components/providers";
import {ClerkProvider} from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlipFlop",
  description: "Created by Sharoon Masih",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={
      {
      layout: {
        helpPageUrl: "https://clerk.dev/support",
        logoImageUrl: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJnWlNNUkxkNHJlNE5ETU1wQTZSUWpTUEVJVyJ9",
        logoPlacement: "inside",
        privacyPageUrl: "https://clerk.dev/privacy",
        showOptionalFields: true,
        socialButtonsPlacement: "top",
        socialButtonsVariant: "iconButton",
        termsPageUrl: "https://clerk.dev/terms",
          },
          variables: {
            
            colorDanger:"red",
            colorSuccess:"green",
            
            // colorText: "white"
          },
          elements: {
            formButtonPrimary:"bg-primary border-3 border-gray-100 hover:bg-gray-100 hover:text-primary text-sm normal-case",

          }
      }
    }
    >
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Providers>
        <Navbar/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
    </ClerkProvider>
  );
}

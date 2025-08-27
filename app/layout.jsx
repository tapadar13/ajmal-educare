import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ajmal Educare India Pvt Ltd - Excellence in Education",
  description: "Premier coaching institute for NEET, JEE, UPSC, and APSC preparation. Ajmal Super 40 and Ajmal IAS Academy - Empowering students with quality education and proven methodologies.",
  keywords: "NEET coaching, JEE preparation, UPSC coaching, APSC coaching, Ajmal Super 40, Ajmal IAS Academy, competitive exam preparation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

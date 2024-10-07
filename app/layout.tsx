import { Nunito_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${nunitoSans.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

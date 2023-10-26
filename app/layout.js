import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_TC({ subsets: ["latin"] });

export const metadata = {
  title: "UBikeTaipei",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

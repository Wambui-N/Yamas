import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Yamas | Sip Savor Celebrate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} relative`}>
        <Navbar />
        {children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Squidward | Meme",
  description: "Launched stealth with no presale or private sale, no influencers, contract renounced, LP locked/burnt on the orders of Mr. Squidward. $SQUID is designed and destined to be in the top 7 memecoins of all time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        </body>
    </html>
  );
}

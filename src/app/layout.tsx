
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import toast, { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        {children}
        <Script type="text/javascript" src="mosclick.js" />
        {/* <button onClick={handleButtonClick}>Make me a toast</button> */}
      </body>
    </html >
  )
}

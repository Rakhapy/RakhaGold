import localFont from "@next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Link from "next/link";


const sfProBold = localFont({
  src: [
    {
      path: "./fonts/SFProBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-bold",
})


export const metadata = {
  title: "i hate nextjs fr",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sfProBold.className}`}
      >
        <Navbar style={"flex gap-4"}>
          <Link href={"/"} >Home</Link>
          <Link href={"/about"} >About You</Link>
          <Link href={"/setting/app"} >Settings</Link>
        </Navbar>
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/utils/Navbar";
import CozyStayFooter from "@/component/utils/CozyStayFooter";




export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body
      >
        <Navbar />
        {children}
        <CozyStayFooter />
      </body>
    </html>
  );
}

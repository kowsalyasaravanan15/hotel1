'use client';

import { useEffect } from 'react'; // ✅ You forgot this
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/component/utils/Navbar';
import CozyStayFooter from '@/component/utils/CozyStayFooter';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
      easing: 'ease-in-out', // animation timing
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <CozyStayFooter />
      </body>
    </html>
  );
}

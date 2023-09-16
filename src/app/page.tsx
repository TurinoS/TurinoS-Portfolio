'use client'

import About from "@/components/About"
import Banner from "@/components/Banner"
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <About />
      <Portfolio />
      <History />
    </main>
  )
}

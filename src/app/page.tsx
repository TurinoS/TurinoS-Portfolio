'use client'

import About from "@/components/About"
import Banner from "@/components/Banner"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <About />
    </main>
  )
}

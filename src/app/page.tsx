'use client'

import About from "@/components/About"
import Banner from "@/components/Banner"
import Header from "@/components/Header";
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import { projects } from "@/lists/projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <About />
      <Portfolio projects={projects} />
      <History />
    </main>
    </>
  )
}

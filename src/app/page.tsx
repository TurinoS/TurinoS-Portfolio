'use client'

import About from "@/components/About"
import Banner from "@/components/Banner"
import Header from "@/components/Header";
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import { projects } from "@/lists/projects";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Header />
    <main className={`flex min-h-screen flex-col items-center justify-between ${theme === "dark" ? "border-orange-500 bg-[var(--bg-dark)] text-orange-500" : "border-blue-900 bg-[var(--bg-light)] text-blue-900"}`}>
      <Banner />
      <About />
      <Portfolio projects={projects} />
      <History />
    </main>
    </>
  )
}

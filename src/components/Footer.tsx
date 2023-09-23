'use client'

import { useTheme } from "next-themes";
import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({ subsets: ["latin"], weight: "600" });

export default function Footer() {
    const { theme } = useTheme();

    return(
        <footer className={`flex justify-center py-2 md:py-6 ${theme === "dark" ? "bg-[var(--bg-dark-secondary)] text-orange-500" : "bg-[var(--bg-light-secondary)] text-blue-900"} font-bold ${chakra.className}`}>
            <p className={`font-bold`}>2023 — Desenvolvido por <span className={`${
              theme === "dark"
                ? "dark-text-gradient"
                : "text-gradient"
            }`}>Paulo Turino</span></p>
        </footer>
    )
}
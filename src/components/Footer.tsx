'use client'

import { useTheme } from "next-themes";
import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({ subsets: ["latin"], weight: "600" });

export default function Footer() {
    const { theme } = useTheme();

    return(
        <footer className={`flex justify-center py-1 md:py-5 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] font-bold ${chakra.className}`}>
            <p className={`font-bold`}>2023 — Desenvolvido por <span className={`${
              theme === "dark"
                ? "dark-text-gradient"
                : "text-gradient"
            }`}>Paulo Turino</span></p>
        </footer>
    )
}
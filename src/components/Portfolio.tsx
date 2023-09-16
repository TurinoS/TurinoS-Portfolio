import { useTheme } from "next-themes";
import Image from "next/image";
import pokedexImg from "../../public/pokedex-thumb.jpg";
import Link from "next/link";

export default function Portfolio() {
  const { theme } = useTheme();

  return (
    <section id="portfolio"
      className={`flex flex-col gap-10 w-full pb-16 px-24 `}
    >
      <h2
        className={`text-4xl text-center font-bold ${
          theme === "dark" ? "dark-text-gradient" : "text-gradient"
        }`}
      >
        Meus projetos
      </h2>
      <div className="flex">
        <div className="w-full group overflow-hidden">
            <Image src={pokedexImg} alt="Thumbnail Pokédex" width={500} className="rounded-xl border-4" />
        </div>
        <div className="flex flex-col py-4">
            <h3 className={`text-2xl text-center font-bold ${
                theme === "dark" ? "dark-text-gradient" : "text-gradient"
            }`}>
                Pokédex
            </h3>
            <p className="text-lg h-full dark:text-orange-200 text-blue-900 pt-4">Aplicação construída utilizando tal tal e tal tecnologias desenvolvida com o intuito de aprender tal coisa consumindo a Api pokeAPI</p>
            <div className={`flex gap-10 self-center justify-self-end`}>
                <Link href="#" className={`button-gradient text-xl font-bold py-1 px-2 mr-10 border border-transparent transition-color ${theme === 'dark' && "button-gradient-dark"}`}>Aplicação</Link>
                <Link href="#" className={`button-gradient text-xl font-bold py-1 px-2 mr-10 border border-transparent transition-color ${theme === 'dark' && "button-gradient-dark"}`}>Repositório</Link>
            </div>
        </div>
      </div>
    </section>
  );
}

import { useTheme } from "next-themes";
import Image from "next/image";
import pokedexImg from "../../public/pokedex-thumb.jpg";

export default function Portfolio() {
  const { theme } = useTheme();

  return (
    <section id="portfolio"
      className={`flex flex-col gap-10 w-full py-8 px-24 ${
        theme === "dark"
          ? "bg-[var(--bg-dark-secondary)]"
          : "bg-[var(--bg-light-secondary)]"
      }`}
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
        <div className="flex flex-col">
            <h3 className={`text-2xl text-center font-bold ${
          theme === "dark" ? "dark-text-gradient" : "text-gradient"
        }`}>
            Pokédex
        </h3>
            <p>Aplicação construída utilizando tal tal e tal tecnologias desenvolvida com o intuito de aprender tal coisa consumindo a Api pokeAPI</p>
        </div>
      </div>
    </section>
  );
}

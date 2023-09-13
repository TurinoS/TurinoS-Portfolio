import Image from "next/image";
import profile from "../../public/foto-perfil.png"
import { useTheme } from "next-themes";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

export default function Banner() {
    const { theme } = useTheme()
    return(
        <section className="flex justify-between w-full">
            <div className={`flex flex-col justify-center items-center m-auto ${theme === 'dark'? "dark-text-gradient" : "text-gradient"}`}>
                <h1 className="text-6xl font-bold">Paulo Turino Silva</h1>
                <h2 className="text-4xl font-bold">Desenvolvedor Frontend</h2>
                <div className="flex gap-4 mt-10 items-center">
                    <button className={`button-gradient text-xl font-bold py-2 px-4 mr-10 border border-transparent transition-color ${theme === 'dark' && "button-gradient-dark"}`}>Currículo</button>
                    <a href="https://www.linkedin.com/in/paulo-turino/" target="_blank" className={`text-6xl duration-300 hover:-translate-y-2 hover:scale-110`}><AiFillLinkedin /></a>
                    <a href="https://github.com/TurinoS" target="_blank" className={`text-6xl duration-300 hover:-translate-y-2 hover:scale-110`}><AiFillGithub /></a>
                </div>
            </div>
            <Image src={profile} alt="Foto do Paulo Turino" width={300} className="m-auto" />
        </section>
    )
}
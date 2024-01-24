import Image from "next/image";
import profile from "../../public/foto-perfil.png";
import { useTheme } from "next-themes";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Banner() {
  const { theme } = useTheme();
  return (
    <section
      className="flex flex-col-reverse md:flex-row justify-center w-full pt-4 pb-8 md:pb-0 md:pt-10 md:gap-40"
      id="banner"
    >
      <div
        className={`flex flex-col justify-center text-center items-center mt-6 md:mt-0 ${
          theme === "dark" ? "dark-text-gradient" : "text-gradient"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold">Paulo Turino Silva</h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          Desenvolvedor Frontend
        </h2>
        <div
          className="flex gap-2 md:gap-4 mt-10 items-center"
          data-aos="flip-down"
          data-aos-duration="500"
        >
          <a
            href="https://drive.google.com/file/d/1pQcR2lEgtXiK5Ty774FCN-7cF0iTuJ-8/view?usp=drive_link"
            target="_blank"
            className={`button-gradient text-xl font-bold py-2 px-6 md:mr-10 border border-transparent transition-color ${
              theme === "dark" && "button-gradient-dark"
            }`}
          >
            Currículo
          </a>
          <a
            href="https://www.linkedin.com/in/paulo-turino/"
            target="_blank"
            className="text-6xl duration-300 hover:-translate-y-2 hover:scale-110"
          >
            <AiFillLinkedin />
          </a>
          <a
            id="about"
            href="https://github.com/TurinoS"
            target="_blank"
            className="text-6xl duration-300 hover:-translate-y-2 hover:scale-110"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <Image
        src={profile}
        alt="Foto do Paulo Turino"
        width={350}
        className="m-auto md:m-0"
        priority
      />
    </section>
  );
}

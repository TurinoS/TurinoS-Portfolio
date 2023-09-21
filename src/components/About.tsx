import { techs } from "@/lists/techs";
import { useTheme } from "next-themes";
import Tilt from "react-parallax-tilt";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col md:my-16">
      <div
        className={`flex flex-col-reverse md:flex-row px-4 py-8 md:px-20 md:py-12 ${
          theme === "dark"
            ? "bg-[var(--bg-dark-secondary)]"
            : "bg-[var(--bg-light-secondary)]"
        }`}
      >
        <div
          className={`flex flex-col gap-2 md:w-1/2 border-t pt-4 md:border-t-[var(--bg-light-secondary)] dark:md:border-t-[var(--bg-dark-secondary)] md:pt-0 md:border-r ${
            theme === "dark" ? "border-orange-500" : "border-blue-900"
          }`}
          data-aos="zoom-in-right"
          data-aos-duration="1300"
        >
          <h2
            className={`text-4xl text-center font-bold ${
              theme === "dark" ? "dark-text-gradient" : "text-gradient"
            }`}
          >
            Habilidades
          </h2>
          <div className="flex gap-4 flex-wrap justify-center my-auto">
            {techs.map((tech, index) => (
              <Tilt tiltReverse={true} scale={1.05} key={index}>
                <div className="group duration-500 hover:scale-105 hover:shadow-xl rounded-xl flex flex-col hover:bg-[var(--bg-light)] dark:hover:bg-[var(--bg-dark)] hover:-translate-y-2 justify-center text-center items-center w-20 h-24 md:w-24 md:h-28 overflow-hidden">
                  <span
                    className={`${
                      tech.icon
                    } group-hover:translate-y-[-10%] group-hover:scale-110 duration-500 text-5xl ${
                      theme === "dark" ? "dark-text-gradient" : "text-gradient"
                    }`}
                  ></span>
                  <p className="translate-y-[200%] duration-500 group-hover:translate-y-1 font-semibold text-sm">
                    {tech.name}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col justify-between gap-2 md:w-1/2 md:border-l md:pl-10 border-b pb-4 md:border-b-[var(--bg-light-secondary)] dark:md:border-b-[var(--bg-dark-secondary)] md:pb-0 ${
            theme === "dark" ? "border-orange-500" : "border-blue-900"
          }`}
          data-aos="zoom-in-left"
          data-aos-duration="1300"
        >
          <h2
            className={`text-4xl text-center font-bold pb-4 ${
              theme === "dark" ? "dark-text-gradient" : "text-gradient"
            }`}
          >
            Quem sou eu
          </h2>
          <p className="text-xl dark:text-orange-200">
            Tenho um compromisso sólido com a resolução de problemas e uma
            habilidade natural para comunicação eficaz. Minha flexibilidade e
            desejo constante de aprendizado me tornam um colaborador valioso em
            equipes dinâmicas. Se você está interessado em explorar
            oportunidades de colaboração, estou à disposição para uma conversa.
          </p>
          <div className="flex gap-10 self-center text-4xl md:mt-4" id="portfolio">
            <a
              target="_blank"
              href="mailto:paulo.turino01@gmail.com"
              className="p-2 duration-500 hover:-translate-y-2 hover:scale-110 border-2 border-[var(--bg-light-secondary)] dark:border-[var(--bg-dark-secondary)] hover:border-blue-900 dark:hover:border-orange-500 rounded-xl hover:bg-[var(--bg-light)] dark:hover:bg-[var(--bg-dark)] "
            >
              <AiOutlineMail />
            </a>
            <a
              target="_blank"
              href="https://web.whatsapp.com/send?phone=18996667708"
              className="p-2 duration-500 hover:-translate-y-2 hover:scale-110 border-2 border-[var(--bg-light-secondary)] dark:border-[var(--bg-dark-secondary)] hover:border-blue-900 dark:hover:border-orange-500 rounded-xl hover:bg-[var(--bg-light)] dark:hover:bg-[var(--bg-dark)] "
            >
              <BsWhatsapp />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/paulo_turino/"
              className="p-2 duration-500 hover:-translate-y-2 hover:scale-110 border-2 border-[var(--bg-light-secondary)] dark:border-[var(--bg-dark-secondary)] hover:border-blue-900 dark:hover:border-orange-500 rounded-xl hover:bg-[var(--bg-light)] dark:hover:bg-[var(--bg-dark)] "
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

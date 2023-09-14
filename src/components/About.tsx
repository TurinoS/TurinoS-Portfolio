import { techs } from "@/lists/techs";
import { aboutText } from "@/lists/aboutText";
import { useTheme } from "next-themes";
import Tilt from "react-parallax-tilt";

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col w-full my-16" id="about">
      <div className={`flex flex-col items-center gap-4 px-24 py-6 ${
            theme === "dark" ? "bg-[var(--bg-dark-secondary)]" : "bg-[var(--bg-light-secondary)]"
          }`}
      >
        <h2
          className={`text-4xl text-center font-bold ${
            theme === "dark" ? "dark-text-gradient" : "text-gradient"
          }`}
        >
          Skills
        </h2>
          <div className="flex gap-4 flex-wrap" 
            data-aos="zoom-in-right"
            data-aos-duration="1300"
          >
            {techs.map((tech, index) => (
              <Tilt tiltReverse={true} scale={1.05} key={index}>
                <div className="group duration-500 hover:scale-105 hover:shadow-xl rounded-xl flex flex-col hover:bg-[var(--bg-light)] dark:hover:bg-[var(--bg-dark)] hover:-translate-y-2 justify-center text-center items-center w-24 h-28 overflow-hidden">
                  <span
                    className={`${
                      tech.icon
                    } group-hover:translate-y-[-10%] group-hover:scale-110 duration-500 text-5xl ${theme === "dark" ? "dark-text-gradient" : "text-gradient"}`}
                  ></span>
                  <p
                    className="translate-y-[200%] duration-500 group-hover:translate-y-1 font-semibold text-sm"
                  >
                    {tech.name}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
      </div>
      <div
        className={`flex flex-col pt-16 gap-4`}>
        <h2
          className={`text-4xl text-center self-center font-bold pb-4 ${
            theme === "dark" ? "dark-text-gradient" : "text-gradient"
          }`}
        >
          Sobre mim
        </h2>
        <div className="flex flex-col gap-4 px-16"
          >
        {aboutText.map((p) => (
          <p key={p.id} className={`text-xl  ${
            theme === "dark" ? "text-orange-500" : "text-blue-900"
          }`}
          >
            {p.text}
            </p>
        ))}
        </div>
      </div>
    </section>
  ); 
}

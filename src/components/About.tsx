import { techs } from "@/lists/techs";
import { useTheme } from "next-themes";
import Tilt from "react-parallax-tilt";

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="flex justify-between w-full my-16" id="about">
      <div
        className={`w-1/2 ${theme === "dark" ? "dark-text-gradient" : "text-gradient"}`}
      >
        <div
          className="flex gap-4 flex-wrap"
          data-aos="fade-right"
          data-aos-duration="1300"
        >
          {techs.map((tech, index) => (
            <Tilt tiltReverse={true} scale={1.05} key={index}>
              <div className="group duration-500 hover:scale-105 rounded-xl flex flex-col hover:bg-[var(--bg-dark-secondary)] hover:-translate-y-2 justify-center text-center items-center w-24 h-28 overflow-hidden">
                <span className={`${tech.icon} group-hover:translate-y-[-10%] group-hover:scale-110 duration-500 text-5xl ${theme === "dark" ? "dark-text-gradient" : "text-gradient"}`}></span>
                <p className={`translate-y-[200%] duration-500 group-hover:translate-y-1 font-semibold text-sm ${theme === "dark" ? "dark-text-gradient" : "text-gradient"}`}>{tech.name}</p>
              </div>
            </Tilt>
          ))}
        </div>

        <div
          className={`flex flex-col justify-center items-center m-auto ${
            theme === "dark" ? "dark-text-gradient" : "text-gradient"
          }`}
        ></div>
      </div>
      <div className="flex flex-col w-1/2"
        data-aos="zoom-in-left"
        data-aos-duration="1300"
      >
        <h2 className={`text-4xl text-center self-center font-bold ${theme === "dark" ? "dark-text-gradient" : "text-gradient"}`}>Sobre mim</h2>
      </div>
      
    </section>
  );
}

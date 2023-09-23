import { useTheme } from "next-themes";
import Image from "next/image";
import { ProjectsTypes } from "@/lists/projects";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
register();

interface PortfolioProps {
  projects: ProjectsTypes[];
}

export default function Portfolio({ projects }: PortfolioProps) {
  const { theme } = useTheme();

  return (
    <section
      id="portfolio"
      className={`flex flex-col gap-10 w-full pb-10 md:pb-16 px-2 pt-10 md:pt-0 md:px-24`}
    >
      <h2
        className={`text-4xl text-center font-bold ${
          theme === "dark" ? "dark-text-gradient" : "text-gradient"
        }`}
      >
        Meus projetos
      </h2>

      {projects?.filter((project) => [2, 3, 8].includes(project.id)).map((project) => (
        <div
          className={`flex flex-col md:flex-row md:even:flex-row-reverse gap-2 pb-12 border-b-2 border-dashed ${theme === "dark" ? "border-orange-500" : "border-blue-900"}`}
          key={project.id}
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <h3
              className={`md:hidden text-2xl text-center font-bold ${
                theme === "dark" ? "dark-text-gradient" : "text-gradient"
              }`}
            >
              {project.name}
            </h3>
          <div className="w-full cursor-grab rounded-xl mt-2 self-center relative">
            <div className={`group overflow-hidden rounded-xl ${theme === "dark" ? "border-orange-500" : "border-blue-900"}`}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  enabled: true,
                }}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                className={`relative overflow-hidden w-[304px] md:w-[500px] border-4 rounded-2xl shadow-2xl ${theme === "dark" ? "border-orange-500" : "border-blue-900"}`}
              >
                {project.imgs.map((img: string, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className={`rounded-xl duration-2000 border ${theme === "dark" ? "border-orange-500" : "border-blue-900"}`}
                      src={img}
                      alt="Thumbnail Pokédex"
                      width={500}
                      height={50}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="flex flex-col pb-2 mt-6">
            <h3
              className={`hidden md:block text-2xl text-center font-bold ${
                theme === "dark" ? "dark-text-gradient" : "text-gradient"
              }`}
            >
              {project.name}
            </h3>
            <p className={`text-lg h-full px-2 pb-2 md:p-4 ${theme === "dark" && "text-orange-200"}`}>
              {project.text}
            </p>
            <div className={`flex gap-10 self-center md:justify-self-end mt-2`}>
              <Link
                target="_blank"
                href={project.app}
                className={`button-gradient text-xl font-bold py-1 px-2 md:mr-10 border border-transparent transition-color ${
                  theme === "dark" && "button-gradient-dark"
                }`}
              >
                Aplicação
              </Link>
              <Link
                target="_blank"
                href={project.repo}
                className={`button-gradient text-xl font-bold py-1 px-2 md:mr-10 border border-transparent transition-color ${
                  theme === "dark" && "button-gradient-dark"
                }`}
              >
                Repositório
              </Link>
            </div>
          </div>
        </div>
      ))}
      <Link
        href="/portfolio"
        className={`button-gradient text-xl font-bold py-2 px-10 md:mt-4 border border-transparent transition-color self-center ${
          theme === "dark" && "button-gradient-dark"
        }`}
        data-aos="flip-up"
        data-aos-duration="800"
      >
        Ver todos os projetos
      </Link>
    </section>
  );
}

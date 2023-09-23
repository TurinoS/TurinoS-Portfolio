"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react"
import { projects } from "@/lists/projects";
import { SwiperSlide, Swiper } from "swiper/react";
import { register } from "swiper/element";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "next-themes";
import Header from "@/components/Header";
register();

export default function Portfolio() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Header portfolio={true} />
      <main className={`flex flex-col gap-10 w-full pb-10 md:pb-16 px-2 pt-10 md:px-16 ${theme === "dark" ? "bg-[var(--bg-dark)] text-orange-500" : "bg-[var(--bg-light)] text-blue-900"}`}>
      <h2
        className={`text-3xl md:text-4xl text-center font-bold ${
          theme === "dark" ? "dark-text-gradient" : "text-gradient"
        }`}
      >
        Portfólio completo
      </h2>

      {projects?.map((project) => (
        <div
        className={`flex flex-col md:flex-row md:even:flex-row-reverse gap-2 pb-12 border-b-2 border-dashed ${theme === "dark" ? "border-orange-500" : "border-blue-900"}`}
          key={project.id}
          data-aos="fade-up"
          data-aos-duration="500"
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
      </main>
    </>
  );
}

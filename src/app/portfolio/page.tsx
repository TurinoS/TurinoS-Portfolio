"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lists/projects";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "next-themes";
import Header from "@/components/Header";
AOS.init();

export default function Portfolio() {
  const { theme } = useTheme();

  return (
    <>
    <Header portfolio={true} />
      <main className="flex flex flex-col gap-10 w-full pb-16 px-24">
        <h2
          className={`text-5xl my-10 text-center font-bold ${
            theme === "dark" ? "dark-text-gradient" : "text-gradient"
          }`}
        >
          Portfólio completo
        </h2>
        {projects?.map((project) => (
          <div
            className="flex even:flex-row-reverse gap-2 pb-12 border-b-2 border-dashed border-blue-900 dark:border-orange-500"
            key={project.id}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-full cursor-grab rounded-xl mt-2 relative">
              <div className="group overflow-hidden rounded-xl">
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
                  className="relative overflow-hidden w-[500px] border-4 rounded-2xl border-blue-900 dark:border-orange-500 shadow-2xl"
                >
                  {project.imgs.map((img: string, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        className="rounded-xl duration-700 border border-blue-900 dark:border-orange-500"
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
                className={`text-2xl text-center font-bold ${
                  theme === "dark" ? "dark-text-gradient" : "text-gradient"
                }`}
              >
                {project.name}
              </h3>
              <p className="text-lg h-full dark:text-orange-200 text-blue-900 py-4 px-8">
                {project.text}
              </p>
              <div className={`flex gap-10 self-center justify-self-end mt-2`}>
                <Link
                  target="_blank"
                  href={project.app}
                  className={`button-gradient text-xl font-bold py-1 px-2 mr-10 border border-transparent transition-color ${
                    theme === "dark" && "button-gradient-dark"
                  }`}
                >
                  Aplicação
                </Link>
                <Link
                  target="_blank"
                  href={project.repo}
                  className={`button-gradient text-xl font-bold py-1 px-2 mr-10 border border-transparent transition-color ${
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
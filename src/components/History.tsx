import { useTheme } from "next-themes"
import { aboutText } from "@/lists/aboutText";

export default function History() {
    const { theme } = useTheme()
    return(
        <section id="history" className={`flex flex-col py-10 md:py-16 gap-4 ${
            theme === "dark"
              ? "bg-[var(--bg-dark-secondary)]"
              : "bg-[var(--bg-light-secondary)]"
          }`}
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, .4)" }}>
          <h2
            className={`text-4xl text-center self-center font-bold pb-4 ${
              theme === "dark" ? "dark-text-gradient" : "text-gradient"
            }`}
          >
            Minha história
          </h2>
          <div className="flex flex-col gap-3 md:gap-4 px-2 md:px-16">
            {aboutText.map((p) => (
              <p
                key={p.id}
                className="text-xl dark:text-orange-200 text-blue-900"
              >
                {p.text}
              </p>
            ))}
          </div>
        </section>
    )
}
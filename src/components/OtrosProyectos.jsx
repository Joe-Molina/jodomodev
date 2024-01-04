import { CardOP } from "./CardOtrosProyectos.jsx";

export const OtrosProyectos = () => {
  const proyectos = [
    {
      cardTitle: "NexusWebPage",
      cardParrafos: [
        "Sitio web de mi emprendimiento como desarrollador de software. busca dar a conocer mis servicios y trabajos para futuros clientes.",
      ],
      cardTecnologias: [
        "JavaScript",
        "HTML",
        "CSS",
        "Astro",
        "Tailwind",
        "React",
      ],
    },
  ];

  return (
    <section class="flex flex-col mx-4 mt-32">
      <h2 class="text-4xl lg:text-6xl font-bold text-center lg:text-start text-white">
        Otros Proyectos
      </h2>
      <article className="w-full">
        {proyectos.map((project) => (
          <CardOP
            title={project.cardTitle}
            parrafos={project.cardParrafos}
            tecnologias={project.cardTecnologias}
          />
        ))}
      </article>
    </section>
  );
};

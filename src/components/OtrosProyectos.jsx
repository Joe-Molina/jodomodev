import { CardOP } from "./CardOtrosProyectos.jsx";
import { proyectos } from "../objects/Otrosproyectos.js";

export const OtrosProyectos = () => {
  return (
    <section class="flex flex-col mx-4 mt-32">
      <h2 class="text-4xl lg:text-6xl font-bold text-center lg:text-start text-white">
        Otros Proyectos
      </h2>
      <article className="flex flex-wrap justify-between w-full">
        {proyectos.map((project) => (
          <CardOP
            title={project.cardTitle}
            parrafos={project.cardParrafos}
            tecnologias={project.cardTecnologias}
            link={project.link}
          />
        ))}
      </article>
    </section>
  );
};

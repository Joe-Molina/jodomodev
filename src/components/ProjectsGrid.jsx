import { PropjectCard} from "./ProjectCard.jsx";
import { proyectos } from "../objects/ProyectosDestacados.js";

export const ProyectosGrid = () => {
  return (
    <section class="flex flex-col  my-10">
      <h2 class="text-4xl lg:text-5xl font-bold text-center lg:text-start text-white mb-3 ">
        Mis Proyectos
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-between">
        {proyectos.map((project) => (
          <PropjectCard
            img={project.imgSrc}
            title={project.cardTitle}
            parrafos={project.cardParrafos}
            tecnologias={project.cardTecnologias}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

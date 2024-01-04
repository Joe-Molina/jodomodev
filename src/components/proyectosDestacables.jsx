import { CardPD } from "../components/CardProyectoDestacable";
import { proyectos } from "../objects/ProyectosDestacados.js";

export const ProyectosDestacables = () => {
  return (
    <section class="flex flex-col mx-4 mb-5 mt-20">
      <h2 class="text-4xl lg:text-6xl font-bold text-center lg:text-start text-white">
        Proyectos destacables
      </h2>
      <div className="flex flex-col items-center">
        {proyectos.map((project) => (
          <CardPD
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

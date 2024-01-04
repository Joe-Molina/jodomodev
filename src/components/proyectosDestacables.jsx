import { CardPD } from "../components/CardProyectoDestacable";

export const ProyectosDestacables = () => {
  const proyectos = [
    {
      imgSrc: "projects/nationalPokedex.png",
      cardTitle: "VirtualPokedex",
      cardParrafos: [
        "Esta es una aplicacion que te da informacion sobre todos los pokemons que existen actualmente.",
        "esta diseñada para navegar de forma rapida evitando la carga de otras pestañas con un diseño minimalista muy intuitivo para el usuario.",
      ],
      cardTecnologias: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section class="flex flex-col mx-4 my-5">
      <h2 class="text-4xl lg:text-6xl font-bold text-center lg:text-start text-white">
        Proyectos destacables
      </h2>
      {proyectos.map((project) => (
        <CardPD
          img={project.imgSrc}
          title={project.cardTitle}
          parrafos={project.cardParrafos}
          tecnologias={project.cardTecnologias}
        />
      ))}
    </section>
  );
};

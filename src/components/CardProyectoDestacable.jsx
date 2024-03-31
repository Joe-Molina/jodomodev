export const CardPD = ({ img, title, parrafos, tecnologias, link }) => {
  return (
    <a href={link} target="_blank">
      <article className="container flex flex-col lg:flex-row bg-neutral-900/60 rounded-xl border border-zinc-800 p-2 mt-4 hover:bg-gradient-to-b from-gray-900/5 to-indigo-500/5  duration-200 transition">
        <img className="rounded-lg  max-h-72" src={img} alt="" />
        <div className="text-white flex flex-col justify-between lg:px-10 p-2">
          <h3 className="text-xl font-medium text-start   text-white">
            {title}
          </h3>
          {parrafos.map((parrafo) => (
            <>
              <p className="font-thin text-xs lg:text-sm text-gray-300 my-1">
                {parrafo}
              </p>
            </>
          ))}
          <div className="flex flex-wrap ">
            {tecnologias.map((tecnologia) => (
              <span className="py-1 px-2 bg-zinc-600 bg-opacity-15 text-zinc-200 font-light mr-1 my-1 rounded-lg text-sm">
                {tecnologia}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
};

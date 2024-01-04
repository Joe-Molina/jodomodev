export const CardPD = ({ img, title, parrafos, tecnologias, link }) => {
  return (
    <a href={link} target="_blank">
      <article className="container flex flex-col lg:flex-row bg-black/30 rounded-xl border border-zinc-600 p-4 mt-4 hover:bg-gradient-to-b from-gray-900/5 to-indigo-500/5  duration-200 transition">
        <div className="text-white flex flex-col justify-between lg:px-10">
          <h3 className="text-3xl font-bold text-center my-4   text-white">
            {title}
          </h3>
          {parrafos.map((parrafo) => (
            <>
              <p className="font-thin text-xs lg:text-sm text-gray-300">
                {parrafo}
              </p>
              <br />
            </>
          ))}
          <div className="flex flex-wrap mb-6">
            {tecnologias.map((tecnologia) => (
              <span className="py-1 px-3 bg-indigo-600 bg-opacity-15 text-indigo-500 font-bold m-1 rounded-lg">
                {tecnologia}
              </span>
            ))}
          </div>
        </div>

        <img className="rounded-lg m-3 max-h-72" src={img} alt="" />
      </article>
    </a>
  );
};

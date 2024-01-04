export const CardOP = ({ title, parrafos, tecnologias }) => {
  return (
    <article className="container flex flex-col  bg-black/30 rounded-xl border border-zinc-600 p-4 lg:p-6 mt-4 hover:bg-gradient-to-b from-gray-900/5 to-indigo-500/5  duration-200 transition text-white lg:w-1/3">
      <a href="">
        <h3 className="text-xl font-bold text-center lg:text-start mb-2   text-white">
          {title}
        </h3>
      </a>
      {parrafos.map((parrafo) => (
        <>
          <p className="font-thin text-sm text-gray-300">{parrafo}</p>
          <br />
        </>
      ))}
      <div className="flex flex-wrap">
        {tecnologias.map((tecnologia) => (
          <span className="py-1 px-3 bg-indigo-600 bg-opacity-15 text-indigo-500 font-bold m-1 rounded-lg text-sm">
            {tecnologia}
          </span>
        ))}
      </div>
    </article>
  );
};

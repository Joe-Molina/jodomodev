export const CardPD = ({ img, title, parrafos, tecnologias, link }) => {
  return (
    <article className="container flex flex-col justify-between  bg-neutral-900/60 rounded-xl border border-zinc-800 p-2 mt-4 hover:bg-gradient-to-b from-gray-900/5 to-indigo-500/5  duration-200 transition lg:max-w-96 lg:m-1 lg:min-h-96 ">
      <div className="text-white flex flex-col justify-between px-2 h-full my-1">
        <img className="rounded-lg  max-h-72" src={img} alt="" />
        <h3 className="text-xl font-medium text-start text-white mt-1">
          {title}
        </h3>
        <p className="font-thin text-xs lg:text-sm text-gray-300 mb-1 ml-1">
          {parrafos}
        </p>
      </div>
      <div className="flex flex-wrap px-2">
        {tecnologias.map((tecnologia) => (
          <span className="py-1 px-2 bg-zinc-600 bg-opacity-15 text-zinc-200 font-light mr-1 mb-1 rounded-lg text-sm">
            {tecnologia}
          </span>
        ))}
      </div>
    </article>
  );
};

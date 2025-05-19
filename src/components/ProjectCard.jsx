export const PropjectCard = ({ img, title, parrafos, tecnologias, link }) => {
  return (
    <article className="container flex flex-col  bg-black/10  border border-blue-900/50 rounded-lg mt-4 hover:bg-gradient-to-b hover:bg-blue-900/5  duration-200 transition lg:max-w-96 lg:m-1 lg:h-[440px]">
      <img src={img} alt="imagen Proyecto" />
      <div className="text-white flex flex-col justify-between gap-2 p-4 h-full ">
          <h3 className="text-lg font-medium text-start text-white  ">{title}</h3>
        <p className="font-thin text-xs lg:text-sm text-gray-300 max-h-28 overflow-auto">
          {parrafos}
        </p>
        <div className="flex gap-1 flex-wrap ">
          {tecnologias.map((tecnologia) => (
            <span className="py-1 px-2 bg-zinc-600/20 text-zinc-200 font-light rounded-lg text-xs">
              {tecnologia}
            </span>
          ))}
      </div>
        <div className="flex flex-wrap justify-end gap-6 overflow-auto h-6">
              {link[0].length > 0  && <a target="_blank" href={link[0]} className="inline hover:text-indigo-500 ">Visitar Demo</a>}
              {link[1].length > 0 && <a target="_blank" href={link[1]} className="inline hover:text-indigo-500">Repositorio de github</a>}             
        </div>
      </div>

    </article>
  );
};

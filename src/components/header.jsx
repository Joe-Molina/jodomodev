import { useState } from "react";

export const Header = () => {
  const [getMenu, setGetMenu] = useState(false);

  const handleClick = () => {
    setGetMenu(!getMenu);
  };

  const MenuOpen = getMenu ? (
    <article className="fixed w-screen h-screen z-20 bg-black top-15 left-0 flex justify-center items-center text-white opacity-90">
      <nav className=" absolute flex flex-col justify-start items-center h-full w-full text-center">
        <a href="/" className=" text-2xl py-10 hover:text-indigo-500 transition">
          Inicio
        </a>
        <a href="/aboutme" className=" text-2xl py-10 hover:text-indigo-500 transition">
          Sobre Mi
        </a>
        <a href="/proyectos" className=" text-2xl py-10  hover:text-indigo-500 transition">
          Proyectos
        </a>
        <a href="" className=" text-2xl py-10 hover:text-indigo-500 transition">
          Contacto
        </a>
            <a
              href="CVJOE.pdf"
              className="text-indigo-500 py-3 px-16 border-2 flex border-indigo-500 rounded-lg hover:bg-indigo-500/20 transition hover:animate-pulse "
            >
              cv
            </a>
      </nav>
    </article>
  ) : (
    <></>
  );

  return (
    <header className="flex justify-between lg:justify-center items-center p-2 lg:p-0 fixed lg:relative top-0 bg-neutral-900 lg:bg-transparent w-full">
      <h3 className="text-white ml-5">Jodomo.dev</h3>
      <nav className="w-full lg:justify-end lg:items-center lg:p-5 hidden lg:flex">
        <ul className="text-white flex justify-center items-center">
          <li>
            <a href="/" className="pr-6 hover:text-indigo-500 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="/aboutme" className="pr-6 hover:text-indigo-500 transition">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="/proyectos" className="pr-6 hover:text-indigo-500 transition">
              Proyectos
            </a>
          </li>
          <li className="">
            <a
              href="CVJOE.pdf"
              className="text-indigo-500 py-3 px-8 border-2 flex border-indigo-500 rounded-lg hover:bg-indigo-500/20 transition hover:animate-pulse "
            >
              cv
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleClick}
        href=""
        className="text-indigo-500 py-2 px-4 border-2 flex border-indigo-500 rounded-lg hover:bg-indigo-500/20 transition lg:hidden "
      >
        Menu
      </button>
      {MenuOpen}
    </header>
  );
};

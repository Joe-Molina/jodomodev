// import {useState} from 'react'

// export const CardOP = ({ title, parrafos, tecnologias, link }) => {

//   const [linkCard, setLinkCard] = useState(false)

//   const switchLinks = linkCard? 'animate-jump transition' : 'hidden'

//   const handleEnter = () => {
//     setLinkCard(true)
//   }

//   const handleLeave = () => {
//     setLinkCard(false)
//   }
 
  
//   return (
//       <article onMouseEnter={handleEnter} onMouseLeave={handleLeave}  className="z-50 container flex flex-col lg:w-5/12 justify-start bg-black/30 rounded-xl border border-zinc-600 p-4 lg:p-6 mt-4 hover:bg-gradient-to-b from-gray-900/5 to-indigo-500/5  duration-200 transition text-white h-64">
//         {/* <h3 className="text-xl font-bold text-center lg:text-start mb-2   text-white">
//           {title}
//         </h3>
//         {parrafos.map((parrafo) => (
//           <>
//             <p className="font-thin text-sm text-gray-300">{parrafo}</p>
//             <br />
//           </>
//         ))}
//         <div className="flex flex-wrap">
//           {tecnologias.map((tecnologia) => (
//             <span className="py-1 px-3 bg-indigo-600 bg-opacity-15 text-indigo-500 font-bold m-1 rounded-lg text-sm">
//               {tecnologia}
//             </span>
//           ))}
//         </div>
//         <div className="mt-2">
//           <a href={link.github} target='_blank'  className={"m-2 bg-indigo-600 bg-opacity-25 px-3 py-1 rounded-lg  " + switchLinks}>
//             ver codigo
//           </a>
//           <a  href={link.demo} target='_blank' className={"m-2 bg-indigo-600 bg-opacity-25 px-3 py-1 rounded-lg " + switchLinks}>
//             ver demo
//           </a>
//         </div> */}
//       </article>
//   );
// };

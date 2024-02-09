import { Link, useNavigate } from "react-router-dom";


export default function Button({children, to, disabled, type}) {
  const base = "bg-yellow-300 font-semibold uppercase  rounded-full tracking-wide hover:bg-yellow-400 hover:text-stone-500 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-100 text-center"
  const navigate = useNavigate();

  const style = {
    primary: base + " px-4 py-3 text-stone-400 inline-block",
    small: base + " px-2 py-2 text-xs text-stone-600",
    delete: " bg-red-500 px-2 py-3 font-semibold uppercase text-red-100 rounded-full tracking-wide hover:bg-red-300 hover:text-stone-150 transition-all duration-300 focus:outline-none focus:ring focus:ring-red-100 text-center inline-block"
  };

  if(to) {
    return <Link to={to} className={style[type]}>{children}</Link>
  }

  if(to === -1) {
    return  <button className={style[type]} onClick={() => navigate(-1)}>&larr; Go back</button>
  }
  return (
    <button className={style[type]} disabled={disabled}>{children}</button>
  )
}

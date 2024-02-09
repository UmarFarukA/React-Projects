import { Link, useNavigate } from "react-router-dom";

export default function Button({ children, to, disabled, type }) {
  const base =
    "bg-yellow-300 font-semibold uppercase text-xs sm:text-lg  rounded-full sm:tracking-wide hover:bg-yellow-400 hover:text-stone-500 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-100 text-center";
  const navigate = useNavigate();

  const style = {
    primary: base + " px-4 py-3  text-stone-400 inline-block",
    secondary:
      "bg-stone-300 px-4 py-3 font-semibold uppercase  rounded-full tracking-wide hover:bg-stone-200 hover:text-stone-400 transition-all duration-300 focus:outline-none focus:ring focus:ring-stone-100 text-center",
    small: base + " px-2 py-2 text-xs text-stone-500",
    delete:
      "bg-red-500 px-2 py-1 text-xs sm:text-lg font-semibold text-red-100 rounded-full tracking-wide hover:bg-red-300 hover:text-stone-150 transition-all duration-300 focus:outline-none focus:ring focus:ring-red-100 text-center inline-block",
  };

  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }

  if (to === -1) {
    return (
      <button className={style[type]} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    );
  }
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}

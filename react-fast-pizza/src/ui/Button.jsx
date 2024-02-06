import { Link, useNavigate } from "react-router-dom";


export default function Button({children, to, disabled}) {
  const className="bg-yellow-300 px-4 py-3 font-semibold uppercase text-stone-400 rounded-full tracking-wide hover:bg-yellow-400 hover:text-stone-500 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-100 text-center inline-block"
  const navigate = useNavigate();
  if(to) {
    return <Link to={to} className={className}>{children}</Link>
  }

  if(to === -1) {
    return  <button className={className} onClick={() => navigate(-1)}>&larr; Go back</button>
  }
  return (
    <button className={className} disabled={disabled}>{children}</button>
  )
}

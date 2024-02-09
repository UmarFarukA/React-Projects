import PathConstant from "../routes/pathConstants";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b-3  flex flex-col items-center border-zinc-300 bg-purple-700 px-8 py-4 text-stone-100 sm:flex sm:flex-row sm:items-center sm:justify-between">
      <h3 className="text-3xl">
        <Link to="/">Career</Link>
      </h3>
      <nav className="space-x-4">
        <NavLink to={PathConstant.HOME}>Home</NavLink>
        <NavLink to={PathConstant.ABOUT}>About</NavLink>
        <NavLink to={PathConstant.HELP}>Help</NavLink>
        <NavLink to={PathConstant.CAREERS}>Careers</NavLink>
      </nav>
    </header>
  );
}

import PathConstant from "../routes/pathConstants";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h3>Career</h3>
      <nav>
        <NavLink to={PathConstant.HOME}>Home</NavLink>
        <NavLink to={PathConstant.ABOUT}>About</NavLink>
        <NavLink to={PathConstant.HELP}>Help</NavLink>
        <NavLink to={PathConstant.CAREERS}>Careers</NavLink>
      </nav>
    </header>
  );
}

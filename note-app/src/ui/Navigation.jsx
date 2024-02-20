import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex items-center space-x-4 text-stone-100  text-lg">
      <NavLink to="/" className="hover:text-stone-300">
        Home
      </NavLink>
      <NavLink to="create" className="hover:text-stone-300">
        Create
      </NavLink>
      {/* <NavLink to="login" className="hover:text-stone-300">Login</NavLink>
      <NavLink to="signup">Sign Up</NavLink> */}
    </nav>
  );
}

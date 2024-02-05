import { Link, Outlet } from "react-router-dom";
import PathContants from "../routes/pathConstants";

export default function About() {
  return (
    <div>
      <h4>Website Help</h4>
      <p>lorem ipsum dolar sit amet consectetur adipisibing elit. earum</p>

      <div>
        <Link to={PathContants.FAQ}>View the FAQ</Link>
        <Link to={PathContants.CONTACT}>Contact Us</Link>
      </div>

      <Outlet />
    </div>
  );
}

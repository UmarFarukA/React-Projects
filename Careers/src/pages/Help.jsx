import { Link, Outlet } from "react-router-dom";
import PathContants from "../routes/pathConstants";

export default function About() {
  return (
    <div>
      <h4 className="text-stone-600 text-3xl underline mb-2">Website Help</h4>
      <p className="text-justify leading-8 text-zinc-700">
        lorem ipsum dolar sit amet consectetur adipisibing elit. earum
      </p>

      <div>
        <Link to={PathContants.FAQ}>View the FAQ</Link>
        <Link to={PathContants.CONTACT}>Contact Us</Link>
      </div>

      <Outlet />
    </div>
  );
}

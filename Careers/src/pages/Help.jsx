import { Outlet } from "react-router-dom";
import PathContants from "../routes/pathConstants";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="mb-3">
      <h4 className="mb-2 text-3xl text-stone-600 underline">Website Help</h4>
      <p className="text-justify leading-8 text-zinc-700">
        lorem ipsum dolar sit amet consectetur adipisibing elit. earum
      </p>

      <div className="mb-4 mt-2 flex justify-center gap-1 sm:flex">
        <Button to={PathContants.FAQ} type="secondary">
          View the FAQ
        </Button>

        <Button to={PathContants.CONTACT} type="primary">
          Contact Us
        </Button>
      </div>

      <Outlet />
    </div>
  );
}

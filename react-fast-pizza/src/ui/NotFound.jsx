import { useRouteError } from "react-router-dom";
import Button from "./ButtonLink";

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1 className="text-2xl text-stone-600">
        Sorry, the page you are looking for doesn't exists
      </h1>

      <Button>&larr; Go back</Button>
    </div>
  );
}

export default NotFound;

import {  useRouteError } from "react-router-dom";
import Button from "./ButtonLink";

function Error() {

  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.mesage}</p>
      <Button>&larr; Go back</Button>
     
    </div>
  );
}

export default Error;

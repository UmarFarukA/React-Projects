import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        {error.message} || {error.data}
      </p>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
    </div>
  );
}

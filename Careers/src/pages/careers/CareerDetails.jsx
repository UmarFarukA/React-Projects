import { Link, useLoaderData } from "react-router-dom";
import PathContants from "../../routes/pathConstants";

export default function CareerDetails() {
  const career = useLoaderData();
  return (
    <div>
      <h4>{career.title}</h4>
      <p>{career.stack}</p>
      <p>
        {career.location} - <span>{career.salary}</span>
      </p>

      <Link to={PathContants.APPY_CAREER}>Apply</Link>
    </div>
  );
}

export const careerDeatailLoader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`http://localhost:5000/careers/${id}`);

  if (!res.ok) throw new Error("Unable to fetch career");

  const data = res.json();

  return data;
};

/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
// import PathContants from "../../routes/pathConstants";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div>
      <h4>Careers</h4>
      {careers.map((career) => (
        <Link to={`${career.id}`} key={career.id}>
          {career.title}
        </Link>
      ))}
    </div>
  );
}

export const careersLoaders = async () => {
  const res = await fetch("http://localhost:5000/careers");

  if (!res.ok) throw new Error("Unable to fetch careers, try again!");

  const data = res.json();

  return data;
};

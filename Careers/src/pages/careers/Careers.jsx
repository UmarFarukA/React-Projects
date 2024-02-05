/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
// import CareerItem from "./CareerItem";
// import PathContants from "../../routes/pathConstants";

export default function Careers() {
  const careers = useLoaderData();
  console.log(careers);

  return (
    <div>
      <h4 className="text-stone-600 text-3xl underline mb-2">Careers</h4>

      <ul className="text-stone-700">
        {careers.map((career) => (
          <Link to={`${career.id}`} key={career.id}>
            <li className="bg-stone-100 px-4 py-8 my-3  rounded hover:bg-stone-50 transition-all">
              {career.title}
              <p className="mt-2 text-sm flex items-center gap-2">
                <span>{career.location},</span>
                <span>{career.stack}</span>
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export const careersLoaders = async () => {
  const res = await fetch("http://localhost:5000/careers");

  if (!res.ok) throw new Error("Unable to fetch careers, try again!");

  const data = res.json();

  return data;
};

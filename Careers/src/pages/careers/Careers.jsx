/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import CareerItem from "./CareerItem";
// import PathContants from "../../routes/pathConstants";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div>
      <h4 className="mb-2 text-3xl text-stone-600 underline">Careers</h4>

      <ul className="text-stone-700">
        {careers.map((career) => (
          <CareerItem career={career} key={career.id} />
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

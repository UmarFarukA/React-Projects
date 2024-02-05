import { Link, useLoaderData } from "react-router-dom";
import PathContants from "../../routes/pathConstants";

export default function CareerDetails() {
  const career = useLoaderData();
  return (
    <div className="bg-stone-100 px-4 py-8 my-3  rounded">
      <h4 className="text-stone-600 text-3xl mb-3">{career.title}</h4>
      <p>{career.job_desc}</p>
      <p className="mt-2 text-sm flex items-center gap-3 text-stone-600 mb-3">
        <span>{career.stack}</span> - <span>{career.location}</span> -{" "}
        <span>{career.salary}</span>
      </p>

      <Link
        to={PathContants.APPY_CAREER}
        className="px-4 py-2 rounded bg-purple-700 text-stone-100 hover:bg-purple-600 transition-all"
      >
        Apply
      </Link>
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

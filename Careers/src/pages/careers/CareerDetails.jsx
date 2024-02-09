import { useLoaderData } from "react-router-dom";
import PathContants from "../../routes/pathConstants";
import Button from "../../components/Button";

export default function CareerDetails() {
  const career = useLoaderData();
  return (
    <div className="my-3 rounded bg-stone-100 px-4  py-8">
      <h4 className="mb-3 text-3xl text-stone-600">{career.title}</h4>
      <p>{career.job_desc}</p>
      <p className="mb-3 mt-2 flex items-center gap-3 text-sm text-stone-600">
        <span>{career.stack}</span> - <span>{career.location}</span> -{" "}
        <span>{career.salary}</span>
      </p>

      {/* <Link
        to={PathContants.APPY_CAREER}
        className="rounded bg-purple-700 px-4 py-2 text-stone-100 transition-all hover:bg-purple-600"
      >
        Apply
      </Link> */}

      <Button to={PathContants.APPY_CAREER} type="primary">
        Apply
      </Button>
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

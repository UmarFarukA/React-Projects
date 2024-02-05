import { Link } from "react-router-dom";

export default function CareerItem(career) {
  return (
    <Link to={`${career.id}`}>
      <li className="bg-stone-100 px-4 py-8 my-3  rounded">{career.title}</li>
    </Link>
  );
}

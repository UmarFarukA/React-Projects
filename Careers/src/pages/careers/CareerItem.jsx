/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CareerItem({ career }) {
  const { id, title, location, stack } = career;
  return (
    <Link to={`${id}`}>
      <li className="my-3 rounded bg-stone-100 px-4  py-8 transition-all hover:bg-stone-50">
        {title}
        <p className="mt-2 flex items-center gap-2 text-sm">
          <span>{location},</span>
          <span>{stack}</span>
        </p>
      </li>
    </Link>
  );
}

import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <div
      className="bg-yellow-300 uppercase tracking-widest text-xl py-4 px-4 
                    sm:py-6 sm:px-6 border-stone-400 border-b-2
                    flex justify-between items-center"
    >
      <Link to="/" className="mb-1">
        React Fast Pizza
      </Link>

      <SearchOrder />
      <Username />
    </div>
  );
}

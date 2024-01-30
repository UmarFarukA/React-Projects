import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <>
      <Link to="/">Fast React Pizza </Link>
      <SearchOrder />
    </>
  );
}

import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-700 text-stone-100 uppercase px-4 py-4 text-xl flex items-center justify-between">
      <p className="space-x-2">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

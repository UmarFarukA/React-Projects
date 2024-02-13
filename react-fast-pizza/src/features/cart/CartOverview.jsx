import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const quantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);

  if (!quantity) return null;

  return (
    <div className="bg-stone-700 text-stone-100 uppercase px-4 py-4 text-xl flex items-center justify-between">
      <p className="space-x-2">
        <span>{quantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

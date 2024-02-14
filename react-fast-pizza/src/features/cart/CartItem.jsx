// import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import DeleteItem from "../../ui/DeleteItem";
import { formatCurrency } from "../../utilities/helpers";
import UpdateQuantity from "./UpdateQuantity";
import { deleteItem } from "./cartSlice";
function CartItem({ item }) {
  // const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-5">
      <p className="text-sm sm:text-lg">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-2">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
      <p className="hidden">{pizzaId}</p>
    </li>
  );
}

export default CartItem;

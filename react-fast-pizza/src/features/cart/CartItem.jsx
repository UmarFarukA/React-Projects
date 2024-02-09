import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-5">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-2">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="delete">Delete</Button>
      </div>
      <p className="hidden">{pizzaId}</p>
    </li>
  );
}

export default CartItem;

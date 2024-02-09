import Button from "../../ui/Button";
import formatCurrency from "../../utilities/helpers"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="delete">Delete</Button>
      </div>
      <p className="hidden">{pizzaId}</p>
    </li>
  );
}

export default CartItem;

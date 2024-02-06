import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <h2>Your cart, %NAME%</h2>

      <div className="flex gap-1">
        <Button to="/order/new">Order pizzas</Button>
        <Button>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;

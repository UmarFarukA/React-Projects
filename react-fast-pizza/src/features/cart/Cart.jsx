import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";
import CartItem from "./CartItem";

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
    <div className="space-y-5 ">
      
      <ButtonLink to="/menu" >&larr; Back to menu</ButtonLink>

      <h2 className="text-stone-600 text-3xl font-semibold">Your cart, %NAME!%</h2>

      <ul className="divide-x-2 divide-stone-300">
        {cart.map(item => <CartItem item={item} key={item.pizzaId} />)}
        Cart Items
      </ul>

      <div className="flex gap-1">
        <Button to="/order/new" type="primary">Order pizzas</Button>
        <Button>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;

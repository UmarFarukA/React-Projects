import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";
import { formatCurrency } from "../../utilities/helpers";
import CartItem from "./CartItem";
import { clearCart, getUsername } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="space-y-5 ">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <h2 className="text-stone-600 text-3xl font-semibold">
        Your cart, {username}
      </h2>

      <ul className="divide-y-2 divide-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex gap-1 ">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClear}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

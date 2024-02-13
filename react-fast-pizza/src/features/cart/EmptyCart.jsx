import { Link } from "react-router-dom";
import ButtonLink from "../../ui/ButtonLink";

function EmptyCart() {
  return (
    <div className="py-4 px-3 ">
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <p className="text-stone-600 mt-7 text-2xl">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;

import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  increaseQuantityItem,
  decreaseQuantityItem,
  getQuantityById,
} from "./cartSlice";

function UpdateQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const currQuantity = useSelector(getQuantityById(pizzaId));

  return (
    <div className="flex gap-3 md:gap-5 items-center">
      <Button
        type="round"
        onClick={() => dispatch(decreaseQuantityItem(pizzaId))}
      >
        -
      </Button>

      <span className="text-sm font-medium">{currQuantity}</span>

      <Button
        type="round"
        onClick={() => dispatch(increaseQuantityItem(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;

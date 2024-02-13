/* eslint-disable no-unused-vars */

import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  function handleAdd() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-3 py-3">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? `bg-gray-300 opacity-25` : ""}`}
      />
      {/* <p className="hidden">{id}</p> */}
      <div className="flex flex-col w-full sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="italic capitalize text-xs">{ingredients.join(", ")}</p>
        </div>
        <div className="flex items-center justify-between sm:space-x-2 mt-2">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase text-gray-500 text-sm">Sold out</p>
          )}
          <div>
            {!soldOut && (
              <Button type="small" onClick={handleAdd}>
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

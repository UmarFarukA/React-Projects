// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";
import OrderItem from "./OrderItem";

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-4">
      <div className="flex items-center justify-between flex-col md:flex-row md:items-center md:justify-around gap-2   mb-6">
        <h2 className="text-xl font-semibold text-stone-600">
          Order #{id} Status
        </h2>

        {/* {status}{priority && } */}

        <div className="space-x-3">
          <span className="bg-red-500 text-xs font-bold md:text-lg text-stone-200 uppercase rounded-full px-3 py-2">
            Priority
          </span>
          <span className="bg-green-500 text-xs font-bold md:text-lg text-stone-100 uppercase rounded-full px-3 py-2">
            Preparing order
          </span>
        </div>
      </div>

      <div className="mt-8 mb-8 bg-stone-100 p-6 md:p-8 flex flex-col md:flex-row md:justify-between items-center justify-center">
        <p className="text-stone-600 font-semibold text-sm tracking-wider">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500 text-sm">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="mt-3 space-y-6">
        {cart.map((item) => (
          <OrderItem item={item} />
        ))}
        {console.log(cart)}
      </ul>

      <div className="mt-4 p-6 space-y-3 bg-stone-100">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getOrder(params.orderId);
  return data;
}

export default Order;

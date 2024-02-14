import { useState } from "react";

import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getCart, getTotalPrice, getUsername } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const totalPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const formErros = useActionData();

  return (
    <div className="w-full sm:w-7/12 mx-auto px-6 py-4 mt-6">
      <h2 className="mb-2  text-stone-600 font-semibold text-lg sm:text-3xl">
        Ready to order? Let's go!
      </h2>

      <Form method="post">
        <InputField
          label="First Name"
          type="text"
          name="customer"
          value={username}
        />

        <InputField label="Phone number" type="tel" name="phone" />
        <InputField label="Address" type="text" name="address" />
        <div className="flex items-center gap-2 m-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">
            {isSubmitting
              ? "Placing Order..."
              : `Order Now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Enter a valid phone Number, we need it to confirm the order";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

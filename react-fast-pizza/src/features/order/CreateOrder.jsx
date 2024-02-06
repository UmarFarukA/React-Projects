// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErros = useActionData();

  return (
    <div className="w-full sm:w-7/12 mx-auto px-6 py-4 mt-6">
      <h2 className="mb-2 text-stone-600 font-semibold text-xl sm:text-3xl">Ready to order? Let's go!</h2>

      <Form method="post">
        
        <InputField label="First Name" type="text" name="customer"/>

        
        <InputField label="Phone number" type="tel" name="phone"/>
        <InputField label="Address" type="text" name="address"/>
          <div className="flex items-center gap-1 mb-2">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              // value={withPriority}
              // onChange={(e) => setWithPriority(e.target.checked)}
              className="px-1 py-2 w-8 bg-yellow-300"
            />
            <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button>{isSubmitting ? "Placing Order..." : "Order now"}</Button>
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
    priority: data.priority === "on",
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Enter a valid phone Number, we need it to confirm the order";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  // console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

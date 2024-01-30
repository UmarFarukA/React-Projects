import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: "/order/:orderId",
        element: <Order />,
      },

      {
        path: "/order/new",
        element: <CreateOrder />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

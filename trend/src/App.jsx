import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import styled from "styled-components";
import Home from "./ui/Home";
import Register from "./pages/Register";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "register",
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

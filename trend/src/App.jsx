// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Home from "./ui/Home";
import Register from "./pages/Register";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import ProtectRoute from "./ui/ProtectRoute";
import Dashboard from "./pages/Dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },

//   {
//     path: "register",
//     element: <Register />,
//   },
//   {
//     path: "dashboard",
//     element: <AppLayout />,
//   },
// ]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route
              element={
                <ProtectRoute>
                  <AppLayout />
                </ProtectRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Home />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      <Toaster
        gutter={10}
        toastOptions={{
          success: {
            style: {
              background: "background-color: green",
              color: "color: white",
            },
          },

          error: {
            style: {
              background: "background-color: red",
              color: "color: white",
            },
          },
        }}
      />
    </>
  );
}

export default App;

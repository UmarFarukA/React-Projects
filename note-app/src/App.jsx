import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={10}
        toastOptions={{
          success: {
            duration: 4000,
            style: {
              background: "bg-slate-200",
              color: "text-green-400",
            },
          },

          error: {
            duration: 6000,
            style: {
              background: "bg-red-600",
              color: "text-stone-50",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

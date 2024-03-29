import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectRoute from "./ui/ProtectRoute";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectRoute>
                  <AppLayout />
                </ProtectRoute>
              }
            >
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/booking" element={<Bookings />} />
              <Route path="/cabin" element={<Cabins />} />
              <Route path="/users" element={<Users />} />
              <Route path="/seetings" element={<Settings />} />
            </Route>
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        gutter={10}
        toastOptions={{
          success: {
            style: {
              background: "bg-green-600",
              color: "text-stone-50",
            },
          },

          error: {
            style: {
              background: "bg-red-600",
              color: "text-stone-100",
            },
          },
        }}
      />
    </>
  );
}

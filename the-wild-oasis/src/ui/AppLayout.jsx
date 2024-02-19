import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className=" grid grid-cols-[16rem_auto] grid-rows-[4rem_1fr] h-dvh">
      <Header />
      <Sidebar />
      <main className="bg-gray-100  col-start-2">
        <Outlet />
      </main>
    </div>
  );
}

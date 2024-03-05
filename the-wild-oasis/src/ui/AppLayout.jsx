import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className=" grid grid-cols-[16rem_auto] grid-rows-[5rem_1fr] h-dvh">
      <Header />
      <Sidebar />
      <main className="relative bg-neutral-50  col-start-2 px-5 py-3">
        <Outlet />
      </main>
    </div>
  );
}

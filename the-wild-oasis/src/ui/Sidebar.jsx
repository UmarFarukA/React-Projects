import React from "react";
import MainNav from "./MainNav";

export default function Sidebar() {
  return (
    <div className="bg-gray-50 col-start-1 row-span-full py-6 px-2 flex flex-col gap-4">
      <div className="flex items-center justify-center py-6">
        <img src="/logo-dark.png" alt="Wild Oasis" className="w-32 h-22 " />
      </div>
      <MainNav />
    </div>
  );
}

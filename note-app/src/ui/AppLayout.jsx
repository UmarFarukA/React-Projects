import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main className="py-8 px-7 flex flex-wrap gap-4">
        <Outlet />
      </main>
    </div>
  );
}
